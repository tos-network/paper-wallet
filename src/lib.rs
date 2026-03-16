use bip39::{Language, Mnemonic};
use curve25519_dalek::{
    constants::RISTRETTO_BASEPOINT_POINT,
    ristretto::RistrettoPoint,
    scalar::Scalar,
};
use hmac::{Hmac, Mac};
use k256::{
    ecdsa::SigningKey,
};
use num_bigint::BigUint;
use num_traits::Zero;
use serde::{Deserialize, Serialize};
use sha2::Sha512;
use sha3::{Digest, Keccak256, Sha3_512};
use wasm_bindgen::prelude::*;

type HmacSha512 = Hmac<Sha512>;

const DEFAULT_HD_PATH: &str = "m/44'/60'/0'/0/0";
const HD_HARDENED_OFFSET: u32 = 0x8000_0000;
const DEFAULT_DERIVATION_PATH: [u32; 5] = [
    HD_HARDENED_OFFSET + 44,
    HD_HARDENED_OFFSET + 60,
    HD_HARDENED_OFFSET,
    0,
    0,
];
const SECP256K1_ORDER_HEX: &str =
    "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141";

#[derive(Deserialize, Serialize)]
pub struct WalletEntry {
    label: String,
    signer_type: String,
    address: String,
    public_key: String,
    private_key: String,
}

#[derive(Deserialize, Serialize)]
pub struct WalletBundle {
    mnemonic: String,
    hd_path: String,
    tos: WalletEntry,
    uno: WalletEntry,
}

#[wasm_bindgen]
pub fn generate_wallet_bundle() -> Result<JsValue, JsValue> {
    let mnemonic = generate_mnemonic()?;
    let bundle = derive_bundle_from_phrase(mnemonic.to_string().as_str())?;
    serde_wasm_bindgen::to_value(&bundle)
        .map_err(|err| JsValue::from_str(&format!("Failed to serialize wallet bundle: {err}")))
}

fn generate_mnemonic() -> Result<Mnemonic, JsValue> {
    let mut entropy = [0u8; 32];
    getrandom::getrandom(&mut entropy)
        .map_err(|err| JsValue::from_str(&format!("Failed to generate entropy: {err}")))?;

    Mnemonic::from_entropy_in(Language::English, &entropy)
        .map_err(|err| JsValue::from_str(&format!("Failed to build mnemonic: {err}")))
}

fn derive_bundle_from_phrase(phrase: &str) -> Result<WalletBundle, JsValue> {
    let mnemonic = Mnemonic::parse_in_normalized(Language::English, phrase)
        .map_err(|err| JsValue::from_str(&format!("Invalid mnemonic phrase: {err}")))?;
    let seed = mnemonic.to_seed_normalized("");
    let tos = derive_tos_wallet(&seed)?;
    let uno = derive_uno_wallet(&seed)?;

    Ok(WalletBundle {
        mnemonic: mnemonic.to_string(),
        hd_path: DEFAULT_HD_PATH.to_string(),
        tos,
        uno,
    })
}

fn derive_tos_wallet(seed: &[u8]) -> Result<WalletEntry, JsValue> {
    let private_key = derive_ecdsa_private_from_seed(seed)?;
    let public_key = secp256k1_public_key(&private_key, false)?;
    let address_hash = Keccak256::digest(&public_key[1..]);

    Ok(WalletEntry {
        label: "TOS".to_string(),
        signer_type: "secp256k1".to_string(),
        address: checksum_hex_address(address_hash.as_slice()),
        public_key: hex::encode(public_key),
        private_key: hex::encode(private_key),
    })
}

