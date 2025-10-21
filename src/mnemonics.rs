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

/// Convert words to a Scalar (private key)
pub fn words_to_scalar(words: &[&str]) -> Result<Scalar, String> {
    if !(words.len() == SEED_LENGTH + 1 || words.len() == SEED_LENGTH) {
        return Err("Invalid words count".to_string());
    }

    // Verify checksum if 25 words
    if words.len() == SEED_LENGTH + 1 {
        let checksum_index = calculate_checksum_index(&words[0..SEED_LENGTH]);
        if words[checksum_index as usize] != words[SEED_LENGTH] {
            return Err("Invalid checksum".to_string());
        }
    }

    // Find word indices
    let mut indices = Vec::new();
    for word in &words[0..SEED_LENGTH] {
        let index = WORDS.iter().position(|w| w.eq_ignore_ascii_case(word))
            .ok_or_else(|| format!("Word not found: {}", word))?;
        indices.push(index);
    }

    // Convert indices to bytes
    let mut dest = Vec::with_capacity(KEY_SIZE);
    for i in (0..SEED_LENGTH).step_by(3) {
        let a = indices[i];
        let b = indices[i + 1];
        let c = indices[i + 2];

        let val = a + WORDS_LIST * (((WORDS_LIST - a) + b) % WORDS_LIST) + WORDS_LIST * WORDS_LIST * (((WORDS_LIST - b) + c) % WORDS_LIST);
        if val % WORDS_LIST != a {
            return Err("Word list sanity check error".to_string());
        }

        let val = val as u32;
        dest.extend_from_slice(&val.to_le_bytes());
    }

    let key_bytes: [u8; 32] = dest.try_into()
        .map_err(|_| "Invalid key from bytes".to_string())?;

    Ok(Scalar::from_bytes_mod_order(key_bytes))
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
