// ===== Init AOS =====
if (window.AOS) {
  AOS.init({ duration: 900, once: true, offset: 60 });
}

// ===== Header Year =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Mobile Nav =====
const burgerBtn = document.getElementById('burgerBtn');
const siteNav = document.getElementById('siteNav');
if (burgerBtn && siteNav) {
  burgerBtn.addEventListener('click', () => {
    siteNav.classList.toggle('open');
    burgerBtn.classList.toggle('open');
  });
}

// ===== Swiper (only on index) =====
if (document.querySelector('.hero-swiper') && window.Swiper) {
  const heroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    autoplay: { delay: 3500, disableOnInteraction: false },
    speed: 700,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    effect: 'fade',
    fadeEffect: { crossFade: true }
  });
}

// ===== Contact Form (front-end validation demo) =====
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const name = (data.get('name') || '').trim();
    const email = (data.get('email') || '').trim();
    const message = (data.get('message') || '').trim();

    if (!name || !email || !message) {
      formMsg.textContent = 'من فضلك أكمل الحقول المطلوبة.';
      formMsg.style.color = '#dc2626';
      return;
    }
    // هنا تقدر تبعته لـ API/Email service
    formMsg.textContent = 'تم إرسال رسالتك بنجاح. سنعاود التواصل قريبًا.';
    formMsg.style.color = '#16a34a';
    contactForm.reset();
  });
}
