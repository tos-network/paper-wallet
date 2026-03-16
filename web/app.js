// TOS Wallet Application

let wasm = null;
let currentBundle = null;

function getCurrentLanguage() {
    return localStorage.getItem('tos-wallet-language') || 'en';
}

function translate(key, fallback) {
    return window.translations?.[getCurrentLanguage()]?.[key] || fallback;
}

function getSelectedAssetType() {
    return document.querySelector('input[name="asset"]:checked')?.value || 'tos';
}

function getAssetLabel(assetType) {
    return assetType === 'uno'
        ? translate('asset.uno', 'UNO')
        : translate('asset.tos', 'TOS');
}

function getDisplayedWallet(bundle, assetType) {
    return assetType === 'uno' ? bundle.uno : bundle.tos;
}

// ==================== Theme Management ====================

function initTheme() {
    const savedTheme = localStorage.getItem('tos-wallet-theme') || 'dark';
    setTheme(savedTheme);

    document.querySelectorAll('.theme-btn').forEach((btn) => {
        const theme = btn.dataset.theme;
        if (theme === savedTheme) {
            btn.classList.add('active');
        }

        btn.addEventListener('click', () => {
            setTheme(theme);
            document.querySelectorAll('.theme-btn').forEach((item) => item.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('tos-wallet-theme', theme);
}

// ==================== Hamburger Menu ====================

function initHamburgerMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const menuContent = document.getElementById('menuContent');

    if (!hamburgerBtn || !menuContent) {
        return;
    }

    hamburgerBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        menuContent.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!menuContent.contains(event.target) && event.target !== hamburgerBtn) {
            menuContent.classList.remove('active');
        }
    });

    document.querySelectorAll('.theme-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            setTimeout(() => menuContent.classList.remove('active'), 200);
        });
    });
}

// ==================== Language Selector ====================

function initLanguageSelector() {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');

    if (!langBtn || !langDropdown) {
        return;
    }

    langBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        langDropdown.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!langDropdown.contains(event.target) && event.target !== langBtn) {
            langDropdown.classList.remove('show');
        }
    });

    langDropdown.addEventListener('click', () => {
        setTimeout(() => langDropdown.classList.remove('show'), 200);
    });
}

// ==================== WASM Initialization ====================

