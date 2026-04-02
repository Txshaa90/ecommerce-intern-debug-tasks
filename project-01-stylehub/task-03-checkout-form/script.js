const checkoutForm = document.getElementById("checkoutForm");
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const addressInput = document.getElementById("address");
const message = document.getElementById("message");

checkoutForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    fullNameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    addressInput.value.trim() === ""
  ) {
    event.preventDefault();
    message.textContent = "Please complete all fields.";
    return;
  }

  if (emailInput.value.includes("@") === false) {
    event.preventDefault();
    message.textContent = "Invalid email";
    return;
  }

  message.textContent = "Order placed successfully!";
});
