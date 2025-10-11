// TOS Paper Wallet Application

let wasm = null;

// ==================== Theme Management ====================

function initTheme() {
    // Load saved theme or default to 'dark'
    const savedTheme = localStorage.getItem('tos-wallet-theme') || 'dark';
    setTheme(savedTheme);

    // Setup theme buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        const theme = btn.dataset.theme;

        // Set active state
        if (theme === savedTheme) {
            btn.classList.add('active');
        }

        // Add click handler
        btn.addEventListener('click', () => {
            setTheme(theme);

            // Update active state
            document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
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

    if (!hamburgerBtn || !menuContent) return;

    // Toggle menu on button click
    hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        menuContent.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuContent.contains(e.target) && e.target !== hamburgerBtn) {
            menuContent.classList.remove('active');
        }
    });

    // Close menu when selecting a theme
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setTimeout(() => {
                menuContent.classList.remove('active');
            }, 200);
        });
    });
}

// ==================== Language Selector ====================

function initLanguageSelector() {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');

    if (!langBtn || !langDropdown) return;

    // Toggle dropdown on button click
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!langDropdown.contains(e.target) && e.target !== langBtn) {
            langDropdown.classList.remove('show');
        }
    });

    // Close dropdown when selecting a language (handled by i18n.js)
    langDropdown.addEventListener('click', () => {
        setTimeout(() => {
            langDropdown.classList.remove('show');
        }, 200);
    });
}

// ==================== WASM Initialization ====================

async function initWasm() {
    const overlay = document.getElementById('loadingOverlay');

    try {
        // Import WASM module
        wasm = await import('./pkg/tos_paper_wallet.js');
        await wasm.default();

        console.log('✅ WASM module loaded successfully');

        // Hide loading overlay
        setTimeout(() => {
            overlay.classList.add('hidden');
        }, 500);

        return true;
    } catch (error) {
        console.error('❌ Failed to load WASM module:', error);
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
        // Get selected network
        const networkRadio = document.querySelector('input[name="network"]:checked');
        const isMainnet = networkRadio.value === 'mainnet';

        // Generate wallet using WASM
        const wallet = wasm.generate_wallet(isMainnet);

        // Display wallet
        displayWallet(wallet);

        // Show success message
        showToast(`${wallet.network} wallet generated successfully!`, 'success');

        // Scroll to wallet display
        document.getElementById('walletDisplay').scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });

    } catch (error) {
        console.error('Failed to generate wallet:', error);
        showToast('Failed to generate wallet: ' + error.message, 'error');
    }
}

function displayWallet(wallet) {
    const walletDisplay = document.getElementById('walletDisplay');
    const addressText = document.getElementById('addressText');
    const privateKeyText = document.getElementById('privateKeyText');
    const seedWordsContainer = document.getElementById('seedWords');
    const networkBadge = document.getElementById('networkBadge');

    // Set network badge with translation
    const currentLang = localStorage.getItem('tos-wallet-language') || 'en';
    const isMainnet = wallet.network === 'Mainnet';

    // Store network type for language switching
    networkBadge.dataset.network = isMainnet ? 'mainnet' : 'testnet';

    // Get translated network name from i18n
    if (window.translations && window.translations[currentLang]) {
        networkBadge.textContent = isMainnet
            ? window.translations[currentLang]['network.mainnet']
            : window.translations[currentLang]['network.testnet'];
    } else {
        networkBadge.textContent = wallet.network;
    }

    networkBadge.style.background = isMainnet
        ? 'linear-gradient(135deg, #ef4444, #dc2626)'
        : 'linear-gradient(135deg, #3b82f6, #2563eb)';

    // Display address and private key
    addressText.textContent = wallet.address;
    privateKeyText.textContent = wallet.private_key;

    // Display seed phrase (25 words)
    const words = wallet.seed_phrase.split(' ');
    seedWordsContainer.innerHTML = '';
    words.forEach((word, index) => {
        const wordElement = document.createElement('div');
        wordElement.className = 'seed-word';
        wordElement.innerHTML = `
            <span class="seed-word-number">${index + 1}</span>
            <span class="seed-word-text">${word}</span>
        `;
        seedWordsContainer.appendChild(wordElement);
    });

    // Store seed phrase for copying
    seedWordsContainer.dataset.seedPhrase = wallet.seed_phrase;

    // Generate QR codes
    generateQRCode('addressQR', wallet.address);
    generateQRCode('privateKeyQR', wallet.private_key);

    // Show wallet display
    walletDisplay.classList.remove('hidden');
}

// ==================== QR Code Generation ====================

function generateQRCode(canvasId, data) {
    const canvas = document.getElementById(canvasId);

    // Access QRCode from global window scope
    if (!window.QRCode) {
        console.error('QRCode library not loaded');
        return;
    }

    // Clear any existing QR code
    canvas.innerHTML = '';

    // Create QR code using the constructor-based API
    try {
        new window.QRCode(canvas, {
            text: data,
            width: 200,
            height: 200,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: window.QRCode.CorrectLevel.M
        });
    } catch (error) {
        console.error('QR code generation failed:', error);
    }
}

// ==================== Copy to Clipboard ====================

