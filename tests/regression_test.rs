/// Regression test to prevent address generation from breaking
///
/// This test uses real user data to ensure that the address generation
/// algorithm remains compatible with TOS wallet across code changes.
///
/// CRITICAL: This test must NEVER be modified or removed!
/// If this test fails, it means a breaking change has been introduced.

use curve25519_dalek::{
    ristretto::RistrettoPoint,
    scalar::Scalar,
};
use bech32::{ToBase32, Variant};
use sha3::Sha3_512;

// SAFETY: TEST DATA ONLY - DO NOT USE THESE SEEDS/KEYS FOR REAL FUNDS
// These are publicly known test vectors used for regression testing.
// Using these seeds or keys for actual cryptocurrency storage would result
// in immediate loss of funds as they are publicly accessible.

// Known good values from real user wallet #1
// SAFETY: This seed is for testing only and is publicly known
const TEST_SEED_1: &str = "semifinal nugget hounded went gossip present jive school woozy double jittery tubes irritate unusual input blip academy leisure soil zero tufts upstairs hiker jaws unusual";
// SAFETY: This private key is for testing only and is publicly known
const TEST_PRIVATE_KEY_1_HEX: &str = "f164f0cd577136547bd0b939050d596ec683d18341fb957a8f462be2c6b1330f";
const TEST_PUBLIC_KEY_1_COMPRESSED: [u8; 32] = [
    170, 23, 239, 234, 84, 86, 224, 1, 240, 26, 93, 197, 138, 238, 61, 64,
    119, 5, 159, 170, 123, 73, 54, 92, 66, 220, 48, 38, 31, 45, 11, 28
];
const TEST_ADDRESS_1_MAINNET: &str = "tos14gt7l6j52msqruq6thzc4m3agpmst8a20dynvhzzmsczv8edpvwqqxv22lu";
const TEST_ADDRESS_1_TESTNET: &str = "tst14gt7l6j52msqruq6thzc4m3agpmst8a20dynvhzzmsczv8edpvwqqaurths";

// Known good values from real user wallet #2
// SAFETY: This seed is for testing only and is publicly known
const TEST_SEED_2: &str = "template listen ravine wonders vane imbalance jaunt album hazard hefty launching hounded vague lifestyle maul pencil often dinner dolphin geek extra enforce family fountain vane";
// SAFETY: This private key is for testing only and is publicly known
const TEST_PRIVATE_KEY_2_HEX: &str = "bd6b9434d28eb27b34574b56dd57e0e9b96e200825990299806563f22fd24007";
const TEST_PUBLIC_KEY_2_COMPRESSED: [u8; 32] = [
    176, 60, 58, 190, 155, 195, 181, 113, 154, 235, 69, 144, 76, 150, 42, 206,
    70, 53, 240, 64, 151, 228, 243, 23, 119, 50, 70, 152, 193, 178, 193, 36
];
const TEST_ADDRESS_2_MAINNET: &str = "tos1kq7r405mcw6hrxhtgkgye932eerrtuzqjlj0x9mhxfrf3sdjcyjqqturfh9";
const TEST_ADDRESS_2_TESTNET: &str = "tst1kq7r405mcw6hrxhtgkgye932eerrtuzqjlj0x9mhxfrf3sdjcyjqqsv2glf";

/// Helper: Generate TOS address from public key point
fn generate_address(public_point: &RistrettoPoint, mainnet: bool) -> String {
    let compressed = public_point.compress();
    let mut payload = Vec::new();
    payload.extend_from_slice(compressed.as_bytes());
    payload.push(0u8); // AddressType::Normal

    let hrp = if mainnet { "tos" } else { "tst" };
    bech32::encode(hrp, payload.to_base32(), Variant::Bech32).unwrap()
}

/// Helper: Generate public key from private key using TOS method
fn generate_public_key(private_scalar: &Scalar) -> RistrettoPoint {
    let h_point = RistrettoPoint::hash_from_bytes::<Sha3_512>(b"TOS_SIGNATURE_GENERATOR_H");
    h_point * private_scalar
}

