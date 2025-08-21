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
  { titulo: "Logo 1", categoria: "Logos", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398016416472633445/46_Sem_Titulo_20250724155511.png?ex=68a8bdbf&is=68a76c3f&hm=a687ed190b646fba7467484a174b29be1a19173b1aa2225832170a0cc6cbaca5&", descricao: "Logo minimalista." },
  { titulo: "Logo 2", categoria: "Logos", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398016416921292840/46_Sem_Titulo_20250724155313.png?ex=68a8bdbf&is=68a76c3f&hm=96c184c662326aec3bd8f7449836f9eced6ea91ab0cc77a0954686d880772f4a&", descricao: "Logo minimalista." },
    { titulo: "Logo 3", categoria: "Logos", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398016417378467931/46_Sem_Titulo_20250724155228.png?ex=68a8bdbf&is=68a76c3f&hm=3417ecfaee16fcb524454632914f71538abdc2218b77df7e42fec1d935b69d24&", descricao: "Logo minimalista." },
      { titulo: "Logo 4", categoria: "Logos", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398016417781252106/46_Sem_Titulo_20250724155142.png?ex=68a8bdbf&is=68a76c3f&hm=98a8d5a83fafc3baf7f5616f0575d9d60f88464ef255453ebc2afd96a058c51a&", descricao: "Logo minimalista." },
        { titulo: "Logo 5", categoria: "Logos", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398016418099757097/46_Sem_Titulo_20250724155115.png?ex=68a8bdbf&is=68a76c3f&hm=d924150460d94413d8196d6990ddd84098bb45b91803f50c8d4ce9a8702b6813&", descricao: "Logo minimalista." },
          { titulo: "Logo 6", categoria: "Logos", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398016418406072330/46_Sem_Titulo_20250724155053.png?ex=68a8bdc0&is=68a76c40&hm=6b267a259030a55c43c1c37bfcbeae716fb0f10e8748536829863e50cb2a3687&", descricao: "Logo minimalista." },
  { titulo: "Banner 1", categoria: "Banners", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019766970749079/52_Sem_Titulo_20250724161031.png?ex=68a8c0de&is=68a76f5e&hm=25a7aef6e418e9669e5088f7c2d87bd01f4744801f692c0b5697a00d366e9622&", descricao: "Banner promocional." },
  { titulo: "Banner 2", categoria: "Banners", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019767763468288/52_Sem_Titulo_20250724161003.png?ex=68a8c0de&is=68a76f5e&hm=3f58cef3d746881612cb963c439a5ccf675b2459835966f592f94d2449ea91c8&", descricao: "Banner promocional." },
  { titulo: "Banner 3", categoria: "Banners", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019768564322578/52_Sem_Titulo_20250724160938.png?ex=68a8c0de&is=68a76f5e&hm=545c70ab6a1cf5e067533471d5dceb1cc3278099abcb7c3853c2ac06dbb25197&", descricao: "Banner promocional." },
  { titulo: "Banner 4", categoria: "Banners", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019770439438406/52_Sem_Titulo_20250724160903.png?ex=68a8c0df&is=68a76f5f&hm=0d7fb4f41e29c603f284b1272967bc280fa1245615148c71f3b21be630c1daca&", descricao: "Banner promocional." },
  { titulo: "Banner 5", categoria: "Banners", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019770439438406/52_Sem_Titulo_20250724160903.png?ex=68a8c0df&is=68a76f5f&hm=0d7fb4f41e29c603f284b1272967bc280fa1245615148c71f3b21be630c1daca&", descricao: "Banner promocional." },
  { titulo: "Banner 6", categoria: "Banners", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019771844263977/52_Sem_Titulo_20250724160839.png?ex=68a8c0df&is=68a76f5f&hm=079edd700c387f52b151dfccc195e5c1a9ba7db1dc80d95bc8f6baf6ecc04dcd&", descricao: "Banner promocional." },
  { titulo: "Banner 7", categoria: "Banners", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019772666614001/52_Sem_Titulo_20250724160821.png?ex=68a8c0df&is=68a76f5f&hm=73342ef890bbd4900fc1262ee54fe9d5ddeeab1cc078b20fbad04e081bfe88ea&", descricao: "Banner promocional." },
  { titulo: "Barrinha 1", categoria: "Barrinhas", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019941491277956/47_Sem_Titulo_20250724160043.png?ex=68a8c108&is=68a76f88&hm=23a02f070787fc5296b526f719fb92274f8d09b1a4f26bf7eae44a4e40aaddf9&", descricao: "Barrinha para Discord." },
  { titulo: "Barrinha 2", categoria: "Barrinhas", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019942279811153/48_Sem_Titulo_20250724160211.png?ex=68a8c108&is=68a76f88&hm=8721b206ecb5cab7a6ce055287709ab1993a01b270d144371bc00e842bc8ee7b&", descricao: "Barrinha para Discord." },
  { titulo: "Barrinha 3", categoria: "Barrinhas", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019942917341194/48_Sem_Titulo_20250724160327.png?ex=68a8c108&is=68a76f88&hm=0486ab15d4158cada12aede64c222dc7761345f2a2f1168da23edc372eaadc3e&", descricao: "Barrinha para Discord." },
  { titulo: "Barrinha 4", categoria: "Barrinhas", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019943651348590/49_Sem_Titulo_20250724160455.png?ex=68a8c108&is=68a76f88&hm=bab67618ca26a9c444e3376189e5b7827ff41221bc19b64c1105f241facbce00&", descricao: "Barrinha para Discord." },
  { titulo: "Barrinha 5", categoria: "Barrinhas", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019944133951501/50_Sem_Titulo_20250724160604.png?ex=68a8c108&is=68a76f88&hm=8295bc490a74f8e46364410bd804bee2fea245db404d418a5ead7c9dd8cba8f6&", descricao: "Barrinha para Discord." },
  { titulo: "Barrinha 6", categoria: "Barrinhas", thumb: "https://cdn.discordapp.com/attachments/1387260913551151264/1398019944637005994/51_Sem_Titulo_20250724160659.png?ex=68a8c108&is=68a76f88&hm=6e65b47309c5d71f5da23e776f1a3e0bc2c0592eca98b6eb1bd7b8cfc1f06b32&", descricao: "Barrinha para Discord." },
  { titulo: "GIF 1", categoria: "GIFs", thumb: "https://cdn.discordapp.com/attachments/1387974550930853908/1387975279682523187/VID_20250505_220102.gif?ex=68a87776&is=68a725f6&hm=82fffe02de2737d2970edee839c25a7d9e3263a16e1355b22f3a4a0e7c54e30e&", descricao: "Animação curta." },
  { titulo: "GIF 2", categoria: "GIFs", thumb: "https://cdn.discordapp.com/attachments/1387974550930853908/1387975081749119079/VID_20250420_231147_1.gif?ex=68a87746&is=68a725c6&hm=d66eafabd50e511aaf874c4a69257adfb3f10cb73b20d2ea961faa84b32f3227&", descricao: "Animação curta." },
  { titulo: "GIF 3", categoria: "GIFs", thumb: "https://cdn.discordapp.com/attachments/1387974550930853908/1387975420078461050/1000080439.gif?ex=68a87797&is=68a72617&hm=aada666f8ee7259a44ce86d81ac43ad6c5041d31c4d22df92f475f89421d9c16&", descricao: "Animação curta." },
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