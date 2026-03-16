package main

import (
	"crypto/ecdsa"
	"crypto/hmac"
	"crypto/sha512"
	"encoding/binary"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"math/big"
	"os"

	"github.com/tos-network/gtos/accounts"
	"github.com/tos-network/gtos/accountsigner"
	"github.com/tos-network/gtos/crypto"
	"github.com/tos-network/gtos/crypto/ristretto255"
	"github.com/tyler-smith/go-bip39"
)

const (
	defaultHDPath    = "m/44'/60'/0'/0/0"
	hdHardenedOffset = uint32(0x80000000)
)

type walletEntry struct {
	Label      string `json:"label"`
	SignerType string `json:"signerType"`
	Address    string `json:"address"`
	PublicKey  string `json:"publicKey"`
	PrivateKey string `json:"privateKey"`
}

type walletBundle struct {
	Mnemonic string      `json:"mnemonic"`
	HDPath   string      `json:"hdPath"`
	TOS      walletEntry `json:"tos"`
	UNO      walletEntry `json:"uno"`
}

func main() {
	if len(os.Args) != 2 {
		fmt.Fprintln(os.Stderr, "usage: verify '<mnemonic>'")
		os.Exit(1)
	}

	mnemonic := os.Args[1]
	seed, err := bip39.NewSeedWithErrorChecking(mnemonic, "")
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}

	tosPriv, err := deriveECDSAFromSeed(seed, defaultHDPath)
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
	tosPub := crypto.FromECDSAPub(&tosPriv.PublicKey)

	unoPriv, err := deriveElgamalPrivateFromSeed(seed, defaultHDPath)
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
	unoPub, err := accountsigner.PublicKeyFromElgamalPrivate(unoPriv)
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
	unoAddress, err := accountsigner.AddressFromSigner(accountsigner.SignerTypeElgamal, unoPub)
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}

	out := walletBundle{
		Mnemonic: mnemonic,
		HDPath:   defaultHDPath,
		TOS: walletEntry{
			Label:      "TOS",
			SignerType: accountsigner.SignerTypeSecp256k1,
			Address:    crypto.PubkeyToAddress(tosPriv.PublicKey).Hex(),
			PublicKey:  hex.EncodeToString(tosPub),
			PrivateKey: hex.EncodeToString(crypto.FromECDSA(tosPriv)),
		},
		UNO: walletEntry{
			Label:      "UNO",
			SignerType: accountsigner.SignerTypeElgamal,
			Address:    unoAddress.Hex(),
			PublicKey:  hex.EncodeToString(unoPub),
			PrivateKey: hex.EncodeToString(unoPriv),
		},
	}

	encoder := json.NewEncoder(os.Stdout)
	encoder.SetIndent("", "  ")
	if err := encoder.Encode(out); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}

func deriveECDSAFromSeed(seed []byte, derivationPath string) (*ecdsa.PrivateKey, error) {
	path, err := accounts.ParseDerivationPath(derivationPath)
	if err != nil {
		return nil, fmt.Errorf("invalid hd path %q: %w", derivationPath, err)
	}
	key, chainCode, err := deriveBIP32Master(seed)
	if err != nil {
		return nil, err
	}
	for _, index := range path {
		key, chainCode, err = deriveBIP32Child(key, chainCode, index)
		if err != nil {
			return nil, err
		}
	}
	return crypto.ToECDSA(key)
}

func deriveElgamalPrivateFromSeed(seed []byte, derivationPath string) ([]byte, error) {
	if _, err := accounts.ParseDerivationPath(derivationPath); err != nil {
		return nil, fmt.Errorf("invalid hd path %q: %w", derivationPath, err)
	}
	zero := ristretto255.NewScalar()
	for counter := uint32(0); counter < 1024; counter++ {
		mac := hmac.New(sha512.New, []byte("GTOS_ELGAMAL_DERIVE"))
		mac.Write(seed)
		mac.Write([]byte{0})
		mac.Write([]byte(derivationPath))
		var ctr [4]byte
		binary.BigEndian.PutUint32(ctr[:], counter)
		mac.Write(ctr[:])
		digest := mac.Sum(nil)
		scalar := ristretto255.NewScalar()
		if _, err := scalar.SetUniformBytes(digest); err != nil {
			return nil, err
		}
		if scalar.Equal(zero) == 1 {
			continue
		}
		priv := scalar.Bytes()
		if _, err := accountsigner.PublicKeyFromElgamalPrivate(priv); err == nil {
			return priv, nil
		}
	}
	return nil, fmt.Errorf("failed to derive valid elgamal private key")
}

func deriveBIP32Master(seed []byte) ([]byte, []byte, error) {
	mac := hmac.New(sha512.New, []byte("Bitcoin seed"))
	if _, err := mac.Write(seed); err != nil {
		return nil, nil, err
	}
	sum := mac.Sum(nil)
	key := make([]byte, 32)
	chainCode := make([]byte, 32)
	copy(key, sum[:32])
	copy(chainCode, sum[32:])
	if err := validateBIP32Scalar(key); err != nil {
		return nil, nil, fmt.Errorf("invalid bip32 master key: %w", err)
	}
	return key, chainCode, nil
}

func deriveBIP32Child(parentKey []byte, parentChainCode []byte, index uint32) ([]byte, []byte, error) {
	if len(parentKey) != 32 || len(parentChainCode) != 32 {
		return nil, nil, fmt.Errorf("invalid bip32 parent key material")
	}

	data := make([]byte, 37)
	if index >= hdHardenedOffset {
		data[0] = 0x00
		copy(data[1:33], parentKey)
	} else {
		priv, err := crypto.ToECDSA(parentKey)
		if err != nil {
			return nil, nil, err
		}
		copy(data[:33], crypto.CompressPubkey(&priv.PublicKey))
	}
	binary.BigEndian.PutUint32(data[33:], index)

	mac := hmac.New(sha512.New, parentChainCode)
	if _, err := mac.Write(data); err != nil {
		return nil, nil, err
	}
	sum := mac.Sum(nil)
	il := sum[:32]
	ir := sum[32:]

	curveN := crypto.S256().Params().N
	ilInt := new(big.Int).SetBytes(il)
	if ilInt.Sign() == 0 || ilInt.Cmp(curveN) >= 0 {
		return nil, nil, fmt.Errorf("invalid bip32 child scalar")
	}
	parentInt := new(big.Int).SetBytes(parentKey)
	childInt := new(big.Int).Add(ilInt, parentInt)
	childInt.Mod(childInt, curveN)
	if childInt.Sign() == 0 {
		return nil, nil, fmt.Errorf("invalid bip32 child key: zero")
	}

	childKey := make([]byte, 32)
	childBytes := childInt.Bytes()
	copy(childKey[32-len(childBytes):], childBytes)
	childChainCode := make([]byte, 32)
	copy(childChainCode, ir)
	return childKey, childChainCode, nil
}

func validateBIP32Scalar(key []byte) error {
	if len(key) != 32 {
		return fmt.Errorf("invalid scalar length %d", len(key))
	}
	curveN := crypto.S256().Params().N
	value := new(big.Int).SetBytes(key)
	if value.Sign() == 0 || value.Cmp(curveN) >= 0 {
		return fmt.Errorf("scalar out of range")
	}
	return nil
}
