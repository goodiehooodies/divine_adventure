/**
 * Divine Adventure Holidays Tour & Travels
 * =========================================
 * main.js — all site interactivity
 *
 * Sections:
 *  1. Utilities
 *  2. Config injection (contact details, WhatsApp links)
 *  3. Header scroll + active nav
 *  4. Mobile menu
 *  5. Hero slideshow
 *  6. Destination filters
 *  7. "Request a quote" → pre-select destination in form
 *  8. Gallery — lazy load (native)
 *  9. Video — fallback
 * 10. Reviews — no-op (static)
 * 11. FAQ accordion
 * 12. Enquiry form: validation + WhatsApp message builder
 * 13. Number-input steppers
 * 14. Chip selectors (radio + multi)
 * 15. Footer + copyright
 */

'use strict';

/* ── 1. Utilities ─────────────────────────────────────────── */

/** Select one element */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
/** Select all elements */
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function smoothScrollTo(target) {
  if (!target) return;
  target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
}

function waLink(number, text) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/* ── 2. Config injection ──────────────────────────────────── */

(function injectConfig() {
  // WhatsApp float button
  const waFloat = $('#wa-float');
  if (waFloat) {
    waFloat.href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hello! I would like to enquire about a trip.')}`;
  }

  // Contact details in enquiry section
  const contactDetails = $('#contact-details');
  if (contactDetails) {
    contactDetails.innerHTML = `
      <div class="contact-item">
        <div class="contact-item-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.854L.057 23.885a.5.5 0 0 0 .619.612l6.162-1.615A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.86 0-3.604-.5-5.1-1.374l-.366-.217-3.793.994.995-3.693-.233-.384A9.953 9.953 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
        </div>
        <div class="contact-item-text">
          <small>WhatsApp</small>
          <a href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener noreferrer">+${SITE.whatsapp}</a>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-item-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </div>
        <div class="contact-item-text">
          <small>Email</small>
          <a href="mailto:${SITE.email}">${SITE.email}</a>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-item-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div class="contact-item-text">
          <small>Office</small>
          <span>${SITE.address}</span>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-item-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div class="contact-item-text">
          <small>Hours</small>
          <span>${SITE.hours}</span>
        </div>
      </div>
    `;
  }

  // Footer contacts
  const footerContacts = $('#footer-contacts');
  if (footerContacts) {
    footerContacts.innerHTML = `
      <a href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener noreferrer">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.854L.057 23.885a.5.5 0 0 0 .619.612l6.162-1.615A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.86 0-3.604-.5-5.1-1.374l-.366-.217-3.793.994.995-3.693-.233-.384A9.953 9.953 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
        WhatsApp: +${SITE.whatsapp}
      </a>
      <a href="mailto:${SITE.email}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        ${SITE.email}
      </a>
    `;
  }

  // Footer copyright
  const footerCopy = $('#footer-copy');
  if (footerCopy) {
    footerCopy.textContent = `© ${new Date().getFullYear()} ${SITE.businessName}. All rights reserved.`;
  }
})();


/* ── 3. Header: scroll + active-link highlighting ─────────── */

