/* =============================================
   MAIN.JS — Natallia Rocha Barros Portfolio
   ============================================= */

// ── Content loader (CMS) ──────────────────────
async function loadContent() {
  try {
    const res = await fetch('data/content.json');
    if (!res.ok) return;
    const c = await res.json();

    // Cores
    if (c.cores) {
      const root = document.documentElement;
      const custom = ['--card-purple', '--card-yellow', '--card-green', '--footer-bg'];
      Object.entries(c.cores).forEach(([key, val]) => {
        if (!custom.includes(key)) {
          root.style.setProperty(key, val);
        }
      });
      // Elementos específicos que não mapeiam direto para variável global
      const cardPurple = document.querySelector('.servico-card--purple');
      if (cardPurple && c.cores['--card-purple']) cardPurple.style.background = c.cores['--card-purple'];
      const cardYellow = document.querySelector('.servico-card--yellow');
      if (cardYellow && c.cores['--card-yellow']) cardYellow.style.background = c.cores['--card-yellow'];
      const cardGreen = document.querySelector('.servico-card--green');
      if (cardGreen && c.cores['--card-green']) cardGreen.style.background = c.cores['--card-green'];
      const footer = document.querySelector('.footer');
      if (footer && c.cores['--footer-bg']) footer.style.background = c.cores['--footer-bg'];
    }

    // Sobre
    if (c.sobre) {
      const s = c.sobre;
      const badge = document.querySelector('.sobre-badge');
      const bio1  = document.querySelectorAll('.sobre-bio')[0];
      const bio2  = document.querySelectorAll('.sobre-bio')[1];
      if (badge) badge.textContent = s.badge;
      if (bio1)  bio1.textContent  = s.bio1;
      if (bio2)  bio2.textContent  = s.bio2;
      if (s.foto) {
        const wrap = document.querySelector('.sobre-img-wrap');
        if (wrap) {
          const placeholder = wrap.querySelector('.sobre-placeholder');
          if (placeholder) placeholder.remove();
          const img = document.createElement('img');
          img.src = s.foto; img.alt = 'Natallia Rocha Barros';
          wrap.appendChild(img);
        }
      }
      const skillsWrap = document.querySelector('.skills-wrap');
      if (skillsWrap && Array.isArray(s.skills)) {
        while (skillsWrap.firstChild) skillsWrap.removeChild(skillsWrap.firstChild);
        s.skills.forEach(skill => {
          const span = document.createElement('span');
          span.className = 'skill-tag';
          span.textContent = skill;
          skillsWrap.appendChild(span);
        });
      }
    }

    // Projetos — atualiza dados do modal e faixas
    if (Array.isArray(c.projetos)) {
      c.projetos.forEach(p => {
        projects[p.key] = { title: p.titulo, behance: p.behance, images: p.galeria };

        // Apply categoria to project card for filter system
        if (p.categoria) {
          const card = document.querySelector(`.projeto-card[data-project="${p.key}"]`);
          if (card) card.dataset.categoria = p.categoria;
        }

        const faixa = document.querySelector(`.projeto-faixa[data-project="${p.key}"]`);
        if (!faixa) return;
        const titleEl = faixa.querySelector('.projeto-faixa-title');
        if (titleEl) titleEl.textContent = `→ ${p.titulo}`;
        const metaItems = faixa.querySelectorAll('.projeto-faixa-info > div');
        if (metaItems[0]) metaItems[0].lastChild.textContent = p.cliente;
        if (metaItems[1]) metaItems[1].lastChild.textContent = p.area;
        const descEl = faixa.querySelector('.meta-desc');
        if (descEl) descEl.textContent = p.descricao;
        const capaImg = faixa.querySelector('.projeto-faixa-img > img');
        if (capaImg) { capaImg.src = p.imgCapa; capaImg.alt = p.titulo; }
        const gifImg = faixa.querySelector('.projeto-faixa-hover img');
        if (gifImg) { gifImg.src = p.imgGif; gifImg.alt = p.titulo; }
      });
    }

    // Contato
    if (c.contato) {
      const ct = c.contato;
      const waLink = document.querySelector('.contato-link--whatsapp');
      if (waLink) waLink.href = `https://wa.me/${ct.whatsapp}`;
      const waFloat = document.querySelector('.whatsapp-float');
      if (waFloat) waFloat.href = `https://wa.me/${ct.whatsapp}`;
      const emailLink = document.querySelector(`a[href^="mailto:"]`);
      if (emailLink) emailLink.href = `mailto:${ct.email}`;
    }

    // Footer
    if (c.footer) {
      const fp = document.querySelector('.footer p');
      if (fp) fp.textContent = c.footer.texto;
    }
  } catch (e) {
    // Silently fail — static HTML is the fallback
  }
}

