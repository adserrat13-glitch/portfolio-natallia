/* =============================================
   MAIN.JS — Natallia Rocha Barros Portfolio
   Videomaker & Editora de Vídeo
   ============================================= */

/* ── Dados dos cases ──────────────────────────── */
const projects = {
  sabor: {
    title: 'Sabor de Todos',
    cliente: 'Pizzaria & Cafeteria · Montes Claros',
    categoria: 'Comercial',
    behance: 'https://www.behance.net/gallery/233490297/Sabor-de-Todos-I-Pizza-Cafeteria',
    descricao: 'Campanha audiovisual e conteúdo para redes sociais de uma pizzaria e cafeteria, traduzindo o calor do feito à mão em vídeos que geram apetite e conexão.',
    objetivos: [
      'Criar vídeos que transmitam o ambiente acolhedor do restaurante',
      'Desenvolver reels que aumentem o alcance orgânico no Instagram',
      'Padronizar o visual da comunicação audiovisual da marca',
    ],
    solucao: 'Desenvolvemos uma linha de conteúdo audiovisual com captação, edição e motion aplicados à identidade da marca. Os vídeos foram otimizados para feed e Stories, com cortes dinâmicos e trilha que reforçam a personalidade do negócio.',
    paleta: ['#C0392B', '#E8B04B', '#2D1B69', '#F2EFE9', '#1A1A2E'],
    tipografia: 'Edição com textos animados em display serifada para os títulos, combinada com sans-serif limpa nas chamadas de ação — equilíbrio entre personalidade e legibilidade.',
    resultado: 'Conteúdo audiovisual coeso que elevou a presença digital do negócio e aumentou o alcance orgânico nas redes sociais.',
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
    ],
  },
  miaumi: {
    title: 'Miaumi Pet Shop',
    cliente: 'Pet Shop · Montes Claros',
    categoria: 'Reels',
    behance: 'https://www.behance.net/gallery/233003515/identidade-visual-Miaumi-Pet-Shop',
    descricao: 'Série de reels e conteúdo audiovisual para pet shop, traduzindo o vínculo entre tutores e pets em vídeos afetivos e altamente compartilháveis.',
    objetivos: [
      'Produzir reels que gerem conexão emocional com o público',
      'Criar conteúdo recorrente para Instagram e TikTok',
      'Aumentar o engajamento e seguidores da marca',
    ],
    solucao: 'Criamos um universo audiovisual leve e afetivo, com edições dinâmicas, trilhas otimizadas para redes sociais e motion que reforça a personalidade da marca. Cada vídeo foi pensado para maximizar retenção e compartilhamento.',
    paleta: ['#5F5E87', '#AEAEEA', '#E8D44D', '#F2EFE9', '#1A1A2E'],
    tipografia: 'Textos animados com tipografia arredondada e amigável nos títulos, com sans-serif neutra para calls to action — leveza e clareza em todas as edições.',
    resultado: 'Série de reels que gerou aumento expressivo de alcance e engajamento, transformando o Instagram do pet shop em vitrine ativa.',
    images: [
      'assets/miaumi/9b58a9233003515.68a733bdc4793.gif',
      'assets/miaumi/2f89c4233003515.68a733bdc4e20.png',
      'assets/miaumi/376d17233003515.68a733bdc6c9b.png',
      'assets/miaumi/3a041b233003515.68a733bc9d874.png',
      'assets/miaumi/7e473d233003515.68a733bc9de4a.png',
      'assets/miaumi/8e1b33233003515.68a733bdc6139.png',
      'assets/miaumi/fbf172233003515.68a733bdc670b.png',
      'assets/miaumi/41871d233003515.68a733bdc3f78.gif',
    ],
  },
  amora: {
    title: 'Amora Botanicals',
    cliente: 'Perfumaria Artesanal',
    categoria: 'Comercial',
    behance: 'https://www.behance.net/gallery/239534131/Amora-Botanicals-perfumaria',
    descricao: 'Vídeos comerciais e conteúdo audiovisual para perfumaria artesanal premium, celebrando ingredientes naturais e o ritual do autocuidado.',
    objetivos: [
      'Produzir vídeos que comuniquem sofisticação e naturalidade',
      'Criar conteúdo que posicione a marca no segmento premium',
      'Desenvolver visual cinematográfico para redes e e-commerce',
    ],
    solucao: 'Construímos uma estética audiovisual minimalista e elegante, com planos detalhes dos produtos, luz natural e edição refinada. O resultado são vídeos que transmitem artesania, qualidade e cuidado em cada frame.',
    paleta: ['#7A6F5D', '#AEAEEA', '#2D1B69', '#EAE7E2', '#1A1A2E'],
    tipografia: 'Motion com tipografia serifada elegante para os títulos e sans-serif delicada nos detalhes — sofisticação com toque artesanal.',
    resultado: 'Material audiovisual refinado e diferenciado, alinhado ao posicionamento premium e pronto para escalar a linha de produtos.',
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
    ],
  },
  copasaolucas: {
    title: 'Copa São Lucas',
    cliente: 'Torneio Esportivo · Montes Claros',
    categoria: 'Eventos',
    behance: 'https://www.behance.net/natalliarocha',
    descricao: 'Cobertura audiovisual e conteúdo para redes sociais de torneio de futebol local, com vídeos dinâmicos de escalação e melhores momentos.',
    objetivos: [
      'Criar vídeos de impacto para divulgação do torneio',
      'Produzir conteúdo para cobertura ao vivo nas redes sociais',
      'Desenvolver vinhetas e motion para os highlights',
    ],
    solucao: 'Desenvolvemos um sistema audiovisual com linguagem esportiva — cortes rápidos, motion bold, paleta vibrante e trilha de alta energia. Os vídeos de escalação, abertura e melhores momentos garantiram cobertura profissional e engajamento nas redes.',
    paleta: ['#1A1A2E', '#2D1B69', '#E8D44D', '#FFFFFF', '#C0392B'],
    tipografia: 'Motion com tipografia bold e condensada para impacto visual nos títulos, com sans-serif clara nas informações do torneio.',
    resultado: 'Cobertura audiovisual completa que elevou a presença digital do torneio e gerou engajamento expressivo nas redes sociais.',
    images: [
      'assets/pecasgrafias/POST 1@2x.png',
      'assets/pecasgrafias/POST 2@2x.png',
      'assets/pecasgrafias/POST 3@2x.png',
      'assets/pecasgrafias/POST 4@2x.png',
      'assets/pecasgrafias/POST 5@2x.png',
      'assets/pecasgrafias/CARROSSEL ESCALAÇÃO (COPA- SAO LUCAS).png',
      'assets/pecasgrafias/CARROSSEL ESCALAÇÃO (COPA- SAO LUCAS) (1).png',
      'assets/pecasgrafias/CARROSSEL ESCALAÇÃO (COPA- SAO LUCAS) (2).png',
      'assets/pecasgrafias/CARROSSEL ESCALAÇÃO (COPA- SAO LUCAS) (3).png',
      'assets/pecasgrafias/CARROSSEL ESCALAÇÃO (COPA- SAO LUCAS) (1) (1).png',
    ],
  },
};

