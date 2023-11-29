
let cartItems = [];
let total = 0;

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");
    cartItemsElement.innerHTML = "";
    
    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });

    totalElement.textContent = total.toFixed(2);
}

function checkout() {
    alert(`Thank you for your purchase! Total amount: $${total.toFixed(2)}`);
    // You could implement further processing here, such as submitting the order to a backend.
    cartItems = [];
    total = 0;
    updateCart();
}





// form tag 
const inquiryForm = document.getElementById('inquiryForm');

inquiryForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    alert('Form submitted! We will get back to you soon.');
});

if (window.history.replaceState) {
    // This prevents form resubmission when navigating back
    window.history.replaceState(null, null, window.location.href);
}

// Additionally, you can handle the page load event to prevent form resubmission on page refresh
window.onload = function() {
    if (window.history.replaceState) {
        // This prevents form resubmission when refreshing the page
        window.history.replaceState(null, null, window.location.href);
    }
}

