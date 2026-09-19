const revealItems = document.querySelectorAll('.reveal:not(.is-visible)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !reducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const finale = document.querySelector('.finale');
const candleButton = document.querySelector('#blow-candle');
const buttonLabel = candleButton.querySelector('span');
const wishStatus = document.querySelector('#wish-status');
const confettiLayer = document.querySelector('#confetti-layer');
const confettiColors = ['#c84e52', '#ee8f9f', '#82966a', '#748fb4', '#f3d56b', '#9886b3'];

function launchConfetti() {
  if (reducedMotion) return;

  const fragment = document.createDocumentFragment();

  for (let index = 0; index < 88; index += 1) {
    const piece = document.createElement('span');
    const spin = 360 + Math.round(Math.random() * 720);
    piece.className = 'confetti';
    piece.style.setProperty('--x', `${Math.random() * 100}%`);
    piece.style.setProperty('--drift', `${Math.round(Math.random() * 160 - 80)}px`);
    piece.style.setProperty('--spin', `${index % 2 ? spin : -spin}deg`);
    piece.style.setProperty('--duration', `${2.8 + Math.random() * 1.8}s`);
    piece.style.setProperty('--delay', `${Math.random() * 0.45}s`);
    piece.style.setProperty('--color', confettiColors[index % confettiColors.length]);
    fragment.appendChild(piece);
  }

  confettiLayer.replaceChildren(fragment);
  window.setTimeout(() => confettiLayer.replaceChildren(), 5200);
}

candleButton.addEventListener('click', () => {
  const isBlown = finale.classList.toggle('is-blown');
  candleButton.setAttribute('aria-pressed', String(isBlown));

  if (isBlown) {
    buttonLabel.textContent = '愿望已经飞出去啦';
    wishStatus.textContent = '蜡烛熄灭，愿肉丝的心愿都会实现。';
    launchConfetti();
  } else {
    buttonLabel.textContent = '再许一个愿';
    wishStatus.textContent = '火焰重新亮起来了。';
    confettiLayer.replaceChildren();
  }
});
