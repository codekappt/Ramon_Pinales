/* ==========================================================
   Ramón Pinales | Entrepreneurship & Wellbeing
   Main site logic (index.html). Uses shared products-data.js.
   ========================================================== */
(function () {
  'use strict';

  var S = window.STORE;
  var CONFIG = S.CONFIG;
  var products = S.products;
  var categories = S.categories;
  var healthNeeds = S.healthNeeds;
  var IMG_BASE = S.IMG_BASE;
  var formatPrice = S.formatPrice;
  var waLink = S.waLink;
  var productWaMsg = S.productWaMsg;

  /* ---------------- WHATSAPP ---------------- */
  function initWhatsApp() {
    var num = CONFIG.whatsapp.number;
    ['#waFloat', '.wa-footer', '#waContactLink'].forEach(function (sel) {
      var el = document.querySelector(sel);
      if (!el) return;
      el.href = num ? waLink(CONFIG.whatsapp.defaultMsg) : '#contact';
      if (el.classList.contains('whatsapp-float') && !num) {
        el.style.display = 'none';
      }
    });
  }

  /* ---------------- I18N ---------------- */
  var i18n = {
    es: {
      brandName: 'Ramón Pinales',
      businessName: 'Ramón Pinales Emprendimientos y Bienestar',
      rights: 'Todos los derechos reservados.',
      navHome: 'Inicio', navAbout: 'Sobre mí', navWellness: 'Bienestar', navProducts: 'Productos', navBusiness: 'Oportunidad de Negocio', navContact: 'Contacto',
      shopProducts: 'Ver Productos',
      heroName: 'Ramón Pinales | Emprendimiento y Bienestar',
      heroWellness: 'Bienestar.', heroTech: 'Tecnología.', heroOpportunity: 'Oportunidad.',
      heroSub: 'Descubre un enfoque moderno del bienestar con la tecnología wellness de LifeWave — y explora una oportunidad para construir tu propio negocio desde casa.',
      ctaExploreWellness: 'Explorar Bienestar', ctaDiscoverOpp: 'Descubrir la Oportunidad',
      heroSlogan: 'Juntos Hacemos Historia',
      trustProducts: 'Productos de bienestar', trustEntrep: 'Emprendimiento', trustComm: 'Comunidad',
      trustWellTech: 'Tecnología de Bienestar', trustLwProducts: 'Productos LifeWave', trustEntrep2: 'Emprendimiento', trustComm2: 'Comunidad',
      aboutEyebrow: 'Sobre mí', aboutTitle: 'Conoce a Ramón',
      aboutCopy: 'Ramón Pinales es un emprendedor afincado en Asturias, España, centrado en el bienestar, el desarrollo personal y el emprendimiento. A través de su trabajo con LifeWave, ayuda a las personas a descubrir productos de bienestar y a conocer una vía alternativa para construir su propio negocio.',
      aboutLocation: 'Residente en Mieres, Asturias, España',
      aboutCopy2: 'Su misión es sencilla: ayudar a más personas a vivir con más energía, equilibrio y libertad. Ramón combina su pasión por la tecnología del bienestar con un acompañamiento práctico, mostrando a otros cómo una rutina de bienestar y un negocio de venta directa encajan en una vida real y cotidiana.',
      ap1: 'Mentor de bienestar y socio de negocio de LifeWave',
      ap2: 'Basado en Mieres, Asturias, España — atendiendo clientes y socios a nivel nacional',
      ap3: 'Centrado en vitalidad, movimiento, sueño y bienestar diario',
      ap4: 'Guiando a nuevos emprendedores en la oportunidad de negocio de LifeWave',
      wellEyebrow: 'Bienestar', wellTitle: 'Un Enfoque Diferente del Bienestar',
      wellSub: 'LifeWave combina tecnología de fototerapia propia con productos de bienestar diseñados para apoyar un estilo de vida activo y equilibrado.',
      w1t: 'Vitalidad y Actividad', w1d: 'Apoya un estilo de vida activo y la vitalidad diaria.',
      w2t: 'Movimiento', w2d: 'Explora productos diseñados en torno al movimiento y el rendimiento físico.',
      w3t: 'Sueño', w3d: 'Soluciones de bienestar diseñadas para complementar rutinas de sueño saludables.',
      w4t: 'Bienestar General', w4d: 'Descubre productos centrados en el bienestar diario.',
      w5t: 'Nutrición', w5d: 'Explora los productos de bienestar orientados a la nutrición de LifeWave.',
      w6t: 'Cuidado de la Piel', w6d: 'Descubre la línea de cuidado de la piel Alavida de LifeWave.',
      wi1: 'Vitalidad en movimiento', wi2: 'Hidratación limpia', wi3: 'Tiempo en la naturaleza',
      techEyebrow: 'Tecnología', techTitle: 'La Tecnología Detrás de la Experiencia',
      techSub: 'Tecnología de bienestar inspirada en fototerapia',
      techCopy: 'LifeWave utiliza tecnología de fototerapia propia en sus parches no transdérmicos. La empresa describe estos productos como el uso de la luz para interactuar con la piel como parte de su enfoque de bienestar.',
      techMicro: 'Tecnología inspirada en la luz.',
      techCta: 'Explorar los Productos',
      featuredEyebrow: 'Destacado', featuredTitle: 'Productos Destacados', featuredSub: 'Una selección de productos de bienestar LifeWave disponibles a través de Ramón.', featuredBadge: 'Producto Destacado',
      viewX39: 'Ver X39', viewX49: 'Ver X49', viewBundle: 'Ver Pack',
      shopReady: '¿Listo para explorar LifeWave?', shopText: 'Descubre los productos disponibles a través de la tienda LifeWave de Ramón.',
      visitStore: 'Visitar Mi Tienda LifeWave',
      shopNote: 'Los productos, la disponibilidad y los precios se gestionan a través de LifeWave y pueden variar según el país.',
      catEyebrow: 'Catálogo', catTitle: 'Catálogo de Productos', catSub: 'Explora los productos de bienestar disponibles a través de la tienda LifeWave de Ramón.',
      searchPlaceholder: 'Buscar productos de bienestar...',
      filtersBtn: 'Filtros', sortLabel: 'Ordenar',
      sortFeatured: 'Destacados', sortAz: 'A–Z', sortLow: 'Precio: menor a mayor', sortHigh: 'Precio: mayor a menor',
      prodLine: 'Línea de Producto', healthNeed: 'Necesidad de Salud', clearFilters: 'Limpiar filtros',
      resultsText: 'productos', noResults: 'No se encontraron productos.',
      learnMore: 'Ver Detalles', shopOnLw: 'Comprar en LifeWave',
      oneTime: 'Compra única', subscribe: 'Suscripción (ahorra)',
      perMonth: '/mes', details: 'Detalles', buyNow: 'Comprar', buyOnLw: 'Comprar en LifeWave',
      contactWA: 'Contactar', askWA: 'Preguntar por WhatsApp',
      bizEyebrow: 'Emprendimiento', bizTitle: 'Tu Viaje de Bienestar Puede Convertirse en Tu Viaje de Negocio',
      bizSub: '¿Te interesa algo más que los productos? Ramón también puede presentarte la oportunidad de negocio de LifeWave y explicarte cómo funciona el modelo de venta directa.',
      bl1: 'Empieza desde casa, a tu propio ritmo',
      bl2: 'Productos de bienestar que la gente disfruta y comparte',
      bl3: 'Mentoría y apoyo por parte de Ramón',
      bizCta1: 'Explorar la Oportunidad', bizCta2: 'Hablar con Ramón',
      modelTitle: 'Cómo Funciona el Modelo',
      m1t: 'Descubre', m1d: 'Aprende sobre los productos y la tecnología de LifeWave.',
      m2t: 'Experimenta', m2d: 'Explora los productos y decide qué se ajusta a tus intereses.',
      m3t: 'Comparte', m3d: 'Comparte tu experiencia con personas que puedan estar interesadas.',
      m4t: 'Construye', m4d: 'Explora la posibilidad de desarrollar tu propia red de clientes y socios.',
      m5t: 'Crece', m5d: 'Construye tu negocio según tus propios objetivos, esfuerzo y mercado.',
      incomeEyebrow: 'Oportunidad de Negocio', incomeTitle: 'Formas en las que las Personas Exploran Ingresos',
      incomeSub: 'Pueden estar disponibles comisiones potenciales según el plan de compensación aplicable de LifeWave.',
      askRamon: 'Pregúntale a Ramón Cómo Funciona',
      compDisclaimer: 'Las estructuras de compensación, cualificaciones y bonificaciones están sujetas al plan de compensación oficial vigente de LifeWave, los requisitos de elegibilidad y los términos aplicables. Los ingresos no están garantizados.',
      entTitle: '¿Podría Ser Este Tu Próximo Capítulo?',
      entText: 'Ya sea que estés buscando productos de bienestar o explorando el emprendimiento, Ramón puede ayudarte a entender las opciones y decidir lo que es adecuado para ti.',
      talkRamonCta: 'Hablar con Ramón', joinLifewave: 'Unirse a LifeWave', microBuild: 'Construye algo tuyo.',
      eventEyebrow: 'Comunidad', eventTitle: 'Próximos Eventos', eventNoteText: 'Se están confirmando nuevas fechas. Vuelve pronto o contacta con Ramón para novedades.',
      socialEyebrow: 'Social', socialTitle: 'Sigue a Ramón', socialSub: 'Bienestar, emprendimiento y el viaje detrás de la visión.',
      faqEyebrow: 'FAQ', faqTitle: 'Preguntas Frecuentes',
      faq0q: '¿Son medicamentos los productos LifeWave?', faq0a: 'No. Son productos de bienestar y no deben presentarse como tratamientos médicos.',
      faq1q: '¿Dónde puedo comprar los productos?', faq1a: 'Los productos se pueden explorar y comprar a través de la tienda oficial LifeWave de Ramón.', faq1cta: 'Visitar Tienda',
      faq2q: '¿Puedo unirme al negocio LifeWave?', faq2a: 'Ramón puede explicarte el proceso de inscripción y cómo funciona la oportunidad de negocio.', faq2cta: 'Explorar la Oportunidad',
      faq3q: '¿Están garantizados los ingresos?', faq3a: 'No. Los resultados comerciales varían según el esfuerzo individual, las ventas, el desarrollo de la red, las condiciones del mercado y otros factores.',
      faq4q: '¿Puedo hablar directamente con Ramón?', faq4a: 'Sí. Usa WhatsApp o las opciones de contacto de la página web.',
      faq5q: '¿Dónde está basado Ramón?', faq5a: 'Mieres, Asturias, España.',
      finalTitle: 'Tu próximo capítulo comienza con una conversación.',
      finalText: 'Explora los productos. Descubre la oportunidad. Decide qué te conviene.',
      finalExplore: 'Explorar Productos', finalTalk: 'Hablar con Ramón', finalJoin: 'Unirse a LifeWave',
      contactEyebrow: 'Contacto', contactTitle: 'Empecemos una Conversación',
      contactText: 'Pregunta sobre productos, la oportunidad de negocio o cualquier otra cosa. Ramón te responderá.',
      waTitle: 'Chatea directamente por WhatsApp',
      waText: 'La forma más rápida de contactar con Ramón. No necesitas enviar un email: abre WhatsApp y empieza la conversación.',
      waCta: 'Escribirme por WhatsApp',
      channelHead: 'O sigue a Ramón en redes sociales',
      formIntro: 'Cuéntale a Ramón un poco sobre ti, y tu mensaje se abrirá en WhatsApp al enviarlo.',
      labelName: 'Nombre', labelEmail: 'Email', labelPhone: 'Teléfono / WhatsApp',
      labelInterest: 'Me interesa', optWellness: 'Productos de Bienestar', optOther: 'Otros Productos LifeWave', optEntrep: 'Emprendimiento', optGeneral: 'Información General',
      labelMessage: 'Mensaje', sendMessage: 'Enviar Mensaje',
      formNote: 'Tu mensaje se abre en WhatsApp para que puedas enviarlo directamente.',
      phName: 'Tu nombre', phEmail: 'tu@email.com', phPhone: '+34 ...', phMessage: '¿Cómo puede ayudarte Ramón?',
      errName: 'Por favor, introduce tu nombre.', errEmail: 'Por favor, introduce un email válido.', errPhone: 'Por favor, introduce un teléfono válido.', errMessage: 'Por favor, escribe un mensaje (mínimo 10 caracteres).',
      toastSent: '¡Gracias! Tu mensaje se ha preparado en WhatsApp.',
      backToProducts: 'Volver a los Productos',
      footerTag: 'Emprendimiento y Bienestar',
      fExplore: 'Explorar', fConnect: 'Conectar', fLifeWave: 'LifeWave', fLegal: 'Legal',
      fShop: 'Ver Productos', fJoin: 'Unirse a LifeWave', wellDisclaimer: 'Aviso de Bienestar', incomeDisclaimer: 'Aviso de Ingresos',
      footerNote: 'LifeWave es una empresa independiente. Ramón Pinales opera de forma independiente como socio/referidor de negocio de LifeWave.',
      wellDisclaimerText: 'Los productos LifeWave son productos de bienestar y no están destinados a diagnosticar, tratar, curar ni prevenir ninguna enfermedad. La información sobre los productos se ofrece únicamente con fines informativos generales. Las experiencias individuales pueden variar.',
      incomeDisclaimerText: 'Los ingresos de un negocio de venta directa no están garantizados. Los resultados varían según el esfuerzo individual, las ventas, la demanda de los clientes, las condiciones del mercado y otros factores.'
    },
    en: {
      brandName: 'Ramón Pinales',
      businessName: 'Ramón Pinales Entrepreneurship and Wellbeing',
      rights: 'All rights reserved.',
      navHome: 'Home', navAbout: 'About', navWellness: 'Wellness', navProducts: 'Products', navBusiness: 'Business Opportunity', navContact: 'Contact',
      shopProducts: 'Shop Products',
      heroName: 'Ramón Pinales | Entrepreneurship & Wellbeing',
      heroWellness: 'Wellness.', heroTech: 'Technology.', heroOpportunity: 'Opportunity.',
      heroSub: 'Discover a modern approach to wellbeing with LifeWave wellness technology — and explore an opportunity to build your own business from home.',
      ctaExploreWellness: 'Explore Wellness', ctaDiscoverOpp: 'Discover the Opportunity',
      heroSlogan: 'Together We Make History',
      trustProducts: 'Wellness products', trustEntrep: 'Entrepreneurship', trustComm: 'Community',
      trustWellTech: 'Wellness Technology', trustLwProducts: 'LifeWave Products', trustEntrep2: 'Entrepreneurship', trustComm2: 'Community',
      aboutEyebrow: 'About', aboutTitle: 'Meet Ramón',
      aboutCopy: 'Ramón Pinales is an entrepreneur based in Asturias, Spain, focused on wellbeing, personal development and entrepreneurship. Through his work with LifeWave, he helps people discover wellness products and learn about an alternative path to building their own business.',
      aboutLocation: 'Based in Mieres, Asturias, Spain',
      aboutCopy2: 'His mission is simple: to help more people live with more energy, balance and freedom. Ramón combines a passion for wellness technology with hands-on mentoring, showing others how a wellness routine and a direct-selling business can fit into a real, everyday life.',
      ap1: 'Wellness mentor and LifeWave business partner',
      ap2: 'Based in Mieres, Asturias, Spain — serving clients and partners nationwide',
      ap3: 'Focused on vitality, movement, sleep and everyday wellbeing',
      ap4: 'Guiding newcomers through the LifeWave business opportunity',
      wellEyebrow: 'Wellness', wellTitle: 'A Different Approach to Wellbeing',
      wellSub: 'LifeWave combines proprietary phototherapy technology with wellness products designed to support an active and balanced lifestyle.',
      w1t: 'Vitality & Activity', w1d: 'Support an active lifestyle and everyday vitality.',
      w2t: 'Movement', w2d: 'Explore products designed around movement and physical performance.',
      w3t: 'Sleep', w3d: 'Wellness solutions designed to complement healthy sleep routines.',
      w4t: 'General Wellness', w4d: 'Discover products focused on everyday wellbeing.',
      w5t: 'Nutrition', w5d: "Explore LifeWave's nutrition-oriented wellness products.",
      w6t: 'Skin Care', w6d: "Discover LifeWave's Alavida skincare line.",
      wi1: 'Vitality in motion', wi2: 'Clean hydration', wi3: 'Time in nature',
      techEyebrow: 'Technology', techTitle: 'The Technology Behind the Experience',
      techSub: 'Phototherapy-inspired wellness technology',
      techCopy: "LifeWave uses proprietary phototherapy technology in its non-transdermal patches. The company describes these products as using light to interact with the skin as part of its wellness approach.",
      techMicro: 'Technology inspired by light.',
      techCta: 'Explore the Products',
      featuredEyebrow: 'Featured', featuredTitle: 'Featured Products', featuredSub: "A selection of LifeWave wellness products available through Ramón.", featuredBadge: 'Featured Product',
      viewX39: 'View X39', viewX49: 'View X49', viewBundle: 'View Bundle',
      shopReady: 'Ready to explore LifeWave?', shopText: "Discover the products available through Ramón's LifeWave store.",
      visitStore: 'Visit My LifeWave Store',
      shopNote: 'Products, availability and pricing are managed through LifeWave and may vary by country.',
      catEyebrow: 'Catalog', catTitle: 'Product Catalog', catSub: "Explore the wellness products available through Ramón's LifeWave store.",
      searchPlaceholder: 'Search wellness products...',
      filtersBtn: 'Filters', sortLabel: 'Sort',
      sortFeatured: 'Featured', sortAz: 'A–Z', sortLow: 'Price: Low to High', sortHigh: 'Price: High to Low',
      prodLine: 'Product Line', healthNeed: 'Health Need', clearFilters: 'Clear filters',
      resultsText: 'products', noResults: 'No products found.',
      learnMore: 'View Details', shopOnLw: 'Shop on LifeWave',
      oneTime: 'One-time purchase', subscribe: 'Subscribe & save',
      perMonth: '/mo', details: 'Details', buyNow: 'Buy now', buyOnLw: 'Buy on LifeWave',
      contactWA: 'Contact', askWA: 'Ask via WhatsApp',
      bizEyebrow: 'Entrepreneurship', bizTitle: 'Your Wellness Journey Can Become Your Business Journey',
      bizSub: "Interested in more than the products? Ramón can also introduce you to the LifeWave business opportunity and explain how the direct-selling model works.",
      bl1: 'Start from home, at your own pace',
      bl2: 'Wellness products people can enjoy and share',
      bl3: 'Mentoring and support from Ramón',
      bizCta1: 'Explore the Opportunity', bizCta2: 'Talk to Ramón',
      modelTitle: 'How the Model Works',
      m1t: 'Discover', m1d: 'Learn about LifeWave products and wellness technology.',
      m2t: 'Experience', m2d: 'Explore the products and decide what fits your interests.',
      m3t: 'Share', m3d: 'Share your experience with people who may be interested.',
      m4t: 'Build', m4d: 'Explore the possibility of developing your own customer and partner network.',
      m5t: 'Grow', m5d: 'Build your business according to your own goals, effort and market.',
      incomeEyebrow: 'Business Opportunity', incomeTitle: 'Ways People Explore Income',
      incomeSub: "Potential commissions may be available according to LifeWave's applicable compensation plan.",
      askRamon: 'Ask Ramón How It Works',
      compDisclaimer: "Compensation structures, qualifications and bonuses are subject to LifeWave's current official compensation plan, eligibility requirements and applicable terms. Income is not guaranteed.",
      entTitle: 'Could This Be Your Next Chapter?',
      entText: "Whether you're looking for wellness products or exploring entrepreneurship, Ramón can help you understand the options and decide what's right for you.",
      talkRamonCta: 'Talk to Ramón', joinLifewave: 'Join LifeWave', microBuild: 'Build something of your own.',
      eventEyebrow: 'Community', eventTitle: 'Upcoming Events', eventNoteText: 'New dates are being confirmed. Check back soon or contact Ramón for updates.',
      socialEyebrow: 'Social', socialTitle: 'Follow Ramón', socialSub: 'Wellness, entrepreneurship and the journey behind the vision.',
      faqEyebrow: 'FAQ', faqTitle: 'Frequently Asked Questions',
      faq0q: 'Are LifeWave products medicines?', faq0a: 'No. They are wellness products and should not be presented as medical treatments.',
      faq1q: 'Where can I purchase the products?', faq1a: "Products can be explored and purchased through Ramón's official LifeWave store.", faq1cta: 'Visit Store',
      faq2q: 'Can I join the LifeWave business?', faq2a: 'Ramón can explain the enrollment process and how the business opportunity works.', faq2cta: 'Explore the Opportunity',
      faq3q: 'Is income guaranteed?', faq3a: 'No. Business results vary depending on individual effort, sales, network development, market conditions and other factors.',
      faq4q: 'Can I talk directly with Ramón?', faq4a: 'Yes. Use WhatsApp or the contact options on the website.',
      faq5q: 'Where is Ramón based?', faq5a: 'Mieres, Asturias, Spain.',
      finalTitle: 'Your next chapter starts with a conversation.',
      finalText: 'Explore the products. Discover the opportunity. Decide what feels right for you.',
      finalExplore: 'Explore Products', finalTalk: 'Talk to Ramón', finalJoin: 'Join LifeWave',
      contactEyebrow: 'Contact', contactTitle: "Let's Start a Conversation",
      contactText: 'Ask about products, the business opportunity, or anything else. Ramón will get back to you.',
      waTitle: 'Chat directly on WhatsApp',
      waText: "The fastest way to reach Ramón. You don't need to send an email — just open WhatsApp and start a conversation.",
      waCta: 'Send me a WhatsApp',
      channelHead: 'Or follow Ramón on social',
      formIntro: 'Tell Ramón a little about you, and your message will open in WhatsApp when you send it.',
      labelName: 'Name', labelEmail: 'Email', labelPhone: 'Phone / WhatsApp',
      labelInterest: "I'm interested in", optWellness: 'Wellness Products', optOther: 'Other LifeWave Products', optEntrep: 'Entrepreneurship', optGeneral: 'General Information',
      labelMessage: 'Message', sendMessage: 'Send Message',
      formNote: 'Your message opens in WhatsApp so you can send it directly.',
      phName: 'Your name', phEmail: 'you@email.com', phPhone: '+34 ...', phMessage: 'How can Ramón help?',
      errName: 'Please enter your name.', errEmail: 'Please enter a valid email.', errPhone: 'Please enter a valid phone number.', errMessage: 'Please write a message (at least 10 characters).',
      toastSent: 'Thank you! Your message has been prepared in WhatsApp.',
      backToProducts: 'Back to Products',
      footerTag: 'Entrepreneurship & Wellbeing',
      fExplore: 'Explore', fConnect: 'Connect', fLifeWave: 'LifeWave', fLegal: 'Legal',
      fShop: 'Shop Products', fJoin: 'Join LifeWave', wellDisclaimer: 'Wellness Disclaimer', incomeDisclaimer: 'Income Disclaimer',
      footerNote: 'LifeWave is a separate company. Ramón Pinales operates independently as a LifeWave business partner/referrer.',
      wellDisclaimerText: 'LifeWave products are wellness products and are not intended to diagnose, treat, cure, or prevent any disease. Product information is provided for general informational purposes. Individual experiences may vary.',
      incomeDisclaimerText: 'Income from a direct-selling business is not guaranteed. Results vary based on individual effort, sales, customer demand, market conditions, and other factors.'
    }
  };

  function t(lang, key) { return i18n[lang] && i18n[lang][key] !== undefined ? i18n[lang][key] : (i18n.es[key] || key); }

  /* ---------------- HELPERS ---------------- */
  function $(s) { return document.querySelector(s); }
  function $all(s) { return Array.prototype.slice.call(document.querySelectorAll(s)); }
  function toggleLangButton(act) {
    $all('.lang-btn').forEach(function (b) {
      var on = b.getAttribute('data-lang') === act;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function applyLang(lang) {
    var T = i18n[lang];
    $all('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (T && T[key] !== undefined) el.textContent = T[key];
    });
    $all('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (T && T[key] !== undefined) el.setAttribute('placeholder', T[key]);
    });
    document.documentElement.lang = lang === 'es' ? 'es' : 'en';
    renderIncome();
    renderFAQ();
    renderProducts(true);
    renderFeatured();
    toggleLangButton(lang);
  }

  /* ---------------- INCOME ---------------- */
  function renderIncome() {
    var grid = $('#incomeGrid');
    if (!grid) return;
    var lang = currentLang || 'es';
    var names = {
      es: ['Venta directa', 'Comisiones de clientes', 'Bono de inscripción de nuevos socios', 'Bono binario', 'Bonos por niveles', 'Bono de compensación / liderazgo', 'Bono de inicio rápido', 'Bono por avance de rango', 'Fondo de liderazgo'],
      en: ['Direct Sales', 'Customer Commissions', 'New Partner Enrollment Bonus', 'Binary Bonus', 'Level Bonuses', 'Matching / Leadership Bonus', 'Fast Start Bonus', 'Rank Advancement Bonus', 'Leadership Fund']
    };
    var desc = lang === 'es'
      ? 'Disponible como parte del plan de compensación aplicable de LifeWave.'
      : 'Available as part of LifeWave\u2019s applicable compensation plan.';
    var html = names[lang].map(function (name, i) {
      return '<div class="income-card reveal"><div class="income-num">0' + (i + 1) + '</div><h3 class="income-name">' + name + '</h3><p class="income-desc">' + desc + '</p></div>';
    }).join('');
    grid.innerHTML = html;
    observeReveals();
  }

  /* ---------------- FAQ ---------------- */
  function renderFAQ() {
    var list = $('#faqList');
    if (!list) return;
    var lang = currentLang || 'es';
    var T = i18n[lang];
    var keys = ['faq0', 'faq1', 'faq2', 'faq3', 'faq4', 'faq5'];
    var html = keys.map(function (k) {
      var q = T[k + 'q'], a = T[k + 'a'], cta = T[k + 'cta'];
      var ctaHtml = '';
      if (cta) {
        var href = (k === 'faq1') ? CONFIG.storeUrl : '#business';
        var target = (k === 'faq1') ? ' target="_blank" rel="noopener noreferrer"' : '';
        ctaHtml = '<a class="btn btn-outline btn-sm" href="' + href + '"' + target + '>' + cta + '</a>';
      }
      return '<div class="faq-item reveal"><button class="faq-q" aria-expanded="false"><span>' + q + '</span><span class="faq-icon" aria-hidden="true">+</span></button><div class="faq-a"><div class="faq-a-inner"><p>' + a + '</p>' + ctaHtml + '</div></div></div>';
    }).join('');
    list.innerHTML = html;
    $all('.faq-item').forEach(function (item) {
      item.addEventListener('click', function () {
        var wasOpen = item.classList.contains('open');
        $all('.faq-item').forEach(function (o) { o.classList.remove('open'); var b = o.querySelector('.faq-q'); if (b) b.setAttribute('aria-expanded', 'false'); });
        if (!wasOpen) { item.classList.add('open'); var q = item.querySelector('.faq-q'); if (q) q.setAttribute('aria-expanded', 'true'); }
      });
    });
    observeReveals();
  }

  /* ---------------- PRODUCT CATALOG ---------------- */
  var state = { cat: [], need: [], search: '', sort: 'featured' };

  function buildFilters() {
    var catBox = $('#categoryFilter');
    var needBox = $('#needFilter');
    var catHtml = categories.map(function (c) {
      return '<label><input type="checkbox" value="' + c + '" class="cat-cb"> ' + c + '</label>';
    }).join('');
    var needHtml = healthNeeds.map(function (n) {
      return '<label><input type="checkbox" value="' + n + '" class="need-cb"> ' + n + '</label>';
    }).join('');
    catBox.innerHTML = catHtml;
    needBox.innerHTML = needHtml;
    $all('.cat-cb').forEach(function (cb) {
      cb.addEventListener('change', function () {
        state.cat = $all('.cat-cb:checked').map(function (c) { return c.value; });
        renderProducts();
      });
    });
    $all('.need-cb').forEach(function (cb) {
      cb.addEventListener('change', function () {
        state.need = $all('.need-cb:checked').map(function (c) { return c.value; });
        renderProducts();
      });
    });
  }

  function priceBlock(p, lang) {
    var T = i18n[lang] || i18n.es;
    var h = '<div class="product-price">';
    h += '<div class="price-row"><span class="price-label">' + T.oneTime + '</span><span class="price-main">' + formatPrice(p.price) + '</span></div>';
    if (p.sub != null) {
      h += '<div class="price-row sub"><span class="price-label">' + T.subscribe + '</span><span class="price-main">' + formatPrice(p.sub) + '</span></div>';
    }
    h += '</div>';
    return h;
  }

  function productCard(p) {
    var lang = currentLang || 'es';
    var T = i18n[lang] || i18n.es;
    var imgSrc = IMG_BASE + p.image;
    var wa = waLink(productWaMsg(p, lang));
    var waBtn = CONFIG.whatsapp.number
      ? '<a class="btn btn-wa" href="' + wa + '" target="_blank" rel="noopener noreferrer">' + T.askWA + '</a>'
      : '<a class="btn btn-wa" href="#contact">' + T.askWA + '</a>';
    return '<div class="product-card reveal">' +
      '<a class="product-thumb" href="product.html?id=' + p.id + '"><img src="' + imgSrc + '" alt="' + p.name + '" loading="lazy" /></a>' +
      '<div class="product-body">' +
        '<span class="product-cat">' + p.cat + '</span>' +
        '<h3 class="product-name"><a href="product.html?id=' + p.id + '">' + p.name + '</a></h3>' +
        '<p class="product-desc">' + p.desc + '</p>' +
        priceBlock(p, lang) +
        '<div class="product-links">' +
          '<a class="btn btn-outline" href="product.html?id=' + p.id + '">' + T.details + '</a>' +
          '<a class="btn btn-primary" href="' + p.url + '" target="_blank" rel="noopener noreferrer">' + T.buyOnLw + '</a>' +
          waBtn +
        '</div>' +
      '</div></div>';
  }

  function renderProducts(forceReset) {
    var grid = $('#productGrid');
    if (!grid) return;
    var lang = currentLang || 'es';
    var T = i18n[lang] || i18n.es;
    var q = state.search.trim().toLowerCase();

    var list = products.filter(function (p) {
      if (state.cat.length && state.cat.indexOf(p.cat) === -1) return false;
      if (state.need.length && state.need.indexOf(p.need) === -1) return false;
      if (q && p.name.toLowerCase().indexOf(q) === -1 && p.desc.toLowerCase().indexOf(q) === -1) return false;
      return true;
    });

    if (state.sort === 'az') list.sort(function (a, b) { return a.name.localeCompare(b.name); });
    else if (state.sort === 'priceLow') list.sort(function (a, b) { return a.price - b.price; });
    else if (state.sort === 'priceHigh') list.sort(function (a, b) { return b.price - a.price; });
    else list.sort(function (a, b) { return (b.featured ? 1 : 0) - (a.featured ? 1 : 0); });

    var count = $('#resultsCount');
    if (count) count.textContent = list.length + ' ' + T.resultsText;
    if (!list.length) { grid.innerHTML = '<p class="no-results">' + T.noResults + '</p>'; return; }
    grid.innerHTML = list.map(productCard).join('');
    // IMPORTANT: always re-observe so cards actually fade in (fixes "invisible" products)
    observeReveals();
  }

  /* ---------------- FEATURED PRODUCTS ---------------- */
  function featuredCard(p) {
    var lang = currentLang || 'es';
    var T = i18n[lang] || i18n.es;
    var imgSrc = IMG_BASE + p.image;
    var wa = waLink(productWaMsg(p, lang));
    var waBtn = CONFIG.whatsapp.number
      ? '<a class="btn btn-wa" href="' + wa + '" target="_blank" rel="noopener noreferrer">' + T.askWA + '</a>'
      : '<a class="btn btn-wa" href="#contact">' + T.askWA + '</a>';
    return '<article class="featured-card reveal">' +
      '<div class="featured-media"><a href="product.html?id=' + p.id + '"><img src="' + imgSrc + '" alt="' + p.name + '" loading="lazy" /></a>' +
      '<span class="badge">' + T.oneTime + '</span></div>' +
      '<div class="featured-body">' +
        '<span class="product-cat">' + p.cat + '</span>' +
        '<h3 class="featured-name"><a href="product.html?id=' + p.id + '">' + p.name + '</a></h3>' +
        '<p class="featured-desc">' + p.desc + '</p>' +
        '<div class="product-price">' +
          '<div class="price-row"><span class="price-label">' + T.oneTime + '</span><span class="price-main">' + formatPrice(p.price) + '</span></div>' +
          (p.sub != null ? '<div class="price-row sub"><span class="price-label">' + T.subscribe + '</span><span class="price-main">' + formatPrice(p.sub) + '</span></div>' : '') +
        '</div>' +
        '<div class="product-links">' +
          '<a class="btn btn-outline" href="product.html?id=' + p.id + '">' + T.details + '</a>' +
          '<a class="btn btn-primary" href="' + p.url + '" target="_blank" rel="noopener noreferrer">' + T.buyOnLw + '</a>' +
          waBtn +
        '</div>' +
      '</div></article>';
  }

  function renderFeatured() {
    var grid = $('#featuredGrid');
    if (!grid) return;
    var feats = products.filter(function (p) { return p.featured; });
    if (!feats.length) return;
    grid.innerHTML = feats.map(featuredCard).join('');
    observeReveals();
  }

  /* ---------------- WHATSAPP FORM ---------------- */
  function formMessage(data) {
    var lang = currentLang || 'es';
    var lines = [];
    lines.push(lang === 'es' ? 'Hola Ramón,' : 'Hello Ramón,');
    lines.push(lang === 'es' ? 'Me gustaría más información.' : 'I would like more information.');
    if (data.name) lines.push(lang === 'es' ? 'Nombre: ' + data.name : 'Name: ' + data.name);
    if (data.email) lines.push('Email: ' + data.email);
    if (data.phone) lines.push('Tel/WhatsApp: ' + data.phone);
    if (data.interest) lines.push('Interés: ' + data.interest);
    if (data.message) lines.push(lang === 'es' ? 'Mensaje: ' + data.message : 'Message: ' + data.message);
    return lines.join('\n');
  }

  function showToast(msg) {
    var el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    setTimeout(function () { el.classList.remove('show'); }, 4000);
  }

  function initContactForm() {
    var form = $('#contactForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var lang = currentLang || 'es';
      var T = i18n[lang] || i18n.es;
      var ok = true;

      var name = $('#cName'), phone = $('#cPhone'), message = $('#cMessage');
      var val = function (input, errId, msg, check) {
        var errEl = document.getElementById(errId);
        var bad = !check();
        input.classList.toggle('invalid', bad);
        errEl.textContent = bad ? msg : '';
        return !bad;
      };

      ok = val(name, 'errName', T.errName, function () { return name.value.trim().length >= 2; }) && ok;
      var phoneVal = phone.value.trim();
      if (phoneVal) ok = val(phone, 'errPhone', T.errPhone, function () {
        return /^[+0-9()\-\s]{6,20}$/.test(phoneVal);
      }) && ok;
      ok = val(message, 'errMessage', T.errMessage, function () { return message.value.trim().length >= 10; }) && ok;

      if (!ok || !CONFIG.whatsapp.number) {
        if (!CONFIG.whatsapp.number) {
          showToast(lang === 'es' ? 'Configura el número de WhatsApp para activar el envío.' : 'Configure the WhatsApp number to enable sending.');
        }
        return;
      }

      var data = {
        name: name.value.trim(),
        phone: phone.value.trim(),
        interest: $('#cInterest').value,
        message: message.value.trim()
      };
      window.open(waLink(formMessage(data)), '_blank', 'noopener');
      showToast(T.toastSent);
      form.reset();
    });
  }

  /* ---------------- NAVBAR / REVEAL / PARTICLES ---------------- */
  function initNavbar() {
    var nav = $('#navbar'), hb = $('#hamburger'), links = $('#navLinks');
    function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 40); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    if (hb) {
      hb.addEventListener('click', function () {
        var open = links.classList.toggle('open');
        hb.classList.toggle('open', open);
        hb.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
    $all('[data-nav]').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        hb.classList.remove('open');
        hb.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var io;
  function observeReveals() {
    if (!('IntersectionObserver' in window)) {
      $all('.reveal').forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
        });
      }, { threshold: 0.1 });
    }
    $all('.reveal:not(.visible)').forEach(function (el) { io.observe(el); });
  }

  function initParticles() {
    var box = $('#particles');
    if (!box || !window.matchMedia || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { return; }
    var count = Math.min(24, Math.floor(window.innerWidth / 55));
    var html = '';
    for (var i = 0; i < count; i++) {
      var size = (Math.random() * 3 + 1).toFixed(1);
      var left = (Math.random() * 100).toFixed(2);
      var top = (Math.random() * 100).toFixed(2);
      var delay = (Math.random() * 8).toFixed(2);
      var dur = (8 + Math.random() * 8).toFixed(2);
      var blue = Math.random() > 0.4;
      html += '<span style="position:absolute;width:' + size + 'px;height:' + size + 'px;left:' + left + '%;top:' + top + '%;border-radius:50%;background:' + (blue ? 'rgba(37,99,235,.55)' : 'rgba(14,165,233,.5)') + ';box-shadow:0 0 ' + (size * 6) + 'px ' + (blue ? 'rgba(37,99,235,.4)' : 'rgba(14,165,233,.35)') + ';animation:float ' + dur + 's ease-in-out ' + delay + 's infinite;opacity:.0;"></span>';
    }
    box.innerHTML = html;
    var style = document.createElement('style');
    style.textContent = '@keyframes float{0%,100%{opacity:0;transform:translateY(0)}30%{opacity:.8}55%{opacity:.6}75%{opacity:0;transform:translateY(-60px)}}';
    document.head.appendChild(style);
  }

  function initFilters() {
    var toggle = $('#filterToggle'), filters = $('#filters');
    if (!filters || !toggle) return;
    toggle.addEventListener('click', function () {
      var open = filters.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    $('#clearFilters').addEventListener('click', function () {
      $all('.cat-cb, .need-cb').forEach(function (c) { c.checked = false; });
      state.cat = []; state.need = [];
      renderProducts();
    });
    $('#sortSelect').addEventListener('change', function () { state.sort = this.value; renderProducts(); });
    $('#productSearch').addEventListener('input', function () { state.search = this.value; renderProducts(); });
  }

  /* ---------------- INIT ---------------- */
  var currentLang = 'es';
  function init() {
    toggleLangButton('es');
    buildFilters();
    renderIncome();
    renderFAQ();
    renderProducts();
    renderFeatured();
    initNavbar();
    initParticles();
    initFilters();
    initContactForm();
    initWhatsApp();
    observeReveals();
    $all('.lang-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        currentLang = b.getAttribute('data-lang');
        applyLang(currentLang);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
