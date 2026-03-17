# TOS Wallet Material Generator

Offline-first web wallet material generator for TOS Network.

This repository builds a static WebAssembly web app that derives one shared 24-word BIP39 recovery phrase and shows two wallet bundles:

- `TOS` plain wallet
  - signer type: `secp256k1`
  - outputs: `address`, `public key`, `private key`
- `UNO` privacy wallet
  - signer type: `elgamal`
  - outputs: `address`, `public key`, `private key`

The UI is designed to run from local static files served over HTTP and can also be deployed to Cloudflare using the included worker configuration.

## Current Product Shape

- One `Wallet Mode` selector on the main page: `TOS` or `UNO`
- One top `Generate New Wallet` button for the first generation
- One lower confirmed `Generate New Wallet` button for replacing an existing bundle
- Shared `Recovery Phrase (24 Words)` for both wallet modes
- Sensitive sections are hidden by default and must be explicitly revealed
- Local-only assets: no third-party fonts, scripts, or analytics
- Mobile and desktop layouts supported
- 18 UI languages and 5 themes

## Derivation Model

### TOS

- BIP39 mnemonic: `24` English words
- Seed: standard BIP39 seed with empty passphrase
- HD path: `m/44'/60'/0'/0/0`
- Private key derivation: BIP32 / secp256k1-compatible scalar derivation
- Public key: secp256k1 public key
- Address: mixed-case checksum hex string derived from the full `Keccak256(pubkey[1..])` 32-byte digest

### UNO

- Uses the same BIP39 seed and the same displayed HD path string
- Private key derivation: `HMAC-SHA512("GTOS_ELGAMAL_DERIVE", seed || 0x00 || hd_path || counter)`
- Public key: derived ElGamal / Ristretto public key
- Address: mixed-case checksum hex string derived from `Keccak256(public_key)`

### Cross-Verification

The Rust/WASM derivation is cross-checked against the local GTOS Go implementation with the helper in [tools/verify/README.md](/Users/tomisetsu/paper-wallet/tools/verify/README.md).

## Project Layout

```text
paper-wallet/
├─ build.sh
├─ worker.js
├─ wrangler.toml
├─ src/
│  ├─ lib.rs
│  ├─ english_words.rs
│  └─ mnemonics.rs
├─ tests/
│  ├─ regression_test.rs
│  ├─ test_user_seed.rs
│  └─ tos_compatibility.rs
├─ tools/
│  └─ verify/
│     ├─ README.md
│     ├─ go.mod
│     ├─ go.sum
│     └─ main.go
└─ web/
   ├─ index.html
   ├─ app.js
   ├─ i18n.js
   ├─ styles.css
   ├─ qrcode.min.js
   ├─ tos-logo.svg
   ├─ tos-logo.png
   ├─ tos-favicon.svg
   ├─ favicon.ico
   ├─ secure-badge.png
   └─ pkg/
      ├─ tos_paper_wallet.js
      └─ tos_paper_wallet_bg.wasm
```

Notes:

- [src/lib.rs](/Users/tomisetsu/paper-wallet/src/lib.rs) is the active wallet derivation implementation.
- [src/english_words.rs](/Users/tomisetsu/paper-wallet/src/english_words.rs) and [src/mnemonics.rs](/Users/tomisetsu/paper-wallet/src/mnemonics.rs) are retained from earlier mnemonic work and are not the main path used by the current web UI.

## Prerequisites

- Rust stable toolchain
- `wasm-bindgen-cli` `0.2.92`
- Python 3 or another simple local static HTTP server
- Node.js if you want to deploy with Wrangler

Install `wasm-bindgen-cli` if needed:

```bash
cargo install wasm-bindgen-cli --version 0.2.92
```

## Build

```bash
./build.sh
```

This compiles the Rust crate for `wasm32-unknown-unknown` and regenerates the files under `web/pkg/`.

## Run Locally

Serve the `web/` directory over local HTTP:

```bash
cd web
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000
```

Important:

- Do not rely on opening `web/index.html` via `file://` in a browser.
- The current app loads ES modules and WASM through the browser runtime and should be served over HTTP, even on an offline machine.

### Offline Workflow

1. Build the project while online.
2. Copy the repository or at least the `web/` directory to an offline machine.
3. Start a local HTTP server on the offline machine.
4. Open the local `http://127.0.0.1:<port>` URL in the browser.

## Testing

Run the Rust test suite:

```bash
cargo test
```

Current test layout:

- `src/lib.rs`: `2` unit tests
- [tests/regression_test.rs](/Users/tomisetsu/paper-wallet/tests/regression_test.rs): `8` tests
- [tests/test_user_seed.rs](/Users/tomisetsu/paper-wallet/tests/test_user_seed.rs): `1` test
- [tests/tos_compatibility.rs](/Users/tomisetsu/paper-wallet/tests/tos_compatibility.rs): `4` tests

Total: `15` Rust tests.

## Go Verifier

Use the Go helper to compare the Rust/WASM wallet bundle against local GTOS code:

```bash
cd tools/verify
GOTOOLCHAIN=auto go run . "<24-word mnemonic>"
```

This requires local checkouts referenced by [tools/verify/go.mod](/Users/tomisetsu/paper-wallet/tools/verify/go.mod).

## Deployment

This repository is configured for Cloudflare Workers static asset deployment.

Relevant files:

- [wrangler.toml](/Users/tomisetsu/paper-wallet/wrangler.toml)
- [worker.js](/Users/tomisetsu/paper-wallet/worker.js)

Deploy:

```bash
npx wrangler deploy
```

The worker serves static files from `web/` and maps `/` to `/index.html`.

## Security Notes

- The page does not load third-party fonts, scripts, or analytics.
- Wallet material is generated locally in the browser.
- The app currently stores only UI preferences such as language and theme in `localStorage`.
- The generated wallet bundle is kept in memory and is not persisted to `localStorage`, `sessionStorage`, or `IndexedDB`.
- If the user copies a private key or recovery phrase, it is written to the system clipboard.
- Sensitive material is hidden by default in the UI and must be explicitly revealed.
- If you deploy the app publicly, the hosting provider will still see normal web request metadata such as IP and User-Agent.

## License

BSD 3-Clause. See [LICENSE](/Users/tomisetsu/paper-wallet/LICENSE).