(function initHeader() {
  const header  = $('#site-header');
  const navLinks = $$('#site-header .nav-links a, .mobile-menu a[data-section]');
  const sections = $$('section[id], main[id]');

  // Scroll → opaque header
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
    highlightActive();
  };

  // Active nav highlight via IntersectionObserver
  const sectionMap = {};
  sections.forEach(s => { sectionMap[s.id] = s; });

  function highlightActive() {
    let current = '';
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 120) current = sec.id;
    });
    navLinks.forEach(a => {
      const target = a.getAttribute('data-section') || (a.getAttribute('href') || '').replace('#','');
      a.classList.toggle('active', target === current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


/* ── 4. Mobile menu ───────────────────────────────────────── */

(function initMobileMenu() {
  const btn  = $('#hamburger-btn');
  const menu = $('#mobile-menu');
  if (!btn || !menu) return;

  let open = false;

  function toggleMenu(state) {
    open = state;
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  btn.addEventListener('click', () => toggleMenu(!open));

  // Close on link click
  $$('.mobile-menu a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

  // Close on Escape
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && open) toggleMenu(false); });

  // Close on outside click
  document.addEventListener('click', e => {
    if (open && !menu.contains(e.target) && e.target !== btn && !btn.contains(e.target)) {
      toggleMenu(false);
    }
  });
})();


/* ── 5. Hero slideshow ────────────────────────────────────── */

(function initSlideshow() {
  const slides    = $$('.slide');
  const dots      = $$('.slide-dot');
  const prevBtn   = $('#slide-prev');
  const nextBtn   = $('#slide-next');
  const slideshow = $('#hero-slideshow');
  if (!slides.length) return;

  let current  = 0;
  let timer    = null;
  const DELAY  = 6000;

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    dots[current].setAttribute('aria-selected', 'false');

    current = (idx + slides.length) % slides.length;

    slides[current].classList.add('active');
    dots[current].classList.add('active');
    dots[current].setAttribute('aria-selected', 'true');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startTimer() {
    if (prefersReducedMotion) return;
    stopTimer();
    timer = setInterval(next, DELAY);
  }

  function stopTimer() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  // Arrow buttons
  nextBtn && nextBtn.addEventListener('click', () => { next(); startTimer(); });
  prevBtn && prevBtn.addEventListener('click', () => { prev(); startTimer(); });

  // Dot buttons
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); startTimer(); });
  });

  // Pause on hover / focus
  const hero = $('#hero');
  if (hero) {
    hero.addEventListener('mouseenter', stopTimer);
    hero.addEventListener('mouseleave', startTimer);
    hero.addEventListener('focusin',  stopTimer);
    hero.addEventListener('focusout', startTimer);
  }

  startTimer();
})();


/* ── 6. Destination filters ───────────────────────────────── */

(function initFilters() {
  const filterBtns = $$('.filter-btn');
  const cards      = $$('.dest-card');
  const countEl    = $('#filter-count');
  const emptyEl    = $('#dest-empty');
  const resetBtn   = $('#dest-reset-btn');

  function applyFilter(filter) {
    let visible = 0;
    cards.forEach(card => {
      const region = card.dataset.region;
      const show   = filter === 'all' || region === filter;
      card.classList.toggle('hidden', !show);
      if (show) visible++;
    });

    filterBtns.forEach(b => {
      const pressed = b.dataset.filter === filter;
      b.setAttribute('aria-pressed', String(pressed));
    });

    if (countEl) {
      countEl.textContent = filter === 'all'
        ? `Showing all ${cards.length} destinations`
        : `Showing ${visible} destination${visible !== 1 ? 's' : ''} in ${filterBtns.find(b => b.dataset.filter === filter)?.textContent || filter}`;
    }

    if (emptyEl) emptyEl.classList.toggle('visible', visible === 0);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
  });

  resetBtn && resetBtn.addEventListener('click', () => applyFilter('all'));

  // Initial state
  applyFilter('all');
})();


/* ── 7. "Request a quote" → scroll to form + pre-select ───── */

(function initQuoteButtons() {
  $$('.dest-quote-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const dest = btn.dataset.dest;
      // Scroll to contact section
      const contactSection = $('#contact');
      if (contactSection) smoothScrollTo(contactSection);

      // Pre-select the matching destination chip after a short delay
      setTimeout(() => {
        // Strip the "(region)" suffix to match chip value
        const chipVal = dest.replace(/\s*\(.*\)/, '').replace(' and ', ' and ');
        const chips = $$('#dest-chips .chip');
        chips.forEach(chip => {
          const val = chip.dataset.value;
          // Match if chip value is found in dest string
          if (dest.toLowerCase().includes(val.toLowerCase()) || val.toLowerCase().includes(chipVal.toLowerCase().split(' ')[0])) {
            chip.classList.add('selected');
            chip.setAttribute('aria-checked', 'true');
          }
        });
        syncChipHidden('destinations', 'f-destinations');
        // Show "Other" text if "Other" chip selected
        updateOtherDest();
      }, 600);
    });
  });
})();


/* ── 8. Video fallback ────────────────────────────────────── */

