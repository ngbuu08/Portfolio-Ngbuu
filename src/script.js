const heroName = document.querySelector('.hero-name');
const home = document.getElementById('home');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (heroName && home && !prefersReducedMotion) {
  const YEAR_START = 1979;
  const YEAR_END = 2050;
  let ticking = false;

  const update = () => {
    const progress = Math.min(Math.max(window.scrollY / (home.offsetHeight * 0.6), 0), 1);
    heroName.style.setProperty('--year', Math.round(YEAR_START + (YEAR_END - YEAR_START) * progress));
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true }
  );

  update();
}

const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if (canHover && !prefersReducedMotion) {
  const REVEAL_RADIUS = 3;
  const REVEAL_ALL_AFTER = 9000;

  document.querySelectorAll('.reveal').forEach((el) => {
    const text = el.textContent.replace(/\s+/g, ' ').trim();
    const chars = [];

    const forScreenReaders = document.createElement('span');
    forScreenReaders.className = 'sr-only';
    forScreenReaders.textContent = text;

    const visual = document.createElement('span');
    visual.setAttribute('aria-hidden', 'true');

    text.split(' ').forEach((word, wordIndex, words) => {
      const wordEl = document.createElement('span');
      wordEl.className = 'reveal-word';

      [...word].forEach((character) => {
        const charEl = document.createElement('span');
        charEl.className = 'reveal-char';
        charEl.textContent = character;
        charEl.dataset.index = chars.length;
        chars.push(charEl);
        wordEl.appendChild(charEl);
      });

      visual.appendChild(wordEl);
      if (wordIndex < words.length - 1) visual.appendChild(document.createTextNode(' '));
    });

    el.textContent = '';
    el.append(forScreenReaders, visual);

    visual.addEventListener('mouseover', (event) => {
      const center = Number(event.target.dataset.index);
      if (Number.isNaN(center)) return;

      for (let i = center - REVEAL_RADIUS; i <= center + REVEAL_RADIUS; i++) {
        const charEl = chars[i];
        if (!charEl || charEl.classList.contains('on')) continue;
        charEl.style.transitionDelay = `${Math.abs(i - center) * 40}ms`;
        charEl.classList.add('on');
      }
    });

    setTimeout(() => {
      chars.forEach((charEl, i) => {
        charEl.style.transitionDelay = `${i * 8}ms`;
        charEl.classList.add('on');
      });
    }, REVEAL_ALL_AFTER);
  });
}