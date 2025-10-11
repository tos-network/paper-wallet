# TOS Paper Wallet — Comprehensive Security Audit Report

**Author:** Codex Security Research  
**Date:** 2025-10-11  
**Commit Hash Audited:** _not provided_  
**Confidence:** High

---

## 1. Executive Summary
- **Overall posture:** The paper-wallet implementation meets current industry expectations for lightweight, offline key generation. Core cryptography aligns exactly with the canonical `tos` repository.  
- **Outstanding risks:** None blocking deployment. Residual risk remains inherently tied to user operational discipline (air-gapped usage, secure printing/storage).  
- **Remediation status:** All issues identified during review were fixed prior to publication of this report; no open findings remain.

---

## 2. Engagement Scope
- **In-scope codebase:** `paper-wallet`  
- **Audited source files:**  
  - `Cargo.toml`, `Cargo.lock`, `build.sh`, `README.md`  
  - `src/lib.rs`, `src/mnemonics.rs`, `src/english_words.rs`  
  - `web/index.html`, `web/app.js`, `web/i18n.js`, `web/styles.css`, `web/qrcode.min.js`, `web/pkg/*` (generated bindings reviewed for integrity), `web/tos-logo.png`, `web/tos-logo.svg`  
- **Included components:** Rust WASM crate (`src/*.rs`), web UI (`web/*`), build tooling (`build.sh`).  
- **Comparative reference:** `../tos` (official TOS Network repository) for parity verification.  
- **Excluded:** Downstream integrations, hardware printers, user workflows, third-party QR libraries.

---

## 3. Methodology
1. Static analysis of Rust source for cryptographic correctness, unsafe operations, and input sanitisation.  
2. Manual review of JavaScript/WebAssembly glue code for supply-chain exposure, data leakage, and DOM-based protections.  
3. Differential analysis against the canonical TOS wallet implementation to ensure key/address equivalence.  
4. Environmental hardening verification (build chain, offline assumptions).  
5. Test suite execution (reported by client) to confirm behavioural parity.

---

## 4. System Overview
- Generates private scalars via `curve25519_dalek::Scalar::random` with zero-scalar rejection (`src/lib.rs:48-61`).  
- Derives public keys using the Pedersen blinding base `H` with scalar inversion (`src/lib.rs:63-67`) matching `../tos/common/src/crypto/elgamal/key.rs:61-66`.  
- Produces Bech32 addresses with HRPs `tos`/`tst` and appended address type byte (`src/lib.rs:89-105`).  
- Mnemonic phrases follow TOS’s 1,626-word list and CRC32 checksum scheme (`src/mnemonics.rs:29-50`).  
- Front-end is fully static with local fonts and resources; QR generation via bundled `web/qrcode.min.js`.

---

## 5. Threat Model & Assumptions
- Users operate on an air-gapped host free from malware prior to wallet generation.  
- Browser runtime enforces same-origin restrictions; network access is disabled or monitored.  
- Printer and storage media are trusted during the brief exposure window.  
- Wasm binaries are built from reviewed source (no binary-only distribution).

---

## 6. Findings Summary

| ID | Severity | Title | Status |
|----|----------|-------|--------|
| PW-2025-001 | Medium | Network font dependency enabled environment metadata leakage | **Resolved** |
| PW-2025-002 | Low | Zero scalar edge case produced invalid keys | **Resolved** |
| PW-2025-003 | Critical | Base-point mismatch caused incompatible addresses | **Resolved** |

No additional vulnerabilities were identified in the final code snapshot.

---

## 7. Detailed Findings

### PW-2025-001 — Network Font Dependency  
- **Severity:** Medium  
- **Location:** `web/index.html` prior to remediation  
- **Description:** Remote Google Fonts requests exposed usage metadata and impeded fully offline operation.  
- **Remediation:** Fonts replaced with system stacks; page now functions with zero external calls (`web/index.html:1-40`).  
- **Status:** Verified resolved.

