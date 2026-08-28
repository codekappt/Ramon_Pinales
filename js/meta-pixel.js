/* ==========================================================
   Meta (Facebook) Pixel — Ads + Behaviour Tracking
   ----------------------------------------------------------
   HOW TO ACTIVATE:
   1) Replace PIXEL_ID below with your 15-digit Meta Pixel ID.
   2) Keep this file + the <script src="meta-pixel.js"> tags
      in index.html and product.html.
   Events fired automatically:
     - PageView            every page load
     - ViewContent         product detail page (id, name, price)
     - Search              product search performed
     - Contact             any WhatsApp CTA clicked
     - Lead                contact form submitted (WhatsApp message)
     - InitiateCheckout    any LifeWave store link clicked
     - AddToCart           any "Buy / Shop" button clicked
   ========================================================== */
(function () {
  'use strict';

  var PIXEL_ID = 'YOUR_PIXEL_ID';
  var ENABLED = /^[0-9]{15,16}$/.test(PIXEL_ID);
  var CURRENCY = 'USD';

  function fire(name, data) {
    if (!ENABLED || typeof window.fbq !== 'function') return;
    try { window.fbq('track', name, data || {}); } catch (e) {}
  }

  window.MetaEvents = {
    enabled: ENABLED,
    pageView: function () { fire('PageView'); },
    viewContent: function (d) { fire('ViewContent', d); },
    search: function (d) { fire('Search', d); },
    contact: function (d) { fire('Contact', d); },
    lead: function (d) { fire('Lead', d); },
    addToCart: function (d) { fire('AddToCart', d); },
    initiateCheckout: function (d) { fire('InitiateCheckout', d); },
    purchase: function (d) { fire('Purchase', d); }
  };

  function loadPixel() {
    if (!ENABLED || typeof window.fbq !== 'undefined') return;
    var t = document.createElement('script');
    t.async = true;
    t.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(t);

    var f = window;
    f.fbq = f.fbq || function () {
      f.fbq.callMethod ? f.fbq.callMethod.apply(f.fbq, arguments) : f.fbq.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = f.fbq;
    f.fbq.push = f.fbq;
    f.fbq.loaded = true;
    f.fbq.version = '2.0';
    f.fbq.queue = [];
    f.fbq('init', PIXEL_ID);
  }

  function collectProduct() {
    var p = {};
    var name = document.title.replace(/\s*\|\s*Ramón Pinales.*$/i, '');
    var m = window.location.search.match(/[?&]id=([^&]+)/);
    p.content_type = 'product';
    p.content_ids = m ? [m[1]] : [];
    p.contents = m ? [{ id: m[1], quantity: 1 }] : [];
    p.content_name = name;
    // try to read price from DOM
    var priceEl = document.querySelector('.detail-price-card:not(.sub) .dp-value');
    if (priceEl) {
      var val = parseFloat(String(priceEl.textContent || '').replace(/[^0-9.]/g, ''));
      if (!isNaN(val)) { p.value = val; }
    }
    p.currency = CURRENCY;
    return p;
  }

  function init() {
    loadPixel();
    window.fbq('track', 'PageView');

    // Product detail -> ViewContent
    if (document.getElementById('detailRoot')) {
      var timer = window.setInterval(function () {
        if (document.querySelector('.detail-info')) {
          window.clearInterval(timer);
          window.MetaEvents.viewContent(collectProduct());
        }
      }, 400);
    }

    // Contact form -> Lead
    var form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function () {
        window.MetaEvents.lead({
          content_name: 'WhatsApp Contact Form',
          value: 1.0,
          currency: CURRENCY
        });
      });
    }

    // Product search -> Search
    var search = document.getElementById('productSearch');
    if (search) {
      search.addEventListener('input', function () {
        var q = search.value.trim();
        window.MetaEvents.search({ search_string: q, content_type: 'product' });
      });
    }

    // Global link clicking -> Contact / InitiateCheckout / AddToCart
    document.addEventListener('click', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (!a) return;
      var href = (a.getAttribute('href') || '').toLowerCase();

      if (href.indexOf('wa.me') !== -1) {
        window.MetaEvents.contact({ content_name: 'WhatsApp CTA', value: 1.0, currency: CURRENCY });
      } else if (href.indexOf('lifewave.com') !== -1) {
        window.MetaEvents.initiateCheckout({
          content_name: 'LifeWave Store Link',
          currency: CURRENCY
        });
      } else if ((a.className || '').indexOf('btn') !== -1 &&
                 (href.indexOf('/store/') !== -1 || a.textContent.indexOf('Buy') !== -1 || a.textContent.indexOf('Comprar') !== -1)) {
        window.MetaEvents.addToCart({ content_name: 'Buy on LifeWave', currency: CURRENCY });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