fn derive_uno_wallet(seed: &[u8]) -> Result<WalletEntry, JsValue> {
    let private_key = derive_elgamal_private_from_seed(seed)?;
    let secret = Scalar::from_canonical_bytes(private_key)
        .into_option()
        .ok_or_else(|| JsValue::from_str("Failed to decode UNO private key"))?;

    if secret == Scalar::ZERO {
        return Err(JsValue::from_str("Derived UNO private key cannot be zero"));
    }

    let generator = elgamal_generator_h();
    let public_point = generator * secret.invert();
    let public_key = public_point.compress().to_bytes();
    let address_hash = Keccak256::digest(public_key);

    Ok(WalletEntry {
        label: "UNO".to_string(),
        signer_type: "elgamal".to_string(),
        address: checksum_hex_address(address_hash.as_slice()),
        public_key: hex::encode(public_key),
        private_key: hex::encode(private_key),
    })
}

fn derive_ecdsa_private_from_seed(seed: &[u8]) -> Result<[u8; 32], JsValue> {
    let (mut key, mut chain_code) = derive_bip32_master(seed)?;

    for index in DEFAULT_DERIVATION_PATH {
        let (child_key, child_chain_code) = derive_bip32_child(&key, &chain_code, index)?;
        key = child_key;
        chain_code = child_chain_code;
    }

    Ok(key)
}

fn derive_elgamal_private_from_seed(seed: &[u8]) -> Result<[u8; 32], JsValue> {
    for counter in 0..1024u32 {
        let mut mac = HmacSha512::new_from_slice(b"GTOS_ELGAMAL_DERIVE")
            .map_err(|err| JsValue::from_str(&format!("Failed to initialize UNO derivation: {err}")))?;
        mac.update(seed);
        mac.update(&[0]);
        mac.update(DEFAULT_HD_PATH.as_bytes());
        mac.update(&counter.to_be_bytes());

        let digest = mac.finalize().into_bytes();
        let mut wide = [0u8; 64];
        wide.copy_from_slice(&digest);

        let scalar = Scalar::from_bytes_mod_order_wide(&wide);
        if scalar == Scalar::ZERO {
            continue;
        }

        return Ok(scalar.to_bytes());
    }

    Err(JsValue::from_str(
        "Failed to derive a valid UNO private key from mnemonic",
    ))
}

fn derive_bip32_master(seed: &[u8]) -> Result<([u8; 32], [u8; 32]), JsValue> {
    let mut mac = HmacSha512::new_from_slice(b"Bitcoin seed")
        .map_err(|err| JsValue::from_str(&format!("Failed to initialize BIP32 master derivation: {err}")))?;
    mac.update(seed);
    let digest = mac.finalize().into_bytes();

    let mut key = [0u8; 32];
    let mut chain_code = [0u8; 32];
    key.copy_from_slice(&digest[..32]);
    chain_code.copy_from_slice(&digest[32..]);
    validate_bip32_scalar(&key)?;

    Ok((key, chain_code))
}

fn derive_bip32_child(
    parent_key: &[u8; 32],
    parent_chain_code: &[u8; 32],
    index: u32,
) -> Result<([u8; 32], [u8; 32]), JsValue> {
    let mut data = [0u8; 37];

    if index >= HD_HARDENED_OFFSET {
        data[1..33].copy_from_slice(parent_key);
    } else {
        let compressed_public_key = secp256k1_public_key(parent_key, true)?;
        data[..33].copy_from_slice(&compressed_public_key);
    }

    data[33..].copy_from_slice(&index.to_be_bytes());

    let mut mac = HmacSha512::new_from_slice(parent_chain_code)
        .map_err(|err| JsValue::from_str(&format!("Failed to initialize BIP32 child derivation: {err}")))?;
    mac.update(&data);
    let digest = mac.finalize().into_bytes();

    let mut child_chain_code = [0u8; 32];
    child_chain_code.copy_from_slice(&digest[32..]);

    let parent_value = BigUint::from_bytes_be(parent_key);
    let child_scalar = BigUint::from_bytes_be(&digest[..32]);
    let curve_order = secp256k1_order();

    if child_scalar.is_zero() || child_scalar >= curve_order {
        return Err(JsValue::from_str("Invalid BIP32 child scalar"));
    }

    let derived_value = (child_scalar + parent_value) % &curve_order;
    if derived_value.is_zero() {
        return Err(JsValue::from_str("Derived BIP32 child key is zero"));
    }

    let mut child_key = [0u8; 32];
    let child_bytes = derived_value.to_bytes_be();
    child_key[32 - child_bytes.len()..].copy_from_slice(&child_bytes);
    validate_bip32_scalar(&child_key)?;

    Ok((child_key, child_chain_code))
}

