/* ==========================================================
   Ramón Pinales | Product Detail Page (product.html?id=...)
   ========================================================== */
(function () {
  'use strict';

  var S = window.STORE;
  var CONFIG = S.CONFIG;
  var IMG_BASE = S.IMG_BASE;
  var formatPrice = S.formatPrice;
  var waLink = S.waLink;
  var productWaMsg = S.productWaMsg;

  var i18n = {
    es: {
      loading: 'Cargando producto...', notFound: 'No se encontró el producto.',
      oneTime: 'Compra única', subscribe: 'Suscripción (ahorra)', perMonth: '/mes',
      details: 'Detalles', about: 'Acerca de este producto',
      buyOnLw: 'Comprar en LifeWave', askWA: 'Preguntar por WhatsApp',
      back: 'Volver a los Productos', related: 'También podría interesarte',
      productInfo: 'Información del producto', itemCode: 'Código del artículo',
      disclaimer: 'Los precios y la disponibilidad pueden variar según el país y se gestionan a través de LifeWave.'
    },
    en: {
      loading: 'Loading product...', notFound: 'Product not found.',
      oneTime: 'One-time purchase', subscribe: 'Subscribe & save', perMonth: '/mo',
      details: 'Details', about: 'About this product',
      buyOnLw: 'Buy on LifeWave', askWA: 'Ask via WhatsApp',
      back: 'Back to Products', related: 'You may also like',
      productInfo: 'Product information', itemCode: 'Item code',
      disclaimer: 'Prices and availability may vary by country and are managed through LifeWave.'
    }
  };
  var currentLang = (document.documentElement.lang === 'en') ? 'en' : 'es';
  var T = i18n[currentLang];

  function $(s) { return document.querySelector(s); }
  function $all(s) { return Array.prototype.slice.call(document.querySelectorAll(s)); }

  function relatedHtml(p) {
    var others = S.products.filter(function (x) { return x.id !== p.id; }).slice(0, 3);
    return others.map(function (o) {
      return '<a class="rel-card" href="product.html?id=' + o.id + '">' +
        '<img src="' + IMG_BASE + o.image + '" alt="' + o.name + '" loading="lazy" />' +
        '<div class="rel-name">' + o.name + '</div>' +
        '<div class="rel-price">' + formatPrice(o.price) + '</div>' +
      '</a>';
    }).join('');
  }

  function render(p) {
    var root = $('#detailRoot');
    var waMsg = waLink(productWaMsg(p, currentLang));
    var waHref = CONFIG.whatsapp.number ? waMsg : '#contact';
    var priceBox = '<div class="detail-price-grid">';
    priceBox += '<div class="detail-price-card"><div class="dp-label">' + T.oneTime + '</div><div class="dp-value">' + formatPrice(p.price) + '</div></div>';
    if (p.sub != null) {
      priceBox += '<div class="detail-price-card sub"><div class="dp-label">' + T.subscribe + '</div><div class="dp-value">' + formatPrice(p.sub) + '</div></div>';
    }
    priceBox += '</div>';

    root.innerHTML =
      '<div class="detail-layout">' +
        '<div class="detail-media"><img src="' + IMG_BASE + p.image + '" alt="' + p.name + '" /></div>' +
        '<div class="detail-info">' +
          '<span class="product-cat">' + p.cat + '</span>' +
          '<h1 class="detail-name">' + p.name + '</h1>' +
          '<p class="detail-desc">' + p.desc + '</p>' +
          priceBox +
          '<div class="detail-actions">' +
            '<a class="btn btn-primary btn-lg" href="' + p.url + '" target="_blank" rel="noopener noreferrer">' + T.buyOnLw + '</a>' +
            '<a class="btn btn-wa btn-lg" href="' + waHref + '" target="_blank" rel="noopener noreferrer">' + T.askWA + '</a>' +
          '</div>' +
          '<p class="detail-disclaimer">' + T.disclaimer + '</p>' +
          '<div class="detail-meta">' +
            '<h3>' + T.details + '</h3>' +
            '<p class="detail-long">' + p.long + '</p>' +
            '<div class="meta-row"><span>' + T.itemCode + '</span><span>' + p.slug + '</span></div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="related">' +
        '<h2 class="rel-title">' + T.related + '</h2>' +
        '<div class="rel-grid">' + relatedHtml(p) + '</div>' +
      '</div>';

    // Update CTA whatsapp button with product context
    var cta = $('#detailCtaWhatsApp');
    if (cta) { cta.href = waHref; cta.textContent = T.askWA; }
    // Update document title
    document.title = p.name + ' | Ramón Pinales';
  }

  function init() {
    $('#navbar').classList.add('scrolled');
    var params = new URLSearchParams(window.location.search);
    var id = params.get('id');
    var p = S.findProduct(id);
    var root = $('#detailRoot');
    if (!p) {
      root.innerHTML = '<div class="detail-loading">' + T.notFound + '</div>';
      return;
    }
    render(p);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
