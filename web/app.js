// TOS Wallet Application

let wasm = null;
let currentBundle = null;

const uiState = {
    asset: 'tos',
    secrets: {
        privateKey: false,
        seedPhrase: false,
    },
};

function getCurrentLanguage() {
    return localStorage.getItem('tos-wallet-language') || 'en';
}

function translate(key, fallback) {
    return window.translations?.[getCurrentLanguage()]?.[key] || fallback;
}

function getSelectedAssetType() {
    return document.querySelector('input[name="asset"]:checked')?.value || 'tos';
}

function getDisplayedWallet(bundle, assetType) {
    return assetType === 'uno' ? bundle.uno : bundle.tos;
}

function syncWalletLayoutState() {
    document.body.classList.toggle('wallet-material-visible', Boolean(currentBundle));
}

function setPrimaryGenerateButtonDisabled(disabled) {
    const button = document.getElementById('generateBtn');
    if (!button) {
        return;
    }

    button.disabled = disabled;
    button.setAttribute('aria-disabled', String(disabled));
}

function isPrimaryGenerateButtonDisabled() {
    const button = document.getElementById('generateBtn');
    return Boolean(button?.disabled);
}

function getAssetMeta(assetType) {
    if (assetType === 'uno') {
        return {
            label: translate('asset.uno', 'UNO'),
            description: translate('asset.uno.desc', 'Secret UNO Assets'),
            accent: 'uno',
        };
    }

    return {
        label: translate('asset.tos', 'TOS'),
        description: translate('asset.tos.desc', 'Normal TOS Assets'),
        accent: 'tos',
    };
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function buildLoadError(overlay, message) {
    clearElement(overlay);

    const wrapper = document.createElement('div');
    wrapper.style.textAlign = 'center';
    wrapper.style.padding = '40px';

    const icon = document.createElement('div');
    icon.style.fontSize = '3rem';
    icon.style.marginBottom = '20px';
    icon.textContent = '⚠️';

    const title = document.createElement('h2');
    title.style.marginBottom = '15px';
    title.textContent = 'Failed to Load WASM Module';

    const detail = document.createElement('p');
    detail.style.color = 'var(--text-secondary)';
    detail.style.marginBottom = '20px';
    detail.textContent = message;

    const hint = document.createElement('p');
    hint.style.color = 'var(--text-muted)';
    hint.style.fontSize = '0.9rem';
    hint.textContent = 'Please make sure the WASM files are built and available in the pkg/ directory.';

    wrapper.append(icon, title, detail, hint);
    overlay.appendChild(wrapper);
}

function renderBuildInfo() {
    const row = document.getElementById('buildInfoRow');
    const hash = document.getElementById('buildInfoHash');
    const buildInfo = window.buildInfo;

    if (!row || !hash || !buildInfo?.shortCommitHash) {
        row?.classList.add('hidden');
        return;
    }

    hash.textContent = buildInfo.shortCommitHash;
    hash.title = buildInfo.commitHash || buildInfo.shortCommitHash;
    row.classList.remove('hidden');
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
        const expanded = !menuContent.classList.contains('active');
        menuContent.classList.toggle('active');
        hamburgerBtn.setAttribute('aria-expanded', String(expanded));
    });

    document.addEventListener('click', (event) => {
        if (!menuContent.contains(event.target) && event.target !== hamburgerBtn) {
            menuContent.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
    });

    document.querySelectorAll('.theme-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            setTimeout(() => {
                menuContent.classList.remove('active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            }, 200);
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
        const expanded = !langDropdown.classList.contains('show');
        langDropdown.classList.toggle('show');
        langBtn.setAttribute('aria-expanded', String(expanded));
    });

    document.addEventListener('click', (event) => {
        if (!langDropdown.contains(event.target) && event.target !== langBtn) {
            langDropdown.classList.remove('show');
            langBtn.setAttribute('aria-expanded', 'false');
        }
    });

    langDropdown.addEventListener('click', () => {
        setTimeout(() => {
            langDropdown.classList.remove('show');
            langBtn.setAttribute('aria-expanded', 'false');
        }, 200);
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
        buildLoadError(overlay, error.message);
        return false;
    }
}

// ==================== Wallet Rendering ====================

function updateAssetPresentation(assetType) {
    uiState.asset = assetType;
    document.body.dataset.asset = assetType;

    const generateBtnLabel = document.querySelector('#generateBtn span');
    if (generateBtnLabel) {
        generateBtnLabel.textContent = translate('action.generate', 'Generate New Wallet');
    }
}

function resetSecretVisibility() {
    uiState.secrets.privateKey = false;
    uiState.secrets.seedPhrase = false;
}

function hideSensitiveData() {
    resetSecretVisibility();
    renderSensitiveSections();
}

function generateWallet(options = {}) {
    const { allowReplace = false } = options;

    if (!wasm) {
        showToast('WASM module not loaded yet', 'error');
        return;
    }

    const hadWalletBundle = Boolean(currentBundle);
    const wasPrimaryDisabled = isPrimaryGenerateButtonDisabled();

    if (hadWalletBundle && !allowReplace) {
        showToast(
            translate(
                'wallet.replace.use_secondary',
                'Use the lower Generate New Wallet button to confirm replacing the current wallet.',
            ),
            'info',
        );
        return;
    }

    try {
        setPrimaryGenerateButtonDisabled(true);
        currentBundle = wasm.generate_wallet_bundle();
        resetSecretVisibility();
        displayWallet(currentBundle, getSelectedAssetType());

        const assetMeta = getAssetMeta(getSelectedAssetType());
        showToast(`${assetMeta.label} wallet generated successfully.`, 'success');

        document.getElementById('walletDisplay').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    } catch (error) {
        setPrimaryGenerateButtonDisabled(wasPrimaryDisabled);
        console.error('Failed to generate wallet:', error);
        showToast(`Failed to generate wallet: ${error.message}`, 'error');
    }
}

function displayWallet(bundle, assetType) {
    const wallet = getDisplayedWallet(bundle, assetType);
    const assetMeta = getAssetMeta(assetType);
    const walletDisplay = document.getElementById('walletDisplay');
    const networkBadge = document.getElementById('networkBadge');
    const walletTitle = document.getElementById('walletTitle');
    const modeDescription = document.getElementById('modeDescription');

    walletDisplay.dataset.asset = assetType;
    networkBadge.dataset.asset = assetType;
    networkBadge.textContent = assetMeta.label;
    walletTitle.textContent = translate('wallet.header.materials', 'Your Wallet Material');
    modeDescription.textContent = assetMeta.description;

    document.getElementById('addressText').textContent = wallet.address;
    document.getElementById('publicKeyText').textContent = wallet.public_key;

    generateQRCode('addressQR', wallet.address);
    renderSensitiveSections();

    walletDisplay.classList.remove('hidden');
    syncWalletLayoutState();
}

function renderSensitiveSections() {
    renderPrivateKeySection();
    renderSeedPhraseSection();
}

function renderPrivateKeySection() {
    const hiddenPanel = document.getElementById('privateKeyHidden');
    const visiblePanel = document.getElementById('privateKeyVisible');
    const hint = document.getElementById('privateKeyHint');
    const toggleBtn = document.getElementById('togglePrivateKeyBtn');
    const privateKeyText = document.getElementById('privateKeyText');
    const qrContainer = document.getElementById('privateKeyQR');

    if (!currentBundle) {
        hiddenPanel.classList.remove('hidden');
        visiblePanel.classList.add('hidden');
        toggleBtn.disabled = true;
        toggleBtn.setAttribute('aria-expanded', 'false');
        privateKeyText.textContent = '';
        clearElement(qrContainer);
        return;
    }

    const wallet = getDisplayedWallet(currentBundle, getSelectedAssetType());
    const isVisible = uiState.secrets.privateKey;

    toggleBtn.disabled = false;
    toggleBtn.setAttribute('aria-expanded', String(isVisible));
    toggleBtn.querySelector('span').textContent = isVisible
        ? translate('action.hide_private', 'Hide Private Key')
        : translate('action.reveal_private', 'Reveal Private Key');

    hint.textContent = isVisible
        ? translate('secret.private.visible', 'Visible on screen. Hide it again before leaving this device unattended.')
        : translate('secret.private.hidden', 'Hidden by default. Reveal only when you are ready to back up or migrate this wallet.');

    hiddenPanel.classList.toggle('hidden', isVisible);
    visiblePanel.classList.toggle('hidden', !isVisible);

    if (isVisible) {
        privateKeyText.textContent = wallet.private_key;
        generateQRCode('privateKeyQR', wallet.private_key);
    } else {
        privateKeyText.textContent = '';
        clearElement(qrContainer);
    }
}

function renderSeedPhraseSection() {
    const hiddenPanel = document.getElementById('seedPhraseHidden');
    const visiblePanel = document.getElementById('seedPhraseVisible');
    const hint = document.getElementById('seedPhraseHint');
    const toggleBtn = document.getElementById('toggleSeedPhraseBtn');
    const seedWords = document.getElementById('seedWords');

    if (!currentBundle) {
        hiddenPanel.classList.remove('hidden');
        visiblePanel.classList.add('hidden');
        toggleBtn.disabled = true;
        toggleBtn.setAttribute('aria-expanded', 'false');
        clearElement(seedWords);
        return;
    }

    const isVisible = uiState.secrets.seedPhrase;

    toggleBtn.disabled = false;
    toggleBtn.setAttribute('aria-expanded', String(isVisible));
    toggleBtn.querySelector('span').textContent = isVisible
        ? translate('action.hide_seed', 'Hide Recovery Phrase')
        : translate('action.reveal_seed', 'Reveal Recovery Phrase');

    hint.textContent = isVisible
        ? translate('secret.seed.visible', 'Visible on screen. Make sure no camera or screen recording is active.')
        : translate('secret.seed.hidden', 'Hidden by default. Reveal only in a trusted offline environment.');

    hiddenPanel.classList.toggle('hidden', isVisible);
    visiblePanel.classList.toggle('hidden', !isVisible);

    if (isVisible) {
        renderSeedPhrase(seedWords, currentBundle.mnemonic);
    } else {
        clearElement(seedWords);
    }
}

function renderSeedPhrase(container, mnemonic) {
    clearElement(container);

    mnemonic.split(' ').forEach((word, index) => {
        const wordElement = document.createElement('div');
        wordElement.className = 'seed-word';

        const number = document.createElement('span');
        number.className = 'seed-word-number';
        number.textContent = String(index + 1);

        const text = document.createElement('span');
        text.className = 'seed-word-text';
        text.textContent = word;

        wordElement.append(number, text);
        container.appendChild(wordElement);
    });
}

function syncDisplayedWallet(resetSecrets = true) {
    const assetType = getSelectedAssetType();
    updateAssetPresentation(assetType);

    if (resetSecrets) {
        hideSensitiveData();
    }

    if (!currentBundle) {
        return;
    }

    displayWallet(currentBundle, assetType);
}

// ==================== QR Code Generation ====================

function generateQRCode(containerId, data) {
    const container = document.getElementById(containerId);

    if (!window.QRCode || !container) {
        return;
    }

    clearElement(container);

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

function getCopyValue(copyType) {
    if (!currentBundle) {
        return null;
    }

    const wallet = getDisplayedWallet(currentBundle, getSelectedAssetType());

    switch (copyType) {
        case 'address':
            return wallet.address;
        case 'public-key':
            return wallet.public_key;
        case 'private-key':
            return uiState.secrets.privateKey ? wallet.private_key : null;
        case 'seed':
            return uiState.secrets.seedPhrase ? currentBundle.mnemonic : null;
        default:
            return null;
    }
}

function setupCopyButtons() {
    document.querySelectorAll('.btn-copy').forEach((btn) => {
        btn.addEventListener('click', async () => {
            const copyType = btn.dataset.copy;
            const text = getCopyValue(copyType);

            if (!text) {
                showToast(
                    translate('secret.copy.blocked', 'Reveal sensitive material before copying it.'),
                    'error',
                );
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
        return translate('copy.seed.success', 'Recovery phrase copied. Clear your clipboard after use.');
    }
    if (copyType === 'public-key') {
        return translate('copy.public.success', 'Public key copied.');
    }
    if (copyType === 'private-key') {
        return translate('copy.private.success', 'Private key copied. Clear your clipboard after use.');
    }
    return translate('copy.address.success', 'Address copied.');
}

// ==================== Sensitive Controls ====================

function togglePrivateKey() {
    if (!currentBundle) {
        return;
    }

    uiState.secrets.privateKey = !uiState.secrets.privateKey;
    renderPrivateKeySection();
}

function toggleSeedPhrase() {
    if (!currentBundle) {
        return;
    }

    uiState.secrets.seedPhrase = !uiState.secrets.seedPhrase;
    renderSeedPhraseSection();
}

function setupSecretControls() {
    document.getElementById('togglePrivateKeyBtn').addEventListener('click', togglePrivateKey);
    document.getElementById('toggleSeedPhraseBtn').addEventListener('click', toggleSeedPhrase);
    document.getElementById('hideSecretsBtn').addEventListener('click', hideSensitiveData);
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

        const hiddenSecrets = !uiState.secrets.privateKey || !uiState.secrets.seedPhrase;
        if (hiddenSecrets) {
            const confirmed = window.confirm(
                translate(
                    'print.partial.confirm',
                    'Sensitive sections are still hidden and will not be included in the printed backup. Continue with the visible view only?',
                ),
            );

            if (!confirmed) {
                return;
            }
        }

        window.print();
    });
}

// ==================== Buttons ====================

function setupAssetSelector() {
    document.querySelectorAll('input[name="asset"]').forEach((radio) => {
        radio.addEventListener('change', () => {
            syncDisplayedWallet(true);
        });
    });
}

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
            generateWallet({ allowReplace: true });
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
    }, 3200);
}

// ==================== Security Warning ====================

function showSecurityWarning() {
    if (navigator.onLine) {
        console.warn('You are online. For maximum security, disconnect from the internet before generating wallets.');
        setTimeout(() => {
            showToast(
                translate('warning.online', 'You are online. Disconnect for maximum security.'),
                'error',
            );
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

        if (event.key === 'Escape') {
            hideSensitiveData();
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
    renderBuildInfo();
    updateAssetPresentation(getSelectedAssetType());
    showSecurityWarning();

    await waitForQRCode();
    const wasmLoaded = await initWasm();

    if (!wasmLoaded) {
        return;
    }

    setPrimaryGenerateButtonDisabled(false);
    setupAssetSelector();
    setupGenerateButton();
    setupCopyButtons();
    setupSecretControls();
    setupPrintButton();
    setupNewWalletButton();
    setupKeyboardShortcuts();
    setupScrollAnimations();
    renderSensitiveSections();
    syncWalletLayoutState();
}

window.refreshWalletLanguage = function refreshWalletLanguage() {
    updateAssetPresentation(getSelectedAssetType());
    if (currentBundle) {
        displayWallet(currentBundle, getSelectedAssetType());
    } else {
        renderSensitiveSections();
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

window.addEventListener('beforeunload', (event) => {
    const walletDisplay = document.getElementById('walletDisplay');
    if (walletDisplay && !walletDisplay.classList.contains('hidden')) {
        event.preventDefault();
        event.returnValue = '';
        return '';
    }
    return undefined;
});