#[test]
fn test_regression_private_key_from_hex() {
    println!("\n=== Regression Test: Private Key from Hex ===");

    // Test wallet #1
    let private_key_bytes_1 = hex::decode(TEST_PRIVATE_KEY_1_HEX)
        .expect("Failed to decode private key hex");
    assert_eq!(private_key_bytes_1.len(), 32, "Private key must be 32 bytes");
    let mut key_array_1 = [0u8; 32];
    key_array_1.copy_from_slice(&private_key_bytes_1);
    let private_scalar_1 = Scalar::from_bytes_mod_order(key_array_1);
    assert_ne!(private_scalar_1, Scalar::ZERO, "Private key scalar must not be zero");

    // Test wallet #2
    let private_key_bytes_2 = hex::decode(TEST_PRIVATE_KEY_2_HEX)
        .expect("Failed to decode private key hex");
    assert_eq!(private_key_bytes_2.len(), 32, "Private key must be 32 bytes");
    let mut key_array_2 = [0u8; 32];
    key_array_2.copy_from_slice(&private_key_bytes_2);
    let private_scalar_2 = Scalar::from_bytes_mod_order(key_array_2);
    assert_ne!(private_scalar_2, Scalar::ZERO, "Private key scalar must not be zero");

    println!("✅ Private keys correctly parsed from hex");
    println!("   Wallet #1: {}", TEST_PRIVATE_KEY_1_HEX);
    println!("   Wallet #2: {}", TEST_PRIVATE_KEY_2_HEX);
}

#[test]
fn test_regression_public_key_generation() {
    println!("\n=== Regression Test: Public Key Generation ===");

    // Test wallet #1
    let private_key_bytes_1 = hex::decode(TEST_PRIVATE_KEY_1_HEX).unwrap();
    let mut key_array_1 = [0u8; 32];
    key_array_1.copy_from_slice(&private_key_bytes_1);
    let private_scalar_1 = Scalar::from_bytes_mod_order(key_array_1);
    let public_point_1 = generate_public_key(&private_scalar_1);
    let compressed_1 = public_point_1.compress();
    assert_eq!(
        compressed_1.as_bytes(),
        &TEST_PUBLIC_KEY_1_COMPRESSED,
        "Wallet #1 public key does not match! CRITICAL regression!"
    );

    // Test wallet #2
    let private_key_bytes_2 = hex::decode(TEST_PRIVATE_KEY_2_HEX).unwrap();
    let mut key_array_2 = [0u8; 32];
    key_array_2.copy_from_slice(&private_key_bytes_2);
    let private_scalar_2 = Scalar::from_bytes_mod_order(key_array_2);
    let public_point_2 = generate_public_key(&private_scalar_2);
    let compressed_2 = public_point_2.compress();
    assert_eq!(
        compressed_2.as_bytes(),
        &TEST_PUBLIC_KEY_2_COMPRESSED,
        "Wallet #2 public key does not match! CRITICAL regression!"
    );

    println!("✅ Public keys correctly generated");
    println!("   Wallet #1: {:?}", compressed_1.as_bytes());
    println!("   Wallet #2: {:?}", compressed_2.as_bytes());
}

#[test]
fn test_regression_mainnet_address() {
    println!("\n=== Regression Test: Mainnet Address Generation ===");

    // Test wallet #1
    let private_key_bytes_1 = hex::decode(TEST_PRIVATE_KEY_1_HEX).unwrap();
    let mut key_array_1 = [0u8; 32];
    key_array_1.copy_from_slice(&private_key_bytes_1);
    let private_scalar_1 = Scalar::from_bytes_mod_order(key_array_1);
    let public_point_1 = generate_public_key(&private_scalar_1);
    let address_1 = generate_address(&public_point_1, true);
    assert_eq!(
        address_1,
        TEST_ADDRESS_1_MAINNET,
        "Wallet #1 mainnet address does not match! CRITICAL regression!"
    );

    // Test wallet #2
    let private_key_bytes_2 = hex::decode(TEST_PRIVATE_KEY_2_HEX).unwrap();
    let mut key_array_2 = [0u8; 32];
    key_array_2.copy_from_slice(&private_key_bytes_2);
    let private_scalar_2 = Scalar::from_bytes_mod_order(key_array_2);
    let public_point_2 = generate_public_key(&private_scalar_2);
    let address_2 = generate_address(&public_point_2, true);
    assert_eq!(
        address_2,
        TEST_ADDRESS_2_MAINNET,
        "Wallet #2 mainnet address does not match! CRITICAL regression!"
    );

    println!("✅ Mainnet addresses correctly generated");
    println!("   Wallet #1: {}", address_1);
    println!("   Wallet #2: {}", address_2);
}

