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
  { titulo: "Logo 1", categoria: "Logos", thumb: "https://public-blob.squarecloud.dev/852603072026247220/81019104471_mer7crpy-cdbf.png", descricao: "Logo minimalista." },
  { titulo: "Logo 2", categoria: "Logos", thumb: "https://public-blob.squarecloud.dev/852603072026247220/82866191078_mer7dbvb-9bbe.png", descricao: "Logo minimalista." },
    { titulo: "Logo 3", categoria: "Logos", thumb: "https://public-blob.squarecloud.dev/852603072026247220/53441884265_mer7ehnm-a15f.png", descricao: "Logo minimalista." },
      { titulo: "Logo 4", categoria: "Logos", thumb: "https://public-blob.squarecloud.dev/852603072026247220/61336069038_mer7ekvd-64cf.png", descricao: "Logo minimalista." },
        { titulo: "Logo 5", categoria: "Logos", thumb: "https://public-blob.squarecloud.dev/852603072026247220/83658346714_mer7er11-1172.png", descricao: "Logo minimalista." },
          { titulo: "Logo 6", categoria: "Logos", thumb: "https://public-blob.squarecloud.dev/852603072026247220/25285411420_mer7fhih-abb7.png", descricao: "Logo minimalista." },
  { titulo: "Banner 1", categoria: "Banners", thumb: "https://public-blob.squarecloud.dev/852603072026247220/90792293326_mer7l8pd-a1a9.png", descricao: "Banner promocional." },
  { titulo: "Banner 2", categoria: "Banners", thumb: "https://public-blob.squarecloud.dev/852603072026247220/45490312181_mer7lch5-7a73.png", descricao: "Banner promocional." },
  { titulo: "Banner 3", categoria: "Banners", thumb: "https://public-blob.squarecloud.dev/852603072026247220/44198768326_mer7dk9k-0778.png", descricao: "Banner promocional." },
  { titulo: "Banner 4", categoria: "Banners", thumb: "https://public-blob.squarecloud.dev/852603072026247220/39905638005_mer7gf2j-60ec.png", descricao: "Banner promocional." },
  { titulo: "Banner 5", categoria: "Banners", thumb: "https://public-blob.squarecloud.dev/852603072026247220/73535173675_mer7gi93-eea3.png", descricao: "Banner promocional." },
  { titulo: "Banner 6", categoria: "Banners", thumb: "https://public-blob.squarecloud.dev/852603072026247220/9043917679_mer7gln9-e660.png", descricao: "Banner promocional." },
  { titulo: "Banner 7", categoria: "Banners", thumb: "https://public-blob.squarecloud.dev/852603072026247220/42040643141_mer7gofo-1cd8.png", descricao: "Banner promocional." },
  { titulo: "Barrinha 1", categoria: "Barrinhas", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1408594872998563961/1755905410410.png?ex=68aa4fb4&is=68a8fe34&hm=4c1f0d8aaa815af275bc12cc8f0ca0d5ebda92e31ee3836c0f7abc1bd7d4679d&", descricao: "Barrinha para Discord." },
  { titulo: "Barrinha 2", categoria: "Barrinhas", thumb: "https://public-blob.squarecloud.dev/852603072026247220/56483758078_mer7osfi-e45e.png", descricao: "Barrinha para Discord." },
  { titulo: "Barrinha 3", categoria: "Barrinhas", thumb: "https://public-blob.squarecloud.dev/852603072026247220/88924751803_mer7oz4l-1513.png", descricao: "Barrinha para Discord." },
  { titulo: "Barrinha 4", categoria: "Barrinhas", thumb: "https://public-blob.squarecloud.dev/852603072026247220/99804076175_mer7p7g9-3575.png", descricao: "Barrinha para Discord." },
  { titulo: "Barrinha 5", categoria: "Barrinhas", thumb: "https://public-blob.squarecloud.dev/852603072026247220/6759524978_mer7pc75-e9b5.png", descricao: "Barrinha para Discord." },
  { titulo: "GIF 1", categoria: "GIFs", thumb: "https://public-blob.squarecloud.dev/852603072026247220/97976751243_mer7rswn-4b8c.gif", descricao: "Animação curta." },
  { titulo: "GIF 2", categoria: "GIFs", thumb: "https://public-blob.squarecloud.dev/852603072026247220/92360024663_mer7rz29-40d0.gif", descricao: "Animação curta." },
  { titulo: "GIF 3", categoria: "GIFs", thumb: "https://public-blob.squarecloud.dev/852603072026247220/48562378547_mer7rpij-e0ba.gif", descricao: "Animação curta." },
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
