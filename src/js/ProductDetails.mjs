import { setLocalStorage, getLocalStorage } from "./utils.mjs";

function productDetailsTemplate(product) {
    return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img class="divider" src="${product.Image}" alt="${product.NameWithoutBrand}"/>
    <p class="product-card_price>$${product.FinalPrice}</p>
    <p class="product_color">${product.Colors[0].ColorName}</p>
    <p class="product_description">${product.DescriptionHtmlSimple}</p>
    <div class="product-detail_add">
        <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
        </div></section>`;

}


export default class ProductDetails {
    constructor(productId, dataSource) {
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }

    async init() {
        // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
        this.product = await this.dataSource.findProductById(this.productId);
        this.renderProductDetails("main")
        // once the HTML is rendered we can add a listener to Add to Cart button
        // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
        document
            .getElementById("addToCart")
            .addEventListener('click', this.addToCart.bind(this));
    }

    addToCart() {
        const item = this.product
        const shoppingCart = getLocalStorage("cart");
        shoppingCart.push(item);

        setLocalStorage("cart", shoppingCart);
    }

    renderProductDetails(selector) {
        const element = document.querySelector(selector);
        element.insertAdjacentHTML(
            "afterBegin", productDetailsTemplate(this.product)
        );
    }
}