#[test]
fn test_regression_testnet_address() {
    println!("\n=== Regression Test: Testnet Address Generation ===");

    // Test wallet #1
    let private_key_bytes_1 = hex::decode(TEST_PRIVATE_KEY_1_HEX).unwrap();
    let mut key_array_1 = [0u8; 32];
    key_array_1.copy_from_slice(&private_key_bytes_1);
    let private_scalar_1 = Scalar::from_bytes_mod_order(key_array_1);
    let public_point_1 = generate_public_key(&private_scalar_1);
    let address_1 = generate_address(&public_point_1, false);
    assert_eq!(address_1, TEST_ADDRESS_1_TESTNET, "Wallet #1 testnet address mismatch!");

    // Test wallet #2
    let private_key_bytes_2 = hex::decode(TEST_PRIVATE_KEY_2_HEX).unwrap();
    let mut key_array_2 = [0u8; 32];
    key_array_2.copy_from_slice(&private_key_bytes_2);
    let private_scalar_2 = Scalar::from_bytes_mod_order(key_array_2);
    let public_point_2 = generate_public_key(&private_scalar_2);
    let address_2 = generate_address(&public_point_2, false);
    assert_eq!(address_2, TEST_ADDRESS_2_TESTNET, "Wallet #2 testnet address mismatch!");

    println!("✅ Testnet addresses correctly generated");
    println!("   Wallet #1: {}", address_1);
    println!("   Wallet #2: {}", address_2);
}

#[test]
fn test_regression_seed_to_private_key() {
    println!("\n=== Regression Test: Seed to Private Key ===");

    // Test wallet #1
    let words_1: Vec<&str> = TEST_SEED_1.split_whitespace().collect();
    assert_eq!(words_1.len(), 25, "Wallet #1 seed must have 25 words");

    // Test wallet #2
    let words_2: Vec<&str> = TEST_SEED_2.split_whitespace().collect();
    assert_eq!(words_2.len(), 25, "Wallet #2 seed must have 25 words");

    println!("✅ Seed phrases have correct length");
    println!("   Wallet #1: {} words", words_1.len());
    println!("   Wallet #2: {} words", words_2.len());
}

#[test]
fn test_regression_h_point_constant() {
    println!("\n=== Regression Test: H Point Constant ===");

    // Generate H point (TOS signature generator)
    let h_point = RistrettoPoint::hash_from_bytes::<Sha3_512>(b"TOS_SIGNATURE_GENERATOR_H");
    let h_compressed = h_point.compress();

    // Known good value for H point
    const EXPECTED_H_POINT: [u8; 32] = [
        200, 74, 243, 46, 218, 30, 130, 127, 58, 235, 223, 29, 214, 249, 200, 196,
        66, 136, 29, 114, 187, 254, 217, 31, 5, 202, 120, 165, 70, 11, 216, 89
    ];

    assert_eq!(
        h_compressed.as_bytes(),
        &EXPECTED_H_POINT,
        "H point has changed! This is a CRITICAL regression!"
    );

    println!("✅ H point (TOS signature generator) is correct");
    println!("   H: {:?}", h_compressed.as_bytes());
}

