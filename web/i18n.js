// TOS Paper Wallet - Multilingual translation system
// Export translations to window for access from other scripts
window.translations = window.translations || {};

const translations = {
  en: {
    // Header
    'app.title': 'TOS Paper Wallet',
    'app.subtitle': 'Generate secure offline wallets for TOS Network',

    // Network Selection
    'network.label': 'Select Network',
    'network.mainnet': 'Mainnet',
    'network.testnet': 'Testnet',
    'network.mainnet.desc': 'Real TOS network',
    'network.testnet.desc': 'For testing purposes',

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

    // Wallet Sections
    'wallet.address.title': 'Public Address',
    'wallet.address.desc': 'Share this to RECEIVE TOS',
    'wallet.privatekey.title': 'Private Key',
    'wallet.privatekey.desc': 'NEVER share this! Required to spend funds',
    'wallet.seed.title': 'Seed Phrase (25 Words)',
    'wallet.seed.desc': 'Write this down! Can restore your wallet',

    // Copy Actions
    'copy.button': 'Copy',
    'copy.words': 'Copy All Words',
    'copy.success': 'Copied!',

    // Security Warning
    'warning.security.title': 'Security First',
    'warning.security.item1': 'Run this tool on an <strong>offline computer</strong> for maximum security',
    'warning.security.item2': 'Never share your private key with anyone',
    'warning.security.item3': 'Print and store your wallet in a safe location',
    'warning.security.item4': 'Make multiple copies and store separately',

    // Footer
    'footer.text': 'TOS Paper Wallet Generator • Open Source • Offline Capable',
    'footer.security': 'Always verify the source code and run offline for maximum security',

    // Loading
    'loading.text': 'Loading cryptographic module...',

    // Wallet Header
    'wallet.header': 'Your Paper Wallet',

    // Language
    'lang.name': '🇺🇸 English',
    'lang.label': 'Language'
  },

  zh: {
    // Header
    'app.title': 'TOS 纸钱包',
    'app.subtitle': '为 TOS 网络生成安全的离线钱包',

    // Network Selection
    'network.label': '选择网络',
    'network.mainnet': '主网',
    'network.testnet': '测试网',
    'network.mainnet.desc': '真实的 TOS 网络',
    'network.testnet.desc': '用于测试目的',

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

    // Wallet Sections
    'wallet.address.title': '公开地址',
    'wallet.address.desc': '分享此地址以接收 TOS',
    'wallet.privatekey.title': '私钥',
    'wallet.privatekey.desc': '永远不要分享！花费资金时需要',
    'wallet.seed.title': '助记词（25个单词）',
    'wallet.seed.desc': '写下来！可以恢复您的钱包',

    // Copy Actions
    'copy.button': '复制',
    'copy.words': '复制所有单词',
    'copy.success': '已复制！',

    // Security Warning
    'warning.security.title': '安全第一',
    'warning.security.item1': '为获得最大安全性，请在<strong>离线计算机</strong>上运行此工具',
    'warning.security.item2': '永远不要与任何人分享您的私钥',
    'warning.security.item3': '打印并将您的钱包存放在安全的位置',
    'warning.security.item4': '制作多份副本并分别存储',

    // Footer
    'footer.text': 'TOS 纸钱包生成器 • 开源 • 离线可用',
    'footer.security': '始终验证源代码并离线运行以获得最大安全性',

    // Loading
    'loading.text': '正在加载加密模块...',

    // Wallet Header
    'wallet.header': '您的纸钱包',

    // Language
    'lang.name': '🇨🇳 中文',
    'lang.label': '语言'
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

// Get current language
function getCurrentLanguage() {
  return localStorage.getItem('tos-wallet-language') || 'en';
}

// Set language
function setLanguage(lang) {
  localStorage.setItem('tos-wallet-language', lang);
  updatePageLanguage(lang);
  updateLanguageSelector(lang);
}

// Update page language
function updatePageLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      const translation = translations[lang][key];

      // Check if translation contains HTML tags
      const hasHTMLTags = /<[^>]+>/.test(translation);

      // Check if element has child elements (like SVG icons or buttons)
      const hasChildElements = element.children.length > 0;

      if (hasHTMLTags) {
        // Translation contains HTML, use innerHTML
        element.innerHTML = translation;
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

  // Update network badge if wallet is displayed
  const networkBadge = document.getElementById('networkBadge');
  if (networkBadge && networkBadge.dataset.network) {
    const networkType = networkBadge.dataset.network;
    const translationKey = networkType === 'mainnet' ? 'network.mainnet' : 'network.testnet';
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
      if (iconContainer) {
        iconContainer.innerHTML = selectedSVG;
      }
    } else {
      option.classList.remove('active');
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

  // Add language switch event listeners
  document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
});
