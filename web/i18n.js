// TOS Wallet - Multilingual translation system
// Export translations to window for access from other scripts
window.translations = window.translations || {};

const translations = {
  en: {
    // Header
    'app.title': 'TOS Wallet',
    'app.subtitle': 'Generate offline TOS and UNO wallet material from one recovery phrase',

    // Asset Selection
    'asset.legend': 'Wallet Mode',
    'asset.heading': 'Choose What You Want To Generate',
    'asset.helper': 'One 24-word recovery phrase controls both the TOS wallet and the UNO privacy wallet.',
    'asset.tos': 'TOS',
    'asset.uno': 'UNO',
    'asset.tos.chip': 'Normal',
    'asset.uno.chip': 'Privacy',
    'asset.tos.desc': 'Normal TOS Assets',
    'asset.uno.desc': 'Secret UNO Assets',

    // Themes
    'theme.label': 'Theme',
    'theme.dark': 'Dark',
    'theme.light': 'Light',
    'theme.tos': 'TOS',
    'theme.purple': 'Purple',
    'theme.ocean': 'Ocean',

    // Actions
    'action.generate': 'Generate New Wallet',
    'action.print': 'Print Wallet',
    'action.print_visible': 'Print Visible View',
    'action.hide_all': 'Hide Sensitive Data',
    'action.reveal_private': 'Reveal Private Key',
    'action.hide_private': 'Hide Private Key',
    'action.reveal_seed': 'Reveal Recovery Phrase',
    'action.hide_seed': 'Hide Recovery Phrase',

    // Wallet Sections
    'wallet.header.kicker': 'Active Wallet Mode',
    'wallet.header.materials': 'Your Wallet Material',
    'wallet.address.title': 'Public Address',
    'wallet.address.generic_desc': 'Share this address to receive assets',
    'wallet.publickey.title': 'Public Key',
    'wallet.publickey.desc': 'Signer public key derived from the selected wallet mode',
    'wallet.privatekey.title': 'Private Key',
    'wallet.privatekey.generic_desc': 'Never share this key. It controls the selected wallet.',
    'wallet.seed24.title': 'Recovery Phrase (24 Words)',
    'wallet.seed24.desc': 'Write this down once. It derives both TOS and UNO wallet material.',

    // Copy Actions
    'copy.button': 'Copy',
    'copy.words': 'Copy All Words',
    'copy.success': 'Copied!',
    'copy.address.success': 'Address copied!',
    'copy.public.success': 'Public key copied!',
    'copy.private.success': 'Private key copied. Clear your clipboard after use.',
    'copy.seed.success': 'Recovery phrase copied. Clear your clipboard after use.',

    // Security Warning
    'warning.security.title': 'Security First',
    'warning.security.item1': 'Run this tool on an <strong>offline computer</strong> for maximum security',
    'warning.security.item2': 'Never share your private key with anyone',
    'warning.security.item3': 'Print and store your wallet in a safe location',
    'warning.security.item4': 'Make multiple copies and store separately',
    'warning.online': 'You are online. Disconnect for maximum security.',

    // Secret Handling
    'secret.hidden.title': 'Sensitive Material Hidden',
    'secret.hidden.private': 'The private key QR code and raw key will stay out of the page until you explicitly reveal them.',
    'secret.hidden.seed': 'The recovery phrase is not written into the page until you explicitly reveal it.',
    'secret.private.hidden': 'Hidden by default. Reveal only when you are ready to back up or migrate this wallet.',
    'secret.private.visible': 'Visible on screen. Hide it again before leaving this device unattended.',
    'secret.seed.hidden': 'Hidden by default. Reveal only in a trusted offline environment.',
    'secret.seed.visible': 'Visible on screen. Make sure no camera or screen recording is active.',
    'secret.confirm.private': 'Revealing the private key will expose it on screen. Continue?',
    'secret.confirm.seed': 'Revealing the recovery phrase will expose it on screen. Continue?',
    'secret.copy.blocked': 'Reveal sensitive material before copying it.',
    'print.partial.confirm': 'Sensitive sections are still hidden and will not be included in the printed backup. Continue with the visible view only?',

    // Footer
    'footer.text': 'TOS Wallet Material Generator • Open Source • Offline Capable',
    'footer.security': 'Always verify the source code and run offline for maximum security',

    // Loading
    'loading.text': 'Loading cryptographic module...',

    // Language
    'lang.name': '🇺🇸 English',
    'lang.label': 'Language',
    'wallet.replace.confirm': 'Generate a new wallet bundle? The current wallet material will be replaced.',
    'wallet.replace.use_secondary': 'Use the lower Generate New Wallet button to confirm replacing the current wallet.'
  },

  zh: {
    // Header
    'app.title': 'TOS 钱包',
    'app.subtitle': '用一套恢复短语离线生成 TOS 与 UNO 钱包资料',

    // Asset Selection
    'asset.legend': '钱包模式',
    'asset.heading': '选择你要生成的钱包模式',
    'asset.helper': '一套 24 个单词的恢复短语会同时控制 TOS 明文钱包和 UNO 隐私钱包。',
    'asset.tos': 'TOS',
    'asset.uno': 'UNO',
    'asset.tos.chip': '明文',
    'asset.uno.chip': '隐私',
    'asset.tos.desc': 'Normal TOS Assets',
    'asset.uno.desc': 'Secret UNO Assets',

    // Themes
    'theme.label': '主题',
    'theme.dark': '暗黑',
    'theme.light': '明亮',
    'theme.tos': 'TOS',
    'theme.purple': '紫色',
    'theme.ocean': '海洋',

    // Actions
    'action.generate': '生成新钱包',
    'action.print': '打印钱包',
    'action.print_visible': '打印当前可见内容',
    'action.hide_all': '隐藏敏感数据',
    'action.reveal_private': '显示私钥',
    'action.hide_private': '隐藏私钥',
    'action.reveal_seed': '显示恢复短语',
    'action.hide_seed': '隐藏恢复短语',

    // Wallet Sections
    'wallet.header.kicker': '当前钱包模式',
    'wallet.header.materials': '钱包资料',
    'wallet.address.title': '公开地址',
    'wallet.address.generic_desc': '分享这个地址即可接收资产',
    'wallet.publickey.title': '公钥',
    'wallet.publickey.desc': '当前钱包模式对应的签名公钥',
    'wallet.privatekey.title': '私钥',
    'wallet.privatekey.generic_desc': '不要分享这个私钥。它控制当前钱包。',
    'wallet.seed24.title': '恢复短语（24个单词）',
    'wallet.seed24.desc': '只需记录这一套恢复短语。它会同时派生 TOS 和 UNO 钱包资料。',

    // Copy Actions
    'copy.button': '复制',
    'copy.words': '复制所有单词',
    'copy.success': '已复制！',
    'copy.address.success': '地址已复制！',
    'copy.public.success': '公钥已复制！',
    'copy.private.success': '私钥已复制，请尽快清空剪贴板。',
    'copy.seed.success': '恢复短语已复制，请尽快清空剪贴板。',

    // Security Warning
    'warning.security.title': '安全第一',
    'warning.security.item1': '为获得最大安全性，请在<strong>离线计算机</strong>上运行此工具',
    'warning.security.item2': '永远不要与任何人分享您的私钥',
    'warning.security.item3': '打印并将您的钱包存放在安全的位置',
    'warning.security.item4': '制作多份副本并分别存储',
    'warning.online': '你当前在线。为了最高安全性，请先断网。',

    // Secret Handling
    'secret.hidden.title': '敏感资料已隐藏',
    'secret.hidden.private': '私钥二维码和原始私钥在你明确点击显示之前不会进入页面。',
    'secret.hidden.seed': '恢复短语在你明确点击显示之前不会写入页面。',
    'secret.private.hidden': '默认隐藏。只有在你准备备份或迁移钱包时再显示。',
    'secret.private.visible': '当前已显示在屏幕上。离开设备前请重新隐藏。',
    'secret.seed.hidden': '默认隐藏。只应在可信的离线环境中显示。',
    'secret.seed.visible': '当前已显示在屏幕上。请确认没有摄像头或录屏在工作。',
    'secret.confirm.private': '显示私钥会把它暴露在屏幕上，是否继续？',
    'secret.confirm.seed': '显示恢复短语会把它暴露在屏幕上，是否继续？',
    'secret.copy.blocked': '请先显示敏感资料，再执行复制。',
    'print.partial.confirm': '敏感内容仍然处于隐藏状态，本次打印不会包含完整备份。是否继续只打印当前可见内容？',

    // Footer
    'footer.text': 'TOS 钱包资料生成器 • 开源 • 可离线使用',
    'footer.security': '始终验证源代码并离线运行以获得最大安全性',

    // Loading
    'loading.text': '正在加载加密模块...',

    // Language
    'lang.name': '🇨🇳 中文',
    'lang.label': '语言',
    'wallet.replace.confirm': '要生成新的钱包资料吗？当前显示的资料会被替换。',
    'wallet.replace.use_secondary': '如需替换当前钱包，请使用下方的“生成新钱包”按钮并完成确认。'
  },

  ja: {
    // Header
    'app.title': 'TOS ペーパーウォレット',
    'app.subtitle': 'TOSネットワーク用の安全なオフラインウォレットを生成',

    // Network Selection
    'network.label': 'ネットワーク選択',
    'network.mainnet': 'メインネット',
    'network.testnet': 'テストネット',
    'network.mainnet.desc': '実際のTOSネットワーク',
    'network.testnet.desc': 'テスト用',

    // Themes
    'theme.label': 'テーマ',
    'theme.dark': 'ダーク',
    'theme.light': 'ライト',
    'theme.tos': 'TOS',
    'theme.purple': 'パープル',
    'theme.ocean': 'オーシャン',

    // Actions
    'action.generate': '新しいウォレットを生成',
    'action.print': 'ウォレットを印刷',

    // Wallet Sections
    'wallet.address.title': '公開アドレス',
    'wallet.address.desc': 'TOSを受け取るためにこれを共有',
    'wallet.privatekey.title': '秘密鍵',
    'wallet.privatekey.desc': '絶対に共有しないでください！資金の使用に必要',
    'wallet.seed.title': 'シードフレーズ（25単語）',
    'wallet.seed.desc': '書き留めてください！ウォレットを復元できます',

    // Copy Actions
    'copy.button': 'コピー',
    'copy.words': 'すべての単語をコピー',
    'copy.success': 'コピーしました！',

    // Security Warning
    'warning.security.title': 'セキュリティ第一',
    'warning.security.item1': '最大限のセキュリティのため、このツールを<strong>オフラインコンピュータ</strong>で実行してください',
    'warning.security.item2': '絶対に秘密鍵を誰とも共有しないでください',
    'warning.security.item3': 'ウォレットを印刷し、安全な場所に保管してください',
    'warning.security.item4': '複数のコピーを作成し、別々に保管してください',

    // Footer
    'footer.text': 'TOS ペーパーウォレットジェネレーター • オープンソース • オフライン対応',
    'footer.security': '常にソースコードを確認し、最大限のセキュリティのためオフラインで実行してください',

    // Loading
    'loading.text': '暗号化モジュールを読み込んでいます...',

    // Wallet Header
    'wallet.header': 'あなたのペーパーウォレット',

    // Language
    'lang.name': '🇯🇵 日本語',
    'lang.label': '言語'
  },

  ko: {
    // Header
    'app.title': 'TOS 페이퍼 월렛',
    'app.subtitle': 'TOS 네트워크를 위한 안전한 오프라인 지갑 생성',

    // Network Selection
    'network.label': '네트워크 선택',
    'network.mainnet': '메인넷',
    'network.testnet': '테스트넷',
    'network.mainnet.desc': '실제 TOS 네트워크',
    'network.testnet.desc': '테스트 목적',

    // Themes
    'theme.label': '테마',
    'theme.dark': '다크',
    'theme.light': '라이트',
    'theme.tos': 'TOS',
    'theme.purple': '퍼플',
    'theme.ocean': '오션',

    // Actions
    'action.generate': '새 지갑 생성',
    'action.print': '지갑 인쇄',

    // Wallet Sections
    'wallet.address.title': '공개 주소',
    'wallet.address.desc': 'TOS를 받으려면 이것을 공유하세요',
    'wallet.privatekey.title': '개인 키',
    'wallet.privatekey.desc': '절대 공유하지 마세요! 자금 사용에 필요합니다',
    'wallet.seed.title': '시드 문구 (25 단어)',
    'wallet.seed.desc': '적어두세요! 지갑을 복원할 수 있습니다',

    // Copy Actions
    'copy.button': '복사',
    'copy.words': '모든 단어 복사',
    'copy.success': '복사되었습니다!',

    // Security Warning
    'warning.security.title': '보안 우선',
    'warning.security.item1': '최대 보안을 위해 이 도구를 <strong>오프라인 컴퓨터</strong>에서 실행하세요',
    'warning.security.item2': '절대 개인 키를 다른 사람과 공유하지 마세요',
    'warning.security.item3': '지갑을 인쇄하여 안전한 장소에 보관하세요',
    'warning.security.item4': '여러 복사본을 만들어 따로 보관하세요',

    // Footer
    'footer.text': 'TOS 페이퍼 월렛 생성기 • 오픈소스 • 오프라인 가능',
    'footer.security': '항상 소스 코드를 확인하고 최대 보안을 위해 오프라인에서 실행하세요',

    // Loading
    'loading.text': '암호화 모듈 로딩 중...',

    // Wallet Header
    'wallet.header': '당신의 페이퍼 월렛',

    // Language
    'lang.name': '🇰🇷 한국어',
    'lang.label': '언어'
  },

  ar: {
    // Header
    'app.title': 'محفظة TOS الورقية',
    'app.subtitle': 'إنشاء محافظ آمنة غير متصلة بالإنترنت لشبكة TOS',

    // Network Selection
    'network.label': 'اختر الشبكة',
    'network.mainnet': 'الشبكة الرئيسية',
    'network.testnet': 'شبكة الاختبار',
    'network.mainnet.desc': 'شبكة TOS الحقيقية',
    'network.testnet.desc': 'لأغراض الاختبار',

    // Themes
    'theme.label': 'السمة',
    'theme.dark': 'داكن',
    'theme.light': 'فاتح',
    'theme.tos': 'TOS',
    'theme.purple': 'بنفسجي',
    'theme.ocean': 'محيط',

    // Actions
    'action.generate': 'إنشاء محفظة جديدة',
    'action.print': 'طباعة المحفظة',

    // Wallet Sections
    'wallet.address.title': 'العنوان العام',
    'wallet.address.desc': 'شارك هذا لاستقبال TOS',
    'wallet.privatekey.title': 'المفتاح الخاص',
    'wallet.privatekey.desc': 'لا تشارك هذا أبداً! مطلوب لإنفاق الأموال',
    'wallet.seed.title': 'عبارة البذرة (25 كلمة)',
    'wallet.seed.desc': 'اكتب هذا! يمكن استعادة محفظتك',

    // Copy Actions
    'copy.button': 'نسخ',
    'copy.words': 'نسخ جميع الكلمات',
    'copy.success': 'تم النسخ!',

    // Security Warning
    'warning.security.title': 'الأمان أولاً',
    'warning.security.item1': 'قم بتشغيل هذه الأداة على <strong>جهاز كمبيوتر غير متصل بالإنترنت</strong> لأقصى قدر من الأمان',
    'warning.security.item2': 'لا تشارك مفتاحك الخاص مع أي شخص أبداً',
    'warning.security.item3': 'اطبع محفظتك واحفظها في مكان آمن',
    'warning.security.item4': 'قم بعمل نسخ متعددة واحفظها بشكل منفصل',

    // Footer
    'footer.text': 'مولد محفظة TOS الورقية • مفتوح المصدر • قابل للعمل دون اتصال',
    'footer.security': 'تحقق دائماً من الكود المصدري وقم بالتشغيل دون اتصال لأقصى قدر من الأمان',

    // Loading
    'loading.text': 'جاري تحميل وحدة التشفير...',

    // Wallet Header
    'wallet.header': 'محفظتك الورقية',

    // Language
    'lang.name': '🇸🇦 العربية',
    'lang.label': 'اللغة'
  },

  bg: {
    // Header
    'app.title': 'TOS Хартиен Портфейл',
    'app.subtitle': 'Генерирайте сигурни офлайн портфейли за TOS мрежа',

    // Network Selection
    'network.label': 'Изберете мрежа',
    'network.mainnet': 'Основна мрежа',
    'network.testnet': 'Тестова мрежа',
    'network.mainnet.desc': 'Реална TOS мрежа',
    'network.testnet.desc': 'За тестови цели',

    // Themes
    'theme.label': 'Тема',
    'theme.dark': 'Тъмна',
    'theme.light': 'Светла',
    'theme.tos': 'TOS',
    'theme.purple': 'Лилава',
    'theme.ocean': 'Океан',

    // Actions
    'action.generate': 'Генерирай нов портфейл',
    'action.print': 'Принтирай портфейла',

    // Wallet Sections
    'wallet.address.title': 'Публичен адрес',
    'wallet.address.desc': 'Споделете това, за да ПОЛУЧИТЕ TOS',
    'wallet.privatekey.title': 'Частен ключ',
    'wallet.privatekey.desc': 'НИКОГА не споделяйте това! Необходимо за разходване на средства',
    'wallet.seed.title': 'Seed фраза (25 думи)',
    'wallet.seed.desc': 'Запишете го! Може да възстанови вашия портфейл',

    // Copy Actions
    'copy.button': 'Копирай',
    'copy.words': 'Копирай всички думи',
    'copy.success': 'Копирано!',

    // Security Warning
    'warning.security.title': 'Сигурност на първо място',
    'warning.security.item1': 'Стартирайте този инструмент на <strong>офлайн компютър</strong> за максимална сигурност',
    'warning.security.item2': 'Никога не споделяйте вашия частен ключ с никого',
    'warning.security.item3': 'Принтирайте и съхранявайте портфейла си на безопасно място',
    'warning.security.item4': 'Направете множество копия и ги съхранявайте отделно',

    // Footer
    'footer.text': 'TOS Хартиен Портфейл Генератор • Отворен код • Офлайн възможност',
    'footer.security': 'Винаги проверявайте изходния код и работете офлайн за максимална сигурност',

    // Loading
    'loading.text': 'Зареждане на криптографски модул...',

    // Wallet Header
    'wallet.header': 'Вашият хартиен портфейл',

    // Language
    'lang.name': '🇧🇬 Български',
    'lang.label': 'Език'
  },

  de: {
    // Header
    'app.title': 'TOS Paper Wallet',
    'app.subtitle': 'Generieren Sie sichere Offline-Wallets für das TOS-Netzwerk',

    // Network Selection
    'network.label': 'Netzwerk auswählen',
    'network.mainnet': 'Hauptnetz',
    'network.testnet': 'Testnetz',
    'network.mainnet.desc': 'Echtes TOS-Netzwerk',
    'network.testnet.desc': 'Zu Testzwecken',

    // Themes
    'theme.label': 'Thema',
    'theme.dark': 'Dunkel',
    'theme.light': 'Hell',
    'theme.tos': 'TOS',
    'theme.purple': 'Lila',
    'theme.ocean': 'Ozean',

    // Actions
    'action.generate': 'Neue Wallet generieren',
    'action.print': 'Wallet drucken',

    // Wallet Sections
    'wallet.address.title': 'Öffentliche Adresse',
    'wallet.address.desc': 'Teilen Sie dies, um TOS zu EMPFANGEN',
    'wallet.privatekey.title': 'Privater Schlüssel',
    'wallet.privatekey.desc': 'NIEMALS teilen! Erforderlich zum Ausgeben von Geldern',
    'wallet.seed.title': 'Seed-Phrase (25 Wörter)',
    'wallet.seed.desc': 'Schreiben Sie dies auf! Kann Ihre Wallet wiederherstellen',

    // Copy Actions
    'copy.button': 'Kopieren',
    'copy.words': 'Alle Wörter kopieren',
    'copy.success': 'Kopiert!',

    // Security Warning
    'warning.security.title': 'Sicherheit zuerst',
    'warning.security.item1': 'Führen Sie dieses Tool auf einem <strong>Offline-Computer</strong> aus für maximale Sicherheit',
    'warning.security.item2': 'Teilen Sie Ihren privaten Schlüssel niemals mit jemandem',
    'warning.security.item3': 'Drucken Sie Ihre Wallet aus und bewahren Sie sie an einem sicheren Ort auf',
    'warning.security.item4': 'Erstellen Sie mehrere Kopien und bewahren Sie sie getrennt auf',

    // Footer
    'footer.text': 'TOS Paper Wallet Generator • Open Source • Offline-fähig',
    'footer.security': 'Überprüfen Sie immer den Quellcode und führen Sie offline aus für maximale Sicherheit',

    // Loading
    'loading.text': 'Kryptographie-Modul wird geladen...',

    // Wallet Header
    'wallet.header': 'Ihre Paper Wallet',

    // Language
    'lang.name': '🇩🇪 Deutsch',
    'lang.label': 'Sprache'
  },

  es: {
    // Header
    'app.title': 'Cartera de Papel TOS',
    'app.subtitle': 'Genera carteras seguras sin conexión para la red TOS',

    // Network Selection
    'network.label': 'Seleccionar red',
    'network.mainnet': 'Red principal',
    'network.testnet': 'Red de prueba',
    'network.mainnet.desc': 'Red TOS real',
    'network.testnet.desc': 'Para propósitos de prueba',

    // Themes
    'theme.label': 'Tema',
    'theme.dark': 'Oscuro',
    'theme.light': 'Claro',
    'theme.tos': 'TOS',
    'theme.purple': 'Púrpura',
    'theme.ocean': 'Océano',

    // Actions
    'action.generate': 'Generar nueva cartera',
    'action.print': 'Imprimir cartera',

    // Wallet Sections
    'wallet.address.title': 'Dirección pública',
    'wallet.address.desc': 'Comparte esto para RECIBIR TOS',
    'wallet.privatekey.title': 'Clave privada',
    'wallet.privatekey.desc': '¡NUNCA lo compartas! Necesario para gastar fondos',
    'wallet.seed.title': 'Frase semilla (25 palabras)',
    'wallet.seed.desc': '¡Escribe esto! Puede restaurar tu cartera',

    // Copy Actions
    'copy.button': 'Copiar',
    'copy.words': 'Copiar todas las palabras',
    'copy.success': '¡Copiado!',

    // Security Warning
    'warning.security.title': 'Seguridad primero',
    'warning.security.item1': 'Ejecuta esta herramienta en una <strong>computadora sin conexión</strong> para máxima seguridad',
    'warning.security.item2': 'Nunca compartas tu clave privada con nadie',
    'warning.security.item3': 'Imprime y guarda tu cartera en un lugar seguro',
    'warning.security.item4': 'Haz múltiples copias y guárdalas por separado',

    // Footer
    'footer.text': 'Generador de Cartera de Papel TOS • Código abierto • Capacidad sin conexión',
    'footer.security': 'Siempre verifica el código fuente y ejecuta sin conexión para máxima seguridad',

    // Loading
    'loading.text': 'Cargando módulo criptográfico...',

    // Wallet Header
    'wallet.header': 'Tu cartera de papel',

    // Language
    'lang.name': '🇪🇸 Español',
    'lang.label': 'Idioma'
  },

  fr: {
    // Header
    'app.title': 'Portefeuille Papier TOS',
    'app.subtitle': 'Générez des portefeuilles sécurisés hors ligne pour le réseau TOS',

    // Network Selection
    'network.label': 'Sélectionner le réseau',
    'network.mainnet': 'Réseau principal',
    'network.testnet': 'Réseau de test',
    'network.mainnet.desc': 'Réseau TOS réel',
    'network.testnet.desc': 'À des fins de test',

    // Themes
    'theme.label': 'Thème',
    'theme.dark': 'Sombre',
    'theme.light': 'Clair',
    'theme.tos': 'TOS',
    'theme.purple': 'Violet',
    'theme.ocean': 'Océan',

    // Actions
    'action.generate': 'Générer un nouveau portefeuille',
    'action.print': 'Imprimer le portefeuille',

    // Wallet Sections
    'wallet.address.title': 'Adresse publique',
    'wallet.address.desc': 'Partagez ceci pour RECEVOIR des TOS',
    'wallet.privatekey.title': 'Clé privée',
    'wallet.privatekey.desc': 'NE JAMAIS partager ! Nécessaire pour dépenser des fonds',
    'wallet.seed.title': 'Phrase de récupération (25 mots)',
    'wallet.seed.desc': 'Notez ceci ! Peut restaurer votre portefeuille',

    // Copy Actions
    'copy.button': 'Copier',
    'copy.words': 'Copier tous les mots',
    'copy.success': 'Copié !',

    // Security Warning
    'warning.security.title': 'Sécurité d\'abord',
    'warning.security.item1': 'Exécutez cet outil sur un <strong>ordinateur hors ligne</strong> pour une sécurité maximale',
    'warning.security.item2': 'Ne partagez jamais votre clé privée avec qui que ce soit',
    'warning.security.item3': 'Imprimez et stockez votre portefeuille dans un endroit sûr',
    'warning.security.item4': 'Faites plusieurs copies et stockez-les séparément',

    // Footer
    'footer.text': 'Générateur de Portefeuille Papier TOS • Open Source • Capacité hors ligne',
    'footer.security': 'Vérifiez toujours le code source et exécutez hors ligne pour une sécurité maximale',

    // Loading
    'loading.text': 'Chargement du module cryptographique...',

    // Wallet Header
    'wallet.header': 'Votre portefeuille papier',

    // Language
    'lang.name': '🇫🇷 Français',
    'lang.label': 'Langue'
  },

  hi: {
    // Header
    'app.title': 'TOS पेपर वॉलेट',
    'app.subtitle': 'TOS नेटवर्क के लिए सुरक्षित ऑफ़लाइन वॉलेट बनाएं',

    // Network Selection
    'network.label': 'नेटवर्क चुनें',
    'network.mainnet': 'मेननेट',
    'network.testnet': 'टेस्टनेट',
    'network.mainnet.desc': 'वास्तविक TOS नेटवर्क',
    'network.testnet.desc': 'परीक्षण उद्देश्यों के लिए',

    // Themes
    'theme.label': 'थीम',
    'theme.dark': 'डार्क',
    'theme.light': 'लाइट',
    'theme.tos': 'TOS',
    'theme.purple': 'पर्पल',
    'theme.ocean': 'ओशन',

    // Actions
    'action.generate': 'नया वॉलेट बनाएं',
    'action.print': 'वॉलेट प्रिंट करें',

    // Wallet Sections
    'wallet.address.title': 'सार्वजनिक पता',
    'wallet.address.desc': 'TOS प्राप्त करने के लिए इसे साझा करें',
    'wallet.privatekey.title': 'निजी कुंजी',
    'wallet.privatekey.desc': 'कभी साझा न करें! धन खर्च करने के लिए आवश्यक',
    'wallet.seed.title': 'सीड फ्रेज (25 शब्द)',
    'wallet.seed.desc': 'इसे लिख लें! आपके वॉलेट को पुनर्स्थापित कर सकता है',

    // Copy Actions
    'copy.button': 'कॉपी करें',
    'copy.words': 'सभी शब्द कॉपी करें',
    'copy.success': 'कॉपी हो गया!',

    // Security Warning
    'warning.security.title': 'सुरक्षा पहले',
    'warning.security.item1': 'अधिकतम सुरक्षा के लिए इस टूल को <strong>ऑफ़लाइन कंप्यूटर</strong> पर चलाएं',
    'warning.security.item2': 'अपनी निजी कुंजी कभी किसी के साथ साझा न करें',
    'warning.security.item3': 'अपने वॉलेट को प्रिंट करें और सुरक्षित स्थान पर रखें',
    'warning.security.item4': 'कई प्रतियां बनाएं और अलग-अलग रखें',

    // Footer
    'footer.text': 'TOS पेपर वॉलेट जेनरेटर • ओपन सोर्स • ऑफ़लाइन सक्षम',
    'footer.security': 'हमेशा स्रोत कोड सत्यापित करें और अधिकतम सुरक्षा के लिए ऑफ़लाइन चलाएं',

    // Loading
    'loading.text': 'क्रिप्टोग्राफिक मॉड्यूल लोड हो रहा है...',

    // Wallet Header
    'wallet.header': 'आपका पेपर वॉलेट',

    // Language
    'lang.name': '🇮🇳 हिन्दी',
    'lang.label': 'भाषा'
  },

  it: {
    // Header
    'app.title': 'Portafoglio Cartaceo TOS',
    'app.subtitle': 'Genera portafogli sicuri offline per la rete TOS',

    // Network Selection
    'network.label': 'Seleziona rete',
    'network.mainnet': 'Rete principale',
    'network.testnet': 'Rete di test',
    'network.mainnet.desc': 'Rete TOS reale',
    'network.testnet.desc': 'Per scopi di test',

    // Themes
    'theme.label': 'Tema',
    'theme.dark': 'Scuro',
    'theme.light': 'Chiaro',
    'theme.tos': 'TOS',
    'theme.purple': 'Viola',
    'theme.ocean': 'Oceano',

    // Actions
    'action.generate': 'Genera nuovo portafoglio',
    'action.print': 'Stampa portafoglio',

    // Wallet Sections
    'wallet.address.title': 'Indirizzo pubblico',
    'wallet.address.desc': 'Condividi questo per RICEVERE TOS',
    'wallet.privatekey.title': 'Chiave privata',
    'wallet.privatekey.desc': 'MAI condividere! Necessaria per spendere fondi',
    'wallet.seed.title': 'Frase seed (25 parole)',
    'wallet.seed.desc': 'Scrivilo! Può ripristinare il tuo portafoglio',

    // Copy Actions
    'copy.button': 'Copia',
    'copy.words': 'Copia tutte le parole',
    'copy.success': 'Copiato!',

    // Security Warning
    'warning.security.title': 'Sicurezza prima di tutto',
    'warning.security.item1': 'Esegui questo strumento su un <strong>computer offline</strong> per la massima sicurezza',
    'warning.security.item2': 'Non condividere mai la tua chiave privata con nessuno',
    'warning.security.item3': 'Stampa e conserva il tuo portafoglio in un luogo sicuro',
    'warning.security.item4': 'Fai più copie e conservale separatamente',

    // Footer
    'footer.text': 'Generatore Portafoglio Cartaceo TOS • Open Source • Capacità offline',
    'footer.security': 'Verifica sempre il codice sorgente ed esegui offline per la massima sicurezza',

    // Loading
    'loading.text': 'Caricamento modulo crittografico...',

    // Wallet Header
    'wallet.header': 'Il tuo portafoglio cartaceo',

    // Language
    'lang.name': '🇮🇹 Italiano',
    'lang.label': 'Lingua'
  },

  ms: {
    // Header
    'app.title': 'Dompet Kertas TOS',
    'app.subtitle': 'Hasilkan dompet luar talian yang selamat untuk Rangkaian TOS',

    // Network Selection
    'network.label': 'Pilih Rangkaian',
    'network.mainnet': 'Rangkaian Utama',
    'network.testnet': 'Rangkaian Ujian',
    'network.mainnet.desc': 'Rangkaian TOS sebenar',
    'network.testnet.desc': 'Untuk tujuan ujian',

    // Themes
    'theme.label': 'Tema',
    'theme.dark': 'Gelap',
    'theme.light': 'Terang',
    'theme.tos': 'TOS',
    'theme.purple': 'Ungu',
    'theme.ocean': 'Lautan',

    // Actions
    'action.generate': 'Hasilkan Dompet Baru',
    'action.print': 'Cetak Dompet',

    // Wallet Sections
    'wallet.address.title': 'Alamat Awam',
    'wallet.address.desc': 'Kongsi ini untuk MENERIMA TOS',
    'wallet.privatekey.title': 'Kunci Peribadi',
    'wallet.privatekey.desc': 'JANGAN kongsi! Diperlukan untuk membelanjakan dana',
    'wallet.seed.title': 'Frasa Benih (25 Perkataan)',
    'wallet.seed.desc': 'Tulis ini! Boleh memulihkan dompet anda',

    // Copy Actions
    'copy.button': 'Salin',
    'copy.words': 'Salin Semua Perkataan',
    'copy.success': 'Disalin!',

    // Security Warning
    'warning.security.title': 'Keselamatan Dahulu',
    'warning.security.item1': 'Jalankan alat ini pada <strong>komputer luar talian</strong> untuk keselamatan maksimum',
    'warning.security.item2': 'Jangan sekali-kali kongsi kunci peribadi anda dengan sesiapa',
    'warning.security.item3': 'Cetak dan simpan dompet anda di lokasi yang selamat',
    'warning.security.item4': 'Buat beberapa salinan dan simpan secara berasingan',

    // Footer
    'footer.text': 'Penjana Dompet Kertas TOS • Sumber Terbuka • Keupayaan Luar Talian',
    'footer.security': 'Sentiasa sahkan kod sumber dan jalankan luar talian untuk keselamatan maksimum',

    // Loading
    'loading.text': 'Memuatkan modul kriptografi...',

    // Wallet Header
    'wallet.header': 'Dompet Kertas Anda',

    // Language
    'lang.name': '🇲🇾 Melayu',
    'lang.label': 'Bahasa'
  },

  nl: {
    // Header
    'app.title': 'TOS Papieren Portemonnee',
    'app.subtitle': 'Genereer veilige offline portemonnees voor het TOS-netwerk',

    // Network Selection
    'network.label': 'Selecteer netwerk',
    'network.mainnet': 'Hoofdnetwerk',
    'network.testnet': 'Testnetwerk',
    'network.mainnet.desc': 'Echt TOS-netwerk',
    'network.testnet.desc': 'Voor testdoeleinden',

    // Themes
    'theme.label': 'Thema',
    'theme.dark': 'Donker',
    'theme.light': 'Licht',
    'theme.tos': 'TOS',
    'theme.purple': 'Paars',
    'theme.ocean': 'Oceaan',

    // Actions
    'action.generate': 'Nieuwe portemonnee genereren',
    'action.print': 'Portemonnee afdrukken',

    // Wallet Sections
    'wallet.address.title': 'Openbaar adres',
    'wallet.address.desc': 'Deel dit om TOS te ONTVANGEN',
    'wallet.privatekey.title': 'Privésleutel',
    'wallet.privatekey.desc': 'NOOIT delen! Nodig om geld uit te geven',
    'wallet.seed.title': 'Herstelzin (25 woorden)',
    'wallet.seed.desc': 'Schrijf dit op! Kan je portemonnee herstellen',

    // Copy Actions
    'copy.button': 'Kopiëren',
    'copy.words': 'Alle woorden kopiëren',
    'copy.success': 'Gekopieerd!',

    // Security Warning
    'warning.security.title': 'Veiligheid eerst',
    'warning.security.item1': 'Voer deze tool uit op een <strong>offline computer</strong> voor maximale veiligheid',
    'warning.security.item2': 'Deel je privésleutel nooit met iemand',
    'warning.security.item3': 'Druk je portemonnee af en bewaar deze op een veilige plek',
    'warning.security.item4': 'Maak meerdere kopieën en bewaar ze apart',

    // Footer
    'footer.text': 'TOS Papieren Portemonnee Generator • Open Source • Offline-mogelijkheid',
    'footer.security': 'Verifieer altijd de broncode en voer offline uit voor maximale veiligheid',

    // Loading
    'loading.text': 'Cryptografische module laden...',

    // Wallet Header
    'wallet.header': 'Je papieren portemonnee',

    // Language
    'lang.name': '🇳🇱 Nederlands',
    'lang.label': 'Taal'
  },

  pl: {
    // Header
    'app.title': 'Papierowy Portfel TOS',
    'app.subtitle': 'Generuj bezpieczne portfele offline dla sieci TOS',

    // Network Selection
    'network.label': 'Wybierz sieć',
    'network.mainnet': 'Sieć główna',
    'network.testnet': 'Sieć testowa',
    'network.mainnet.desc': 'Prawdziwa sieć TOS',
    'network.testnet.desc': 'Do celów testowych',

    // Themes
    'theme.label': 'Motyw',
    'theme.dark': 'Ciemny',
    'theme.light': 'Jasny',
    'theme.tos': 'TOS',
    'theme.purple': 'Fioletowy',
    'theme.ocean': 'Ocean',

    // Actions
    'action.generate': 'Generuj nowy portfel',
    'action.print': 'Drukuj portfel',

    // Wallet Sections
    'wallet.address.title': 'Adres publiczny',
    'wallet.address.desc': 'Udostępnij to, aby OTRZYMAĆ TOS',
    'wallet.privatekey.title': 'Klucz prywatny',
    'wallet.privatekey.desc': 'NIGDY nie udostępniaj! Wymagany do wydawania środków',
    'wallet.seed.title': 'Fraza seed (25 słów)',
    'wallet.seed.desc': 'Zapisz to! Może przywrócić twój portfel',

    // Copy Actions
    'copy.button': 'Kopiuj',
    'copy.words': 'Kopiuj wszystkie słowa',
    'copy.success': 'Skopiowano!',

    // Security Warning
    'warning.security.title': 'Bezpieczeństwo przede wszystkim',
    'warning.security.item1': 'Uruchom to narzędzie na <strong>komputerze offline</strong> dla maksymalnego bezpieczeństwa',
    'warning.security.item2': 'Nigdy nie udostępniaj swojego klucza prywatnego nikomu',
    'warning.security.item3': 'Wydrukuj i przechowuj swój portfel w bezpiecznym miejscu',
    'warning.security.item4': 'Zrób wiele kopii i przechowuj je osobno',

    // Footer
    'footer.text': 'Generator Papierowego Portfela TOS • Open Source • Możliwość offline',
    'footer.security': 'Zawsze weryfikuj kod źródłowy i uruchamiaj offline dla maksymalnego bezpieczeństwa',

    // Loading
    'loading.text': 'Ładowanie modułu kryptograficznego...',

    // Wallet Header
    'wallet.header': 'Twój papierowy portfel',

    // Language
    'lang.name': '🇵🇱 Polski',
    'lang.label': 'Język'
  },

  pt: {
    // Header
    'app.title': 'Carteira de Papel TOS',
    'app.subtitle': 'Gere carteiras seguras offline para a rede TOS',

    // Network Selection
    'network.label': 'Selecionar rede',
    'network.mainnet': 'Rede principal',
    'network.testnet': 'Rede de teste',
    'network.mainnet.desc': 'Rede TOS real',
    'network.testnet.desc': 'Para fins de teste',

    // Themes
    'theme.label': 'Tema',
    'theme.dark': 'Escuro',
    'theme.light': 'Claro',
    'theme.tos': 'TOS',
    'theme.purple': 'Roxo',
    'theme.ocean': 'Oceano',

    // Actions
    'action.generate': 'Gerar nova carteira',
    'action.print': 'Imprimir carteira',

    // Wallet Sections
    'wallet.address.title': 'Endereço público',
    'wallet.address.desc': 'Compartilhe isso para RECEBER TOS',
    'wallet.privatekey.title': 'Chave privada',
    'wallet.privatekey.desc': 'NUNCA compartilhe! Necessária para gastar fundos',
    'wallet.seed.title': 'Frase semente (25 palavras)',
    'wallet.seed.desc': 'Anote isso! Pode restaurar sua carteira',

    // Copy Actions
    'copy.button': 'Copiar',
    'copy.words': 'Copiar todas as palavras',
    'copy.success': 'Copiado!',

    // Security Warning
    'warning.security.title': 'Segurança em primeiro lugar',
    'warning.security.item1': 'Execute esta ferramenta em um <strong>computador offline</strong> para máxima segurança',
    'warning.security.item2': 'Nunca compartilhe sua chave privada com ninguém',
    'warning.security.item3': 'Imprima e armazene sua carteira em um local seguro',
    'warning.security.item4': 'Faça várias cópias e armazene separadamente',

    // Footer
    'footer.text': 'Gerador de Carteira de Papel TOS • Código aberto • Capacidade offline',
    'footer.security': 'Sempre verifique o código fonte e execute offline para máxima segurança',

    // Loading
    'loading.text': 'Carregando módulo criptográfico...',

    // Wallet Header
    'wallet.header': 'Sua carteira de papel',

    // Language
    'lang.name': '🇵🇹 Português',
    'lang.label': 'Idioma'
  },

  ru: {
    // Header
    'app.title': 'Бумажный кошелек TOS',
    'app.subtitle': 'Создавайте безопасные офлайн-кошельки для сети TOS',

    // Network Selection
    'network.label': 'Выбрать сеть',
    'network.mainnet': 'Основная сеть',
    'network.testnet': 'Тестовая сеть',
    'network.mainnet.desc': 'Реальная сеть TOS',
    'network.testnet.desc': 'Для целей тестирования',

    // Themes
    'theme.label': 'Тема',
    'theme.dark': 'Темная',
    'theme.light': 'Светлая',
    'theme.tos': 'TOS',
    'theme.purple': 'Фиолетовая',
    'theme.ocean': 'Океан',

    // Actions
    'action.generate': 'Создать новый кошелек',
    'action.print': 'Распечатать кошелек',

    // Wallet Sections
    'wallet.address.title': 'Публичный адрес',
    'wallet.address.desc': 'Поделитесь этим, чтобы ПОЛУЧИТЬ TOS',
    'wallet.privatekey.title': 'Приватный ключ',
    'wallet.privatekey.desc': 'НИКОГДА не делитесь! Необходим для траты средств',
    'wallet.seed.title': 'Сид-фраза (25 слов)',
    'wallet.seed.desc': 'Запишите это! Может восстановить ваш кошелек',

    // Copy Actions
    'copy.button': 'Копировать',
    'copy.words': 'Копировать все слова',
    'copy.success': 'Скопировано!',

    // Security Warning
    'warning.security.title': 'Безопасность прежде всего',
    'warning.security.item1': 'Запускайте этот инструмент на <strong>офлайн-компьютере</strong> для максимальной безопасности',
    'warning.security.item2': 'Никогда не делитесь своим приватным ключом ни с кем',
    'warning.security.item3': 'Распечатайте и храните кошелек в безопасном месте',
    'warning.security.item4': 'Сделайте несколько копий и храните их отдельно',

    // Footer
    'footer.text': 'Генератор бумажного кошелька TOS • Открытый исходный код • Офлайн-возможность',
    'footer.security': 'Всегда проверяйте исходный код и запускайте офлайн для максимальной безопасности',

    // Loading
    'loading.text': 'Загрузка криптографического модуля...',

    // Wallet Header
    'wallet.header': 'Ваш бумажный кошелек',

    // Language
    'lang.name': '🇷🇺 Русский',
    'lang.label': 'Язык'
  },

  tr: {
    // Header
    'app.title': 'TOS Kağıt Cüzdan',
    'app.subtitle': 'TOS Ağı için güvenli çevrimdışı cüzdanlar oluşturun',

    // Network Selection
    'network.label': 'Ağ seç',
    'network.mainnet': 'Ana ağ',
    'network.testnet': 'Test ağı',
    'network.mainnet.desc': 'Gerçek TOS ağı',
    'network.testnet.desc': 'Test amaçlı',

    // Themes
    'theme.label': 'Tema',
    'theme.dark': 'Koyu',
    'theme.light': 'Açık',
    'theme.tos': 'TOS',
    'theme.purple': 'Mor',
    'theme.ocean': 'Okyanus',

    // Actions
    'action.generate': 'Yeni cüzdan oluştur',
    'action.print': 'Cüzdanı yazdır',

    // Wallet Sections
    'wallet.address.title': 'Genel adres',
    'wallet.address.desc': 'TOS ALMAK için bunu paylaşın',
    'wallet.privatekey.title': 'Özel anahtar',
    'wallet.privatekey.desc': 'ASLA paylaşmayın! Para harcamak için gerekli',
    'wallet.seed.title': 'Tohum cümlesi (25 kelime)',
    'wallet.seed.desc': 'Bunu yazın! Cüzdanınızı geri yükleyebilir',

    // Copy Actions
    'copy.button': 'Kopyala',
    'copy.words': 'Tüm kelimeleri kopyala',
    'copy.success': 'Kopyalandı!',

    // Security Warning
    'warning.security.title': 'Önce güvenlik',
    'warning.security.item1': 'Maksimum güvenlik için bu aracı <strong>çevrimdışı bilgisayarda</strong> çalıştırın',
    'warning.security.item2': 'Özel anahtarınızı asla kimseyle paylaşmayın',
    'warning.security.item3': 'Cüzdanınızı yazdırın ve güvenli bir yerde saklayın',
    'warning.security.item4': 'Birden fazla kopya yapın ve ayrı ayrı saklayın',

    // Footer
    'footer.text': 'TOS Kağıt Cüzdan Oluşturucu • Açık kaynak • Çevrimdışı özellikli',
    'footer.security': 'Her zaman kaynak kodunu doğrulayın ve maksimum güvenlik için çevrimdışı çalıştırın',

    // Loading
    'loading.text': 'Kriptografik modül yükleniyor...',

    // Wallet Header
    'wallet.header': 'Kağıt cüzdanınız',

    // Language
    'lang.name': '🇹🇷 Türkçe',
    'lang.label': 'Dil'
  },

  uk: {
    // Header
    'app.title': 'Паперовий гаманець TOS',
    'app.subtitle': 'Створюйте безпечні офлайн-гаманці для мережі TOS',

    // Network Selection
    'network.label': 'Вибрати мережу',
    'network.mainnet': 'Основна мережа',
    'network.testnet': 'Тестова мережа',
    'network.mainnet.desc': 'Справжня мережа TOS',
    'network.testnet.desc': 'Для цілей тестування',

    // Themes
    'theme.label': 'Тема',
    'theme.dark': 'Темна',
    'theme.light': 'Світла',
    'theme.tos': 'TOS',
    'theme.purple': 'Фіолетова',
    'theme.ocean': 'Океан',

    // Actions
    'action.generate': 'Створити новий гаманець',
    'action.print': 'Роздрукувати гаманець',

    // Wallet Sections
    'wallet.address.title': 'Публічна адреса',
    'wallet.address.desc': 'Поділіться цим, щоб ОТРИМАТИ TOS',
    'wallet.privatekey.title': 'Приватний ключ',
    'wallet.privatekey.desc': 'НІКОЛИ не діліться! Необхідний для витрат коштів',
    'wallet.seed.title': 'Сід-фраза (25 слів)',
    'wallet.seed.desc': 'Запишіть це! Може відновити ваш гаманець',

    // Copy Actions
    'copy.button': 'Копіювати',
    'copy.words': 'Копіювати всі слова',
    'copy.success': 'Скопійовано!',

    // Security Warning
    'warning.security.title': 'Безпека перш за все',
    'warning.security.item1': 'Запускайте цей інструмент на <strong>офлайн-комп\'ютері</strong> для максимальної безпеки',
    'warning.security.item2': 'Ніколи не діліться своїм приватним ключем ні з ким',
    'warning.security.item3': 'Роздрукуйте та зберігайте гаманець у безпечному місці',
    'warning.security.item4': 'Зробіть кілька копій та зберігайте їх окремо',

    // Footer
    'footer.text': 'Генератор паперового гаманця TOS • Відкритий код • Офлайн-можливість',
    'footer.security': 'Завжди перевіряйте вихідний код та запускайте офлайн для максимальної безпеки',

    // Loading
    'loading.text': 'Завантаження криптографічного модуля...',

    // Wallet Header
    'wallet.header': 'Ваш паперовий гаманець',

    // Language
    'lang.name': '🇺🇦 Українська',
    'lang.label': 'Мова'
  }
};