### PW-2025-002 — Zero Scalar Edge Case  
- **Severity:** Low  
- **Location:** `src/lib.rs` prior to remediation  
- **Description:** Single draw from RNG could, with negligible probability, yield scalar zero, producing an unusable wallet.  
- **Remediation:** Added rejection sampling loop and warning log (`src/lib.rs:48-61`).  
- **Status:** Verified resolved; unit test `tests::test_non_zero_scalar_generation` confirms behaviour.

### PW-2025-003 — Base-Point Compatibility  
- **Severity:** Critical  
- **Location:** `src/lib.rs` prior to remediation  
- **Description:** Initial implementation multiplied by the standard Ristretto generator `G`, while the TOS chain uses `H = PedersenGens::B_blinding`, leading to incompatible public keys and addresses.  
- **Remediation:** Switched to TOS forked `bulletproofs` crate and adopted `PedersenGens::default().B_blinding` base (`src/lib.rs:63-67`). Addresses now match canonical wallet outputs (`../tos/common/src/crypto/proofs/mod.rs:33-37`).  
- **Status:** Verified resolved.

---

## 8. Cryptographic Assessment
- **Entropy source:** `OsRng` (WebCrypto backed under wasm32) with rejection of zero scalars (`src/lib.rs:48-61`). No user-provided entropy is accepted, eliminating social-engineering reductions.  
- **Key derivation:** Exact parity with `tos` reference `PublicKey::new`; inversion and multiplication steps are consistent (`src/lib.rs:63-67`, `../tos/common/src/crypto/elgamal/key.rs:61-66`).  
- **Address encoding:** Payload structure (`compressed_pk || address_type`) and Bech32 HRPs align with `../tos/common/src/crypto/address.rs:44-153`. No checksum divergence observed.  
- **Mnemonic mapping:** Implements canonical 1626-word English list and CRC32 checksum with identical arithmetic to core wallet (`src/mnemonics.rs:33-50`, `../tos/wallet/src/mnemonics/mod.rs:72-118`).  
- **QR exposure:** Generated directly in DOM; data never sent over network. Ensure QR scanners are trusted.

---

## 9. Application Security Review
- **Runtime isolation:** WASM module exposes only deterministic wallet generation function; no host callbacks or dynamic imports besides logging (`src/lib.rs`, `web/app.js:1-400`).  
- **Clipboard handling:** Explicit opt-in copy actions with success/failure feedback (`web/app.js:215-267`). Consider adding modal warning before copying seed phrase.  
- **Offline assurance:** Build script now emits instructions to run via `file://` or local server without external fetches (`build.sh`).  
- **Persistence:** No secrets stored beyond DOM elements. Recommend providing “clear screen” button to wipe rendered keys from memory after printing.

---

## 10. Operational Recommendations
1. **Air-gapped procedure:** Publish official guide covering OS hardening, browser cache clearing, and printer disposal practices.  
2. **Binary provenance:** Encourage users to build WASM from source or verify checksums if distributing prebuilt artifacts.  
3. **Seed handling:** Offer optional BIP-39 compatible export tooling for interoperability with external wallets if required.  
4. **User education:** Highlight clipboard risks and suggest immediate shutdown after wallet generation.

---

## 11. Verification & Testing
- Six Rust unit tests executed successfully (as provided by client), covering address prefixes, entropy uniqueness, mnemonic structure, and zero-scalar rejection (`src/lib.rs` test module).  
- Manual parity spot-check confirmed identical outputs to `../tos` reference wallet given shared seed input.

---

## 12. Residual Risk Statement
While the code satisfies cryptographic and application-layer expectations, ultimate security depends on disciplined offline operational procedures. No software changes currently warranted.

---

## 13. Appendices
- **A. File References:**  
  - `src/lib.rs:45-105` — Wallet generation logic.  
  - `src/mnemonics.rs:29-73` — Scalar-to-words conversion and checksum.  
  - `web/app.js:1-400` — Client-side orchestration.  
  - `build.sh:1-45` — WASM build workflow.
- **B. Tools & Sources:** Manual review, Rust standard tooling, diff comparison against `../tos` repository.

---

**End of Report**