(function initVideo() {
  const container = $('#video-container');
  if (!container) return;

  const video = document.createElement('video');
  video.className   = 'trip-video';
  video.controls    = true;
  video.playsInline = true;
  video.poster      = 'assets/images/gallery-1.jpg'; // Use gallery image as poster

  const source = document.createElement('source');
  source.src  = 'assets/videos/trip-highlights.mp4';
  source.type = 'video/mp4';
  video.appendChild(source);

  video.addEventListener('error', () => {
    container.innerHTML = `
      <div class="video-missing">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true">
          <polygon points="23 7 16 12 23 17 23 7"/>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
          <line x1="1" y1="1" x2="23" y2="23" stroke-dasharray="4 3"/>
        </svg>
        <p><strong>Video coming soon</strong></p>
        <p style="font-size:0.8125rem">Add <code>assets/videos/trip-highlights.mp4</code> to show your trip highlights here.</p>
      </div>`;
  });

  container.appendChild(video);
})();


/* ── 9. FAQ Accordion ─────────────────────────────────────── */

(function initFAQ() {
  const accordion = $('#faq-accordion');
  if (!accordion) return;

  const questions = $$('.faq-question', accordion);

  function openItem(btn) {
    const answerId = btn.getAttribute('aria-controls');
    const answer   = document.getElementById(answerId);
    btn.setAttribute('aria-expanded', 'true');
    answer && answer.classList.add('open');
  }

  function closeItem(btn) {
    const answerId = btn.getAttribute('aria-controls');
    const answer   = document.getElementById(answerId);
    btn.setAttribute('aria-expanded', 'false');
    answer && answer.classList.remove('open');
  }

  questions.forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      // Close all
      questions.forEach(q => closeItem(q));
      // Open clicked if it was closed
      if (!isOpen) openItem(btn);
    });

    // Keyboard: Space/Enter already trigger click on buttons
  });
})();


/* ── 10. Chip selectors ───────────────────────────────────── */

function syncChipHidden(group, hiddenId) {
  const selected = $$(`[data-group="${group}"].selected`).map(c => c.dataset.value);
  const hidden   = document.getElementById(hiddenId);
  if (hidden) hidden.value = selected.join(', ');
}

function updateOtherDest() {
  const otherChip  = $$('#dest-chips .chip').find(c => c.dataset.value === 'Other');
  const otherGroup = $('#other-dest-group');
  if (otherGroup) {
    otherGroup.style.display = otherChip && otherChip.classList.contains('selected') ? '' : 'none';
  }
}

(function initChips() {
  // Trip type: single-select (radio)
  $$('#trip-type-chips .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      $$('#trip-type-chips .chip').forEach(c => {
        c.classList.remove('selected');
        c.setAttribute('aria-checked', 'false');
      });
      chip.classList.add('selected');
      chip.setAttribute('aria-checked', 'true');
      syncChipHidden('trip-type', 'f-trip-type');
    });
  });

  // Destinations: multi-select
  $$('#dest-chips .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('selected');
      chip.setAttribute('aria-checked', String(chip.classList.contains('selected')));
      syncChipHidden('destinations', 'f-destinations');
      updateOtherDest();
    });
  });

  // Interests: multi-select
  $$('#interests-chips .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('selected');
      chip.setAttribute('aria-checked', String(chip.classList.contains('selected')));
      syncChipHidden('interests', 'f-interests');
    });
  });
})();


/* ── 11. Number steppers ─────────────────────────────────── */

(function initSteppers() {
  function update(id, delta, min = 0, max = 99) {
    const hidden  = document.getElementById(id);
    const display = document.getElementById(id + '-display');
    if (!hidden) return;
    let val = parseInt(hidden.value, 10) + delta;
    val = Math.max(min, Math.min(max, val));
    hidden.value = val;
    if (display) display.textContent = val;
  }

  $$('.num-dec').forEach(btn => {
    btn.addEventListener('click', () => {
      const min = btn.dataset.target === 'f-adults' ? 1 : 0;
      update(btn.dataset.target, -1, min);
    });
  });

  $$('.num-inc').forEach(btn => {
    btn.addEventListener('click', () => update(btn.dataset.target, 1));
  });
})();


/* ── 12. Enquiry form ─────────────────────────────────────── */

