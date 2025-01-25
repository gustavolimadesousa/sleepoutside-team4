import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  console.log(cartItems);
  const htmlItems = cartItems.map((item, index) =>
    cartItemTemplate(item, index),
  );
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  // Add event listeners for remove buttons
  const removeButtons = document.querySelectorAll(".remove-item");
  removeButtons.forEach((button, index) => {
    button.addEventListener("click", () => removeItem(index));
  });
}

function cartItemTemplate(item, index) {
  return `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: ${item.Quantity || 1}</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <button class="remove-item" data-index="${index}">Remove</button>
</li>`;
}

function removeItem(index) {
  let cartItems = getLocalStorage("so-cart") || [];
  cartItems.splice(index, 1); // Remove the item at the given index
  setLocalStorage("so-cart", cartItems); // Update local storage
  renderCartContents(); // Re-render the cart
}

renderCartContents();
