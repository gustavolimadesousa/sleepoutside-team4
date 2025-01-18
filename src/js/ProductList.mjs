import { renderListWithTemplate } from "./utils.mjs";


function productCardTemplate(product) {
    const productCard = `<li class="product-card"> 
    <a href="product_pages/index.html?product=${product.Id}">
        <img src="${product.Image}" alt="Image of "> 
        <h3 class="car_brand">${product.Brand.Name}</h3>
        <h2 class="card_name">${product.Name}</h2>
        <p class="product-card_price">$${product.FinalPrice}</p>
        </a>
        </li>`;
    return productCard;
}


export default class ProductListing {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const list = await this.dataSource.getData();

        this.renderList(list);
    }

    renderList(list) {
        if (list.length > 4) {
            list.length = 4
            renderListWithTemplate(productCardTemplate, this.listElement, list);
        }
    }
    

}