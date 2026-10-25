// Auto-create the toggle + star canvas on any page that doesn't have them
(function ensureMarkup() {
  if (!document.getElementById('night-canvas')) {
    var c = document.createElement('canvas');
    c.id = 'night-canvas';
    c.setAttribute('aria-hidden', 'true');
    document.body.prepend(c);
  }
  if (!document.getElementById('mode-toggle')) {
    var w = document.createElement('div');
    w.className = 'theme-controls';
    w.setAttribute('role', 'group');
    w.setAttribute('aria-label', 'Theme settings');
    w.innerHTML = '<button id="mode-toggle" class="theme-btn" aria-label="Toggle day/night mode" title="Toggle day/night"><i class="fas fa-moon" aria-hidden="true"></i></button>';
    document.body.appendChild(w);
  }
})();
// THRIVE Lab – day/night (dark mode) toggle
(function () {
  var KEY = 'thrive-mode';
  var root = document.documentElement;
  var btn = document.getElementById('mode-toggle');
  var canvas = document.getElementById('night-canvas');
  var ctx = canvas ? canvas.getContext('2d') : null;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var stars = [], raf = null;

  function saved() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function systemMode() {
    return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';
  }

  /* ---------- stars ---------- */
  function resize() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var n = Math.min(160, Math.floor(canvas.width * canvas.height / 9000));
    stars = [];
    for (var i = 0; i < n; i++) {
      stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height,
                   r: Math.random() * 1.4 + 0.3, p: Math.random() * 6.28, s: Math.random() * 0.02 + 0.005 });
    }
    draw(0);
  }
  function draw(t) {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < stars.length; i++) {
      var st = stars[i];
      var a = reduce ? 0.8 : 0.45 + 0.45 * Math.sin(st.p + t * st.s);
      ctx.globalAlpha = a;
      ctx.fillStyle = '#eaf3e4';
      ctx.beginPath(); ctx.arc(st.x, st.y, st.r, 0, 6.283); ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
  function loop(t) { draw(t); raf = requestAnimationFrame(loop); }
  function startStars() { if (!canvas || reduce || raf) return; raf = requestAnimationFrame(loop); }
  function stopStars() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

  /* ---------- mode ---------- */
  function apply(mode) {
    root.setAttribute('data-mode', mode);
    var night = mode === 'night';
    if (btn) {
      var icon = btn.querySelector('i');
      if (icon) icon.className = night ? 'fas fa-sun' : 'fas fa-moon';
      btn.setAttribute('aria-pressed', night ? 'true' : 'false');
      btn.setAttribute('title', night ? 'Switch to day mode' : 'Switch to night mode');
    }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', night ? '#0f1a0f' : '#f7faf4');
    if (night) startStars(); else stopStars();
  }

  window.addEventListener('resize', resize);
  resize();
  apply(saved() || systemMode());

  if (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-mode') === 'night' ? 'day' : 'night';
      apply(next); save(next);
    });
  }

  // follow system changes only if the visitor hasn't chosen manually
  if (window.matchMedia) {
    var mq = matchMedia('(prefers-color-scheme: dark)');
    var onChange = function (e) { if (!saved()) apply(e.matches ? 'night' : 'day'); };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
  }
})();
