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
  { titulo: "Logo 1", categoria: "Logos", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1408594927805272166/1755905031157.png?ex=68aa4fc1&is=68a8fe41&hm=cb206938fc8716ca9557c7f0b14540dafb14fb3bf6926d9f6fcb7bdfcb9e9a25&", descricao: "Logo minimalista." },
  { titulo: "Logo 2", categoria: "Logos", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1408594928279486464/1755904992208.png?ex=68aa4fc1&is=68a8fe41&hm=a14701729ec13d967557c460589d40719da98abd26239f69f83e7cded9e4e59a&", descricao: "Logo minimalista." },
    { titulo: "Logo 3", categoria: "Logos", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1408594928770089011/1755905019715.png?ex=68aa4fc1&is=68a8fe41&hm=f5cdd2971fadb74561477f8fb176a6bf12536023edd3c231d579b16de415250f&", descricao: "Logo minimalista." },
      { titulo: "Logo 4", categoria: "Logos", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398016417781252106/46_Sem_Titulo_20250724155142.png?ex=68aa0f3f&is=68a8bdbf&hm=6123ce642043ce0656c086fcabb86cf4916e5a32dc8c4fbf3a8d0a0136169618&", descricao: "Logo minimalista." },
        { titulo: "Logo 5", categoria: "Logos", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398016418099757097/46_Sem_Titulo_20250724155115.png?ex=68aa0f3f&is=68a8bdbf&hm=ff89ace74b3974415c406f1aed252ed2a612fcf7a4fbbcf35b9b3e29e8a231ee&", descricao: "Logo minimalista." },
          { titulo: "Logo 6", categoria: "Logos", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398016417378467931/46_Sem_Titulo_20250724155228.png?ex=68aa0f3f&is=68a8bdbf&hm=70a0bd4d109f6e4700e490d9b5b3436c75dc04b159e4899c4dd810460cffd020&", descricao: "Logo minimalista." },
  { titulo: "Banner 1", categoria: "Banners", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1408594968678760538/1755905374164.png?ex=68aa4fca&is=68a8fe4a&hm=50ef5448905fb00f18ead3aba02117f71acce476424093b3a7c7a24c706ff344&", descricao: "Banner promocional." },
  { titulo: "Banner 2", categoria: "Banners", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019769474482288/52_Sem_Titulo_20250724160922.png?ex=68aa125e&is=68a8c0de&hm=e2dcc3e51cabf1ea5c7ef02db54400e615155a802624ae63568840efe6679c19&", descricao: "Banner promocional." },
  { titulo: "Banner 3", categoria: "Banners", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019768564322578/52_Sem_Titulo_20250724160938.png?ex=68aa125e&is=68a8c0de&hm=59b1ff8927082cf43abbba5087eed2bb4acf77eb50370f56eb7b3a1dcb989bab&", descricao: "Banner promocional." },
  { titulo: "Banner 4", categoria: "Banners", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019766970749079/52_Sem_Titulo_20250724161031.png?ex=68aa125e&is=68a8c0de&hm=88e644c56825a295ce03600ea8d8e6e989bcad0abea5469431c55460c6ac6406&", descricao: "Banner promocional." },
  { titulo: "Banner 5", categoria: "Banners", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019770439438406/52_Sem_Titulo_20250724160903.png?ex=68aa125f&is=68a8c0df&hm=d90a19735fb53f4a82fc2c36d894cd1b6a9d5caf33dac154a4ce68be37678853&", descricao: "Banner promocional." },
  { titulo: "Banner 6", categoria: "Banners", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019772666614001/52_Sem_Titulo_20250724160821.png?ex=68aa125f&is=68a8c0df&hm=e46ce788bb27d95c0ddd8c0d510a1ff32d0c3b5a0ecafc2a2ab5eeada49b1929&", descricao: "Banner promocional." },
  { titulo: "Banner 7", categoria: "Banners", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019771844263977/52_Sem_Titulo_20250724160839.png?ex=68aa125f&is=68a8c0df&hm=4846bccccd376daef2ef34055b37470d9147a614a077e3b01f3af1ae9b3586f8&", descricao: "Banner promocional." },
  { titulo: "Barrinha 1", categoria: "Barrinhas", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1408594872998563961/1755905410410.png?ex=68aa4fb4&is=68a8fe34&hm=4c1f0d8aaa815af275bc12cc8f0ca0d5ebda92e31ee3836c0f7abc1bd7d4679d&", descricao: "Barrinha para Discord." },
  { titulo: "Barrinha 2", categoria: "Barrinhas", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1408594873635831888/1755905273270.png?ex=68aa4fb4&is=68a8fe34&hm=60311732c20d2d66a0ac9ee1a57cdfece6857eac2743f22e4d9a57dc1ba11d4b&", descricao: "Barrinha para Discord." },
  { titulo: "Barrinha 3", categoria: "Barrinhas", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019941491277956/47_Sem_Titulo_20250724160043.png?ex=68aa1288&is=68a8c108&hm=e4d203d789c6eb3df17f44a8455ff067a6f7fc6a523c99aa342619c48405f51b&", descricao: "Barrinha para Discord." },
  { titulo: "Barrinha 4", categoria: "Barrinhas", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019942917341194/48_Sem_Titulo_20250724160327.png?ex=68aa1288&is=68a8c108&hm=d9b664fcaf396564c203eae341414b2308e06a19d8dd1d18ca230b956c9fbe35&", descricao: "Barrinha para Discord." },
  { titulo: "Barrinha 5", categoria: "Barrinhas", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019944637005994/51_Sem_Titulo_20250724160659.png?ex=68aa1288&is=68a8c108&hm=2212c9dcc131cb97b8e29bd1a90f30b9800cdbcd21020753c59ab7239f88fedb&", descricao: "Barrinha para Discord." },
  { titulo: "Barrinha 6", categoria: "Barrinhas", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019942279811153/48_Sem_Titulo_20250724160211.png?ex=68aa1288&is=68a8c108&hm=1c4657e13df08b42b37214141180f5e62d10c0ea2b157663816aef08a204cead&", descricao: "Barrinha para Discord." },
  { titulo: "GIF 1", categoria: "GIFs", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1408588743228653579/VID_20250505_220102.gif?ex=68aa49fe&is=68a8f87e&hm=1777e299e83c0d3d46808320308810d087a260c01f41b0d0339280831c6a5c51&", descricao: "Animação curta." },
  { titulo: "GIF 2", categoria: "GIFs", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1408588598462382080/1000080439.gif?ex=68aa49dc&is=68a8f85c&hm=12e262842d738323aab0db53d660d701ad15ec973e2859abd416a7d8b8c30fa0&", descricao: "Animação curta." },
  { titulo: "GIF 3", categoria: "GIFs", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1408588487942340710/1000100320.gif?ex=68aa49c1&is=68a8f841&hm=35cdb07477d5563b9ce97d6abca86d493b164cdd4602c88dc3a857f60759bfc2&", descricao: "Animação curta." },
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