// ── Navbar scroll ─────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── Hamburger ─────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── Scroll Reveal (fallback sem GSAP) ─────────
function revealOnScroll() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ── GSAP Animations ───────────────────────────
function initGSAP() {
  if (typeof gsap === 'undefined') { revealOnScroll(); return; }
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll('.reveal').forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, y: 48 },
      { opacity: 1, y: 0, duration: 0.75, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        delay: (i % 3) * 0.08
      }
    );
  });

  // Projeto faixas
  gsap.utils.toArray('.projeto-faixa').forEach((faixa, i) => {
    gsap.fromTo(faixa,
      { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: faixa, start: 'top 80%', once: true }
      }
    );
  });

  // Grid images stagger
  gsap.utils.toArray('.img-grid-quad img, .img-grid-stack img').forEach((img, i) => {
    gsap.fromTo(img,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out', delay: i * 0.07,
        scrollTrigger: { trigger: img, start: 'top 88%', once: true }
      }
    );
  });
}

// ── Modal ─────────────────────────────────────
const projects = {
  amora: {
    title: 'Amora Botanicals',
    behance: 'https://www.behance.net/gallery/239534131/Amora-Botanicals-perfumaria',
    images: [
      'assets/amora/148909239534131.692b620bd84bd.gif',
      'assets/amora/ad495e239534131.692b620bd9805.png',
      'assets/amora/2ed39c239534131.692b620bd7809.png',
      'assets/amora/897a93239534131.692b620bd9d00.png',
      'assets/amora/9f2cd6239534131.692b620bda8e5.png',
      'assets/amora/c01f12239534131.692b620bda1e8.png',
      'assets/amora/fa8f8e239534131.692b620bdaff5.png',
      'assets/amora/fd34c1239534131.692b620bd8049.png',
      'assets/amora/b4cc5a239534131.692b620bd9319.gif',
    ]
  },
  miaumi: {
    title: 'Miaumi Pet Shop',
    behance: 'https://www.behance.net/gallery/233003515/identidade-visual-Miaumi-Pet-Shop',
    images: [
      'assets/miaumi/9b58a9233003515.68a733bdc4793.gif',
      'assets/miaumi/2f89c4233003515.68a733bdc4e20.png',
      'assets/miaumi/376d17233003515.68a733bdc6c9b.png',
      'assets/miaumi/3a041b233003515.68a733bc9d874.png',
      'assets/miaumi/7e473d233003515.68a733bc9de4a.png',
      'assets/miaumi/8e1b33233003515.68a733bdc6139.png',
      'assets/miaumi/fbf172233003515.68a733bdc670b.png',
      'assets/miaumi/41871d233003515.68a733bdc3f78.gif',
    ]
  },
  sabor: {
    title: 'Sabor de Todos',
    behance: 'https://www.behance.net/gallery/233490297/Sabor-de-Todos-I-Pizza-Cafeteria',
    images: [
      'assets/sabor-de-todos/ad16e6233490297.68b05ff617e79.gif',
      'assets/sabor-de-todos/f67a0a233490297.68b06b99b61ee.png',
      'assets/sabor-de-todos/9c65f1233490297.68b05ff614843.png',
      'assets/sabor-de-todos/970ef3233490297.68b05ff615575.png',
      'assets/sabor-de-todos/10846b233490297.68b05ff480d8a.png',
      'assets/sabor-de-todos/8dce42233490297.68b05ff48155d.png',
      'assets/sabor-de-todos/13cae9233490297.68b05ff616b40.png',
      'assets/sabor-de-todos/7c92cc233490297.68b05ff615f47.png',
      'assets/sabor-de-todos/310973233490297.68b05ff617662.png',
      'assets/sabor-de-todos/0b1896233490297.68b05ff619411.png',
      'assets/sabor-de-todos/290d6e233490297.68b05ff61895b.gif',
    ]
  }
};

const modal       = document.getElementById('modal');
const modalClose  = document.getElementById('modal-close');
const modalImg    = document.getElementById('modal-img');
const modalTitle  = document.getElementById('modal-title');
const modalBehance= document.getElementById('modal-behance');
const modalPrev   = document.getElementById('modal-prev');
const modalNext   = document.getElementById('modal-next');
const modalDots   = document.getElementById('modal-dots');

