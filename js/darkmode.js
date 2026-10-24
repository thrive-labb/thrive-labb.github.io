/* THRIVE Lab — Day/Night toggle + subtle night stars */
(function () {
  const root = document.documentElement;
  const canvas = document.getElementById('night-canvas');
  const modeBtn = document.getElementById('mode-toggle');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const saved = localStorage.getItem('thrive-mode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.mode = saved || (prefersDark ? 'night' : 'day');

  function updateIcon() {
    const isNight = root.dataset.mode === 'night';
    modeBtn.innerHTML = `<i class="fas fa-${isNight ? 'sun' : 'moon'}" aria-hidden="true"></i>`;
    modeBtn.setAttribute('aria-label', isNight ? 'Switch to day mode' : 'Switch to night mode');
  }

  modeBtn.addEventListener('click', () => {
    root.dataset.mode = root.dataset.mode === 'day' ? 'night' : 'day';
    localStorage.setItem('thrive-mode', root.dataset.mode);
    updateIcon();
    updateStars();
  });

  updateIcon();

  if (!canvas || reduceMotion) return;
  const ctx = canvas.getContext('2d');
  let W, H, stars = [], raf;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  function makeStar() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.4 + 0.3,
      alpha: Math.random() * 0.6 + 0.2,
      twinkle: Math.random() * Math.PI * 2,
      speed: 0.005 + Math.random() * 0.01,
    };
  }
  function animate() {
    ctx.clearRect(0, 0, W, H);
    if (root.dataset.mode === 'night') {
      stars.forEach((s) => {
        s.twinkle += s.speed;
        const a = s.alpha + Math.sin(s.twinkle) * 0.2;
        ctx.globalAlpha = Math.max(0, Math.min(1, a));
        ctx.fillStyle = '#E6EEF7';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    }
    raf = requestAnimationFrame(animate);
  }
  function updateStars() {
    cancelAnimationFrame(raf);
    if (root.dataset.mode !== 'night') {
      ctx.clearRect(0, 0, W, H);
      return;
    }
    const count = Math.min(80, Math.floor(window.innerWidth / 20));
    stars = Array.from({ length: count }, makeStar);
    animate();
  }
  window.addEventListener('resize', () => { resize(); updateStars(); });
  resize();
  updateStars();
})();
