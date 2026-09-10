// RIK X Shopping Cart

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Cart count
function updateCartCount() {
    const count = document.getElementById("cart-count");
    if (count) {
        count.innerText = cart.length;
    }
}

// Add to Cart
function addToCart(name, price, image) {

    cart.push({
        name: name,
        price: price,
        image: image
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    alert("🛒 " + name + " added to cart!");
}

// Show Cart
function displayCart() {

    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    if (!cartItems) return;

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">

                <div class="cart-details">
                    <h3>${item.name}</h3>
                    <p>₹${item.price}</p>
                </div>

                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    if (totalPrice) {
        totalPrice.innerHTML = "₹" + total;
    }

    updateCartCount();
}

// Remove Item
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Clear Cart
function clearCart() {
    cart = [];
    localStorage.removeItem("cart");
    displayCart();
}

updateCartCount();
displayCart();