const heroName = document.querySelector('.hero-name');
const home = document.getElementById('home');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* 1. Variable Font Scroll Animation on Hero Title */
if (heroName && home && !prefersReducedMotion) {
  const YEAR_START = 1979;
  const YEAR_END = 2050;
  let ticking = false;

  const updateHeroFont = () => {
    const progress = Math.min(Math.max(window.scrollY / (home.offsetHeight * 0.65), 0), 1);
    const currentYear = Math.round(YEAR_START + (YEAR_END - YEAR_START) * progress);
    heroName.style.setProperty('--year', currentYear);
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateHeroFont);
      }
    },
    { passive: true }
  );

  updateHeroFont();
}

/* 2. Staggered Scroll Reveal using IntersectionObserver */
const scrollElements = document.querySelectorAll('[data-scroll]');

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${idx * 70}ms`;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  scrollElements.forEach((el) => revealObserver.observe(el));
} else {
  scrollElements.forEach((el) => el.classList.add('is-visible'));
}

/* 3. Active Navigation Highlight (Scroll Spy) */
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const spyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((sec) => spyObserver.observe(sec));

/* 4. Desktop Micro-interactions: Cursor Glow, Magnetic Buttons & 3D Tilt */
if (canHover && !prefersReducedMotion) {
  // Subtle ambient cursor glow
  const cursorGlow = document.querySelector('.cursor-glow');
  if (cursorGlow) {
    window.addEventListener('pointermove', (e) => {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    }, { passive: true });
  }

  // Magnetic effect on Hero Buttons
  document.querySelectorAll('.magnetic').forEach((btn) => {
    btn.addEventListener('pointermove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.22;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.22;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });

    btn.addEventListener('pointerleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });

  // Subtle 3D perspective tilt on Project Thumbnails
  document.querySelectorAll('.tilt-card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-4px)`;
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}