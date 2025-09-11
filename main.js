const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Tema claro/escuro persistente
if (localStorage.getItem('theme') === 'dark') {
  body.setAttribute('data-theme', 'dark');
}

themeToggle.addEventListener('click', () => {
  const isDark = body.getAttribute('data-theme') === 'dark';
  body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// Portfolio items
const portfolioItems = [
  { titulo: "Logo 1", categoria: "Logos", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757629756/discord_bot_uploads/promisse_12.png", descricao: "Logo minimalista." },
  { titulo: "Logo 2", categoria: "Logos", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757629761/discord_bot_uploads/promisse_825.png", descricao: "Logo minimalista." },
    { titulo: "Logo 3", categoria: "Logos", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757629769/discord_bot_uploads/promisse_650.png", descricao: "Logo minimalista." },
      { titulo: "Logo 4", categoria: "Logos", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757629776/discord_bot_uploads/promisse_476.png", descricao: "Logo minimalista." },
        { titulo: "Logo 5", categoria: "Logos", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757629783/discord_bot_uploads/promisse_800.png", descricao: "Logo minimalista." },
          { titulo: "Logo 6", categoria: "Logos", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757630016/discord_bot_uploads/promisse_383.png", descricao: "Logo minimalista." },
  { titulo: "Banner 1", categoria: "Banners", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757629789/discord_bot_uploads/promisse_126.png", descricao: "Banner promocional." },
  { titulo: "Banner 2", categoria: "Banners", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757629801/discord_bot_uploads/promisse_262.png", descricao: "Banner promocional." },
  { titulo: "Banner 3", categoria: "Banners", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757629811/discord_bot_uploads/promisse_332.png", descricao: "Banner promocional." },
  { titulo: "Banner 4", categoria: "Banners", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757629818/discord_bot_uploads/promisse_194.png", descricao: "Banner promocional." },
  { titulo: "Banner 5", categoria: "Banners", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757629829/discord_bot_uploads/promisse_90.png", descricao: "Banner promocional." },
  { titulo: "Banner 6", categoria: "Banners", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757629839/discord_bot_uploads/promisse_861.png", descricao: "Banner promocional." },
  { titulo: "Banner 7", categoria: "Banners", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757630038/discord_bot_uploads/promisse_591.png", descricao: "Banner promocional." },
  { titulo: "Barrinha 1", categoria: "Barrinhas", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757629984/discord_bot_uploads/promisse_242.png", descricao: "Barrinha para Discord." },
  { titulo: "Barrinha 2", categoria: "Barrinhas", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757629970/discord_bot_uploads/promisse_6.png", descricao: "Barrinha para Discord." },
  { titulo: "Barrinha 3", categoria: "Barrinhas", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757629898/discord_bot_uploads/promisse_925.png", descricao: "Barrinha para Discord." },
  { titulo: "Barrinha 4", categoria: "Barrinhas", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757629887/discord_bot_uploads/promisse_974.png", descricao: "Barrinha para Discord." },
  { titulo: "Barrinha 5", categoria: "Barrinhas", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757629873/discord_bot_uploads/promisse_242.png", descricao: "Barrinha para Discord." },
  { titulo: "GIF 1", categoria: "GIFs", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757629908/discord_bot_uploads/promisse_329.gif", descricao: "Animação curta." },
  { titulo: "GIF 2", categoria: "GIFs", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757629920/discord_bot_uploads/promisse_734.gif", descricao: "Animação curta." },
  { titulo: "GIF 3", categoria: "GIFs", thumb: "https://res.cloudinary.com/promisse/image/upload/v1757630676/discord_bot_uploads/promisse_837.gif", descricao: "Animação curta." },
];

const grid = document.getElementById('portfolio-grid');

function renderPortfolio(filter = "Todos") {
  grid.innerHTML = "";
  portfolioItems
    .filter(item => filter === "Todos" || item.categoria === filter)
    .forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${item.thumb}" alt="${item.titulo}" loading="lazy">
        <h3>${item.titulo}</h3>
        <p>${item.categoria}</p>
      `;
      card.addEventListener('click', () => openLightbox(item));
      grid.appendChild(card);
    });
}

renderPortfolio();

// Filtros
document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filters .active').classList.remove('active');
    btn.classList.add('active');
    renderPortfolio(btn.dataset.filter);
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxDesc = document.getElementById('lightbox-desc');
let currentIndex = 0;

function openLightbox(item) {
  currentIndex = portfolioItems.indexOf(item);
  lightboxImg.src = item.thumb;
  lightboxDesc.textContent = item.descricao;
  lightbox.classList.remove('hidden');
}

function closeLightbox() {
  lightbox.classList.add('hidden');
}

document.getElementById('lightbox-close').onclick = closeLightbox;
document.getElementById('prev').onclick = () => {
  currentIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
  openLightbox(portfolioItems[currentIndex]);
};
document.getElementById('next').onclick = () => {
  currentIndex = (currentIndex + 1) % portfolioItems.length;
  openLightbox(portfolioItems[currentIndex]);
};

document.addEventListener('keydown', (e) => {
  if (lightbox.classList.contains('hidden')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') document.getElementById('prev').click();
  if (e.key === 'ArrowRight') document.getElementById('next').click();
});
