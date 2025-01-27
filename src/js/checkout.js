import { loadHeaderFooter } from "./utils.mjs";


// Load the header and footer into the page
loadHeaderFooter("/public/partials/header.html", "/public/partials/footer.html")
  .then(() => {
    console.log("Header and footer loaded successfully");
  })
  .catch((error) => {
    console.error("Error loading header and footer:", error);
  });
