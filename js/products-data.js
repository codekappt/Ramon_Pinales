/* ==========================================================
   Ramón Pinales | Entrepreneurship & Wellbeing
   SHARED PRODUCTS + CONFIG DATA (used by index + product page)
   ========================================================== */
window.STORE = (function (w) {
  'use strict';

  // NOTE: Set a real WhatsApp number before going live.
  var CONFIG = {
    name: 'Ramón Pinales',
    businessName: 'Ramón Pinales Emprendimientos y Bienestar',
    slogan: 'Together We Make History',
    location: 'Mieres, Asturias, Spain',
    lifeWaveId: '4134703',
    storeUrl: 'https://lifewave.com/ramonmillonario/store/products',
    enrollmentUrl: 'https://lifewave.com/ramonmillonario/enrollment/packs',
    whatsapp: {
      // Real WhatsApp number (formatted for wa.me, international with country code).
      number: '34661064027',
      defaultMsg: 'Hola Ramón, he visitado tu página y me gustaría conocer más sobre los productos LifeWave y la oportunidad de emprendimiento.',
      productMsg: 'Hola Ramón, me gustaría obtener más información sobre los productos LifeWave.',
      businessMsg: 'Hola Ramón, me interesa conocer más sobre la oportunidad de emprendimiento.'
    },
    event: { enabled: false, title: '', date: '', location: '', description: '', cta: '' }
  };

  function waLink(msg) {
    if (!CONFIG.whatsapp.number) return '#';
    var base = 'https://wa.me/' + CONFIG.whatsapp.number;
    if (msg) base += '?text=' + encodeURIComponent(msg);
    return base;
  }

  var PRODUCT_BASE = 'https://lifewave.com/ramonmillonario/store/product/';
  var IMG_BASE = 'images/products/';

  // Data from Ramón's official LifeWave store: https://lifewave.com/ramonmillonario/store/products
  var products = [
    { name: 'LifeWave X39\u00ae Patches', cat: 'X39', need: 'Vitality & Activity', desc: 'Proprietary phototherapy technology positioned for general wellness, vitality, strength and stamina.', long: 'The LifeWave X39\u00ae patch uses proprietary phototherapy technology and is positioned for general wellness, vitality, strength and stamina. It is designed to support an active and balanced lifestyle as part of a broader wellness routine.', image: 'x39.jpg', price: 149.95, sub: 99.95, slug: '39000.022.009', featured: true },
    { name: 'LifeWave X49\u2122 Patches', cat: 'X49', need: 'Movement', desc: 'Designed for people interested in vitality, movement and performance-oriented wellness.', long: 'LifeWave X49\u2122 patches are designed for people interested in vitality, movement and performance-oriented wellness. Part of the LifeWave wellness product range.', image: 'x49.jpg', price: 149.95, sub: 99.95, slug: '49000.022.001', featured: true },
    { name: 'X39\u00ae & X49\u00ae Performance Bundle', cat: 'X49', need: 'Movement', desc: 'A combined LifeWave solution featuring X39\u00ae and X49\u2122 patches.', long: 'A combined LifeWave solution featuring both X39\u00ae and X49\u2122 patches, bringing together two of the most popular phototherapy wellness patches.', image: 'x39-x49-bundle.jpg', price: 279.95, sub: 179.95, slug: '111121-US-CP', featured: true },
    { name: 'LifeWave X\u2082O\u2122: Light-Infused\u2122 Water', cat: 'LifeWave X\u2082O', need: 'Water Technology System', desc: 'The LifeWave X\u2082O Light-Infused\u2122 Water System.', long: 'The LifeWave X\u2082O Light-Infused\u2122 Water System combines filtration and hydrogen enrichment to support everyday hydration.', image: 'x2o-water.jpg', price: 5995, sub: 5495, slug: 'LW-X2O-WM-USA' },
    { name: 'LifeWave X\u2082O\u2122 Filter Replacement Bundle', cat: 'LifeWave X\u2082O', need: 'Water Technology System', desc: 'Dual filter pack for your LifeWave X\u2082O Light-Infused\u2122 Water System.', long: 'Maintain peak performance with a full replacement of your LifeWave X\u2082O dual-stage filtration system. This bundle includes both the Primary and Secondary Filters for clean, light-infused water.', image: 'x2o-bundle.jpg', price: 170, sub: 150, slug: 'LW-X2O-Filter-Bundle' },
    { name: 'LifeWave X\u2082O\u2122 Primary Filter Replacement', cat: 'LifeWave X\u2082O', need: 'Water Technology System', desc: 'Primary filter replacement, designed to reduce a broad range of impurities in tap water.', long: 'Primary filter replacement for the LifeWave X\u2082O system, designed to reduce a broad range of impurities commonly found in municipal tap water.', image: 'x2o-primary.jpg', price: 95, sub: 85, slug: 'LW-X2O-PFLT' },
    { name: 'LifeWave X\u2082O\u2122 Secondary Filter Replacement', cat: 'LifeWave X\u2082O', need: 'Water Technology System', desc: 'Secondary filter that infuses hydrogen (H\u2082) for antioxidant support.', long: 'Secondary filter replacement that infuses hydrogen (H\u2082) for antioxidant support while supporting overall wellness.', image: 'x2o-secondary.jpg', price: 85, sub: 75, slug: 'LW-X2O-SFLT' },
    { name: 'Cellular Performance System', cat: 'Cellergize', need: 'General Wellness', desc: 'Cellular performance wellness system.', long: 'The Cellular Performance System is a LifeWave wellness offering focused on supporting everyday cellular health and vitality.', image: 'cellular-perf-system.jpg', price: 229.90, sub: 169.90, slug: 'CELL-PERF-SYS-USA' },
    { name: 'Buy the Cellular Performance System, Get Cellergize\u2122 Evening Free', cat: 'Promotions', need: 'General Wellness', desc: 'Promotional bundle to get started with the Cellular Performance System and Cellergize\u2122 Evening.', long: 'Promotional offer: buy the Cellular Performance System and get Cellergize\u2122 Evening free, as an introduction to the LifeWave wellness range.', image: 'cellular-perf-celleven.jpg', price: 229.90, sub: 169.90, slug: 'P242-US' },
    { name: 'Cellergize\u2122 Duo', cat: 'Cellergize', need: 'Nutrition', desc: 'Cellergize wellness duo.', long: 'Cellergize\u2122 Duo is a wellness combination designed to support your everyday nutrition routine.', image: 'cellergize-duo.jpg', price: 149.95, sub: 119.95, slug: 'CELL-DUO-USA' },
    { name: 'Cellergize\u2122 Morning', cat: 'Cellergize', need: 'Nutrition', desc: 'Morning Cellergize wellness product.', long: 'Cellergize\u2122 Morning is designed to complement your morning routine as part of the Cellergize wellness line.', image: 'cellergize-morning.jpg', price: 79.95, sub: 69.95, slug: 'CELL-MORN-USA' },
    { name: 'Cellergize\u2122 Evening', cat: 'Cellergize', need: 'Nutrition', desc: 'Evening Cellergize wellness product.', long: 'Cellergize\u2122 Evening is designed to complement your evening routine as part of the Cellergize wellness line.', image: 'cellergize-evening.jpg', price: 79.95, sub: 69.95, slug: 'CELL-EVEN-USA' },
    { name: 'LifeWave Y-Age Aeon\u00ae Patches', cat: 'Y-Age', need: 'General Wellness', desc: 'Y-Age Aeon wellness patches.', long: 'Y-Age Aeon\u00ae patches are part of the LifeWave Y-Age wellness product line.', image: 'y-age-aeon.jpg', price: 79.95, sub: 69.95, slug: '36552.022.001' },
    { name: 'LifeWave Y-Age Glutathione Patches', cat: 'Y-Age', need: 'General Wellness', desc: 'Y-Age Glutathione wellness patches.', long: 'Y-Age Glutathione patches are part of the LifeWave Y-Age wellness product line.', image: 'y-age-glutathione.jpg', price: 79.95, sub: 69.95, slug: '36001.022.001' },
    { name: 'LifeWave Y-Age Carnosine Patches', cat: 'Y-Age', need: 'General Wellness', desc: 'Y-Age Carnosine wellness patches.', long: 'Y-Age Carnosine patches are part of the LifeWave Y-Age wellness product line.', image: 'y-age-carnosine.jpg', price: 79.95, sub: 69.95, slug: '36551.022.001' },
    { name: 'LifeWave Y-Age System Kit', cat: 'Y-Age', need: 'General Wellness', desc: 'Y-Age wellness system kit.', long: 'The Y-Age System Kit brings together a selection of Y-Age wellness patches as a complete wellness solution.', image: 'y-age-system.jpg', price: 209.85, sub: 149.85, slug: '36553.022.001' },
    { name: 'LifeWave IceWave\u00ae Patches', cat: 'IceWave', need: 'Movement', desc: 'IceWave wellness patches.', long: 'IceWave\u00ae patches are designed around activity and movement as part of the LifeWave wellness range.', image: 'icewave.jpg', price: 79.95, sub: 69.95, slug: '34001.022.001' },
    { name: 'LifeWave Energy Enhancer\u00ae Patches', cat: 'Energy Enhancer', need: 'Vitality & Activity', desc: 'Energy Enhancer wellness patches.', long: 'Energy Enhancer\u00ae patches are designed to support everyday vitality and an active lifestyle.', image: 'energy-enhancer.jpg', price: 79.95, sub: 69.95, slug: '31001.022.001' },
    { name: 'LifeWave Silent Nights\u00ae Patches', cat: 'Silent Nights', need: 'Sleep', desc: 'Wellness patches designed to complement healthy sleep routines.', long: 'Silent Nights\u00ae patches are wellness solutions designed to complement healthy sleep routines.', image: 'silent-nights.jpg', price: 79.95, sub: 69.95, slug: '32001.022.001' },
    { name: 'LifeWave Alavida\u00ae Patches', cat: 'Alavida', need: 'Skin Care', desc: 'Alavida wellness patches.', long: 'LifeWave Alavida\u00ae patches are part of the Alavida skincare-oriented wellness line.', image: 'alavida-patches.jpg', price: 79.95, sub: 69.95, slug: 'ALV-PATCH-USA' },
    { name: 'Alavida Revive Eye Cream', cat: 'Alavida', need: 'Skin Care', desc: 'Alavida skincare eye cream.', long: 'Alavida Revive Eye Cream is a skincare product from the LifeWave Alavida line, focused on the delicate eye area.', image: 'alavida-eye-cream.jpg', price: 89.95, sub: 69.95, slug: 'ALV-ECR-USA' },
    { name: 'LifeWave Alavida\u00ae Nightly Restore Facial Creme', cat: 'Alavida', need: 'Skin Care', desc: 'Alavida nightly restore facial creme.', long: 'LifeWave Alavida\u00ae Nightly Restore Facial Creme is a skincare product designed to complement your evening skincare routine.', image: 'alavida-creme.jpg', price: 99.95, sub: 79.95, slug: 'ALV-CR-USA' },
    { name: 'LifeWave Alavida\u00ae Facial Nectar', cat: 'Alavida', need: 'Skin Care', desc: 'Alavida facial nectar.', long: 'LifeWave Alavida\u00ae Facial Nectar is a skincare product from the LifeWave Alavida line.', image: 'alavida-nectar.jpg', price: 79.95, sub: 59.95, slug: 'ALV-NEC-USA' },
    { name: 'LifeWave Alavida\u00ae Regenerating Trio', cat: 'Alavida', need: 'Skin Care', desc: 'Alavida regenerating trio skincare set.', long: 'LifeWave Alavida\u00ae Regenerating Trio is a complete skincare set from the LifeWave Alavida line.', image: 'alavida-trio.jpg', price: 199.95, sub: 149.95, slug: 'ALV-TRIO-USA-EN' },
    { name: 'LifeWave SP6 Complete\u00ae Patches', cat: 'SP6 Complete', need: 'General Wellness', desc: 'SP6 Complete wellness patches.', long: 'LifeWave SP6 Complete\u00ae patches are part of the LifeWave wellness product range.', image: 'sp6.jpg', price: 79.95, sub: 69.95, slug: '38001.022.001' },
    { name: 'LifeWave AcuLife\u00ae Patches', cat: 'AcuLife', need: 'General Wellness', desc: 'AcuLife wellness patches.', long: 'LifeWave AcuLife\u00ae patches are part of the LifeWave wellness product range.', image: 'aculife.jpg', price: 79.95, sub: 69.95, slug: '30001.022.001' }
  ];

  products.forEach(function (p, i) { p.id = 'p' + i; p.url = PRODUCT_BASE + p.slug; });

  var categories = ['Promotions', 'X39', 'LifeWave X\u2082O', 'X49', 'Y-Age', 'IceWave', 'Cellergize', 'Energy Enhancer', 'Silent Nights', 'Alavida', 'SP6 Complete', 'AcuLife'];
  var healthNeeds = ['General Wellness', 'Vitality & Activity', 'Movement', 'Sleep', 'Nutrition', 'Skin Care', 'Water Technology System'];

  function formatPrice(v) {
    return '$' + Number(v).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function findProduct(id) {
    for (var i = 0; i < products.length; i++) {
      if (products[i].id === id || products[i].slug === id) return products[i];
    }
    return null;
  }

  function productWaMsg(p, lang) {
    var n = p ? p.name : '';
    if (lang === 'en') {
      return 'Hello Ramón, I would like more information about ' + n + '.';
    }
    return 'Hola Ramón, me gustaría obtener más información sobre ' + n + '.';
  }

  return {
    CONFIG: CONFIG,
    waLink: waLink,
    products: products,
    categories: categories,
    healthNeeds: healthNeeds,
    PRODUCT_BASE: PRODUCT_BASE,
    IMG_BASE: IMG_BASE,
    formatPrice: formatPrice,
    findProduct: findProduct,
    productWaMsg: productWaMsg
  };
})(window);
