const checkoutForm = document.getElementById("checkoutForm"); // checkout was pointing to nothing, checkoutForm is the correct ID
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const addressInput = document.getElementById("address");
const message = document.getElementById("message");

checkoutForm.addEventListener("submit", function (event) {
  if (
    // Check if any field is empty instead
    // !== is wrong, use === instead
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
    message.textContent = "Invalid Email Address.";
    return;
  }

  // Simulate order placement (impractical, but for demonstration)
  setTimeout(() => {
    message.textContent = "Submitting order...";
  }, 2000);
  
  message.textContent = "Order placed successfully!";
    
});
