/// Test the user's specific seed to verify address generation is correct
use curve25519_dalek::{
    ristretto::RistrettoPoint,
    scalar::Scalar,
};
use bech32::{ToBase32, Variant};
use sha3::Sha3_512;

// SAFETY: TEST DATA ONLY - DO NOT USE THESE SEEDS/KEYS FOR REAL FUNDS
// These are publicly known test vectors. Using them would result in loss of funds.

#[test]
fn test_user_seed() {
    println!("Testing user's seed and private key...\n");

    // SAFETY: This seed is for testing only and is publicly known
    let _seed = "semifinal nugget hounded went gossip present jive school woozy double jittery tubes irritate unusual input blip academy leisure soil zero tufts upstairs hiker jaws unusual";
    // SAFETY: This private key is for testing only and is publicly known
    let expected_private_key_hex = "f164f0cd577136547bd0b939050d596ec683d18341fb957a8f462be2c6b1330f";

    // Expected TOS wallet address
    let tos_wallet_address = "tos14gt7l6j52msqruq6thzc4m3agpmst8a20dynvhzzmsczv8edpvwqqxv22lu";

    // Parse the private key
    let private_key_bytes = hex::decode(expected_private_key_hex).unwrap();
    let mut key_array = [0u8; 32];
    key_array.copy_from_slice(&private_key_bytes);
    let private_scalar = Scalar::from_bytes_mod_order(key_array);

    println!("Private Key (hex): {}", expected_private_key_hex);
    println!("Private Key (scalar): {:?}\n", private_scalar);

    // Correct method: H * s (TOS wallet standard)
    let h_point = RistrettoPoint::hash_from_bytes::<Sha3_512>(b"TOS_SIGNATURE_GENERATOR_H");
    let public_key = h_point * private_scalar;
    let address = generate_address(&public_key, true);

    println!("Method: H * s (TOS wallet standard)");
    println!("  Public Key: {:?}", public_key.compress());
    println!("  Address: {}", address);
    println!("  Expected: {}\n", tos_wallet_address);

    // Verify the address matches
    assert_eq!(
        address,
        tos_wallet_address,
        "Generated address must match TOS wallet address"
    );

    println!("✅ Address generation verified correct");
}

fn generate_address(public_point: &RistrettoPoint, mainnet: bool) -> String {
    let compressed = public_point.compress();
    let mut payload = Vec::new();
    payload.extend_from_slice(compressed.as_bytes());
    payload.push(0u8); // AddressType::Normal

    let hrp = if mainnet { "tos" } else { "tst" };
    bech32::encode(hrp, payload.to_base32(), Variant::Bech32).unwrap()
}