fn validate_bip32_scalar(key: &[u8; 32]) -> Result<(), JsValue> {
    let scalar = BigUint::from_bytes_be(key);
    let curve_order = secp256k1_order();

    if scalar.is_zero() || scalar >= curve_order {
        return Err(JsValue::from_str("BIP32 scalar is out of range"));
    }

    Ok(())
}

fn secp256k1_public_key(private_key: &[u8; 32], compressed: bool) -> Result<Vec<u8>, JsValue> {
    let signing_key = SigningKey::from_bytes(private_key.into())
        .map_err(|err| JsValue::from_str(&format!("Invalid secp256k1 private key: {err}")))?;
    let encoded_point = signing_key.verifying_key().to_encoded_point(compressed);
    Ok(encoded_point.as_bytes().to_vec())
}

fn secp256k1_order() -> BigUint {
    BigUint::parse_bytes(SECP256K1_ORDER_HEX.as_bytes(), 16)
        .expect("valid secp256k1 curve order")
}

fn elgamal_generator_h() -> RistrettoPoint {
    let base = RISTRETTO_BASEPOINT_POINT.compress().to_bytes();
    let digest = Sha3_512::digest(base);
    let mut uniform = [0u8; 64];
    uniform.copy_from_slice(&digest);
    RistrettoPoint::from_uniform_bytes(&uniform)
}

fn checksum_hex_address(bytes: &[u8]) -> String {
    let lower_hex = hex::encode(bytes);
    let checksum_hash = Keccak256::digest(lower_hex.as_bytes());
    let mut output = String::with_capacity(lower_hex.len() + 2);
    output.push_str("0x");

    for (index, ch) in lower_hex.chars().enumerate() {
        if ch.is_ascii_digit() {
            output.push(ch);
            continue;
        }

        let hash_nibble = if index % 2 == 0 {
            checksum_hash[index / 2] >> 4
        } else {
            checksum_hash[index / 2] & 0x0f
        };

        if hash_nibble > 7 {
            output.push(ch.to_ascii_uppercase());
        } else {
            output.push(ch);
        }
    }

    output
}

#[wasm_bindgen(start)]
pub fn init() {
    console_error_panic_hook::set_once();
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn generated_bundle_has_expected_shape() {
        let mnemonic = generate_mnemonic().unwrap();
        let parsed = derive_bundle_from_phrase(&mnemonic.to_string()).unwrap();

        assert_eq!(parsed.mnemonic.split_whitespace().count(), 24);
        assert_eq!(parsed.hd_path, DEFAULT_HD_PATH);
        assert_eq!(parsed.tos.private_key.len(), 64);
        assert_eq!(parsed.uno.private_key.len(), 64);
        assert_eq!(parsed.tos.public_key.len(), 130);
        assert_eq!(parsed.uno.public_key.len(), 64);
        assert_eq!(parsed.tos.address.len(), 66);
        assert_eq!(parsed.uno.address.len(), 66);
        assert!(parsed.tos.address.starts_with("0x"));
        assert!(parsed.uno.address.starts_with("0x"));
    }

    #[test]
    fn known_mnemonic_derives_stable_wallets() {
        let phrase = "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon art";
        let bundle = derive_bundle_from_phrase(phrase).unwrap();

        assert_eq!(bundle.mnemonic, phrase);
        assert_eq!(bundle.tos.signer_type, "secp256k1");
        assert_eq!(bundle.uno.signer_type, "elgamal");
        assert_ne!(bundle.tos.address, bundle.uno.address);
        assert_ne!(bundle.tos.public_key, bundle.uno.public_key);
        assert_ne!(bundle.tos.private_key, bundle.uno.private_key);
    }
}
