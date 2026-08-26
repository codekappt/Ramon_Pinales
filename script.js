/* =============================================
   RAMÓN PINALES - LANDING PAGE SCRIPTS
   ============================================= */

(function () {
  'use strict';

  /* ---- Config ---- */
  const CONFIG = {
    eventDate: new Date('2026-09-12T10:00:00'),
    whatsappNumber: 'XXXXXXXXXX',
    trackingEnabled: false,
  };

  /* ---- Navigation ---- */
  const navHeader = document.getElementById('navHeader');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  function initNav() {
    // Scroll effect
    window.addEventListener('scroll', () => {
      navHeader.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });

    // Mobile toggle
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Countdown Timer ---- */
  function initCountdown() {
    const daysEl = document.getElementById('countdown-days');
    const hoursEl = document.getElementById('countdown-hours');
    const minutesEl = document.getElementById('countdown-minutes');
    const secondsEl = document.getElementById('countdown-seconds');

    if (!daysEl) return;

    function update() {
      const now = new Date();
      const diff = CONFIG.eventDate - now;

      if (diff <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minutesEl.textContent = String(minutes).padStart(2, '0');
      secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  }

  /* ---- FAQ Accordion ---- */
  function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isActive = item.classList.contains('active');

        // Close all
        document.querySelectorAll('.faq-item.active').forEach(el => {
          el.classList.remove('active');
          el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });

        // Open clicked (if it was closed)
        if (!isActive) {
          item.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* ---- Contact Form ---- */
  function initForm() {
    const form = document.getElementById('leadForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      // Reset errors
      form.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));
      form.querySelectorAll('.form-error').forEach(el => el.textContent = '');

      // Validate name
      const name = form.querySelector('#leadName');
      if (!name.value.trim()) {
        name.closest('.form-group').classList.add('error');
        form.querySelector('#leadNameError').textContent = 'Por favor, ingresa tu nombre.';
        valid = false;
      }

      // Validate WhatsApp
      const whatsapp = form.querySelector('#leadWhatsApp');
      if (!whatsapp.value.trim()) {
        whatsapp.closest('.form-group').classList.add('error');
        form.querySelector('#leadWhatsAppError').textContent = 'Por favor, ingresa tu número de WhatsApp.';
        valid = false;
      }

      // Validate email (optional but if filled, must be valid)
      const email = form.querySelector('#leadEmail');
      if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        email.closest('.form-group').classList.add('error');
        form.querySelector('#leadEmailError').textContent = 'Por favor, ingresa un email válido.';
        valid = false;
      }

      // Validate country
      const country = form.querySelector('#leadCountry');
      if (!country.value) {
        country.closest('.form-group').classList.add('error');
        form.querySelector('#leadCountryError').textContent = 'Por favor, selecciona tu país.';
        valid = false;
      }

      if (!valid) return;

      // Simulate form submission
      const submitBtn = form.querySelector('button[type="submit"]');
      const btnText = submitBtn.querySelector('.btn-text');
      const btnLoading = submitBtn.querySelector('.btn-loading');
      const formSuccess = document.getElementById('formSuccess');

      submitBtn.disabled = true;
      btnText.style.display = 'none';
      btnLoading.style.display = 'inline-flex';

      // Simulate API call
      setTimeout(() => {
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
        form.style.display = 'none';
        formSuccess.style.display = 'flex';

        // Track form submission
        trackEvent('lead_form_submission', {
          name: name.value,
          whatsapp: whatsapp.value,
          email: email.value,
          country: country.value,
        });
      }, 1500);
    });
  }

  /* ---- Scroll Animations (Intersection Observer) ---- */
  function initScrollAnimations() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-fade-up').forEach(el => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
  }

  /* ---- Smooth Scroll ---- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const id = link.getAttribute('href');
        if (id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const headerHeight = navHeader.offsetHeight;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      });
    });
  }

  /* ---- Event Tracking (Placeholder) ---- */
  function trackEvent(eventName, data) {
    console.log('[Analytics]', eventName, data);

    // Google Analytics 4
    if (typeof gtag === 'function') {
      gtag('event', eventName, data);
    }

    // Meta Pixel
    if (typeof fbq === 'function') {
      fbq('trackCustom', eventName, data);
    }

    // DataLayer
    if (window.dataLayer) {
      window.dataLayer.push({ event: eventName, ...data });
    }
  }

  // Track WhatsApp clicks
  document.querySelectorAll('[data-event="whatsapp_click"]').forEach(el => {
    el.addEventListener('click', () => {
      trackEvent('whatsapp_click', { source: el.closest('section')?.id || 'unknown' });
    });
  });

  // Track CTA clicks
  document.querySelectorAll('[data-event]').forEach(el => {
    if (el.dataset.event !== 'whatsapp_click') {
      el.addEventListener('click', () => {
        trackEvent(el.dataset.event, { source: el.closest('section')?.id || 'unknown' });
      });
    }
  });

  /* ---- Scroll Depth Tracking ---- */
  function initScrollDepthTracking() {
    const thresholds = [25, 50, 75, 90];
    const tracked = new Set();

    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      thresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !tracked.has(threshold)) {
          tracked.add(threshold);
          trackEvent('scroll_depth', { depth: threshold });
        }
      });
    }, { passive: true });
  }

  /* ---- Initialize Everything ---- */
  function init() {
    initNav();
    initCountdown();
    initFAQ();
    initForm();
    initScrollAnimations();
    initSmoothScroll();
    initScrollDepthTracking();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
