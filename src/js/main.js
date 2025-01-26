// import ProductData from "./ProductData.mjs";
// import ProductList from "./ProductList.mjs";

// const dataSource = new ProductData("tents");
// const element = document.querySelector(".product-list");
// const listing = new ProductList("Tents", dataSource, element);

// listing.init();



import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

// Create a data source for the "tents" category
const dataSource = new ProductData("tents");

// Select the HTML element where the product list will be rendered
const element = document.querySelector(".product-list");

// Create an instance of ProductList
const listing = new ProductList("Tents", dataSource, element);

// Array of specific tent IDs to display (replace with actual IDs from your JSON)
const tentIds = ["880RR", "985RF", "985PR", "344YJ"];

// Initialize the product listing with filtering
listing.init(tentIds);

