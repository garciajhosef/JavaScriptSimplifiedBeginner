import items from "./items.json";
import formatCurrency from "./util/formatCurrency";
import addGlobalEventListener from "./util/addGlobalEventListener";

const shoppingCartContainer = document.querySelector("[data-cart]");
const cartItemsWrapper = document.querySelector("[data-cart-items-wrapper]");
let shoppingCart = [];
const cartItemsContainer = document.querySelector("[data-cart-items]");
const cartButton = document.querySelector("[data-cart-button]");
const cartItemTemplate = document.querySelector("#card-item-template");
const IMAGE_URL = "https://dummyimage.com/210x130";
const cartQuantity = document.querySelector("[data-cart-quantity]");
const cartTotal = document.querySelector("[data-cart-total]");
const SESSION_STORAGE_KEY = "SHOPPING_CART-cart";

export function setupShoppingCart() {
    addGlobalEventListener("click", "[data-remove-from-cart-button]", (e) => {
        const id = parseInt(e.target.closest("[data-item]").dataset.dataItem);
        removeFromCart(id);
    });
    shoppingCart = loadCart();
    renderCart();

    // Show/Hide the cart when clicked
    cartButton.addEventListener("click", () => {
        cartItemsWrapper.classList.toggle("invisible");
    });
}

function saveCart() {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(shoppingCart));
}

function loadCart() {
    const cart = sessionStorage.getItem(SESSION_STORAGE_KEY);
    return JSON.parse(cart) || [];
}

// Add items to cart
// Calculate an accurate total
// Handle multiple of the same item in the cart
export function addToCart(id) {
    const existingItem = shoppingCart.find((entry) => id === entry.id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        shoppingCart.push({ id: id, quantity: 1 });
    }

    renderCart();
    saveCart();
}

// Remove items from cart

function removeFromCart(id) {
    const existingItem = shoppingCart.find((entry) => id === entry.id);
    if (existingItem == null) return;

    shoppingCart = shoppingCart.filter((entry) => entry.id !== id);

    renderCart();
    saveCart();
}

// Show/Hide the cart button when it has no items or when it goes from 0 to 1 item
function renderCart() {
    if (shoppingCart.length > 0) {
        showCart();
        renderCartItems();
    } else {
        hideCart();
    }
}

function hideCart() {
    shoppingCartContainer.classList.add("invisible");
    cartItemsWrapper.classList.add("invisible");
}

function showCart() {
    shoppingCartContainer.classList.remove("invisible");
}

function renderCartItems() {
    cartQuantity.innerText = shoppingCart.reduce((quantity, entry) => {
        return quantity + entry.quantity;
    }, 0);

    const totalCents = shoppingCart.reduce((total, entry) => {
        const item = items.find((i) => i.id === entry.id);
        return total + item.priceCents * entry.quantity;
    }, 0);
    cartTotal.innerText = formatCurrency(totalCents / 100);
    cartItemsContainer.innerHTML = "";
    shoppingCart.forEach((entry) => {
        const item = items.find((i) => i.id === entry.id);

        const cartItemClone = cartItemTemplate.content.cloneNode(true);
        const itemCart = cartItemClone.querySelector("[data-item]");
        itemCart.dataset.dataItem = item.id;

        const itemImage = cartItemClone.querySelector("[data-cart-image]");
        itemImage.src = `${IMAGE_URL}/${item.imageColor}/${item.imageColor}`;

        const itemName = cartItemClone.querySelector("[data-cart-name]");
        itemName.innerText = item.name;

        if (entry.quantity > 1) {
            const itemQuantity = cartItemClone.querySelector(
                "[data-cart-quantity]"
            );
            itemQuantity.innerText = `x${entry.quantity}`;
        }

        const itemPrice = cartItemClone.querySelector("[data-cart-price]");
        itemPrice.innerText = formatCurrency(
            (item.priceCents * entry.quantity) / 100
        );

        cartItemsContainer.appendChild(cartItemClone);
    });
}
