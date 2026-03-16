# verify

`verify` is a small Go helper used to cross-check wallet derivation against the local GTOS implementation.

## Purpose

This tool derives the same wallet bundle as the web wallet from a single BIP39 mnemonic:

- `TOS` plain wallet material
  - signer type: `secp256k1`
  - fields: `address`, `publicKey`, `privateKey`
- `UNO` privacy wallet material
  - signer type: `elgamal`
  - fields: `address`, `publicKey`, `privateKey`

It is intended for verification and debugging. It is not a user-facing wallet tool.

## What It Verifies

The tool uses the GTOS Go code paths and outputs a JSON bundle containing:

- `mnemonic`
- `hdPath`
- `tos`
- `uno`

This makes it useful for checking that the Rust/WASM wallet in this repository derives the same values as the Go implementation in `~/gtos`.

## Requirements

The local `go.mod` file points to these local repositories:

- `~/gtos`
- `~/tolang`

If those paths are moved, update the `replace` directives in [go.mod](/Users/tomisetsu/paper-wallet/tools/verify/go.mod).

## Usage

Run the tool from this directory:

```bash
GOTOOLCHAIN=auto go run . "<24-word mnemonic>"
```

Example:

```bash
GOTOOLCHAIN=auto go run . "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon art"
```

The command prints a JSON object with the derived `TOS` and `UNO` wallet material.