const translationOverrides = {
  zh: {
    'asset.tos.desc': '普通 TOS 资产',
    'asset.uno.desc': '隐私 UNO 资产'
  },
  ja: {
    'app.title': 'TOSウォレット',
    'app.subtitle': '1つのリカバリーフレーズから TOS と UNO のウォレット情報をオフライン生成',
    'asset.legend': 'ウォレットモード',
    'asset.heading': '生成するウォレットモードを選択',
    'asset.helper': '24単語のリカバリーフレーズ1組で、TOS通常ウォレットとUNOプライバシーウォレットの両方を管理します。',
    'asset.tos': 'TOS',
    'asset.uno': 'UNO',
    'asset.tos.chip': '通常',
    'asset.uno.chip': 'プライバシー',
    'asset.tos.desc': '通常の TOS 資産',
    'asset.uno.desc': '秘密の UNO 資産',
    'action.print_visible': '表示中の内容を印刷',
    'action.hide_all': '機密情報を隠す',
    'action.reveal_private': '秘密鍵を表示',
    'action.hide_private': '秘密鍵を隠す',
    'action.reveal_seed': 'リカバリーフレーズを表示',
    'action.hide_seed': 'リカバリーフレーズを隠す',
    'wallet.header.kicker': '現在のウォレットモード',
    'wallet.header.materials': 'ウォレット情報',
    'wallet.address.generic_desc': 'このアドレスを共有して資産を受け取ります',
    'wallet.publickey.title': '公開鍵',
    'wallet.publickey.desc': '選択したウォレットモードから導出された署名用公開鍵',
    'wallet.privatekey.generic_desc': 'この鍵は絶対に共有しないでください。現在のウォレットを制御します。',
    'wallet.seed24.title': 'リカバリーフレーズ（24語）',
    'wallet.seed24.desc': 'このフレーズは一度だけ書き留めてください。TOS と UNO の両方のウォレット情報を導出します。',
    'copy.address.success': 'アドレスをコピーしました！',
    'copy.public.success': '公開鍵をコピーしました！',
    'copy.private.success': '秘密鍵をコピーしました。使用後にクリップボードを消去してください。',
    'copy.seed.success': 'リカバリーフレーズをコピーしました。使用後にクリップボードを消去してください。',
    'warning.online': '現在オンラインです。最大の安全のためオフラインにしてください。',
    'secret.hidden.title': '機密情報は隠されています',
    'secret.hidden.private': '秘密鍵のQRコードと生の鍵は、明示的に表示するまでページに書き込まれません。',
    'secret.hidden.seed': 'リカバリーフレーズは、明示的に表示するまでページに書き込まれません。',
    'secret.private.hidden': '初期状態では非表示です。バックアップまたは移行の準備ができたときだけ表示してください。',
    'secret.private.visible': '画面に表示中です。この端末を離れる前に再度隠してください。',
    'secret.seed.hidden': '初期状態では非表示です。信頼できるオフライン環境でのみ表示してください。',
    'secret.seed.visible': '画面に表示中です。カメラや画面録画が有効でないことを確認してください。',
    'secret.confirm.private': '秘密鍵を表示すると画面上に露出します。続行しますか？',
    'secret.confirm.seed': 'リカバリーフレーズを表示すると画面上に露出します。続行しますか？',
    'secret.copy.blocked': 'コピーする前に機密情報を表示してください。',
    'print.partial.confirm': '機密セクションはまだ非表示のため、印刷には含まれません。表示中の内容だけを印刷しますか？',
    'footer.text': 'TOS ウォレット資料生成器 • オープンソース • オフライン対応',
    'wallet.replace.confirm': '新しいウォレット情報を生成しますか？現在の情報は置き換えられます。',
    'wallet.replace.use_secondary': '現在のウォレットを置き換えるには、下部の「新しいウォレットを生成」ボタンを使用して確認してください。'
  },
  ko: {
    'app.title': 'TOS 지갑',
    'app.subtitle': '하나의 복구 문구로 TOS 및 UNO 지갑 자료를 오프라인 생성',
    'asset.legend': '지갑 모드',
    'asset.heading': '생성할 지갑 모드를 선택하세요',
    'asset.helper': '24단어 복구 문구 하나로 TOS 일반 지갑과 UNO 프라이버시 지갑을 함께 관리합니다.',
    'asset.tos': 'TOS',
    'asset.uno': 'UNO',
    'asset.tos.chip': '일반',
    'asset.uno.chip': '프라이버시',
    'asset.tos.desc': '일반 TOS 자산',
    'asset.uno.desc': '비밀 UNO 자산',
    'action.print_visible': '현재 보이는 내용 인쇄',
    'action.hide_all': '민감 정보 숨기기',
    'action.reveal_private': '개인 키 보기',
    'action.hide_private': '개인 키 숨기기',
    'action.reveal_seed': '복구 문구 보기',
    'action.hide_seed': '복구 문구 숨기기',
    'wallet.header.kicker': '현재 지갑 모드',
    'wallet.header.materials': '지갑 자료',
    'wallet.address.generic_desc': '이 주소를 공유해 자산을 받으세요',
    'wallet.publickey.title': '공개 키',
    'wallet.publickey.desc': '선택한 지갑 모드에서 파생된 서명용 공개 키',
    'wallet.privatekey.generic_desc': '이 키는 절대 공유하지 마세요. 현재 지갑을 제어합니다.',
    'wallet.seed24.title': '복구 문구 (24단어)',
    'wallet.seed24.desc': '이 문구는 한 번만 안전하게 기록하세요. TOS와 UNO 지갑 자료를 모두 파생합니다.',
    'copy.address.success': '주소가 복사되었습니다!',
    'copy.public.success': '공개 키가 복사되었습니다!',
    'copy.private.success': '개인 키가 복사되었습니다. 사용 후 클립보드를 비우세요.',
    'copy.seed.success': '복구 문구가 복사되었습니다. 사용 후 클립보드를 비우세요.',
    'warning.online': '현재 온라인 상태입니다. 최대 보안을 위해 인터넷을 끊으세요.',
    'secret.hidden.title': '민감한 자료가 숨겨져 있습니다',
    'secret.hidden.private': '개인 키 QR 코드와 원본 키는 명시적으로 보기 전까지 페이지에 표시되지 않습니다.',
    'secret.hidden.seed': '복구 문구는 명시적으로 보기 전까지 페이지에 기록되지 않습니다.',
    'secret.private.hidden': '기본적으로 숨겨집니다. 백업이나 마이그레이션이 필요할 때만 표시하세요.',
    'secret.private.visible': '현재 화면에 표시 중입니다. 기기를 떠나기 전에 다시 숨기세요.',
    'secret.seed.hidden': '기본적으로 숨겨집니다. 신뢰할 수 있는 오프라인 환경에서만 표시하세요.',
    'secret.seed.visible': '현재 화면에 표시 중입니다. 카메라나 화면 녹화가 켜져 있지 않은지 확인하세요.',
    'secret.confirm.private': '개인 키를 표시하면 화면에 노출됩니다. 계속하시겠습니까?',
    'secret.confirm.seed': '복구 문구를 표시하면 화면에 노출됩니다. 계속하시겠습니까?',
    'secret.copy.blocked': '복사하기 전에 민감한 자료를 먼저 표시하세요.',
    'print.partial.confirm': '민감한 섹션이 아직 숨겨져 있어 인쇄에 포함되지 않습니다. 현재 보이는 내용만 인쇄할까요?',
    'footer.text': 'TOS 지갑 자료 생성기 • 오픈 소스 • 오프라인 지원',
    'wallet.replace.confirm': '새 지갑 자료를 생성하시겠습니까? 현재 자료는 교체됩니다.',
    'wallet.replace.use_secondary': '현재 지갑을 교체하려면 아래의 "새 지갑 생성" 버튼으로 확인하세요.'
  },
  ar: {
    'app.title': 'محفظة TOS',
    'app.subtitle': 'أنشئ بيانات محفظتي TOS وUNO دون اتصال من عبارة استرداد واحدة',
    'asset.legend': 'وضع المحفظة',
    'asset.heading': 'اختر وضع المحفظة الذي تريد إنشاءه',
    'asset.helper': 'عبارة استرداد واحدة من 24 كلمة تتحكم في محفظة TOS العادية ومحفظة UNO الخاصة.',
    'asset.tos': 'TOS',
    'asset.uno': 'UNO',
    'asset.tos.chip': 'عادي',
    'asset.uno.chip': 'خصوصية',
    'asset.tos.desc': 'أصول TOS العادية',
    'asset.uno.desc': 'أصول UNO السرية',
    'action.print_visible': 'طباعة المحتوى الظاهر',
    'action.hide_all': 'إخفاء البيانات الحساسة',
    'action.reveal_private': 'إظهار المفتاح الخاص',
    'action.hide_private': 'إخفاء المفتاح الخاص',
    'action.reveal_seed': 'إظهار عبارة الاسترداد',
    'action.hide_seed': 'إخفاء عبارة الاسترداد',
    'wallet.header.kicker': 'وضع المحفظة الحالي',
    'wallet.header.materials': 'بيانات المحفظة',
    'wallet.address.generic_desc': 'شارك هذا العنوان لاستقبال الأصول',
    'wallet.publickey.title': 'المفتاح العام',
    'wallet.publickey.desc': 'المفتاح العام للتوقيع المشتق من وضع المحفظة المحدد',
    'wallet.privatekey.generic_desc': 'لا تشارك هذا المفتاح أبداً. فهو يتحكم في المحفظة الحالية.',
    'wallet.seed24.title': 'عبارة الاسترداد (24 كلمة)',
    'wallet.seed24.desc': 'اكتب هذه العبارة مرة واحدة. فهي تشتق بيانات محفظتي TOS وUNO.',
    'copy.address.success': 'تم نسخ العنوان!',
    'copy.public.success': 'تم نسخ المفتاح العام!',
    'copy.private.success': 'تم نسخ المفتاح الخاص. امسح الحافظة بعد الاستخدام.',
    'copy.seed.success': 'تم نسخ عبارة الاسترداد. امسح الحافظة بعد الاستخدام.',
    'warning.online': 'أنت متصل بالإنترنت الآن. افصل الاتصال لتحقيق أقصى درجات الأمان.',
    'secret.hidden.title': 'تم إخفاء البيانات الحساسة',
    'secret.hidden.private': 'لن يظهر رمز QR للمفتاح الخاص أو المفتاح الخام في الصفحة حتى تقوم بإظهاره صراحةً.',
    'secret.hidden.seed': 'لن تُكتب عبارة الاسترداد في الصفحة حتى تقوم بإظهارها صراحةً.',
    'secret.private.hidden': 'مخفية افتراضياً. أظهرها فقط عندما تكون مستعداً لنسخ احتياطي أو ترحيل هذه المحفظة.',
    'secret.private.visible': 'تظهر الآن على الشاشة. أخفها مرة أخرى قبل ترك هذا الجهاز دون مراقبة.',
    'secret.seed.hidden': 'مخفية افتراضياً. أظهرها فقط في بيئة موثوقة غير متصلة.',
    'secret.seed.visible': 'تظهر الآن على الشاشة. تأكد من عدم تشغيل الكاميرا أو تسجيل الشاشة.',
    'secret.confirm.private': 'سيؤدي إظهار المفتاح الخاص إلى كشفه على الشاشة. هل تريد المتابعة؟',
    'secret.confirm.seed': 'سيؤدي إظهار عبارة الاسترداد إلى كشفها على الشاشة. هل تريد المتابعة؟',
    'secret.copy.blocked': 'أظهر البيانات الحساسة قبل نسخها.',
    'print.partial.confirm': 'لا تزال الأقسام الحساسة مخفية ولن تُدرج في النسخة المطبوعة. هل تريد المتابعة بطباعة المحتوى الظاهر فقط؟',
    'footer.text': 'مولد بيانات محفظة TOS • مفتوح المصدر • يعمل دون اتصال',
    'wallet.replace.confirm': 'هل تريد إنشاء بيانات محفظة جديدة؟ سيتم استبدال البيانات الحالية.',
    'wallet.replace.use_secondary': 'لاستبدال المحفظة الحالية، استخدم زر "إنشاء محفظة جديدة" السفلي وأكّد العملية.'
  },
  bg: {
    'app.title': 'TOS портфейл',
    'app.subtitle': 'Генерирайте офлайн данни за TOS и UNO портфейл от една фраза за възстановяване',
    'asset.legend': 'Режим на портфейла',
    'asset.heading': 'Изберете режима на портфейла, който искате да генерирате',
    'asset.helper': 'Една фраза за възстановяване от 24 думи управлява едновременно стандартния TOS портфейл и поверителния UNO портфейл.',
    'asset.tos': 'TOS',
    'asset.uno': 'UNO',
    'asset.tos.chip': 'Стандартен',
    'asset.uno.chip': 'Поверителен',
    'asset.tos.desc': 'Стандартни TOS активи',
    'asset.uno.desc': 'Секретни UNO активи',
    'action.print_visible': 'Печат на видимото',
    'action.hide_all': 'Скрий чувствителните данни',
    'action.reveal_private': 'Покажи личния ключ',
    'action.hide_private': 'Скрий личния ключ',
    'action.reveal_seed': 'Покажи фразата за възстановяване',
    'action.hide_seed': 'Скрий фразата за възстановяване',
    'wallet.header.kicker': 'Текущ режим на портфейла',
    'wallet.header.materials': 'Данни за портфейла',
    'wallet.address.generic_desc': 'Споделете този адрес, за да получавате активи',
    'wallet.publickey.title': 'Публичен ключ',
    'wallet.publickey.desc': 'Публичен ключ за подписване, извлечен от избрания режим',
    'wallet.privatekey.generic_desc': 'Никога не споделяйте този ключ. Той контролира текущия портфейл.',
    'wallet.seed24.title': 'Фраза за възстановяване (24 думи)',
    'wallet.seed24.desc': 'Запишете тази фраза веднъж. Тя извежда данните и за TOS, и за UNO.',
    'copy.address.success': 'Адресът е копиран!',
    'copy.public.success': 'Публичният ключ е копиран!',
    'copy.private.success': 'Личният ключ е копиран. Изчистете клипборда след употреба.',
    'copy.seed.success': 'Фразата за възстановяване е копирана. Изчистете клипборда след употреба.',
    'warning.online': 'В момента сте онлайн. Изключете мрежата за максимална сигурност.',
    'secret.hidden.title': 'Чувствителните данни са скрити',
    'secret.hidden.private': 'QR кодът на личния ключ и суровият ключ няма да се покажат, докато изрично не ги разкриете.',
    'secret.hidden.seed': 'Фразата за възстановяване няма да бъде изписана на страницата, докато изрично не я разкриете.',
    'secret.private.hidden': 'Скрито по подразбиране. Показвайте само когато сте готови за архивиране или миграция.',
    'secret.private.visible': 'В момента се вижда на екрана. Скрийте го отново, преди да оставите устройството без надзор.',
    'secret.seed.hidden': 'Скрито по подразбиране. Показвайте само в надеждна офлайн среда.',
    'secret.seed.visible': 'В момента се вижда на екрана. Уверете се, че няма активна камера или запис на екрана.',
    'secret.confirm.private': 'Показването на личния ключ ще го разкрие на екрана. Да продължи ли?',
    'secret.confirm.seed': 'Показването на фразата за възстановяване ще я разкрие на екрана. Да продължи ли?',
    'secret.copy.blocked': 'Разкрийте чувствителните данни преди копиране.',
    'print.partial.confirm': 'Чувствителните секции все още са скрити и няма да бъдат включени в разпечатката. Да се отпечата ли само видимото?',
    'footer.text': 'Генератор на данни за TOS портфейл • Отворен код • Офлайн режим',
    'wallet.replace.confirm': 'Да се генерират ли нови данни за портфейла? Текущите данни ще бъдат заменени.',
    'wallet.replace.use_secondary': 'За да замените текущия портфейл, използвайте долния бутон "Генерирай нов портфейл" и потвърдете.'
  },
  de: {
    'app.title': 'TOS Wallet',
    'app.subtitle': 'Erzeuge offline TOS- und UNO-Wallet-Daten aus einer einzigen Wiederherstellungsphrase',
    'asset.legend': 'Wallet-Modus',
    'asset.heading': 'Wähle den Wallet-Modus, den du erzeugen möchtest',
    'asset.helper': 'Eine 24-Wörter-Wiederherstellungsphrase steuert sowohl das normale TOS-Wallet als auch das private UNO-Wallet.',
    'asset.tos': 'TOS',
    'asset.uno': 'UNO',
    'asset.tos.chip': 'Normal',
    'asset.uno.chip': 'Privat',
    'asset.tos.desc': 'Normale TOS-Bestände',
    'asset.uno.desc': 'Geheime UNO-Bestände',
    'action.print_visible': 'Sichtbare Ansicht drucken',
    'action.hide_all': 'Sensible Daten ausblenden',
    'action.reveal_private': 'Privaten Schlüssel anzeigen',
    'action.hide_private': 'Privaten Schlüssel ausblenden',
    'action.reveal_seed': 'Wiederherstellungsphrase anzeigen',
    'action.hide_seed': 'Wiederherstellungsphrase ausblenden',
    'wallet.header.kicker': 'Aktueller Wallet-Modus',
    'wallet.header.materials': 'Deine Wallet-Daten',
    'wallet.address.generic_desc': 'Teile diese Adresse, um Assets zu empfangen',
    'wallet.publickey.title': 'Öffentlicher Schlüssel',
    'wallet.publickey.desc': 'Signatur-Öffentlicher Schlüssel, abgeleitet aus dem gewählten Wallet-Modus',
    'wallet.privatekey.generic_desc': 'Diesen Schlüssel niemals weitergeben. Er kontrolliert das aktuelle Wallet.',
    'wallet.seed24.title': 'Wiederherstellungsphrase (24 Wörter)',
    'wallet.seed24.desc': 'Notiere diese Phrase einmal sicher. Sie leitet sowohl TOS- als auch UNO-Wallet-Daten ab.',
    'copy.address.success': 'Adresse kopiert!',
    'copy.public.success': 'Öffentlicher Schlüssel kopiert!',
    'copy.private.success': 'Privater Schlüssel kopiert. Lösche die Zwischenablage danach.',
    'copy.seed.success': 'Wiederherstellungsphrase kopiert. Lösche die Zwischenablage danach.',
    'warning.online': 'Du bist online. Trenne die Verbindung für maximale Sicherheit.',
    'secret.hidden.title': 'Sensible Daten sind verborgen',
    'secret.hidden.private': 'QR-Code und Rohwert des privaten Schlüssels bleiben aus der Seite heraus, bis du sie ausdrücklich anzeigst.',
    'secret.hidden.seed': 'Die Wiederherstellungsphrase wird erst dann in die Seite geschrieben, wenn du sie ausdrücklich anzeigst.',
    'secret.private.hidden': 'Standardmäßig verborgen. Nur anzeigen, wenn du dieses Wallet sichern oder migrieren willst.',
    'secret.private.visible': 'Auf dem Bildschirm sichtbar. Blende sie wieder aus, bevor du das Gerät unbeaufsichtigt lässt.',
    'secret.seed.hidden': 'Standardmäßig verborgen. Nur in einer vertrauenswürdigen Offline-Umgebung anzeigen.',
    'secret.seed.visible': 'Auf dem Bildschirm sichtbar. Stelle sicher, dass keine Kamera oder Bildschirmaufnahme aktiv ist.',
    'secret.confirm.private': 'Wenn du den privaten Schlüssel anzeigst, erscheint er auf dem Bildschirm. Fortfahren?',
    'secret.confirm.seed': 'Wenn du die Wiederherstellungsphrase anzeigst, erscheint sie auf dem Bildschirm. Fortfahren?',
    'secret.copy.blocked': 'Zeige sensible Daten an, bevor du sie kopierst.',
    'print.partial.confirm': 'Sensible Abschnitte sind noch verborgen und werden nicht mitgedruckt. Nur die sichtbare Ansicht drucken?',
    'footer.text': 'TOS Wallet-Datengenerator • Open Source • Offline-fähig',
    'wallet.replace.confirm': 'Neue Wallet-Daten erzeugen? Die aktuellen Daten werden ersetzt.',
    'wallet.replace.use_secondary': 'Um das aktuelle Wallet zu ersetzen, verwende bitte die untere Schaltfläche „Neue Wallet erzeugen“ und bestätige den Vorgang.'
  },
  es: {
    'app.title': 'Cartera TOS',
    'app.subtitle': 'Genera sin conexión los datos de las carteras TOS y UNO a partir de una sola frase de recuperación',
    'asset.legend': 'Modo de cartera',
    'asset.heading': 'Elige el modo de cartera que quieres generar',
    'asset.helper': 'Una frase de recuperación de 24 palabras controla tanto la cartera TOS normal como la cartera privada UNO.',
    'asset.tos': 'TOS',
    'asset.uno': 'UNO',
    'asset.tos.chip': 'Normal',
    'asset.uno.chip': 'Privacidad',
    'asset.tos.desc': 'Activos TOS normales',
    'asset.uno.desc': 'Activos UNO secretos',
    'action.print_visible': 'Imprimir vista visible',
    'action.hide_all': 'Ocultar datos sensibles',
    'action.reveal_private': 'Mostrar clave privada',
    'action.hide_private': 'Ocultar clave privada',
    'action.reveal_seed': 'Mostrar frase de recuperación',
    'action.hide_seed': 'Ocultar frase de recuperación',
    'wallet.header.kicker': 'Modo de cartera activo',
    'wallet.header.materials': 'Material de tu cartera',
    'wallet.address.generic_desc': 'Comparte esta dirección para recibir activos',
    'wallet.publickey.title': 'Clave pública',
    'wallet.publickey.desc': 'Clave pública de firma derivada del modo de cartera seleccionado',
    'wallet.privatekey.generic_desc': 'Nunca compartas esta clave. Controla la cartera actual.',
    'wallet.seed24.title': 'Frase de recuperación (24 palabras)',
    'wallet.seed24.desc': 'Anótala una sola vez. Deriva el material de las carteras TOS y UNO.',
    'copy.address.success': '¡Dirección copiada!',
    'copy.public.success': '¡Clave pública copiada!',
    'copy.private.success': 'Clave privada copiada. Limpia el portapapeles después de usarla.',
    'copy.seed.success': 'Frase de recuperación copiada. Limpia el portapapeles después de usarla.',
    'warning.online': 'Estás en línea. Desconéctate para obtener la máxima seguridad.',
    'secret.hidden.title': 'Material sensible oculto',
    'secret.hidden.private': 'El código QR y la clave privada sin procesar no se escribirán en la página hasta que los reveles explícitamente.',
    'secret.hidden.seed': 'La frase de recuperación no se escribirá en la página hasta que la reveles explícitamente.',
    'secret.private.hidden': 'Oculta por defecto. Muéstrala solo cuando estés listo para respaldar o migrar esta cartera.',
    'secret.private.visible': 'Visible en pantalla. Vuélvela a ocultar antes de dejar este dispositivo sin supervisión.',
    'secret.seed.hidden': 'Oculta por defecto. Muéstrala solo en un entorno confiable y sin conexión.',
    'secret.seed.visible': 'Visible en pantalla. Asegúrate de que no haya ninguna cámara o grabación de pantalla activa.',
    'secret.confirm.private': 'Mostrar la clave privada la expondrá en pantalla. ¿Continuar?',
    'secret.confirm.seed': 'Mostrar la frase de recuperación la expondrá en pantalla. ¿Continuar?',
    'secret.copy.blocked': 'Revela el material sensible antes de copiarlo.',
    'print.partial.confirm': 'Las secciones sensibles siguen ocultas y no se incluirán en la copia impresa. ¿Continuar e imprimir solo la vista visible?',
    'footer.text': 'Generador de datos de cartera TOS • Código abierto • Funciona sin conexión',
    'wallet.replace.confirm': '¿Generar un nuevo conjunto de datos de cartera? El material actual será reemplazado.',
    'wallet.replace.use_secondary': 'Para reemplazar la cartera actual, usa el botón inferior "Generar nueva cartera" y confirma.'
  },
  fr: {
    'app.title': 'Portefeuille TOS',
    'app.subtitle': 'Générez hors ligne les données des portefeuilles TOS et UNO à partir d’une seule phrase de récupération',
    'asset.legend': 'Mode du portefeuille',
    'asset.heading': 'Choisissez le mode de portefeuille à générer',
    'asset.helper': 'Une phrase de récupération de 24 mots contrôle à la fois le portefeuille TOS standard et le portefeuille privé UNO.',
    'asset.tos': 'TOS',
    'asset.uno': 'UNO',
    'asset.tos.chip': 'Standard',
    'asset.uno.chip': 'Privé',
    'asset.tos.desc': 'Actifs TOS standard',
    'asset.uno.desc': 'Actifs UNO secrets',
    'action.print_visible': 'Imprimer la vue visible',
    'action.hide_all': 'Masquer les données sensibles',
    'action.reveal_private': 'Afficher la clé privée',
    'action.hide_private': 'Masquer la clé privée',
    'action.reveal_seed': 'Afficher la phrase de récupération',
    'action.hide_seed': 'Masquer la phrase de récupération',
    'wallet.header.kicker': 'Mode de portefeuille actif',
    'wallet.header.materials': 'Données de votre portefeuille',
    'wallet.address.generic_desc': 'Partagez cette adresse pour recevoir des actifs',
    'wallet.publickey.title': 'Clé publique',
    'wallet.publickey.desc': 'Clé publique de signature dérivée du mode de portefeuille sélectionné',
    'wallet.privatekey.generic_desc': 'Ne partagez jamais cette clé. Elle contrôle le portefeuille actuel.',
    'wallet.seed24.title': 'Phrase de récupération (24 mots)',
    'wallet.seed24.desc': 'Notez-la une seule fois. Elle dérive les données des portefeuilles TOS et UNO.',
    'copy.address.success': 'Adresse copiée !',
    'copy.public.success': 'Clé publique copiée !',
    'copy.private.success': 'Clé privée copiée. Videz votre presse-papiers après usage.',
    'copy.seed.success': 'Phrase de récupération copiée. Videz votre presse-papiers après usage.',
    'warning.online': 'Vous êtes en ligne. Déconnectez-vous pour une sécurité maximale.',
    'secret.hidden.title': 'Données sensibles masquées',
    'secret.hidden.private': 'Le QR code de la clé privée et la clé brute restent hors de la page jusqu’à ce que vous les affichiez explicitement.',
    'secret.hidden.seed': 'La phrase de récupération n’est pas écrite dans la page tant que vous ne l’affichez pas explicitement.',
    'secret.private.hidden': 'Masquée par défaut. Affichez-la uniquement lorsque vous êtes prêt à sauvegarder ou migrer ce portefeuille.',
    'secret.private.visible': 'Visible à l’écran. Masquez-la de nouveau avant de laisser cet appareil sans surveillance.',
    'secret.seed.hidden': 'Masquée par défaut. Affichez-la uniquement dans un environnement hors ligne de confiance.',
    'secret.seed.visible': 'Visible à l’écran. Vérifiez qu’aucune caméra ni capture d’écran vidéo n’est active.',
    'secret.confirm.private': 'Afficher la clé privée l’exposera à l’écran. Continuer ?',
    'secret.confirm.seed': 'Afficher la phrase de récupération l’exposera à l’écran. Continuer ?',
    'secret.copy.blocked': 'Affichez les données sensibles avant de les copier.',
    'print.partial.confirm': 'Les sections sensibles sont encore masquées et ne seront pas incluses dans l’impression. Continuer avec la vue visible uniquement ?',
    'footer.text': 'Générateur de données de portefeuille TOS • Open source • Hors ligne',
    'wallet.replace.confirm': 'Générer de nouvelles données de portefeuille ? Les données actuelles seront remplacées.',
    'wallet.replace.use_secondary': 'Pour remplacer le portefeuille actuel, utilisez le bouton inférieur « Générer un nouveau portefeuille » et confirmez.'
  },
  hi: {
    'app.title': 'TOS वॉलेट',
    'app.subtitle': 'एक ही रिकवरी फ़्रेज़ से TOS और UNO वॉलेट सामग्री ऑफ़लाइन बनाएं',
    'asset.legend': 'वॉलेट मोड',
    'asset.heading': 'वह वॉलेट मोड चुनें जिसे आप बनाना चाहते हैं',
    'asset.helper': '24 शब्दों वाली एक रिकवरी फ़्रेज़ TOS सामान्य वॉलेट और UNO प्राइवेसी वॉलेट दोनों को नियंत्रित करती है।',
    'asset.tos': 'TOS',
    'asset.uno': 'UNO',
    'asset.tos.chip': 'सामान्य',
    'asset.uno.chip': 'गोपनीयता',
    'asset.tos.desc': 'सामान्य TOS एसेट्स',
    'asset.uno.desc': 'गुप्त UNO एसेट्स',
    'action.print_visible': 'दिखाई देने वाला दृश्य प्रिंट करें',
    'action.hide_all': 'संवेदनशील डेटा छिपाएं',
    'action.reveal_private': 'प्राइवेट की दिखाएं',
    'action.hide_private': 'प्राइवेट की छिपाएं',
    'action.reveal_seed': 'रिकवरी फ़्रेज़ दिखाएं',
    'action.hide_seed': 'रिकवरी फ़्रेज़ छिपाएं',
    'wallet.header.kicker': 'वर्तमान वॉलेट मोड',
    'wallet.header.materials': 'आपकी वॉलेट सामग्री',
    'wallet.address.generic_desc': 'एसेट्स प्राप्त करने के लिए यह पता साझा करें',
    'wallet.publickey.title': 'पब्लिक की',
    'wallet.publickey.desc': 'चयनित वॉलेट मोड से निकली हस्ताक्षर पब्लिक की',
    'wallet.privatekey.generic_desc': 'इस कुंजी को कभी साझा न करें। यह वर्तमान वॉलेट को नियंत्रित करती है।',
    'wallet.seed24.title': 'रिकवरी फ़्रेज़ (24 शब्द)',
    'wallet.seed24.desc': 'इसे एक बार सुरक्षित रूप से लिख लें। इससे TOS और UNO दोनों वॉलेट सामग्री निकलती है।',
    'copy.address.success': 'पता कॉपी हो गया!',
    'copy.public.success': 'पब्लिक की कॉपी हो गई!',
    'copy.private.success': 'प्राइवेट की कॉपी हो गई। उपयोग के बाद क्लिपबोर्ड साफ करें।',
    'copy.seed.success': 'रिकवरी फ़्रेज़ कॉपी हो गई। उपयोग के बाद क्लिपबोर्ड साफ करें।',
    'warning.online': 'आप अभी ऑनलाइन हैं। अधिकतम सुरक्षा के लिए इंटरनेट से डिस्कनेक्ट करें।',
    'secret.hidden.title': 'संवेदनशील सामग्री छिपी हुई है',
    'secret.hidden.private': 'प्राइवेट की QR कोड और कच्ची कुंजी तब तक पेज पर नहीं आएगी जब तक आप उसे स्पष्ट रूप से न दिखाएं।',
    'secret.hidden.seed': 'रिकवरी फ़्रेज़ तब तक पेज पर नहीं लिखी जाएगी जब तक आप उसे स्पष्ट रूप से न दिखाएं।',
    'secret.private.hidden': 'डिफ़ॉल्ट रूप से छिपी हुई। केवल तब दिखाएं जब आप बैकअप या माइग्रेशन के लिए तैयार हों।',
    'secret.private.visible': 'यह अभी स्क्रीन पर दिख रही है। डिवाइस छोड़ने से पहले इसे फिर छिपा दें।',
    'secret.seed.hidden': 'डिफ़ॉल्ट रूप से छिपी हुई। केवल विश्वसनीय ऑफ़लाइन वातावरण में दिखाएं।',
    'secret.seed.visible': 'यह अभी स्क्रीन पर दिख रही है। सुनिश्चित करें कि कोई कैमरा या स्क्रीन रिकॉर्डिंग चालू न हो।',
    'secret.confirm.private': 'प्राइवेट की दिखाने से यह स्क्रीन पर दिखाई देगी। क्या जारी रखें?',
    'secret.confirm.seed': 'रिकवरी फ़्रेज़ दिखाने से यह स्क्रीन पर दिखाई देगी। क्या जारी रखें?',
    'secret.copy.blocked': 'कॉपी करने से पहले संवेदनशील सामग्री दिखाएं।',
    'print.partial.confirm': 'संवेदनशील सेक्शन अभी भी छिपे हैं और प्रिंट में शामिल नहीं होंगे। क्या केवल दिखाई देने वाला दृश्य प्रिंट करना जारी रखें?',
    'footer.text': 'TOS वॉलेट डेटा जनरेटर • ओपन सोर्स • ऑफ़लाइन सक्षम',
    'wallet.replace.confirm': 'क्या नया वॉलेट डेटा बनाना है? मौजूदा सामग्री बदल दी जाएगी।',
    'wallet.replace.use_secondary': 'मौजूदा वॉलेट बदलने के लिए नीचे वाले नए वॉलेट बटन का उपयोग करके पुष्टि करें।'
  },
  it: {
    'app.title': 'Portafoglio TOS',
    'app.subtitle': 'Genera offline i dati dei wallet TOS e UNO da un\'unica frase di recupero',
    'asset.legend': 'Modalità wallet',
    'asset.heading': 'Scegli la modalità wallet da generare',
    'asset.helper': 'Una frase di recupero di 24 parole controlla sia il wallet TOS normale sia il wallet privato UNO.',
    'asset.tos': 'TOS',
    'asset.uno': 'UNO',
    'asset.tos.chip': 'Normale',
    'asset.uno.chip': 'Privacy',
    'asset.tos.desc': 'Asset TOS normali',
    'asset.uno.desc': 'Asset UNO segreti',
    'action.print_visible': 'Stampa la vista visibile',
    'action.hide_all': 'Nascondi dati sensibili',
    'action.reveal_private': 'Mostra chiave privata',
    'action.hide_private': 'Nascondi chiave privata',
    'action.reveal_seed': 'Mostra frase di recupero',
    'action.hide_seed': 'Nascondi frase di recupero',
    'wallet.header.kicker': 'Modalità wallet attiva',
    'wallet.header.materials': 'Dati del tuo wallet',
    'wallet.address.generic_desc': 'Condividi questo indirizzo per ricevere asset',
    'wallet.publickey.title': 'Chiave pubblica',
    'wallet.publickey.desc': 'Chiave pubblica di firma derivata dalla modalità wallet selezionata',
    'wallet.privatekey.generic_desc': 'Non condividere mai questa chiave. Controlla il wallet attuale.',
    'wallet.seed24.title': 'Frase di recupero (24 parole)',
    'wallet.seed24.desc': 'Annotala una sola volta. Deriva i dati dei wallet TOS e UNO.',
    'copy.address.success': 'Indirizzo copiato!',
    'copy.public.success': 'Chiave pubblica copiata!',
    'copy.private.success': 'Chiave privata copiata. Svuota gli appunti dopo l\'uso.',
    'copy.seed.success': 'Frase di recupero copiata. Svuota gli appunti dopo l\'uso.',
    'warning.online': 'Sei online. Disconnettiti per la massima sicurezza.',
    'secret.hidden.title': 'Dati sensibili nascosti',
    'secret.hidden.private': 'Il QR code della chiave privata e la chiave grezza non verranno scritti nella pagina finché non li mostri esplicitamente.',
    'secret.hidden.seed': 'La frase di recupero non verrà scritta nella pagina finché non la mostri esplicitamente.',
    'secret.private.hidden': 'Nascosta per default. Mostrala solo quando sei pronto a fare un backup o una migrazione.',
    'secret.private.visible': 'Visibile sullo schermo. Nascondila di nuovo prima di lasciare il dispositivo incustodito.',
    'secret.seed.hidden': 'Nascosta per default. Mostrala solo in un ambiente offline affidabile.',
    'secret.seed.visible': 'Visibile sullo schermo. Assicurati che non ci siano fotocamere o registrazioni dello schermo attive.',
    'secret.confirm.private': 'Mostrare la chiave privata la esporrà sullo schermo. Continuare?',
    'secret.confirm.seed': 'Mostrare la frase di recupero la esporrà sullo schermo. Continuare?',
    'secret.copy.blocked': 'Mostra i dati sensibili prima di copiarli.',
    'print.partial.confirm': 'Le sezioni sensibili sono ancora nascoste e non saranno incluse nella stampa. Continuare stampando solo la vista visibile?',
    'footer.text': 'Generatore dati wallet TOS • Open source • Utilizzabile offline',
    'wallet.replace.confirm': 'Generare nuovi dati del wallet? I dati attuali verranno sostituiti.',
    'wallet.replace.use_secondary': 'Per sostituire il wallet attuale, usa il pulsante in basso per generare un nuovo wallet e conferma.'
  },
  ms: {
    'app.title': 'Dompet TOS',
    'app.subtitle': 'Jana bahan dompet TOS dan UNO secara luar talian daripada satu frasa pemulihan',
    'asset.legend': 'Mod dompet',
    'asset.heading': 'Pilih mod dompet yang ingin dijana',
    'asset.helper': 'Satu frasa pemulihan 24 perkataan mengawal kedua-dua dompet TOS biasa dan dompet privasi UNO.',
    'asset.tos': 'TOS',
    'asset.uno': 'UNO',
    'asset.tos.chip': 'Biasa',
    'asset.uno.chip': 'Privasi',
    'asset.tos.desc': 'Aset TOS biasa',
    'asset.uno.desc': 'Aset UNO rahsia',
    'action.print_visible': 'Cetak paparan yang kelihatan',
    'action.hide_all': 'Sembunyikan data sensitif',
    'action.reveal_private': 'Tunjukkan kunci peribadi',
    'action.hide_private': 'Sembunyikan kunci peribadi',
    'action.reveal_seed': 'Tunjukkan frasa pemulihan',
    'action.hide_seed': 'Sembunyikan frasa pemulihan',
    'wallet.header.kicker': 'Mod dompet semasa',
    'wallet.header.materials': 'Bahan dompet anda',
    'wallet.address.generic_desc': 'Kongsi alamat ini untuk menerima aset',
    'wallet.publickey.title': 'Kunci awam',
    'wallet.publickey.desc': 'Kunci awam tandatangan yang diterbitkan daripada mod dompet yang dipilih',
    'wallet.privatekey.generic_desc': 'Jangan sekali-kali berkongsi kunci ini. Ia mengawal dompet semasa.',
    'wallet.seed24.title': 'Frasa pemulihan (24 perkataan)',
    'wallet.seed24.desc': 'Tulis sekali sahaja. Ia menerbitkan bahan dompet TOS dan UNO.',
    'copy.address.success': 'Alamat disalin!',
    'copy.public.success': 'Kunci awam disalin!',
    'copy.private.success': 'Kunci peribadi disalin. Kosongkan papan klip selepas digunakan.',
    'copy.seed.success': 'Frasa pemulihan disalin. Kosongkan papan klip selepas digunakan.',
    'warning.online': 'Anda sedang dalam talian. Putuskan sambungan untuk keselamatan maksimum.',
    'secret.hidden.title': 'Bahan sensitif disembunyikan',
    'secret.hidden.private': 'Kod QR kunci peribadi dan kunci mentah tidak akan dimasukkan ke dalam halaman sehingga anda mendedahkannya secara jelas.',
    'secret.hidden.seed': 'Frasa pemulihan tidak akan ditulis ke dalam halaman sehingga anda mendedahkannya secara jelas.',
    'secret.private.hidden': 'Disembunyikan secara lalai. Dedahkan hanya apabila anda bersedia untuk membuat sandaran atau migrasi.',
    'secret.private.visible': 'Sedang kelihatan pada skrin. Sembunyikan semula sebelum meninggalkan peranti ini tanpa pengawasan.',
    'secret.seed.hidden': 'Disembunyikan secara lalai. Dedahkan hanya dalam persekitaran luar talian yang dipercayai.',
    'secret.seed.visible': 'Sedang kelihatan pada skrin. Pastikan tiada kamera atau rakaman skrin yang aktif.',
    'secret.confirm.private': 'Mendedahkan kunci peribadi akan memaparkannya pada skrin. Teruskan?',
    'secret.confirm.seed': 'Mendedahkan frasa pemulihan akan memaparkannya pada skrin. Teruskan?',
    'secret.copy.blocked': 'Dedahkan bahan sensitif sebelum menyalinnya.',
    'print.partial.confirm': 'Bahagian sensitif masih disembunyikan dan tidak akan disertakan dalam cetakan. Teruskan dengan mencetak paparan yang kelihatan sahaja?',
    'footer.text': 'Penjana data dompet TOS • Sumber terbuka • Boleh digunakan luar talian',
    'wallet.replace.confirm': 'Jana bahan dompet baharu? Bahan semasa akan digantikan.',
    'wallet.replace.use_secondary': 'Untuk menggantikan dompet semasa, gunakan butang bawah "Jana Dompet Baharu" dan sahkan.'
  },
  nl: {
    'app.title': 'TOS Wallet',
    'app.subtitle': 'Genereer offline TOS- en UNO-walletgegevens uit één herstelzin',
    'asset.legend': 'Walletmodus',
    'asset.heading': 'Kies welke walletmodus je wilt genereren',
    'asset.helper': 'Eén herstelzin van 24 woorden beheert zowel de normale TOS-wallet als de privé UNO-wallet.',
    'asset.tos': 'TOS',
    'asset.uno': 'UNO',
    'asset.tos.chip': 'Normaal',
    'asset.uno.chip': 'Privacy',
    'asset.tos.desc': 'Normale TOS-assets',
    'asset.uno.desc': 'Geheime UNO-assets',
    'action.print_visible': 'Zichtbare weergave afdrukken',
    'action.hide_all': 'Gevoelige gegevens verbergen',
    'action.reveal_private': 'Privésleutel tonen',
    'action.hide_private': 'Privésleutel verbergen',
    'action.reveal_seed': 'Herstelzin tonen',
    'action.hide_seed': 'Herstelzin verbergen',
    'wallet.header.kicker': 'Actieve walletmodus',
    'wallet.header.materials': 'Je walletgegevens',
    'wallet.address.generic_desc': 'Deel dit adres om assets te ontvangen',
    'wallet.publickey.title': 'Openbare sleutel',
    'wallet.publickey.desc': 'Publieke ondertekeningssleutel afgeleid van de geselecteerde walletmodus',
    'wallet.privatekey.generic_desc': 'Deel deze sleutel nooit. Hij beheert de huidige wallet.',
    'wallet.seed24.title': 'Herstelzin (24 woorden)',
    'wallet.seed24.desc': 'Schrijf deze één keer op. Hiermee worden zowel TOS- als UNO-walletgegevens afgeleid.',
    'copy.address.success': 'Adres gekopieerd!',
    'copy.public.success': 'Openbare sleutel gekopieerd!',
    'copy.private.success': 'Privésleutel gekopieerd. Maak daarna je klembord leeg.',
    'copy.seed.success': 'Herstelzin gekopieerd. Maak daarna je klembord leeg.',
    'warning.online': 'Je bent online. Verbreek de verbinding voor maximale veiligheid.',
    'secret.hidden.title': 'Gevoelige gegevens verborgen',
    'secret.hidden.private': 'De QR-code van de privésleutel en de ruwe sleutel blijven buiten de pagina totdat je ze expliciet toont.',
    'secret.hidden.seed': 'De herstelzin wordt pas in de pagina geschreven wanneer je die expliciet toont.',
    'secret.private.hidden': 'Standaard verborgen. Toon alleen wanneer je klaar bent om deze wallet te back-uppen of te migreren.',
    'secret.private.visible': 'Zichtbaar op het scherm. Verberg opnieuw voordat je dit apparaat onbeheerd achterlaat.',
    'secret.seed.hidden': 'Standaard verborgen. Toon alleen in een vertrouwde offline omgeving.',
    'secret.seed.visible': 'Zichtbaar op het scherm. Controleer dat er geen camera of schermopname actief is.',
    'secret.confirm.private': 'Als je de privésleutel toont, wordt die zichtbaar op het scherm. Doorgaan?',
    'secret.confirm.seed': 'Als je de herstelzin toont, wordt die zichtbaar op het scherm. Doorgaan?',
    'secret.copy.blocked': 'Toon gevoelige gegevens voordat je ze kopieert.',
    'print.partial.confirm': 'Gevoelige secties zijn nog verborgen en worden niet afgedrukt. Alleen de zichtbare weergave afdrukken?',
    'footer.text': 'TOS wallet-datagenerator • Open source • Offline bruikbaar',
    'wallet.replace.confirm': 'Nieuwe walletgegevens genereren? De huidige gegevens worden vervangen.',
    'wallet.replace.use_secondary': 'Gebruik de onderste knop "Nieuwe wallet genereren" om vervanging van de huidige wallet te bevestigen.'
  },
  pl: {
    'app.title': 'Portfel TOS',
    'app.subtitle': 'Generuj offline dane portfeli TOS i UNO z jednej frazy odzyskiwania',
    'asset.legend': 'Tryb portfela',
    'asset.heading': 'Wybierz tryb portfela, który chcesz wygenerować',
    'asset.helper': 'Jedna 24-wyrazowa fraza odzyskiwania obsługuje zarówno zwykły portfel TOS, jak i prywatny portfel UNO.',
    'asset.tos': 'TOS',
    'asset.uno': 'UNO',
    'asset.tos.chip': 'Zwykły',
    'asset.uno.chip': 'Prywatny',
    'asset.tos.desc': 'Zwykłe aktywa TOS',
    'asset.uno.desc': 'Sekretne aktywa UNO',
    'action.print_visible': 'Drukuj widoczny widok',
    'action.hide_all': 'Ukryj dane wrażliwe',
    'action.reveal_private': 'Pokaż klucz prywatny',
    'action.hide_private': 'Ukryj klucz prywatny',
    'action.reveal_seed': 'Pokaż frazę odzyskiwania',
    'action.hide_seed': 'Ukryj frazę odzyskiwania',
    'wallet.header.kicker': 'Bieżący tryb portfela',
    'wallet.header.materials': 'Dane portfela',
    'wallet.address.generic_desc': 'Udostępnij ten adres, aby otrzymywać aktywa',
    'wallet.publickey.title': 'Klucz publiczny',
    'wallet.publickey.desc': 'Klucz publiczny podpisu wyprowadzony z wybranego trybu portfela',
    'wallet.privatekey.generic_desc': 'Nigdy nie udostępniaj tego klucza. Kontroluje bieżący portfel.',
    'wallet.seed24.title': 'Fraza odzyskiwania (24 słowa)',
    'wallet.seed24.desc': 'Zapisz ją raz. Wyprowadza dane portfeli TOS i UNO.',
    'copy.address.success': 'Skopiowano adres!',
    'copy.public.success': 'Skopiowano klucz publiczny!',
    'copy.private.success': 'Skopiowano klucz prywatny. Wyczyść schowek po użyciu.',
    'copy.seed.success': 'Skopiowano frazę odzyskiwania. Wyczyść schowek po użyciu.',
    'warning.online': 'Jesteś online. Odłącz się dla maksymalnego bezpieczeństwa.',
    'secret.hidden.title': 'Dane wrażliwe są ukryte',
    'secret.hidden.private': 'Kod QR klucza prywatnego i surowy klucz nie trafią na stronę, dopóki nie pokażesz ich świadomie.',
    'secret.hidden.seed': 'Fraza odzyskiwania nie zostanie wpisana na stronę, dopóki nie pokażesz jej świadomie.',
    'secret.private.hidden': 'Ukryte domyślnie. Pokaż tylko wtedy, gdy jesteś gotowy do kopii zapasowej lub migracji portfela.',
    'secret.private.visible': 'Widoczne na ekranie. Ukryj ponownie, zanim zostawisz to urządzenie bez nadzoru.',
    'secret.seed.hidden': 'Ukryte domyślnie. Pokaż tylko w zaufanym środowisku offline.',
    'secret.seed.visible': 'Widoczne na ekranie. Upewnij się, że żadna kamera ani nagrywanie ekranu nie są aktywne.',
    'secret.confirm.private': 'Pokazanie klucza prywatnego wyświetli go na ekranie. Kontynuować?',
    'secret.confirm.seed': 'Pokazanie frazy odzyskiwania wyświetli ją na ekranie. Kontynuować?',
    'secret.copy.blocked': 'Pokaż dane wrażliwe przed ich skopiowaniem.',
    'print.partial.confirm': 'Wrażliwe sekcje są nadal ukryte i nie zostaną dołączone do wydruku. Kontynuować i wydrukować tylko widoczny widok?',
    'footer.text': 'Generator danych portfela TOS • Open source • Tryb offline',
    'wallet.replace.confirm': 'Wygenerować nowe dane portfela? Obecne dane zostaną zastąpione.',
    'wallet.replace.use_secondary': 'Aby zastąpić bieżący portfel, użyj dolnego przycisku „Generuj nowy portfel” i potwierdź.'
  },
  pt: {
    'app.title': 'Carteira TOS',
    'app.subtitle': 'Gere offline os dados das carteiras TOS e UNO a partir de uma única frase de recuperação',
    'asset.legend': 'Modo da carteira',
    'asset.heading': 'Escolha o modo de carteira que deseja gerar',
    'asset.helper': 'Uma frase de recuperação de 24 palavras controla tanto a carteira TOS normal quanto a carteira privada UNO.',
    'asset.tos': 'TOS',
    'asset.uno': 'UNO',
    'asset.tos.chip': 'Normal',
    'asset.uno.chip': 'Privacidade',
    'asset.tos.desc': 'Ativos TOS normais',
    'asset.uno.desc': 'Ativos UNO secretos',
    'action.print_visible': 'Imprimir visualização visível',
    'action.hide_all': 'Ocultar dados sensíveis',
    'action.reveal_private': 'Mostrar chave privada',
    'action.hide_private': 'Ocultar chave privada',
    'action.reveal_seed': 'Mostrar frase de recuperação',
    'action.hide_seed': 'Ocultar frase de recuperação',
    'wallet.header.kicker': 'Modo de carteira ativo',
    'wallet.header.materials': 'Dados da sua carteira',
    'wallet.address.generic_desc': 'Compartilhe este endereço para receber ativos',
    'wallet.publickey.title': 'Chave pública',
    'wallet.publickey.desc': 'Chave pública de assinatura derivada do modo de carteira selecionado',
    'wallet.privatekey.generic_desc': 'Nunca compartilhe esta chave. Ela controla a carteira atual.',
    'wallet.seed24.title': 'Frase de recuperação (24 palavras)',
    'wallet.seed24.desc': 'Anote-a uma única vez. Ela deriva os dados das carteiras TOS e UNO.',
    'copy.address.success': 'Endereço copiado!',
    'copy.public.success': 'Chave pública copiada!',
    'copy.private.success': 'Chave privada copiada. Limpe a área de transferência após o uso.',
    'copy.seed.success': 'Frase de recuperação copiada. Limpe a área de transferência após o uso.',
    'warning.online': 'Você está online. Desconecte-se para máxima segurança.',
    'secret.hidden.title': 'Dados sensíveis ocultos',
    'secret.hidden.private': 'O QR code da chave privada e a chave bruta não entrarão na página até que você os revele explicitamente.',
    'secret.hidden.seed': 'A frase de recuperação não será escrita na página até que você a revele explicitamente.',
    'secret.private.hidden': 'Oculta por padrão. Revele apenas quando estiver pronto para fazer backup ou migrar esta carteira.',
    'secret.private.visible': 'Visível na tela. Oculte novamente antes de deixar este dispositivo sem supervisão.',
    'secret.seed.hidden': 'Oculta por padrão. Revele apenas em um ambiente offline confiável.',
    'secret.seed.visible': 'Visível na tela. Verifique se não há câmera ou gravação de tela ativa.',
    'secret.confirm.private': 'Revelar a chave privada irá expô-la na tela. Continuar?',
    'secret.confirm.seed': 'Revelar a frase de recuperação irá expô-la na tela. Continuar?',
    'secret.copy.blocked': 'Revele os dados sensíveis antes de copiá-los.',
    'print.partial.confirm': 'As seções sensíveis ainda estão ocultas e não serão incluídas na impressão. Continuar imprimindo apenas a visualização visível?',
    'footer.text': 'Gerador de dados da carteira TOS • Código aberto • Funciona offline',
    'wallet.replace.confirm': 'Gerar novos dados da carteira? Os dados atuais serão substituídos.',
    'wallet.replace.use_secondary': 'Para substituir a carteira atual, use o botão inferior "Gerar nova carteira" e confirme.'
  },
  ru: {
    'app.title': 'Кошелек TOS',
    'app.subtitle': 'Создавайте офлайн данные кошельков TOS и UNO из одной фразы восстановления',
    'asset.legend': 'Режим кошелька',
    'asset.heading': 'Выберите режим кошелька, который хотите создать',
    'asset.helper': 'Одна фраза восстановления из 24 слов управляет как обычным кошельком TOS, так и приватным кошельком UNO.',
    'asset.tos': 'TOS',
    'asset.uno': 'UNO',
    'asset.tos.chip': 'Обычный',
    'asset.uno.chip': 'Приватность',
    'asset.tos.desc': 'Обычные активы TOS',
    'asset.uno.desc': 'Секретные активы UNO',
    'action.print_visible': 'Печать видимого содержимого',
    'action.hide_all': 'Скрыть чувствительные данные',
    'action.reveal_private': 'Показать приватный ключ',
    'action.hide_private': 'Скрыть приватный ключ',
    'action.reveal_seed': 'Показать фразу восстановления',
    'action.hide_seed': 'Скрыть фразу восстановления',
    'wallet.header.kicker': 'Текущий режим кошелька',
    'wallet.header.materials': 'Данные вашего кошелька',
    'wallet.address.generic_desc': 'Поделитесь этим адресом, чтобы получать активы',
    'wallet.publickey.title': 'Публичный ключ',
    'wallet.publickey.desc': 'Публичный ключ подписи, полученный из выбранного режима кошелька',
    'wallet.privatekey.generic_desc': 'Никогда не делитесь этим ключом. Он управляет текущим кошельком.',
    'wallet.seed24.title': 'Фраза восстановления (24 слова)',
    'wallet.seed24.desc': 'Запишите ее один раз. Она выводит данные кошельков TOS и UNO.',
    'copy.address.success': 'Адрес скопирован!',
    'copy.public.success': 'Публичный ключ скопирован!',
    'copy.private.success': 'Приватный ключ скопирован. Очистите буфер обмена после использования.',
    'copy.seed.success': 'Фраза восстановления скопирована. Очистите буфер обмена после использования.',
    'warning.online': 'Сейчас вы в сети. Отключитесь для максимальной безопасности.',
    'secret.hidden.title': 'Чувствительные данные скрыты',
    'secret.hidden.private': 'QR-код приватного ключа и сам ключ не будут добавлены на страницу, пока вы явно их не покажете.',
    'secret.hidden.seed': 'Фраза восстановления не будет записана на страницу, пока вы явно ее не покажете.',
    'secret.private.hidden': 'Скрыто по умолчанию. Показывайте только когда готовы сделать резервную копию или перенести кошелек.',
    'secret.private.visible': 'Сейчас видно на экране. Снова скройте перед тем, как оставить устройство без присмотра.',
    'secret.seed.hidden': 'Скрыто по умолчанию. Показывайте только в доверенной офлайн-среде.',
    'secret.seed.visible': 'Сейчас видно на экране. Убедитесь, что камера и запись экрана выключены.',
    'secret.confirm.private': 'Показ приватного ключа выведет его на экран. Продолжить?',
    'secret.confirm.seed': 'Показ фразы восстановления выведет ее на экран. Продолжить?',
    'secret.copy.blocked': 'Сначала покажите чувствительные данные, затем копируйте.',
    'print.partial.confirm': 'Чувствительные разделы все еще скрыты и не будут включены в печать. Продолжить и распечатать только видимую часть?',
    'footer.text': 'Генератор данных кошелька TOS • Открытый исходный код • Офлайн-режим',
    'wallet.replace.confirm': 'Создать новые данные кошелька? Текущие данные будут заменены.',
    'wallet.replace.use_secondary': 'Чтобы заменить текущий кошелек, используйте нижнюю кнопку «Создать новый кошелек» и подтвердите действие.'
  },
  tr: {
    'app.title': 'TOS Cüzdanı',
    'app.subtitle': 'Tek bir kurtarma ifadesinden TOS ve UNO cüzdan verilerini çevrimdışı üretin',
    'asset.legend': 'Cüzdan modu',
    'asset.heading': 'Oluşturmak istediğiniz cüzdan modunu seçin',
    'asset.helper': '24 kelimelik tek bir kurtarma ifadesi hem normal TOS cüzdanını hem de UNO gizlilik cüzdanını kontrol eder.',
    'asset.tos': 'TOS',
    'asset.uno': 'UNO',
    'asset.tos.chip': 'Normal',
    'asset.uno.chip': 'Gizlilik',
    'asset.tos.desc': 'Normal TOS varlıkları',
    'asset.uno.desc': 'Gizli UNO varlıkları',
    'action.print_visible': 'Görünen görünümü yazdır',
    'action.hide_all': 'Hassas verileri gizle',
    'action.reveal_private': 'Özel anahtarı göster',
    'action.hide_private': 'Özel anahtarı gizle',
    'action.reveal_seed': 'Kurtarma ifadesini göster',
    'action.hide_seed': 'Kurtarma ifadesini gizle',
    'wallet.header.kicker': 'Geçerli cüzdan modu',
    'wallet.header.materials': 'Cüzdan verileriniz',
    'wallet.address.generic_desc': 'Varlık almak için bu adresi paylaşın',
    'wallet.publickey.title': 'Açık anahtar',
    'wallet.publickey.desc': 'Seçilen cüzdan modundan türetilen imza açık anahtarı',
    'wallet.privatekey.generic_desc': 'Bu anahtarı asla paylaşmayın. Mevcut cüzdanı kontrol eder.',
    'wallet.seed24.title': 'Kurtarma ifadesi (24 kelime)',
    'wallet.seed24.desc': 'Bunu bir kez yazın. Hem TOS hem de UNO cüzdan verilerini türetir.',
    'copy.address.success': 'Adres kopyalandı!',
    'copy.public.success': 'Açık anahtar kopyalandı!',
    'copy.private.success': 'Özel anahtar kopyalandı. Kullandıktan sonra panoyu temizleyin.',
    'copy.seed.success': 'Kurtarma ifadesi kopyalandı. Kullandıktan sonra panoyu temizleyin.',
    'warning.online': 'Şu anda çevrimiçisiniz. En yüksek güvenlik için bağlantıyı kesin.',
    'secret.hidden.title': 'Hassas veriler gizlendi',
    'secret.hidden.private': 'Özel anahtar QR kodu ve ham anahtar, siz açıkça gösterene kadar sayfaya yazılmaz.',
    'secret.hidden.seed': 'Kurtarma ifadesi, siz açıkça gösterene kadar sayfaya yazılmaz.',
    'secret.private.hidden': 'Varsayılan olarak gizli. Yalnızca yedekleme veya taşıma için hazır olduğunuzda gösterin.',
    'secret.private.visible': 'Şu anda ekranda görünüyor. Cihazı gözetimsiz bırakmadan önce yeniden gizleyin.',
    'secret.seed.hidden': 'Varsayılan olarak gizli. Yalnızca güvenilir bir çevrimdışı ortamda gösterin.',
    'secret.seed.visible': 'Şu anda ekranda görünüyor. Kamera veya ekran kaydının açık olmadığından emin olun.',
    'secret.confirm.private': 'Özel anahtarı göstermek onu ekranda açığa çıkaracaktır. Devam edilsin mi?',
    'secret.confirm.seed': 'Kurtarma ifadesini göstermek onu ekranda açığa çıkaracaktır. Devam edilsin mi?',
    'secret.copy.blocked': 'Kopyalamadan önce hassas verileri gösterin.',
    'print.partial.confirm': 'Hassas bölümler hâlâ gizli ve çıktıya dahil edilmeyecek. Yalnızca görünen görünüm yazdırılsın mı?',
    'footer.text': 'TOS cüzdan veri oluşturucu • Açık kaynak • Çevrimdışı kullanılabilir',
    'wallet.replace.confirm': 'Yeni cüzdan verileri oluşturulsun mu? Mevcut veriler değiştirilecektir.',
    'wallet.replace.use_secondary': 'Mevcut cüzdanı değiştirmek için alttaki "Yeni cüzdan oluştur" düğmesini kullanıp onaylayın.'
  },
  uk: {
    'app.title': 'Гаманець TOS',
    'app.subtitle': 'Створюйте офлайн дані гаманців TOS і UNO з однієї фрази відновлення',
    'asset.legend': 'Режим гаманця',
    'asset.heading': 'Оберіть режим гаманця, який хочете створити',
    'asset.helper': 'Одна фраза відновлення з 24 слів керує і звичайним гаманцем TOS, і приватним гаманцем UNO.',
    'asset.tos': 'TOS',
    'asset.uno': 'UNO',
    'asset.tos.chip': 'Звичайний',
    'asset.uno.chip': 'Приватність',
    'asset.tos.desc': 'Звичайні активи TOS',
    'asset.uno.desc': 'Секретні активи UNO',
    'action.print_visible': 'Друкувати видимий вміст',
    'action.hide_all': 'Приховати чутливі дані',
    'action.reveal_private': 'Показати приватний ключ',
    'action.hide_private': 'Приховати приватний ключ',
    'action.reveal_seed': 'Показати фразу відновлення',
    'action.hide_seed': 'Приховати фразу відновлення',
    'wallet.header.kicker': 'Поточний режим гаманця',
    'wallet.header.materials': 'Дані вашого гаманця',
    'wallet.address.generic_desc': 'Поділіться цією адресою, щоб отримувати активи',
    'wallet.publickey.title': 'Публічний ключ',
    'wallet.publickey.desc': 'Публічний ключ підпису, отриманий з вибраного режиму гаманця',
    'wallet.privatekey.generic_desc': 'Ніколи не діліться цим ключем. Він контролює поточний гаманець.',
    'wallet.seed24.title': 'Фраза відновлення (24 слова)',
    'wallet.seed24.desc': 'Запишіть її один раз. Вона виводить дані гаманців TOS і UNO.',
    'copy.address.success': 'Адресу скопійовано!',
    'copy.public.success': 'Публічний ключ скопійовано!',
    'copy.private.success': 'Приватний ключ скопійовано. Очистьте буфер обміну після використання.',
    'copy.seed.success': 'Фразу відновлення скопійовано. Очистьте буфер обміну після використання.',
    'warning.online': 'Ви зараз онлайн. Відключіться для максимальної безпеки.',
    'secret.hidden.title': 'Чутливі дані приховано',
    'secret.hidden.private': 'QR-код приватного ключа та сам ключ не будуть додані на сторінку, доки ви явно їх не покажете.',
    'secret.hidden.seed': 'Фраза відновлення не буде записана на сторінку, доки ви явно її не покажете.',
    'secret.private.hidden': 'Приховано за замовчуванням. Показуйте лише тоді, коли готові зробити резервну копію або перенести гаманець.',
    'secret.private.visible': 'Зараз видно на екрані. Знову приховайте перед тим, як залишити пристрій без нагляду.',
    'secret.seed.hidden': 'Приховано за замовчуванням. Показуйте лише в надійному офлайн-середовищі.',
    'secret.seed.visible': 'Зараз видно на екрані. Переконайтеся, що камера чи запис екрана не увімкнені.',
    'secret.confirm.private': 'Показ приватного ключа виведе його на екран. Продовжити?',
    'secret.confirm.seed': 'Показ фрази відновлення виведе її на екран. Продовжити?',
    'secret.copy.blocked': 'Спочатку покажіть чутливі дані, а потім копіюйте.',
    'print.partial.confirm': 'Чутливі розділи все ще приховані й не будуть включені до друку. Продовжити та надрукувати лише видиму частину?',
    'footer.text': 'Генератор даних гаманця TOS • Відкритий код • Офлайн-режим',
    'wallet.replace.confirm': 'Створити нові дані гаманця? Поточні дані буде замінено.',
    'wallet.replace.use_secondary': 'Щоб замінити поточний гаманець, скористайтеся нижньою кнопкою «Створити новий гаманець» і підтвердьте дію.'
  }
};

