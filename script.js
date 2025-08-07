document.addEventListener("DOMContentLoaded", () => {
  let cart = [];
  const cartCount = document.getElementById("cart-count");
  const cartBtn = document.getElementById("cart-btn");
  const cartElement = document.getElementById("cart");
  const cartItemsElement = document.getElementById("cart-items");
  
  // Обработчик добавления в корзину
  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (event) => {
      const gameCard = event.target.closest(".game-card");
      const gameId = gameCard.getAttribute("data-id");
      const gameName = gameCard.querySelector("h2").textContent;
      const gameDescription = gameCard.querySelector(".game-description").textContent;
      
      cart.push({ id: gameId, name: gameName, description: gameDescription });
      updateCart();
    });
  });
  
  // Обновить корзину
  function updateCart() {
    cartCount.textContent = cart.length;
    cartItemsElement.innerHTML = cart.map(item => {
      return `<li>${item.name} - ${item.description}</li>`;
    }).join('');
  }
  
  // Открытие корзины
  cartBtn.addEventListener("click", () => {
    cartElement.classList.toggle("active");
  });
  
  // Оформить заказ
  document.getElementById("checkout-btn").addEventListener("click", () => {
    alert("Оформление заказа");
    cart = [];
    updateCart();
    cartElement.classList.remove("active");
  });
});
