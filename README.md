# TOS Paper Wallet Generator

Offline-first wallet generator for the TOS Network. Built in Rust, compiled to WebAssembly, and wrapped in a static web UI that can be served locally or from any static host.

---

## Highlights
- **Deterministic parity** with the official [`tos`](../tos) wallet: identical key, address, and mnemonic derivation using the Pedersen blinding base `H`.
- **Air-gap friendly**: no third-party fonts, scripts, or analytics; all assets are local under `web/`.
- **Feature-rich UI**: five themes, 18 languages, live QR codes, copy helpers, print-ready layout.
- **Security reviewed**: findings and fixes captured in [`AUDIT.md`](AUDIT.md).

---

## Project Layout
```
paper-wallet/
├─ build.sh                 # helper script to build WASM + bindings
├─ wrangler.toml            # Cloudflare Workers configuration (static assets in ./web)
├─ AUDIT.md                 # latest formal security audit
├─ src/
│  ├─ lib.rs                # wallet generation logic exposed to JS
│  ├─ mnemonics.rs          # scalar ⇆ mnemonic conversion
│  └─ english_words.rs      # 1,626-word English list
└─ web/
   ├─ index.html            # single-page UI
   ├─ app.js                # front-end logic and WASM glue
   ├─ i18n.js               # translations
   ├─ styles.css            # themes, layout, print styles
   ├─ qrcode.min.js         # bundled QR generator
   └─ pkg/                  # wasm-bindgen output (generated)
```

---

## Prerequisites
- Rust toolchain (stable)
- `wasm-pack` (`cargo install wasm-pack`)
- `wasm-bindgen-cli` 0.2.92 (`cargo install wasm-bindgen-cli --version 0.2.92`)

---

## Build & Run
```bash
# 1. Fetch dependencies and compile the WASM target
./build.sh

# 2. Serve locally (choose one)
cd web
python3 -m http.server 8000          # built-in HTTP server
# or
npx serve                            # any static file server

# 3. Visit http://localhost:8000
```

### Fully Offline Workflow
1. Build while still online (`./build.sh`).
2. Transfer the `web/` directory to an air-gapped machine.
3. Open `web/index.html` directly via the `file://` protocol.
4. Generate, print, and store wallets; clear browser data when finished.

---

## Testing
```bash
cargo test
```
Unit tests cover address prefixes, scalar uniqueness, mnemonic integrity, and zero-scalar rejection.

---

## Deployment

### Cloudflare Workers (Dashboard Flow)
1. Run `./build.sh`.
2. Zip or upload the `web/` directory contents and the provided `worker.js` script.
3. In the Cloudflare dashboard: **Workers & Pages → Create Application → Create Worker → Upload assets**.
4. Paste the following module Worker into the editor if the default template is empty:
   ```js
   export default {
     async fetch(request, env, ctx) {
       try {
         return await env.ASSETS.fetch(request);
       } catch (err) {
         return new Response("Not found", { status: 404 });
       }
     },
   };
   ```
5. Click **Save and Deploy**, then verify the generated `.workers.dev` URL.

### Other Static Hosts
- GitHub Pages, Netlify, Vercel, or traditional web servers can host the `web/` directory without modifications.

---

## Security Notes
- RNG source: `OsRng` (browser WebCrypto on wasm32) with rejection sampling to avoid zero scalars.
- Public key: `s⁻¹ * H` using `PedersenGens::default().B_blinding`.
- Addresses: 32-byte compressed key + address type serialized into Bech32 with HRPs `tos` / `tst`.
- Mnemonics: 24-word payload + checksum word using the canonical TOS list and CRC32 checksum.
- Additional recommendations and threat modelling are documented in [`AUDIT.md`](AUDIT.md).

---

## License
BSD 3-Clause. See `LICENSE`.
