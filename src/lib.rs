use wasm_bindgen::prelude::*;
use curve25519_dalek::{
    ristretto::RistrettoPoint,
    scalar::Scalar,
};
use bulletproofs::PedersenGens;
use rand_core::OsRng;
use bech32::{ToBase32, Variant};

mod english_words;
mod mnemonics;

/// Wallet data structure exposed to JavaScript
#[wasm_bindgen]
pub struct WalletData {
    address: String,
    private_key: String,
    seed_phrase: String,
    network: String,
}

#[wasm_bindgen]
impl WalletData {
    #[wasm_bindgen(getter)]
    pub fn address(&self) -> String {
        self.address.clone()
    }

    #[wasm_bindgen(getter)]
    pub fn private_key(&self) -> String {
        self.private_key.clone()
    }

    #[wasm_bindgen(getter)]
    pub fn seed_phrase(&self) -> String {
        self.seed_phrase.clone()
    }

    #[wasm_bindgen(getter)]
    pub fn network(&self) -> String {
        self.network.clone()
    }
}

/// Generate a TOS wallet (address + private key + seed phrase)
#[wasm_bindgen]
pub fn generate_wallet(mainnet: bool) -> Result<WalletData, JsValue> {
    // Generate random scalar for private key
    let mut rng = OsRng;

    // Rejection loop: resample until we get a non-zero scalar
    // While astronomically unlikely (≈2^-252), a zero scalar would
    // produce an unusable wallet, so we guard against it.
    let private_scalar = loop {
        let s = Scalar::random(&mut rng);
        if s != Scalar::ZERO {
            break s;
        }
        // If we somehow hit zero, log it (won't happen in practice)
        web_sys::console::warn_1(&"Zero scalar generated, resampling...".into());
    };

    // Generate public key: P = s^(-1) * H (TOS uses inverted scalar with H basepoint)
    // This matches TOS's PublicKey::new() implementation where H = PC_GENS.B_blinding
    let pc_gens = PedersenGens::default();
    let public_point = private_scalar.invert() * pc_gens.B_blinding;

    // Convert private key to hex string
    let private_key_hex = hex_encode(&private_scalar.to_bytes());

    // Generate 25-word seed phrase (24 words + 1 checksum word)
    let words = mnemonics::scalar_to_words(&private_scalar);
    let seed_phrase = words.join(" ");

    // Generate address using TOS's format
    let address = generate_address(&public_point, mainnet)
        .map_err(|e| JsValue::from_str(&format!("Address generation error: {}", e)))?;

    let network = if mainnet { "Mainnet" } else { "Testnet" };

    Ok(WalletData {
        address,
        private_key: private_key_hex,
        seed_phrase,
        network: network.to_string(),
    })
}

/// Generate TOS address from public key
fn generate_address(public_key: &RistrettoPoint, mainnet: bool) -> Result<String, String> {
    // Compress the public key (32 bytes)
    let compressed_pubkey = public_key.compress();

    // Create address payload: compressed_pubkey + address_type
    // For normal address (no integrated data), address_type = 0
    let mut payload = Vec::new();
    payload.extend_from_slice(compressed_pubkey.as_bytes());
    payload.push(0u8); // AddressType::Normal

    // Encode with Bech32
    let hrp = if mainnet { "tos" } else { "tst" };

    bech32::encode(hrp, payload.to_base32(), Variant::Bech32)
        .map_err(|e| format!("Bech32 encoding error: {}", e))
}

/// Convert bytes to hexadecimal string
fn hex_encode(bytes: &[u8]) -> String {
    bytes.iter()
        .map(|b| format!("{:02x}", b))
        .collect()
}

/// Initialize panic hook for better error messages in browser console
#[wasm_bindgen(start)]
pub fn init() {
    console_error_panic_hook::set_once();
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_address_generation() {
        let wallet = generate_wallet(false).unwrap();

        // Testnet addresses should start with "tst1"
        assert!(wallet.address().starts_with("tst1"));

        // Private key should be 64 hex characters
        assert_eq!(wallet.private_key().len(), 64);

        println!("Generated address: {}", wallet.address());
        println!("Private key: {}", wallet.private_key());
    }

    #[test]
    fn test_mainnet_address() {
        let wallet = generate_wallet(true).unwrap();

        // Mainnet addresses should start with "tos1"
        assert!(wallet.address().starts_with("tos1"));
    }

    #[test]
    fn test_randomness_uniqueness() {
        use std::collections::HashSet;

        // Generate 100 wallets and verify all are unique
        let mut addresses = HashSet::new();
        let mut private_keys = HashSet::new();
        let mut seed_phrases = HashSet::new();

        for _ in 0..100 {
            let wallet = generate_wallet(false).unwrap();

            // All addresses must be unique
            assert!(addresses.insert(wallet.address()), "Duplicate address found!");

            // All private keys must be unique
            assert!(private_keys.insert(wallet.private_key()), "Duplicate private key found!");

            // All seed phrases must be unique
            assert!(seed_phrases.insert(wallet.seed_phrase()), "Duplicate seed phrase found!");
        }

        println!("✅ Generated 100 unique wallets - no collisions detected");
    }

    #[test]
    fn test_private_key_entropy() {
        let wallet = generate_wallet(false).unwrap();
        let private_key = wallet.private_key();

        // Private key should be 64 hex characters (32 bytes = 256 bits)
        assert_eq!(private_key.len(), 64);

        // Should only contain hex characters
        assert!(private_key.chars().all(|c| c.is_ascii_hexdigit()));

        // Should not be all zeros or all ones (extremely unlikely with good RNG)
        assert_ne!(private_key, "0".repeat(64), "Private key is all zeros!");
        assert_ne!(private_key, "f".repeat(64), "Private key is all ones!");

        // Count unique characters (good entropy should have variety)
        let unique_chars: std::collections::HashSet<char> = private_key.chars().collect();
        assert!(unique_chars.len() >= 8, "Private key has poor entropy - too few unique characters");

        println!("✅ Private key has good entropy: {} unique hex digits", unique_chars.len());
    }

    #[test]
    fn test_seed_phrase_structure() {
        let wallet = generate_wallet(false).unwrap();
        let seed_phrase = wallet.seed_phrase();

        // Should have exactly 25 words (24 + 1 checksum)
        let words: Vec<&str> = seed_phrase.split_whitespace().collect();
        assert_eq!(words.len(), 25, "Seed phrase should have 25 words");

        // All words should be lowercase and alphabetic
        for word in words.iter() {
            assert!(word.chars().all(|c| c.is_lowercase() || c.is_alphabetic()),
                "Word '{}' contains invalid characters", word);
            assert!(word.len() >= 2, "Word '{}' is too short", word);
        }

        println!("✅ Seed phrase structure is valid: 25 words");
    }

    #[test]
    fn test_non_zero_scalar_generation() {
        // Test that we always generate non-zero scalars
        // While we can't easily force a zero scalar (≈2^-252 probability),
        // we can verify the generated scalars are non-zero
        for _ in 0..10 {
            let wallet = generate_wallet(false).unwrap();
            let private_key = wallet.private_key();

            // A zero scalar would produce "0000...0000" (64 zeros)
            assert_ne!(private_key, "0".repeat(64),
                "Generated scalar should never be zero!");

            // Also verify it's not the identity when inverted
            // (though this would require accessing internal state)
        }

        println!("✅ All generated scalars are non-zero");
    }
}
