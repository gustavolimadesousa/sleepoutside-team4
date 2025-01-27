import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `<li class="product-card">
  <a href="/product_pages/?product=${product.Id}">
    <img
      src="${product.Image}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.Name}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p>
  </a>
</li>`;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init(productIds = null) {
    // Fetch all products from the data source
    const list = await this.dataSource.getData();

    // If productIds are provided, filter the list
    const filteredList = productIds ? this.filterProducts(list, productIds) : list;

    // Render the filtered or full list
    this.renderList(filteredList);
  }

  // Method to filter the products based on an array of IDs
  filterProducts(list, productIds) {
    return list.filter((product) => productIds.includes(product.Id));
  }

  // Render the product list using a template
  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}
