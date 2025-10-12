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

    // V-08 Security Fix: Rejection loop to ensure strong private keys
    // 1. Reject zero scalar (≈2^-252 probability)
    // 2. Reject weak entropy (scalar < 2^32, ≈2^-220 probability)
    // While both are astronomically unlikely with OsRng, we validate defensively
    let private_scalar = loop {
        let s = Scalar::random(&mut rng);

        // Check for zero scalar
        if s == Scalar::ZERO {
            web_sys::console::warn_1(&"Zero scalar generated, resampling...".into());
            continue;
        }

        // V-08: Check for weak entropy (scalar < 2^32)
        // Convert to bytes and check if value is too small
        let bytes = s.to_bytes();
        let mut is_weak = true;

        // Check if any of the upper 28 bytes are non-zero (scalar >= 2^32)
        for i in 4..32 {
            if bytes[i] != 0 {
                is_weak = false;
                break;
            }
        }

        // If all upper bytes are zero, check if lower 4 bytes represent a value >= 2^32
        if is_weak && (bytes[0] != 0 || bytes[1] != 0 || bytes[2] != 0 || bytes[3] != 0) {
            // Value is less than 2^32 - reject it
            web_sys::console::warn_1(&"Weak entropy scalar generated (< 2^32), resampling...".into());
            continue;
        }

        // Valid strong scalar found
        break s;
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

    #[test]
    fn test_v08_strong_entropy() {
        // V-08 Security Fix: Verify all generated scalars have sufficient entropy (>= 2^32)
        for i in 0..100 {
            let wallet = generate_wallet(false).unwrap();
            let private_key_hex = wallet.private_key();

            // Convert hex to bytes
            let mut bytes = [0u8; 32];
            for (i, chunk) in private_key_hex.as_bytes().chunks(2).enumerate() {
                let byte_str = std::str::from_utf8(chunk).unwrap();
                bytes[i] = u8::from_str_radix(byte_str, 16).unwrap();
            }

            // Check that at least one of the upper 28 bytes is non-zero
            // OR that the lower 4 bytes represent a value >= 2^32
            let mut has_strong_entropy = false;

            // Check upper 28 bytes
            for byte in &bytes[4..32] {
                if *byte != 0 {
                    has_strong_entropy = true;
                    break;
                }
            }

            // If all upper bytes are zero, the lower 4 bytes must all be zero too
            // (otherwise it would be < 2^32 and rejected)
            if !has_strong_entropy {
                assert!(
                    bytes[0] == 0 && bytes[1] == 0 && bytes[2] == 0 && bytes[3] == 0,
                    "Wallet {} has weak entropy: lower 4 bytes non-zero but upper 28 bytes all zero",
                    i
                );
                // This shouldn't happen - if lower bytes are zero, it's the zero scalar
                panic!("Generated scalar with all bytes zero (should be impossible)");
            }

            assert!(has_strong_entropy,
                "Wallet {} should have strong entropy (>= 2^32)", i);
        }

        println!("✅ All 100 generated wallets have strong entropy (V-08 validated)");
    }
}