for (const [lang, overrides] of Object.entries(translationOverrides)) {
  translations[lang] = {
    ...(translations[lang] || {}),
    ...overrides
  };
}

// Get current language
function getCurrentLanguage() {
  return localStorage.getItem('tos-wallet-language') || 'en';
}

// Set language
function setLanguage(lang) {
  localStorage.setItem('tos-wallet-language', lang);
  updatePageLanguage(lang);
  updateLanguageSelector(lang);
  if (typeof window.refreshWalletLanguage === 'function') {
    window.refreshWalletLanguage();
  }
}

function sanitizeAllowedMarkup(html) {
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/&lt;strong&gt;/g, '<strong>')
    .replace(/&lt;\/strong&gt;/g, '</strong>');
}

// Update page language
function updatePageLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      let translation = translations[lang][key];

      // Check if translation contains HTML tags
      const hasHTMLTags = /<[^>]+>/.test(translation);

      // Check if element has child elements (like SVG icons or buttons)
      const hasChildElements = element.children.length > 0;

      if (hasHTMLTags) {
        // Allow only a tiny subset of inline markup used by trusted local strings.
        element.innerHTML = sanitizeAllowedMarkup(translation);
      } else if (hasChildElements) {
        // Find and update only text nodes, preserve child elements
        const childNodes = Array.from(element.childNodes);
        childNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = translation;
          }
        });
      } else {
        // No child elements, safe to use textContent
        element.textContent = translation;
      }
    }
  });

  // Update HTML lang attribute
  const langMap = {
    'en': 'en',
    'zh': 'zh-CN',
    'ja': 'ja',
    'ko': 'ko',
    'ar': 'ar',
    'bg': 'bg',
    'de': 'de',
    'es': 'es',
    'fr': 'fr',
    'hi': 'hi',
    'it': 'it',
    'ms': 'ms',
    'nl': 'nl',
    'pl': 'pl',
    'pt': 'pt',
    'ru': 'ru',
    'tr': 'tr',
    'uk': 'uk'
  };
  document.documentElement.lang = langMap[lang] || 'en';
  document.title = translations[lang]?.['app.title'] || 'TOS Wallet';

  // Update asset badge if wallet is displayed
  const networkBadge = document.getElementById('networkBadge');
  if (networkBadge && networkBadge.dataset.asset) {
    const assetType = networkBadge.dataset.asset;
    const translationKey = assetType === 'uno' ? 'asset.uno' : 'asset.tos';
    if (translations[lang] && translations[lang][translationKey]) {
      networkBadge.textContent = translations[lang][translationKey];
    }
  }
}