/* ── Dados dos reels ──────────────────────────── */
const reels = [
  { type: 'mp4', src: 'assets/reels/reel2.mp4', tag: 'Comercial', title: 'Reel · Comercial', poster: '' },
  { type: 'mp4', src: 'assets/reels/reel3.mp4', tag: 'Social Media', title: 'Reel · Social Media', poster: '' },
  { type: 'mp4', src: 'assets/reels/reel4.mp4', tag: 'Motion', title: 'Reel · Motion Design', poster: 'assets/reels/reel4.jpg' },
  { type: 'mp4', src: 'assets/reels/reel5.mp4', tag: 'Social Media', title: 'Reel · Social Media', poster: '' },
  { type: 'mp4', src: 'assets/reels/reel6.mp4', tag: 'Eventos', title: 'Reel · Eventos', poster: '' },
  { type: 'mp4', src: 'assets/reels/reel8.mp4', tag: 'Motion', title: 'Reel · Motion Design', poster: '' },
];

/* ── Navbar scroll ──────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── Hamburger ──────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
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

/* ── Scroll Reveal ──────────────────────────── */
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
}

/* ══════════════════════════════════════════════
   MODAL DE CASE
══════════════════════════════════════════════ */
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalTag = document.getElementById('modal-tag');
const modalCliente = document.getElementById('modal-cliente');
const modalBehance = document.getElementById('modal-behance');
const modalDescricao = document.getElementById('modal-descricao');
const modalObjetivos = document.getElementById('modal-objetivos');
const modalSolucao = document.getElementById('modal-solucao');
const modalPaleta = document.getElementById('modal-paleta');
const modalTipografia = document.getElementById('modal-tipografia');
const modalResultado = document.getElementById('modal-resultado');
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');
const modalDots = document.getElementById('modal-dots');

let currentProject = null;
let currentIndex = 0;

