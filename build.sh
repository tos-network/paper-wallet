#!/bin/bash

# TOS Paper Wallet Build Script

set -e

echo "🚀 Building TOS Paper Wallet..."
echo ""

# Check if wasm-bindgen is installed
if ! command -v wasm-bindgen &> /dev/null; then
    echo "❌ Error: wasm-bindgen is not installed"
    echo "📦 Install it with: cargo install wasm-bindgen-cli --version 0.2.92"
    exit 1
fi

# Build WASM module
echo "🔨 Building WASM module..."
cargo build --target wasm32-unknown-unknown --release

echo ""
echo "🔧 Generating JavaScript bindings..."
wasm-bindgen --target web --out-dir web/pkg --no-typescript target/wasm32-unknown-unknown/release/tos_paper_wallet.wasm

echo ""
echo "✅ Build complete!"
echo ""
echo "📁 Output files:"
ls -lh web/pkg/
echo ""
echo "🌐 To run locally:"
echo "  cd web && python3 -m http.server 8000"
echo "  or"
echo "  cd web && npx serve"
echo ""
echo "Then open http://localhost:8000 in your browser"
echo ""
echo "🔒 For maximum security:"
echo "  1. Disconnect from the internet"
echo "  2. Serve the web/ directory over local HTTP on the offline machine"
echo "  3. Open the local http://127.0.0.1:<port> URL in your browser"
echo ""