(function initForm() {
  const form      = $('#enquiry-form');
  if (!form) return;

  // ── Validation helpers ──

  function showError(id, msg) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = msg;
    el.classList.add('visible');
  }

  function clearError(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('visible');
  }

  function markField(id, invalid) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('error', invalid);
  }

  function val(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  function checked(id) {
    const el = document.getElementById(id);
    return el ? el.checked : false;
  }

  // ── Clear errors on input ──

  form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const errId = 'err-' + input.id.replace('f-', '');
      clearError(errId);
    });
  });

  form.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const errId = 'err-' + cb.id.replace('consent-', '');
      clearError(errId);
    });
  });

  // ── Departure date: must be after arrival ──

  const arrInput = document.getElementById('f-arrival-date');
  const depInput = document.getElementById('f-departure-date');

  function updateDepMin() {
    if (arrInput && depInput && arrInput.value) {
      depInput.min = arrInput.value;
    }
  }

  arrInput && arrInput.addEventListener('change', updateDepMin);

  // ── Validate ──

  function validate() {
    let valid = true;
    let firstInvalid = null;

    function fail(fieldId, errId, msg) {
      markField(fieldId, true);
      showError(errId, msg);
      if (!firstInvalid) firstInvalid = document.getElementById(fieldId);
      valid = false;
    }

    // Name
    if (!val('f-name')) fail('f-name', 'err-name', 'Please enter your name.');
    else clearError('err-name');

    // Nationality
    if (!val('f-nationality')) fail('f-nationality', 'err-nationality', 'Please enter your nationality.');
    else clearError('err-nationality');

    // Email or phone (at least one)
    const email = val('f-email');
    const phone = val('f-phone');
    const emailOk = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (email && !emailOk) fail('f-email', 'err-email', 'Please enter a valid email address.');
    else clearError('err-email');

    if (!email && !phone) {
      showError('err-contact', 'Please provide an email address or phone number.');
      markField('f-email',  true);
      markField('f-phone', true);
      if (!firstInvalid) firstInvalid = document.getElementById('f-email');
      valid = false;
    } else {
      markField('f-phone', false);
      if (emailOk || !email) { markField('f-email', false); clearError('err-contact'); }
    }

    // Arrival date
    if (!val('f-arrival-date')) fail('f-arrival-date', 'err-arrival', 'Please select an arrival date.');
    else clearError('err-arrival');

    // Departure date: required + after arrival
    const arrDate = val('f-arrival-date');
    const depDate = val('f-departure-date');
    if (!depDate) {
      fail('f-departure-date', 'err-departure', 'Please select a departure date.');
    } else if (arrDate && depDate <= arrDate) {
      fail('f-departure-date', 'err-departure', 'Departure must be after arrival.');
    } else {
      clearError('err-departure');
    }

    // Consent: terms
    if (!checked('consent-terms')) {
      showError('err-terms', 'You must agree to the Terms & Cancellation Policy.');
      if (!firstInvalid) firstInvalid = document.getElementById('consent-terms');
      valid = false;
    } else clearError('err-terms');

    // Consent: privacy
    if (!checked('consent-privacy')) {
      showError('err-privacy', 'You must agree to the Privacy Notice.');
      if (!firstInvalid && !checked('consent-terms')) firstInvalid = document.getElementById('consent-privacy');
      valid = false;
    } else clearError('err-privacy');

    if (firstInvalid) {
      firstInvalid.focus();
      firstInvalid.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'center' });
    }

    return valid;
  }

  // ── Build WhatsApp message ──

  function buildMessage() {
    const lines = [];
    const sep   = '\n';
    const h     = (t) => `\n*${t.toUpperCase()}*`;

    lines.push(`*Enquiry for ${SITE.businessName}*`);

    // About you
    lines.push(h('About you'));
    lines.push(`Name: ${val('f-name')}`);
    lines.push(`Nationality: ${val('f-nationality')}`);
    if (val('f-email'))       lines.push(`Email: ${val('f-email')}`);
    if (val('f-phone'))       lines.push(`Phone/WhatsApp: ${val('f-phone')}`);
    if (val('f-residence'))   lines.push(`Country of residence: ${val('f-residence')}`);
    if (val('f-source'))      lines.push(`How they heard: ${val('f-source')}`);

    // Trip details
    lines.push(h('Trip details'));
    lines.push(`Arrival date: ${val('f-arrival-date')}`);
    lines.push(`Departure date: ${val('f-departure-date')}`);
    if (val('f-arrival-city'))   lines.push(`Arriving at: ${val('f-arrival-city')}`);
    if (val('f-departure-city')) lines.push(`Departing from: ${val('f-departure-city')}`);
    lines.push(`Adults: ${document.getElementById('f-adults').value}`);
    lines.push(`Children (under 12): ${document.getElementById('f-children').value}`);
    if (val('f-trip-type'))      lines.push(`Trip type: ${val('f-trip-type')}`);

    const dests = val('f-destinations');
    if (dests) {
      let destStr = dests;
      if (dests.includes('Other') && val('f-other-dest')) destStr += ` (${val('f-other-dest')})`;
      lines.push(`Destinations: ${destStr}`);
    }

    if (val('f-interests')) lines.push(`Interests: ${val('f-interests')}`);

    // Preferences
    lines.push(h('Preferences'));
    if (val('f-accommodation')) lines.push(`Accommodation: ${val('f-accommodation')}`);
    if (val('f-budget'))        lines.push(`Budget per person: ${val('f-budget')}`);
    if (val('f-transport'))     lines.push(`Transport: ${val('f-transport')}`);
    if (val('f-guide'))         lines.push(`Guide: ${val('f-guide')}`);
    if (val('f-visa'))          lines.push(`Visa status: ${val('f-visa')}`);
    if (val('f-insurance'))     lines.push(`Travel insurance: ${val('f-insurance')}`);
    if (val('f-dietary'))       lines.push(`Dietary/medical notes: ${val('f-dietary')}`);
    if (val('f-notes'))         lines.push(`Other notes: ${val('f-notes')}`);

    // Consent
    lines.push(h('Consent'));
    lines.push(`Terms & Cancellation: agreed`);
    lines.push(`Privacy Notice: agreed`);
    lines.push(`Marketing opt-in: ${checked('consent-updates') ? 'Yes' : 'No'}`);

    lines.push(`\n_Sent via ${SITE.businessName} website_`);

    return lines.join(sep);
  }

  // ── Submit ──

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validate()) return;

    const message = buildMessage();
    const url     = waLink(SITE.whatsapp, message);

    // Try opening in new tab
    const newTab = window.open(url, '_blank', 'noopener,noreferrer');

    // Show copy fallback if pop-up blocked
    const copyFallback = $('#copy-fallback');
    if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
      if (copyFallback) copyFallback.classList.add('visible');
      // Store for copy button
      window._enquiryMessage = message;
    } else {
      if (copyFallback) copyFallback.classList.remove('visible');
    }
  });

  // ── Copy fallback ──

  const copyBtn = $('#copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const text = window._enquiryMessage || buildMessage();
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = '✓ Copied! Paste into WhatsApp.';
        setTimeout(() => {
          copyBtn.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
              <rect x="4" y="4" width="9" height="9" rx="1.5"/>
              <path d="M1 9V2a1 1 0 0 1 1-1h7"/>
            </svg>
            Copy enquiry text instead`;
        }, 3000);
      }).catch(() => {
        // Fallback for older browsers
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        copyBtn.textContent = '✓ Copied!';
        setTimeout(() => { copyBtn.textContent = 'Copy enquiry text instead'; }, 3000);
      });
    });
  }
})();


/* ── 13. Smooth-scroll for all internal anchor links ─────── */

(function initSmoothScroll() {
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    smoothScrollTo(target);
  });
})();


/* ── 14. Placeholder image graceful fallback ─────────────── */

(function initImgFallback() {
  $$('img').forEach(img => {
    img.addEventListener('error', function() {
      // Generate a coloured SVG placeholder
      const w = this.width  || 480;
      const h = this.height || 220;
      const alt = encodeURIComponent(this.alt || 'Image');
      this.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'%3E%3Crect width='100%25' height='100%25' fill='%230F1524'/%3E%3Ctext x='50%25' y='50%25' font-family='Inter,sans-serif' font-size='13' fill='%237DD3FC' text-anchor='middle' dominant-baseline='middle'%3E${alt}%3C/text%3E%3C/svg%3E`;
      this.removeEventListener('error', arguments.callee);
    }, { once: true });
  });
})();