function fillList(ul, items) {
  ul.replaceChildren();
  (items || []).forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  });
}

function fillPaleta(container, colors) {
  container.replaceChildren();
  (colors || []).forEach(hex => {
    const swatch = document.createElement('div');
    swatch.className = 'case-swatch';
    swatch.style.background = hex;
    const label = document.createElement('span');
    label.textContent = hex;
    swatch.appendChild(label);
    container.appendChild(swatch);
  });
}

function openModal(key) {
  currentProject = projects[key];
  if (!currentProject) return;
  currentIndex = 0;
  modalTitle.textContent = currentProject.title;
  modalTag.textContent = currentProject.categoria || '';
  modalCliente.textContent = currentProject.cliente || '';
  modalBehance.href = currentProject.behance || '#';
  modalBehance.style.display = currentProject.behance ? '' : 'none';
  modalDescricao.textContent = currentProject.descricao || '';
  modalSolucao.textContent = currentProject.solucao || '';
  modalTipografia.textContent = currentProject.tipografia || '';
  modalResultado.textContent = currentProject.resultado || '';
  fillList(modalObjetivos, currentProject.objetivos);
  fillPaleta(modalPaleta, currentProject.paleta);
  buildDots();
  showSlide(0);
  modal.querySelector('.modal-box').scrollTop = 0;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function buildDots() {
  modalDots.replaceChildren();
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

document.querySelectorAll('.projeto-card[data-project], .destaque-featured[data-project], .destaque-item[data-project]').forEach(el => {
  el.addEventListener('click', () => openModal(el.dataset.project));
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(el.dataset.project); }
  });
});

/* Filtros de categoria — categorias de vídeo */
document.querySelectorAll('.filtro-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filtro = btn.dataset.filtro;
    document.querySelectorAll('.projeto-card').forEach(card => {
      const match = filtro === 'todos' || card.dataset.categoria === filtro;
      card.style.display = match ? '' : 'none';
    });
    document.querySelectorAll('.destaque-featured, .destaque-item').forEach(el => {
      const match = filtro === 'todos' || el.dataset.categoria === filtro;
      el.style.display = match ? '' : 'none';
    });
    const section = document.querySelector('.destaques-section');
    if (section) {
      const anyFeatured = document.querySelector('.destaque-featured:not([style*="none"])');
      section.style.display = anyFeatured ? '' : 'none';
    }
  });
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
modalPrev.addEventListener('click', () => showSlide(currentIndex - 1));
modalNext.addEventListener('click', () => showSlide(currentIndex + 1));

document.addEventListener('keydown', e => {
  if (!modal.classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') showSlide(currentIndex - 1);
  if (e.key === 'ArrowRight') showSlide(currentIndex + 1);
});

let touchStartX = 0;
modal.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
modal.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) showSlide(currentIndex + (diff > 0 ? 1 : -1));
}, { passive: true });

/* ══════════════════════════════════════════════
   REELS — COVERFLOW 3D
══════════════════════════════════════════════ */
const playIcon = '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>';

function buildReelItem(reel, index) {
  const item = document.createElement('div');
  item.className = 'reel-item';
  item.dataset.index = index;

  const media = document.createElement('div');
  media.className = 'reel-media';

  if (reel.type === 'mp4' && reel.src) {
    const video = document.createElement('video');
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'none';
    if (reel.poster) video.poster = reel.poster;
    video.dataset.src = reel.src;
    media.appendChild(video);
  } else {
    const ph = document.createElement('div');
    ph.className = 'reel-placeholder';
    ph.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg><span>Em breve</span>';
    media.appendChild(ph);
  }

  const playable = (reel.type !== 'mp4') || !!reel.src;
  if (playable) {
    const playBtn = document.createElement('button');
    playBtn.className = 'reel-play';
    playBtn.setAttribute('aria-label', 'Reproduzir ' + reel.title);
    playBtn.innerHTML = playIcon;
    media.appendChild(playBtn);
  }

  const info = document.createElement('div');
  info.className = 'reel-info';
  const tag = document.createElement('span');
  tag.className = 'reel-tag';
  tag.textContent = reel.tag;
  const title = document.createElement('p');
  title.className = 'reel-title';
  title.textContent = reel.title;
  info.appendChild(tag);
  info.appendChild(title);

  item.appendChild(media);
  item.appendChild(info);
  return item;
}

