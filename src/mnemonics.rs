use crate::english_words::WORDS;
use curve25519_dalek::scalar::Scalar;

const KEY_SIZE: usize = 32;
const SEED_LENGTH: usize = 24;
const WORDS_LIST: usize = 1626;
const WORDS_LIST_U32: u32 = WORDS_LIST as u32;
const PREFIX_LENGTH: usize = 3; // English prefix length

/// Calculate the checksum index for the seed
fn calculate_checksum_index(words: &[&str]) -> u32 {
    let mut chars: Vec<char> = Vec::new();
    for word in words {
        let mut word_chars: Vec<char> = word.chars()
            .map(|c| c.to_ascii_lowercase())
            .collect();

        if word_chars.len() > PREFIX_LENGTH {
            word_chars.truncate(PREFIX_LENGTH);
        }

        chars.extend_from_slice(&word_chars);
    }
    let value: String = chars.into_iter().collect();
    let checksum = crc32fast::hash(value.as_bytes());
    checksum % SEED_LENGTH as u32
}

/// Convert a private key (scalar) to a 25-word seed phrase (24 words + 1 checksum word)
pub fn scalar_to_words(scalar: &Scalar) -> Vec<String> {
    let bytes = scalar.to_bytes();

    let mut words = Vec::with_capacity(SEED_LENGTH + 1);
    for i in (0..KEY_SIZE).step_by(4) {
        let val = u32::from_le_bytes([bytes[i], bytes[i + 1], bytes[i + 2], bytes[i + 3]]);
        let a = val % WORDS_LIST_U32;
        let b = ((val / WORDS_LIST_U32) + a) % WORDS_LIST_U32;
        let c = ((val / WORDS_LIST_U32 / WORDS_LIST_U32) + b) % WORDS_LIST_U32;

        words.push(WORDS[a as usize].to_string());
        words.push(WORDS[b as usize].to_string());
        words.push(WORDS[c as usize].to_string());
    }

    // Add checksum word
    let word_refs: Vec<&str> = words.iter().map(|s| s.as_str()).collect();
    let checksum = calculate_checksum_index(&word_refs);
    words.push(words[checksum as usize].clone());

    words
}
