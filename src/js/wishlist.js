const wishlist = []; // Array to store wishlist items
const wishlistItems = document.getElementById("wishlist-items");

document.querySelectorAll(".wishlist-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const itemId = button.getAttribute("data-id");
    const itemName = button.parentNode.querySelector("h3").textContent;

    if (wishlist.includes(itemId)) {
      // If item is already in wishlist, remove it
      wishlist.splice(wishlist.indexOf(itemId), 1);
      button.classList.remove("added");
      button.textContent = "❤ Add to Wishlist";
    } else {
      // If item is not in wishlist, add it
      wishlist.push(itemId);
      button.classList.add("added");
      button.textContent = "💔 Remove from Wishlist";
    }

    updateWishlistDisplay();
  });
});
