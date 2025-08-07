const goods = [
  { name: 'Игровая мышь NeoX', meta: 'RGB, 8 кнопок', price: '2 990 ₽', img: 'https://picsum.photos/seed/item1/600/400' },
  { name: 'Клавиатура Aurora', meta: 'Blue Switch, подсветка', price: '5 490 ₽', img: 'https://picsum.photos/seed/item2/600/400' },
  { name: 'Наушники Pulse', meta: 'Шумоподавление', price: '6 990 ₽', img: 'https://picsum.photos/seed/item3/600/400' },
  { name: 'Микрофон Echo', meta: 'USB-C, студийное качество', price: '4 490 ₽', img: 'https://picsum.photos/seed/item4/600/400' },
  { name: 'Коврик Glide XL', meta: '900×400 мм', price: '1 290 ₽', img: 'https://picsum.photos/seed/item5/600/400' },
  { name: 'Веб-камера Vivid', meta: '1080p, 60fps', price: '3 990 ₽', img: 'https://picsum.photos/seed/item6/600/400' },
];

const grid = document.getElementById('grid');
const toast = document.getElementById('toast');

grid.innerHTML = goods.map(g => `
  <article class="card">
    <img src="${g.img}" alt="${g.name}" />
    <div class="body">
      <div class="title">${g.name}</div>
      <div class="meta">${g.meta}</div>
      <div class="buy">
        <div class="price">${g.price}</div>
        <button class="btn buy" data-item="${g.name}">В корзину</button>
      </div>
    </div>
  </article>
`).join('');

document.addEventListener('click', (e) => {
  const btn = e.target.closest('button.btn.buy');
  if (!btn) return;
  const name = btn.getAttribute('data-item');
  toast.textContent = `${name} — добавлено в корзину`;
  toast.classList.add('show');
  clearTimeout(window.__t);
  window.__t = setTimeout(() => toast.classList.remove('show'), 1500);
});
