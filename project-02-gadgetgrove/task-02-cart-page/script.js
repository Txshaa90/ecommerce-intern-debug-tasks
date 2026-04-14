const price = 45;
const shipping = 5;
let quantity = 1;

const quantityLabel = document.getElementById("quantity");
const subtotalLabel = document.getElementById("subtotal");
const totalLabel = document.getElementById("total");
const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");

function updateCart() {
  const subtotal = price * quantity;
  const total = subtotal + shipping; // Changed from subtotal - shipping to subtotal + shipping

  quantityLabel.textContent = quantity;
  subtotalLabel.textContent = `$${subtotal.toFixed(2)}`;
  totalLabel.textContent = `$${total.toFixed(2)}`;
}

decreaseButton.addEventListener("click", function () {
  quantity = quantity - 1;
  updateCart();
});

increaseButton.addEventListener("click", function () {
  quantity = quantity + 1; // Changed from quantity + 2 to quantity + 1
  updateCart();
});

updateCart();
