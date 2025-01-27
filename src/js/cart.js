import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
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

// Initialize behaviors after loading header and footer
function initializeNavigation() {
  // Example: Add event listeners to navigation links
  const navLinks = document.querySelectorAll('#header a');
  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      // Example behavior: Prevent default and log navigation
      console.log(`Navigating to: ${link.href}`);
      // event.preventDefault(); // Uncomment if using SPA navigation
    });
  });
}

initializeNavigation();


// Load the header and footer into the page
loadHeaderFooter("/partials/header.html", "/partials/footer.html")
  .then(() => {
    console.log("Header and footer loaded successfully");
  })
  .catch((error) => {
    console.error("Error loading header and footer:", error);
  });
