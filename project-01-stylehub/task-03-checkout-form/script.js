const checkoutForm = document.getElementById("checkoutForm");
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const addressInput = document.getElementById("address");
const message = document.getElementById("message");

checkoutForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const address = addressInput.value.trim();

  if (!fullName || !email || !address) {
    message.textContent = "Please complete all fields.";
    return;
  }

  const emailPattern =
      /^[^\s@]+@[^\s@]+\.[a-zA-Z]{3,}$/;

  if (!emailPattern.test(email)) {
    message.textContent = "Please enter a valid email address.";
    return;
  }

  message.textContent = "Order placed successfully!";
  checkoutForm.reset();
});