async function initWasm() {
    const overlay = document.getElementById('loadingOverlay');

    try {
        wasm = await import('./pkg/tos_paper_wallet.js');
        await wasm.default();

        setTimeout(() => {
            overlay.classList.add('hidden');
        }, 500);

        return true;
    } catch (error) {
        console.error('Failed to load WASM module:', error);
        overlay.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <div style="font-size: 3rem; margin-bottom: 20px;">⚠️</div>
                <h2 style="margin-bottom: 15px;">Failed to Load WASM Module</h2>
                <p style="color: var(--text-secondary); margin-bottom: 20px;">
                    ${error.message}
                </p>
                <p style="color: var(--text-muted); font-size: 0.9rem;">
                    Please make sure the WASM files are built and available in the pkg/ directory.
                </p>
            </div>
        `;
        return false;
    }
}

// ==================== Wallet Generation ====================

function generateWallet() {
    if (!wasm) {
        showToast('WASM module not loaded yet', 'error');
        return;
    }

    try {
        currentBundle = wasm.generate_wallet_bundle();
        displayWallet(currentBundle, getSelectedAssetType());

        showToast(`${getAssetLabel(getSelectedAssetType())} wallet generated successfully!`, 'success');

        document.getElementById('walletDisplay').scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
        });
    } catch (error) {
        console.error('Failed to generate wallet:', error);
        showToast(`Failed to generate wallet: ${error.message}`, 'error');
    }
}

function displayWallet(bundle, assetType) {
    const wallet = getDisplayedWallet(bundle, assetType);
    const walletDisplay = document.getElementById('walletDisplay');
    const networkBadge = document.getElementById('networkBadge');
    const addressText = document.getElementById('addressText');
    const publicKeyText = document.getElementById('publicKeyText');
    const privateKeyText = document.getElementById('privateKeyText');
    const seedWordsContainer = document.getElementById('seedWords');

    networkBadge.dataset.asset = assetType;
    networkBadge.textContent = getAssetLabel(assetType);
    networkBadge.style.background = assetType === 'uno'
        ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)'
        : 'linear-gradient(135deg, #10b981, #059669)';

    addressText.textContent = wallet.address;
    publicKeyText.textContent = wallet.public_key;
    privateKeyText.textContent = wallet.private_key;

    renderSeedPhrase(seedWordsContainer, bundle.mnemonic);

    generateQRCode('addressQR', wallet.address);
    generateQRCode('privateKeyQR', wallet.private_key);

    walletDisplay.classList.remove('hidden');
}

function renderSeedPhrase(container, mnemonic) {
    const words = mnemonic.split(' ');
    container.innerHTML = '';

    words.forEach((word, index) => {
        const wordElement = document.createElement('div');
        wordElement.className = 'seed-word';
        wordElement.innerHTML = `
            <span class="seed-word-number">${index + 1}</span>
            <span class="seed-word-text">${word}</span>
        `;
        container.appendChild(wordElement);
    });

    container.dataset.seedPhrase = mnemonic;
}

function syncDisplayedWallet() {
    if (!currentBundle) {
        return;
    }

    displayWallet(currentBundle, getSelectedAssetType());
}

// ==================== QR Code Generation ====================

function generateQRCode(containerId, data) {
    const container = document.getElementById(containerId);

    if (!window.QRCode || !container) {
        return;
    }

    container.innerHTML = '';

    try {
        new window.QRCode(container, {
            text: data,
            width: 200,
            height: 200,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: window.QRCode.CorrectLevel.M,
        });
    } catch (error) {
        console.error('QR code generation failed:', error);
    }
}

// ==================== Copy to Clipboard ====================

function setupCopyButtons() {
    document.querySelectorAll('.btn-copy').forEach((btn) => {
        btn.addEventListener('click', async () => {
            const copyType = btn.dataset.copy;
            const sourceMap = {
                address: document.getElementById('addressText')?.textContent,
                'public-key': document.getElementById('publicKeyText')?.textContent,
                'private-key': document.getElementById('privateKeyText')?.textContent,
                seed: document.getElementById('seedWords')?.dataset.seedPhrase,
            };
            const text = sourceMap[copyType];

            if (!text) {
                showToast('Nothing to copy', 'error');
                return;
            }

            try {
                await navigator.clipboard.writeText(text);
                showToast(getCopySuccessMessage(copyType), 'success');
                btn.style.background = 'var(--success)';
                setTimeout(() => {
                    btn.style.background = '';
                }, 1000);
            } catch (error) {
                console.error('Failed to copy:', error);
                showToast('Failed to copy', 'error');
            }
        });
    });
}

function getCopySuccessMessage(copyType) {
    if (copyType === 'seed') {
        return translate('copy.seed.success', 'Recovery phrase copied!');
    }
    if (copyType === 'public-key') {
        return translate('copy.public.success', 'Public key copied!');
    }
    if (copyType === 'private-key') {
        return translate('copy.private.success', 'Private key copied!');
    }
    return translate('copy.address.success', 'Address copied!');
}

// ==================== Print Functionality ====================

function setupPrintButton() {
    const printBtn = document.getElementById('printBtn');
    if (!printBtn) {
        return;
    }

    printBtn.addEventListener('click', () => {
        const walletDisplay = document.getElementById('walletDisplay');
        if (walletDisplay.classList.contains('hidden')) {
            showToast('Please generate a wallet first', 'error');
            return;
        }
        window.print();
    });
}

// ==================== Asset Selector ====================

function setupAssetSelector() {
    document.querySelectorAll('input[name="asset"]').forEach((radio) => {
        radio.addEventListener('change', () => {
            syncDisplayedWallet();
        });
    });
}

// ==================== Buttons ====================

function setupGenerateButton() {
    document.getElementById('generateBtn').addEventListener('click', generateWallet);
}

function setupNewWalletButton() {
    const newWalletBtn = document.getElementById('newWalletBtn');
    if (!newWalletBtn) {
        return;
    }

    newWalletBtn.addEventListener('click', () => {
        const confirmMessage = translate(
            'wallet.replace.confirm',
            'Generate a new wallet bundle? The current wallet material will be replaced.',
        );

        if (window.confirm(confirmMessage)) {
            generateWallet();
        }
    });
}

// ==================== Toast Notifications ====================

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;

    if (type === 'success') {
        toast.style.borderLeft = '4px solid var(--success)';
    } else if (type === 'error') {
        toast.style.borderLeft = '4px solid var(--danger)';
    } else {
        toast.style.borderLeft = '4px solid var(--accent-primary)';
    }

    toast.classList.remove('hidden');

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// ==================== Security Warning ====================

function showSecurityWarning() {
    if (navigator.onLine) {
        console.warn('You are online. For maximum security, disconnect from the internet before generating wallets.');
        setTimeout(() => {
            showToast('You are online. Disconnect for maximum security.', 'error');
        }, 1000);
    }
}

// ==================== Keyboard Shortcuts ====================

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'g') {
            event.preventDefault();
            generateWallet();
        }
    });
}

// ==================== Animation on Scroll ====================

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    });

    document.querySelectorAll('.controls-card, .wallet-card').forEach((element) => {
        observer.observe(element);
    });
}

// ==================== Initialization ====================

function waitForQRCode() {
    return new Promise((resolve) => {
        if (window.QRCode) {
            resolve();
            return;
        }

        const checkInterval = setInterval(() => {
            if (window.QRCode) {
                clearInterval(checkInterval);
                resolve();
            }
        }, 50);

        setTimeout(() => {
            clearInterval(checkInterval);
            resolve();
        }, 5000);
    });
}

async function init() {
    initTheme();
    initHamburgerMenu();
    initLanguageSelector();
    showSecurityWarning();

    await waitForQRCode();
    const wasmLoaded = await initWasm();

    if (!wasmLoaded) {
        return;
    }

    setupAssetSelector();
    setupGenerateButton();
    setupCopyButtons();
    setupPrintButton();
    setupNewWalletButton();
    setupKeyboardShortcuts();
    setupScrollAnimations();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

window.addEventListener('beforeunload', (event) => {
    const walletDisplay = document.getElementById('walletDisplay');
    if (!walletDisplay.classList.contains('hidden')) {
        event.preventDefault();
        event.returnValue = '';
        return '';
    }
    return undefined;
});
