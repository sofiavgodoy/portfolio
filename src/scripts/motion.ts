// Small, dependency-free motion helpers. Everything here is optional polish:
// the site reads fine with JavaScript off or reduced motion on.

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function reveal() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)');
  if (reduced() || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  els.forEach((el) => io.observe(el));
}

let navBound = false;
function navShadow() {
  if (navBound) return;
  navBound = true;
  const set = () => document.documentElement.classList.toggle('scrolled', window.scrollY > 8);
  set();
  window.addEventListener('scroll', set, { passive: true });
}

// Paint field: blobs drift toward the pointer, and the hero chips can "pull" one color forward.
function paint() {
  const hero = document.querySelector<HTMLElement>('[data-paint]');
  if (!hero || reduced()) return;
  let tx = 0, ty = 0, x = 0, y = 0, raf = 0;
  const tick = () => {
    x += (tx - x) * 0.06;
    y += (ty - y) * 0.06;
    hero.style.setProperty('--px', x.toFixed(3));
    hero.style.setProperty('--py', y.toFixed(3));
    raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.001 ? requestAnimationFrame(tick) : 0;
  };
  hero.addEventListener('pointermove', (e) => {
    const r = hero.getBoundingClientRect();
    tx = (e.clientX - r.left) / r.width - 0.5;
    ty = (e.clientY - r.top) / r.height - 0.5;
    if (!raf) raf = requestAnimationFrame(tick);
  });
  hero.querySelectorAll<HTMLElement>('[data-pull]').forEach((chip) => {
    const on = () => (hero.dataset.focus = chip.dataset.pull);
    const off = () => delete hero.dataset.focus;
    chip.addEventListener('pointerenter', on);
    chip.addEventListener('focus', on);
    chip.addEventListener('pointerleave', off);
    chip.addEventListener('blur', off);
  });
}

// Work filter: chips toggle which disciplines are shown; state lives in ?filter=
function filters() {
  document.querySelectorAll<HTMLElement>('[data-filter-root]').forEach((root) => {
    const chips = root.querySelectorAll<HTMLButtonElement>('[data-filter]');
    const cards = root.querySelectorAll<HTMLElement>('[data-disciplines]');
    const empty = root.querySelector<HTMLElement>('[data-empty]');
    const apply = (f: string, push: boolean) => {
      chips.forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.filter === f)));
      let shown = 0;
      cards.forEach((card) => {
        const show = f === 'all' || card.dataset.disciplines!.split(' ').includes(f);
        card.hidden = !show;
        if (show) shown++;
      });
      if (empty) empty.hidden = shown > 0;
      root.dataset.active = f;
      if (push && root.hasAttribute('data-filter-url')) {
        const u = new URL(location.href);
        f === 'all' ? u.searchParams.delete('filter') : u.searchParams.set('filter', f);
        history.replaceState(history.state, '', u);
      }
    };
    chips.forEach((c) => c.addEventListener('click', () => apply(c.dataset.filter!, true)));
    const initial = new URL(location.href).searchParams.get('filter');
    if (initial && root.hasAttribute('data-filter-url')) apply(initial, false);
  });
}

function lightbox() {
  const dlg = document.getElementById('lightbox') as HTMLDialogElement | null;
  if (!dlg) return;
  const img = dlg.querySelector('img')!;
  document.querySelectorAll<HTMLImageElement>('.prose img').forEach((el) => {
    el.addEventListener('click', () => {
      img.src = el.currentSrc || el.src;
      img.alt = el.alt;
      dlg.showModal();
    });
  });
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
}

export function initMotion() {
  reveal();
  navShadow();
  paint();
  filters();
  lightbox();
}