// Update language selector display
function updateLanguageSelector(lang) {
  // SVG for selected state (filled circle with checkmark)
  const selectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
<circle cx="10" cy="10" r="10" fill="#DCE9F9"></circle>
<path d="M14.5323 7.0002C14.4144 7.00376 14.3026 7.05218 14.2204 7.13519L9.09007 12.1708L5.77714 8.91902C5.73487 8.87753 5.68469 8.84464 5.62945 8.82218C5.57422 8.79973 5.51502 8.78814 5.45524 8.78814C5.39546 8.78814 5.33626 8.79973 5.28103 8.82218C5.2258 8.84464 5.17561 8.87753 5.13334 8.91902C5.09106 8.96051 5.05753 9.00978 5.03465 9.06399C5.01178 9.1182 5 9.1763 5 9.23498C5 9.29366 5.01178 9.35176 5.03465 9.40598C5.05753 9.46019 5.09106 9.50945 5.13334 9.55095L8.76817 13.1187C8.81038 13.1603 8.86054 13.1933 8.91579 13.2159C8.97103 13.2384 9.03026 13.25 9.09007 13.25C9.14989 13.25 9.20912 13.2384 9.26436 13.2159C9.3196 13.1933 9.36977 13.1603 9.41198 13.1187L14.8609 7.76707C14.9269 7.70461 14.9722 7.62403 14.9907 7.53585C15.0092 7.44767 15 7.35605 14.9645 7.27306C14.9289 7.19008 14.8686 7.11955 14.7914 7.07086C14.7143 7.02216 14.6239 6.99753 14.5323 7.0002Z" fill="#4A90E2"></path>
</svg>`;

  // SVG for unselected state (empty circle)
  const unselectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
<circle cx="10" cy="10" r="9.5" stroke="#D3D4D8"></circle>
</svg>`;

  // Update all language options
  document.querySelectorAll('.language-option').forEach(option => {
    const optionLang = option.getAttribute('data-lang');
    const iconContainer = option.querySelector('.lang-icon');

    if (optionLang === lang) {
      option.classList.add('active');
      option.setAttribute('aria-pressed', 'true');
      if (iconContainer) {
        iconContainer.innerHTML = selectedSVG;
      }
    } else {
      option.classList.remove('active');
      option.setAttribute('aria-pressed', 'false');
      if (iconContainer) {
        iconContainer.innerHTML = unselectedSVG;
      }
    }
  });
}

// Export translations globally
window.translations = translations;

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
  const currentLang = getCurrentLanguage();
  updatePageLanguage(currentLang);
  updateLanguageSelector(currentLang);
  if (typeof window.refreshWalletLanguage === 'function') {
    window.refreshWalletLanguage();
  }

  // Add language switch event listeners
  document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
});
