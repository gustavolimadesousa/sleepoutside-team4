
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

// Create a data source for the "tents" category
const dataSource = new ProductData("tents");

// Select the HTML element where the product list will be rendered
const element = document.querySelector(".product-list");

// Create an instance of ProductList
const listing = new ProductList("Tents", dataSource, element);

// Array of specific tent IDs to display (replaced with actual IDs from your JSON)
const tentIds = ["880RR", "985RF", "985PR", "344YJ"];

// Initialize the product listing with filtering
listing.init(tentIds);


// Load the header and footer into the page
loadHeaderFooter("/partials/header.html", "/partials/footer.html")
  .then(() => {
    console.log("Header and footer loaded successfully");
  })
  .catch((error) => {
    console.error("Error loading header and footer:", error);
  });



