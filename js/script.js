// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
      hamburger.classList.remove('active');
      nav.classList.remove('open');
    }
  });
}

// Nav shadow on scroll
const header = document.querySelector('.header');
if (header) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle('scrolled', window.scrollY > 10);
        ticking = false;
      });
      ticking = true;
    }
  });
}

// Scroll-triggered fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Hero stats counter animation
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    if (!target) return;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;

    const updateCounter = () => {
      current += step;
      if (current > target) current = target;
      counter.textContent = current + (counter.getAttribute('data-suffix') || '');
      if (current < target) requestAnimationFrame(updateCounter);
    };

    updateCounter();
  });
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      statsObserver.unobserve(entry.target);
    }
  });
});

const statsSection = document.querySelector('.hero-stats');
if (statsSection) statsObserver.observe(statsSection);

// Contact form handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !phone || !message) {
      alert('Mohon lengkapi semua field yang diperlukan.');
      return;
    }

    const successMsg = document.querySelector('.form-success');

    if (successMsg) {
      successMsg.classList.add('show');
      contactForm.reset();
    } else {
      alert('Pesan Anda telah terkirim! Kami akan menghubungi Anda segera.');
      contactForm.reset();
    }

    setTimeout(() => {
      if (successMsg) successMsg.classList.remove('show');
    }, 5000);
  });
}

// Current year in footer
const yearEl = document.getElementById('currentYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Donate button - WhatsApp redirect
document.querySelectorAll('.btn-donate').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const phone = btn.getAttribute('data-phone') || '6281234567890';
    const message = encodeURIComponent('Halo, saya ingin berdonasi untuk Lembaga Insan Peduli.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  });
});
