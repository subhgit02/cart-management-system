const cartContainer = document.getElementById('cart-container');

function renderCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartContainer.innerHTML = '';
  cart.forEach(user => {
    const userCard = document.createElement('div');
    userCard.classList.add('card');
    userCard.innerHTML = `
      <h3>${user.name}</h3>
      <p>${user.email}</p>
      <button class="delete" onclick="removeFromCart(${user.id})">Delete</button>
    `;
    cartContainer.appendChild(userCard);
  });
}

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(user => user.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

renderCart();