function initReels() {
  const stage = document.getElementById('reels-stage');
  if (!stage) return;

  stage.replaceChildren();
  reels.forEach((reel, i) => stage.appendChild(buildReelItem(reel, i)));

  const items = Array.from(stage.querySelectorAll('.reel-item'));
  const dotsContainer = document.getElementById('reels-dots');
  const total = items.length;
  let current = Math.floor(total / 2);

  function buildDotsList() {
    dotsContainer.replaceChildren();
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
      item.dataset.pos = Math.max(-4, Math.min(4, pos));
      const video = item.querySelector('video[data-src]');
      if (video) {
        if (Math.abs(pos) <= 1) {
          if (!video.src) video.src = video.dataset.src;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
    dotsContainer.querySelectorAll('.reels-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  items.forEach((item, i) => {
    item.addEventListener('click', () => {
      if (i === current) {
        const reel = reels[i];
        if ((reel.type !== 'mp4') || reel.src) openReelModal(i);
      } else {
        goTo(i);
      }
    });
  });

  document.getElementById('reels-prev').addEventListener('click', () => goTo(current - 1));
  document.getElementById('reels-next').addEventListener('click', () => goTo(current + 1));

  document.addEventListener('keydown', e => {
    if (reelModal.classList.contains('open')) return;
    if (document.activeElement && document.activeElement.closest('.reels-section')) {
      if (e.key === 'ArrowLeft') goTo(current - 1);
      if (e.key === 'ArrowRight') goTo(current + 1);
    }
  });

  let touchX = 0;
  stage.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', e => {
    const diff = touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
  }, { passive: true });

  buildDotsList();
  goTo(current);
}

/* ══════════════════════════════════════════════
   MODAL DE REEL (vídeo fullscreen)
══════════════════════════════════════════════ */
const reelModal = document.getElementById('reel-modal');
const reelModalStage = document.getElementById('reel-modal-stage');
const reelModalClose = document.getElementById('reel-modal-close');
const reelModalPrev = document.getElementById('reel-modal-prev');
const reelModalNext = document.getElementById('reel-modal-next');
const reelModalCaption = document.getElementById('reel-modal-caption');

let currentReel = 0;

function playableReelIndexes() {
  return reels
    .map((r, i) => ((r.type !== 'mp4' || r.src) ? i : -1))
    .filter(i => i !== -1);
}

function renderReelMedia(reel) {
  reelModalStage.replaceChildren();
  if (reel.type === 'mp4') {
    const video = document.createElement('video');
    video.src = reel.src;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    reelModalStage.appendChild(video);
  } else {
    const iframe = document.createElement('iframe');
    iframe.src = reel.src;
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;
    reelModalStage.appendChild(iframe);
  }
  reelModalCaption.textContent = `${reel.tag} · ${reel.title}`;
}

function openReelModal(index) {
  currentReel = index;
  renderReelMedia(reels[index]);
  reelModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeReelModal() {
  reelModal.classList.remove('open');
  reelModalStage.replaceChildren();
  document.body.style.overflow = '';
}

function showReel(direction) {
  const playable = playableReelIndexes();
  if (!playable.length) return;
  const pos = playable.indexOf(currentReel);
  const next = playable[(pos + direction + playable.length) % playable.length];
  openReelModal(next);
}

reelModalClose.addEventListener('click', closeReelModal);
reelModal.addEventListener('click', e => { if (e.target === reelModal) closeReelModal(); });
reelModalPrev.addEventListener('click', () => showReel(-1));
reelModalNext.addEventListener('click', () => showReel(1));

document.addEventListener('keydown', e => {
  if (!reelModal.classList.contains('open')) return;
  if (e.key === 'Escape') closeReelModal();
  if (e.key === 'ArrowLeft') showReel(-1);
  if (e.key === 'ArrowRight') showReel(1);
});

/* ══════════════════════════════════════════════
   LIGHTBOX DE BASTIDORES
══════════════════════════════════════════════ */
const bastidoresLightbox = document.getElementById('bastidores-lightbox');
const bastidoresLightboxImg = document.getElementById('bastidores-lightbox-img');

function openBastidoresLightbox(item) {
  const img = item.querySelector('img');
  if (!img || !bastidoresLightbox || !bastidoresLightboxImg) return;
  bastidoresLightboxImg.src = img.src;
  bastidoresLightboxImg.alt = img.alt;
  bastidoresLightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBastidoresLightbox() {
  if (!bastidoresLightbox) return;
  bastidoresLightbox.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (bastidoresLightbox && bastidoresLightbox.classList.contains('open') && e.key === 'Escape') {
    closeBastidoresLightbox();
  }
});

/* ── Boot ────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initReels();
  initGSAP();
});
