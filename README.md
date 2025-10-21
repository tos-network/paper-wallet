# TOS Paper Wallet Generator

Offline-first wallet generator for the TOS Network. Built in Rust, compiled to WebAssembly, and wrapped in a static web UI that can be served locally or from any static host.

**🌐 Live Version: [https://paperwallet.tos.network/](https://paperwallet.tos.network/)**

---

## Highlights
- **Deterministic parity** with the official [`tos`](../tos) wallet: identical key, address, and mnemonic derivation using the TOS signature generator point `H`.
- **Air-gap friendly**: no third-party fonts, scripts, or analytics; all assets are local under `web/`.
- **Feature-rich UI**: five themes, 18 languages, live QR codes, copy helpers, print-ready layout.
- **Security focused**: comprehensive regression testing with 2 real wallet test vectors.

---

## Project Layout
```
paper-wallet/
├─ build.sh                 # helper script to build WASM + bindings
├─ wrangler.toml            # Cloudflare Workers configuration (static assets in ./web)
├─ src/
│  ├─ lib.rs                # wallet generation logic exposed to JS
│  ├─ mnemonics.rs          # scalar ⇆ mnemonic conversion
│  └─ english_words.rs      # 1,626-word English list
├─ tests/
│  ├─ regression_test.rs    # regression tests with 2 wallet test vectors
│  ├─ test_user_seed.rs     # user seed verification test
│  └─ tos_compatibility.rs  # 100 random wallet compatibility tests
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
# Run all tests (20 tests total)
cargo test

# Run only regression tests (8 tests with 2 wallet test vectors)
cargo test --test regression_test

# Run with verbose output
cargo test -- --nocapture
```

Test coverage:
- **Unit tests (7)**: Address prefixes, scalar uniqueness, mnemonic integrity, zero-scalar rejection
- **Regression tests (8)**: 2 real wallet test vectors ensuring compatibility with TOS wallet
- **Compatibility tests (4)**: 100 random wallets verified against TOS wallet
- **User seed test (1)**: Verification of specific user-provided seed

**SAFETY NOTE**: All test seeds and private keys are publicly known test data. DO NOT use them for real funds.

---

## Deployment

### Method 1: Cloudflare Workers with Wrangler CLI (Recommended)

**Prerequisites:**
- A Cloudflare account
- Node.js and npm installed
- Project built (run `./build.sh`)

**Steps:**
```bash
# 1. Install Wrangler
npm install -g wrangler

# 2. Login to Cloudflare
wrangler login

# 3. Deploy
wrangler deploy
```

Wrangler will read `wrangler.toml`, upload the `web/` directory, deploy `worker.js`, and provide a URL like: `https://tos-paper-wallet.YOUR-SUBDOMAIN.workers.dev`

### Method 2: Cloudflare Workers via Dashboard

1. Build the project: `./build.sh`
2. Go to: https://dash.cloudflare.com/YOUR-ACCOUNT-ID/workers-and-pages/create/workers
3. Click **"Create Worker"**, name it `tos-paper-wallet`, click **"Deploy"**
4. Replace the default code with the contents of `worker.js`:
   ```javascript
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
5. Click **"Save and Deploy"**
6. In **"Settings"** → **"Bindings"**, add an **"Assets"** binding named `ASSETS`
7. Go to **"Assets"** tab, upload all files from `web/` directory (including `pkg/` folder contents)
8. Your wallet will be available at: `https://tos-paper-wallet.YOUR-SUBDOMAIN.workers.dev`

### Method 3: Cloudflare Pages

1. Visit: https://dash.cloudflare.com/YOUR-ACCOUNT-ID/pages
2. Click **"Create application"** → **"Upload assets"**
3. Select all files from `web/` directory, name it `tos-paper-wallet`
4. Click **"Deploy site"**
5. Your site will be at: `https://tos-paper-wallet.pages.dev`

**Note:** Pages doesn't need `worker.js` - it serves static files directly.

### Method 4: Other Static Hosts

- **GitHub Pages, Netlify, Vercel**, or traditional web servers can host the `web/` directory without modifications.

### Verify Deployment

After deployment, verify:
1. ✅ Page loads without errors
2. ✅ "Generate New Wallet" button works
3. ✅ QR codes appear
4. ✅ All themes work
5. ✅ Language switcher works
6. ✅ No network requests to external domains (check browser DevTools → Network tab)

### Custom Domain (Optional)

1. Go to your worker/page settings
2. Click **"Triggers"** → **"Custom Domains"**
3. Click **"Add Custom Domain"**
4. Enter your domain (e.g., `paperwallet.tos.network`)
5. Follow the DNS setup instructions

### Update Deployment

**Using Wrangler CLI:**
```bash
./build.sh
wrangler deploy
```

**Using Dashboard:**
1. Rebuild: `./build.sh`
2. Go to your worker/page in Cloudflare dashboard
3. Upload new files from `web/` directory
4. Click **"Deploy"**

### Troubleshooting

**Error: "env.ASSETS is undefined"**
- Make sure you've set up the Assets binding correctly in worker settings.

**Error: "Module not found"**
- Ensure all files from `web/pkg/` are uploaded: `tos_paper_wallet.js`, `tos_paper_wallet_bg.wasm`

**QR codes not showing**
- Make sure `qrcode.min.js` is uploaded and accessible.

**WASM loading error**
- Check that `tos_paper_wallet_bg.wasm` is uploaded
- Verify file path in `app.js` matches uploaded location
- Check browser console for error messages

### Cost

- **Cloudflare Workers Free Tier:** 100,000 requests/day
- **Cloudflare Pages Free Tier:** Unlimited requests, 500 builds/month

Both options are **free** for this use case! 🎉

---

## Security Notes
- **RNG source**: `OsRng` (browser WebCrypto on wasm32) with rejection sampling to avoid zero scalars
- **Public key**: `H * s` where `H` is the TOS signature generator point (`RistrettoPoint::hash_from_bytes::<Sha3_512>("TOS_SIGNATURE_GENERATOR_H")`)
- **Addresses**: 32-byte compressed key + address type serialized into Bech32 with HRPs `tos` (mainnet) / `tst` (testnet)
- **Mnemonics**: 24-word payload + checksum word using the canonical TOS word list (1,626 words) and CRC32 checksum
- **Regression testing**: 2 real wallet test vectors ensure ongoing compatibility with TOS wallet

---

## License
BSD 3-Clause. See `LICENSE`.
