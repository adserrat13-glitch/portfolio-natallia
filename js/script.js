/* ══════════════════════════════════════════════
   Portfólio de Social Media — script.js
   Monta a galeria de reels dinamicamente a partir
   de videos.json e cuida das interações da página.
   ══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initSmoothAnchors();
  loadGallery();
  loadMarquee();
});

/* ── Monta o carrossel deslizante de artes estáticas (marquee infinito) ── */
function loadMarquee() {
  const track = document.getElementById('marquee-track');
  const items = typeof ESTATICOS_DATA !== 'undefined' ? ESTATICOS_DATA : [];
  if (items.length === 0) return;

  // Duplica a lista para permitir o loop de translateX(-50%) sem salto visível
  const doubled = items.concat(items);

  doubled.forEach((item) => {
    const figure = document.createElement('figure');
    figure.className = 'marquee-item';

    const img = document.createElement('img');
    img.src = encodeURI(`assets/estaticos/${item.file}`);
    img.alt = item.alt || item.file;
    img.loading = 'lazy';
    img.addEventListener('error', () => {
      figure.remove();
    });

    figure.appendChild(img);
    track.appendChild(figure);
  });
}

/* ── Navbar muda de aparência ao rolar a página ── */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Scroll suave para links internos (nav + botão hero) ── */
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ── Monta os cards da galeria a partir de REELS_DATA (js/videos-data.js) ── */
function loadGallery() {
  const grid = document.getElementById('gallery-grid');

  const videos = typeof REELS_DATA !== 'undefined' ? REELS_DATA : [];
  if (videos.length === 0) {
    const msg = document.createElement('p');
    msg.className = 'reel-caption';
    msg.textContent = 'Não foi possível carregar os vídeos.';
    grid.appendChild(msg);
    return;
  }

  videos.forEach((item) => {
    grid.appendChild(buildCard(item));
  });

  observeCardEntrance();
  observeAutoplay();
}

const VIDEO_EXT = ['.mp4', '.mov', '.webm', '.m4v'];

function isPlayableExtension(filename) {
  const lower = filename.toLowerCase();
  return VIDEO_EXT.some((ext) => lower.endsWith(ext));
}

/* ── Silencia todos os reels e reseta o ícone dos botões de som ── */
function muteAllReels() {
  document.querySelectorAll('.reel-card').forEach((card) => {
    const video = card.querySelector('video');
    const muteBtn = card.querySelector('.reel-mute-btn');
    if (!video || !muteBtn) return;
    video.muted = true;
    muteBtn.textContent = '🔇';
  });
}

/* ── Cria o elemento de card para um vídeo ── */
function buildCard(item) {
  const card = document.createElement('article');
  card.className = 'reel-card';

  const src = encodeURI(`assets/reels/${item.file}`);
  const poster = item.poster ? encodeURI(`assets/reels/${item.poster}`) : '';

  let mediaEl;

  if (isPlayableExtension(item.file)) {
    const video = document.createElement('video');
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'metadata';
    if (poster) video.poster = poster;
    video.src = src;

    video.addEventListener('error', () => {
      card.replaceChild(buildFallback(item), video);
    });

    mediaEl = video;
  } else {
    mediaEl = buildFallback(item);
  }

  card.appendChild(mediaEl);

  const overlay = document.createElement('div');
  overlay.className = 'reel-overlay';
  const caption = document.createElement('span');
  caption.className = 'reel-caption';
  caption.textContent = item.title || item.file;
  overlay.appendChild(caption);
  card.appendChild(overlay);

  const playBtn = document.createElement('button');
  playBtn.className = 'reel-play-btn';
  playBtn.setAttribute('aria-label', 'Reproduzir ou pausar vídeo');
  playBtn.textContent = '▶';
  playBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const video = card.querySelector('video');
    if (!video) return;
    if (video.paused) {
      video.play();
      playBtn.textContent = '❚❚';
    } else {
      video.pause();
      playBtn.textContent = '▶';
    }
  });
  card.appendChild(playBtn);

  const muteBtn = document.createElement('button');
  muteBtn.className = 'reel-mute-btn';
  muteBtn.setAttribute('aria-label', 'Ativar ou desativar o som');
  muteBtn.textContent = '🔇';
  muteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const video = card.querySelector('video');
    if (!video) return;

    if (video.muted) {
      muteAllReels();
      video.muted = false;
      muteBtn.textContent = '🔊';
    } else {
      video.muted = true;
      muteBtn.textContent = '🔇';
    }
  });
  card.appendChild(muteBtn);

  return card;
}

function buildFallback(item) {
  const fallback = document.createElement('div');
  fallback.className = 'reel-fallback';
  fallback.textContent = item.title || item.file;
  return fallback;
}

/* ── Fade-in dos cards conforme entram na viewport ── */
function observeCardEntrance() {
  const cards = document.querySelectorAll('.reel-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  cards.forEach((card) => observer.observe(card));
}

/* ── Autoplay mudo quando o vídeo entra na tela, pausa ao sair ── */
function observeAutoplay() {
  const videos = document.querySelectorAll('.reel-card video');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      const playBtn = video.closest('.reel-card').querySelector('.reel-play-btn');
      if (entry.isIntersecting) {
        video.play().then(() => {
          if (playBtn) playBtn.textContent = '❚❚';
        }).catch(() => {});
      } else {
        video.pause();
        if (playBtn) playBtn.textContent = '▶';
      }
    });
  }, { threshold: 0.5 });

  videos.forEach((video) => observer.observe(video));
}