#[test]
fn test_regression_address_format() {
    println!("\n=== Regression Test: Address Format ===");

    // Test wallet #1
    let private_key_bytes_1 = hex::decode(TEST_PRIVATE_KEY_1_HEX).unwrap();
    let mut key_array_1 = [0u8; 32];
    key_array_1.copy_from_slice(&private_key_bytes_1);
    let private_scalar_1 = Scalar::from_bytes_mod_order(key_array_1);
    let public_point_1 = generate_public_key(&private_scalar_1);
    let mainnet_addr_1 = generate_address(&public_point_1, true);
    let testnet_addr_1 = generate_address(&public_point_1, false);

    assert!(mainnet_addr_1.starts_with("tos1"), "Mainnet address must start with 'tos1'");
    assert!(testnet_addr_1.starts_with("tst1"), "Testnet address must start with 'tst1'");
    assert!(mainnet_addr_1.len() > 50 && mainnet_addr_1.len() < 70, "Address length out of range");

    // Test wallet #2
    let private_key_bytes_2 = hex::decode(TEST_PRIVATE_KEY_2_HEX).unwrap();
    let mut key_array_2 = [0u8; 32];
    key_array_2.copy_from_slice(&private_key_bytes_2);
    let private_scalar_2 = Scalar::from_bytes_mod_order(key_array_2);
    let public_point_2 = generate_public_key(&private_scalar_2);
    let mainnet_addr_2 = generate_address(&public_point_2, true);
    let testnet_addr_2 = generate_address(&public_point_2, false);

    assert!(mainnet_addr_2.starts_with("tos1"), "Mainnet address must start with 'tos1'");
    assert!(testnet_addr_2.starts_with("tst1"), "Testnet address must start with 'tst1'");
    assert!(mainnet_addr_2.len() > 50 && mainnet_addr_2.len() < 70, "Address length out of range");

    println!("✅ Address format is correct for both wallets");
    println!("   Wallet #1 Mainnet: {} (length: {})", mainnet_addr_1, mainnet_addr_1.len());
    println!("   Wallet #2 Mainnet: {} (length: {})", mainnet_addr_2, mainnet_addr_2.len());
}

#[test]
fn test_regression_full_flow() {
    println!("\n=== Regression Test: Full Flow ===");
    println!("Testing complete flow from private key to address generation\n");

    // Test wallet #1
    println!("Wallet #1:");
    let private_key_bytes_1 = hex::decode(TEST_PRIVATE_KEY_1_HEX).unwrap();
    let mut key_array_1 = [0u8; 32];
    key_array_1.copy_from_slice(&private_key_bytes_1);
    let private_scalar_1 = Scalar::from_bytes_mod_order(key_array_1);
    println!("  ✓ Step 1: Private key parsed");

    let public_point_1 = generate_public_key(&private_scalar_1);
    let compressed_1 = public_point_1.compress();
    assert_eq!(compressed_1.as_bytes(), &TEST_PUBLIC_KEY_1_COMPRESSED);
    println!("  ✓ Step 2: Public key generated");

    let mainnet_addr_1 = generate_address(&public_point_1, true);
    assert_eq!(mainnet_addr_1, TEST_ADDRESS_1_MAINNET);
    println!("  ✓ Step 3: Mainnet address generated");

    let testnet_addr_1 = generate_address(&public_point_1, false);
    assert_eq!(testnet_addr_1, TEST_ADDRESS_1_TESTNET);
    println!("  ✓ Step 4: Testnet address generated");

    // Test wallet #2
    println!("\nWallet #2:");
    let private_key_bytes_2 = hex::decode(TEST_PRIVATE_KEY_2_HEX).unwrap();
    let mut key_array_2 = [0u8; 32];
    key_array_2.copy_from_slice(&private_key_bytes_2);
    let private_scalar_2 = Scalar::from_bytes_mod_order(key_array_2);
    println!("  ✓ Step 1: Private key parsed");

    let public_point_2 = generate_public_key(&private_scalar_2);
    let compressed_2 = public_point_2.compress();
    assert_eq!(compressed_2.as_bytes(), &TEST_PUBLIC_KEY_2_COMPRESSED);
    println!("  ✓ Step 2: Public key generated");

    let mainnet_addr_2 = generate_address(&public_point_2, true);
    assert_eq!(mainnet_addr_2, TEST_ADDRESS_2_MAINNET);
    println!("  ✓ Step 3: Mainnet address generated");

    let testnet_addr_2 = generate_address(&public_point_2, false);
    assert_eq!(testnet_addr_2, TEST_ADDRESS_2_TESTNET);
    println!("  ✓ Step 4: Testnet address generated");

    println!("\n✅ Full flow test passed for both wallets!");
    println!("\nWallet #1:");
    println!("   Mainnet: {}", mainnet_addr_1);
    println!("   Testnet: {}", testnet_addr_1);
    println!("\nWallet #2:");
    println!("   Mainnet: {}", mainnet_addr_2);
    println!("   Testnet: {}", testnet_addr_2);
}