function setupCopyButtons() {
    document.querySelectorAll('.btn-copy').forEach(btn => {
        btn.addEventListener('click', () => {
            const copyType = btn.dataset.copy;
            let text;

            if (copyType === 'address') {
                text = document.getElementById('addressText').textContent;
            } else if (copyType === 'private-key') {
                text = document.getElementById('privateKeyText').textContent;
            } else if (copyType === 'seed') {
                text = document.getElementById('seedWords').dataset.seedPhrase;
            }

            if (!text) {
                showToast('Nothing to copy', 'error');
                return;
            }

            // Copy to clipboard
            navigator.clipboard.writeText(text).then(() => {
                showToast(copyType === 'seed' ? 'All 25 words copied!' : 'Copied to clipboard!', 'success');

                // Visual feedback
                btn.style.background = 'var(--success)';
                setTimeout(() => {
                    btn.style.background = '';
                }, 1000);
            }).catch(err => {
                console.error('Failed to copy:', err);
                showToast('Failed to copy', 'error');
            });
        });
    });
}

// ==================== Print Functionality ====================

function setupPrintButton() {
    document.getElementById('printBtn').addEventListener('click', () => {
        // Check if wallet is generated
        const walletDisplay = document.getElementById('walletDisplay');
        if (walletDisplay.classList.contains('hidden')) {
            showToast('Please generate a wallet first', 'error');
            return;
        }

        // Print
        window.print();
    });
}

// ==================== New Wallet Button ====================

function setupNewWalletButton() {
    document.getElementById('newWalletBtn').addEventListener('click', () => {
        const confirmMsg = 'Generate a new wallet? The current wallet will be replaced.';

        if (confirm(confirmMsg)) {
            generateWallet();
        }
    });
}

// ==================== Generate Button ====================

function setupGenerateButton() {
    document.getElementById('generateBtn').addEventListener('click', () => {
        generateWallet();
    });
}

// ==================== Toast Notifications ====================

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');

    // Set message
    toast.textContent = message;

    // Set color based on type
    if (type === 'success') {
        toast.style.borderLeft = '4px solid var(--success)';
    } else if (type === 'error') {
        toast.style.borderLeft = '4px solid var(--danger)';
    } else {
        toast.style.borderLeft = '4px solid var(--accent-primary)';
    }

    // Show toast
    toast.classList.remove('hidden');

    // Auto hide after 3 seconds
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// ==================== Security Warning ====================

function showSecurityWarning() {
    // Check if online
    if (navigator.onLine) {
        console.warn('%c⚠️ SECURITY WARNING', 'color: #f59e0b; font-size: 20px; font-weight: bold;');
        console.warn('You are ONLINE. For maximum security, disconnect from the internet before generating wallets.');
        console.warn('Never share your private key with anyone.');

        // Show warning toast
        setTimeout(() => {
            showToast('⚠️ You are online! Disconnect for maximum security', 'error');
        }, 1000);
    } else {
        console.log('%c✅ OFFLINE MODE', 'color: #10b981; font-size: 20px; font-weight: bold;');
        console.log('Good! You are offline. This is the safest way to generate wallets.');
    }
}

// ==================== Keyboard Shortcuts ====================

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + G: Generate wallet
        if ((e.ctrlKey || e.metaKey) && e.key === 'g') {
            e.preventDefault();
            const walletDisplay = document.getElementById('walletDisplay');
            if (walletDisplay.classList.contains('hidden')) {
                document.getElementById('generateBtn').click();
            } else {
                document.getElementById('newWalletBtn').click();
            }
        }

        // Ctrl/Cmd + P: Print wallet
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            const walletDisplay = document.getElementById('walletDisplay');
            if (!walletDisplay.classList.contains('hidden')) {
                // Let default print behavior happen
            }
        }
    });
}

// ==================== Animation on Scroll ====================

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.controls-card, .wallet-card').forEach(el => {
        observer.observe(el);
    });
}

// ==================== Initialization ====================

// Wait for QRCode library to load
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

        // Timeout after 5 seconds
        setTimeout(() => {
            clearInterval(checkInterval);
            console.warn('QRCode library load timeout');
            resolve();
        }, 5000);
    });
}

async function init() {
    console.log('%cTOS Paper Wallet', 'color: #3b82f6; font-size: 24px; font-weight: bold;');
    console.log('Initializing...');

    // Initialize theme
    initTheme();

    // Initialize hamburger menu
    initHamburgerMenu();

    // Initialize language selector
    initLanguageSelector();

    // Show security warning
    showSecurityWarning();

    // Wait for QRCode library
    await waitForQRCode();
    if (window.QRCode) {
        console.log('✅ QRCode library loaded');
    }

    // Initialize WASM
    const wasmLoaded = await initWasm();

    if (wasmLoaded) {
        // Setup event listeners
        setupGenerateButton();
        setupCopyButtons();
        setupPrintButton();
        setupNewWalletButton();
        setupKeyboardShortcuts();
        setupScrollAnimations();

        console.log('✅ Application initialized successfully');
        console.log('Keyboard shortcuts:');
        console.log('  Ctrl/Cmd + G: Generate wallet');
        console.log('  Ctrl/Cmd + P: Print wallet');
    }
}

// Start application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Prevent accidental page unload if wallet is displayed
window.addEventListener('beforeunload', (e) => {
    const walletDisplay = document.getElementById('walletDisplay');
    if (!walletDisplay.classList.contains('hidden')) {
        e.preventDefault();
        e.returnValue = '';
        return '';
    }
});
