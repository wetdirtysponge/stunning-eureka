// Сохраняем корзину в localStorage
let cart = JSON.parse(localStorage.getItem('psStoreCart') || '[]');

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('#cart-count, #cart-count-detail')
    .forEach(el => el.textContent = count);
}

function saveCart() {
  localStorage.setItem('psStoreCart', JSON.stringify(cart));
  updateCartCount();
}

// 1) Обработка клика по карточке на index.html
document.querySelectorAll('.game-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.add('pop-animation');
    setTimeout(() => {
      const id = card.dataset.id;
      const title = card.dataset.title;
      const price = card.dataset.price;
      // Переходим на страницу game.html с передачей данных
      window.location.href = `game.html?id=${id}&title=${encodeURIComponent(title)}&price=${price}`;
    }, 500);
  });
});

// 2) На странице game.html заполняем данные
if (location.pathname.endsWith('game.html')) {
  const params = new URLSearchParams(location.search);
  const title = params.get('title');
  const price = params.get('price');
  const id = params.get('id');

  document.getElementById('game-title').textContent = title;
  document.getElementById('game-price').textContent = `Цена: ${price} ₽`;

  // Добавить в корзину
  document.getElementById('add-to-cart').addEventListener('click', () => {
    const existing = cart.find(i => i.id === id);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ id, title, price: +price, qty: 1 });
    }
    saveCart();
    alert(`Добавлено: ${title}`);
  });

  // Связаться со мной
  document.getElementById('contact-me').addEventListener('click', () => {
    window.location.href = 'mailto:your-email@example.com?subject=Вопрос%20о%20игре%20' + encodeURIComponent(title);
  });
}

// 3) Страница корзины
if (location.pathname.endsWith('cart.html')) {
  const list = document.getElementById('cart-items');
  const totalEl = document.getElementById('total-price');
  const payment = document.getElementById('payment-method');

  function renderCart() {
    list.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.qty;
      const li = document.createElement('li');
      li.classList.add('cart-item');
      li.textContent = `${item.title} ×${item.qty} — ${item.price * item.qty} ₽`;
      list.appendChild(li);
    });
    totalEl.textContent = total;
  }

  document.getElementById('checkout').addEventListener('click', () => {
    const method = payment.value;
    alert(`Заказ оформлен на сумму ${totalEl.textContent} ₽. Способ оплаты: ${method}. Мы свяжемся с вами скоро.`);
    cart = [];
    saveCart();
    renderCart();
  });

  renderCart();
}

// Инициализация
updateCartCount();