let currentProject = null;
let currentIndex   = 0;

function openModal(key) {
  currentProject = projects[key];
  currentIndex   = 0;
  modalTitle.textContent = currentProject.title;
  modalBehance.href      = currentProject.behance;
  buildDots();
  showSlide(0);
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function buildDots() {
  while (modalDots.firstChild) modalDots.removeChild(modalDots.firstChild);
  currentProject.images.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'modal-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Imagem ${i + 1}`);
    dot.addEventListener('click', () => showSlide(i));
    modalDots.appendChild(dot);
  });
}

function showSlide(index) {
  const total = currentProject.images.length;
  currentIndex = (index + total) % total;
  modalImg.src = currentProject.images[currentIndex];
  modalImg.alt = `${currentProject.title} — imagem ${currentIndex + 1}`;
  modalDots.querySelectorAll('.modal-dot').forEach((d, i) => d.classList.toggle('active', i === currentIndex));
}

// Cards de projeto — click
document.querySelectorAll('.projeto-card[data-project]').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.project));
});

// Destaques — click
document.querySelectorAll('.destaque-featured[data-project], .destaque-item[data-project]').forEach(el => {
  el.addEventListener('click', () => openModal(el.dataset.project));
  el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(el.dataset.project); } });
});

// Filtros de categoria
document.querySelectorAll('.filtro-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filtro = btn.dataset.filtro;
    document.querySelectorAll('.projeto-card').forEach(card => {
      const match = filtro === 'todos' || card.dataset.categoria === filtro;
      card.style.display = match ? '' : 'none';
    });
  });
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
modalPrev.addEventListener('click', () => showSlide(currentIndex - 1));
modalNext.addEventListener('click', () => showSlide(currentIndex + 1));

document.addEventListener('keydown', e => {
  if (!modal.classList.contains('open')) return;
  if (e.key === 'Escape')     closeModal();
  if (e.key === 'ArrowLeft')  showSlide(currentIndex - 1);
  if (e.key === 'ArrowRight') showSlide(currentIndex + 1);
});

// Swipe mobile
let touchStartX = 0;
modal.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
modal.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) showSlide(currentIndex + (diff > 0 ? 1 : -1));
}, { passive: true });

// ── Reels Coverflow ───────────────────────────
function initReels() {
  const stage = document.getElementById('reels-stage');
  if (!stage) return;

  const items = Array.from(stage.querySelectorAll('.reel-item'));
  const dotsContainer = document.getElementById('reels-dots');
  const total = items.length;
  let current = Math.floor(total / 2);

  function buildDotsList() {
    while (dotsContainer.firstChild) dotsContainer.removeChild(dotsContainer.firstChild);
    items.forEach((_, i) => {
      const btn = document.createElement('button');
      btn.className = 'reels-dot' + (i === current ? ' active' : '');
      btn.setAttribute('aria-label', `Reel ${i + 1}`);
      btn.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(btn);
    });
  }

  function goTo(index) {
    current = (index + total) % total;
    items.forEach((item, i) => {
      const pos = i - current;
      const clamped = Math.max(-4, Math.min(4, pos));
      item.dataset.pos = clamped;
      // pause any playing video when not active
      const vid = item.querySelector('video');
      if (vid) { if (pos === 0) vid.play().catch(() => {}); else vid.pause(); }
    });
    dotsContainer.querySelectorAll('.reels-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  // Click on side items → move to center
  items.forEach((item, i) => {
    item.addEventListener('click', () => { if (i !== current) goTo(i); });
  });

  document.getElementById('reels-prev').addEventListener('click', () => goTo(current - 1));
  document.getElementById('reels-next').addEventListener('click', () => goTo(current + 1));

  // Keyboard
  document.addEventListener('keydown', e => {
    if (document.activeElement && document.activeElement.closest('.reels-section')) {
      if (e.key === 'ArrowLeft') goTo(current - 1);
      if (e.key === 'ArrowRight') goTo(current + 1);
    }
  });

  // Swipe mobile
  let touchX = 0;
  stage.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', e => {
    const diff = touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
  }, { passive: true });

  buildDotsList();
  goTo(current);
}

// ── Boot ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => { loadContent(); initGSAP(); initReels(); });
