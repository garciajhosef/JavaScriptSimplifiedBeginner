import items from "./items.json";
import formatCurrency from "./util/formatCurrency";
import { addToCart } from "./shoppingCart";
import addGlobalEventListener from "./util/addGlobalEventListener";

const storeContainer = document.querySelector("[data-store-container]");
const cardItemTemplate = document.querySelector("#store-item-template");
const IMAGE_URL = "https://dummyimage.com/420x260";
export function setupStore() {
    if (storeContainer == null) return;
    addGlobalEventListener("click", "[data-add-to-cart-button]", (e) => {
        const id = e.target.closest("[data-store-item]").dataset.itemId;
        addToCart(parseInt(id));
    });

    items.forEach(renderStoreItem);
}

function renderStoreItem(item) {
    const storeItem = cardItemTemplate.content.cloneNode(true);
    const container = storeItem.querySelector("[data-store-item]");
    container.dataset.itemId = item.id;

    const itemImage = storeItem.querySelector("[data-item-image]");
    itemImage.src = `${IMAGE_URL}/${item.imageColor}/${item.imageColor}`;

    const itemCategory = storeItem.querySelector("[data-item-category]");
    itemCategory.innerText = item.category;

    const itemName = storeItem.querySelector("[data-item-name]");
    itemName.innerText = item.name;

    const itemPrice = storeItem.querySelector("[data-item-price]");
    itemPrice.innerText = formatCurrency(item.priceCents / 100);

    storeContainer.appendChild(storeItem);
}
