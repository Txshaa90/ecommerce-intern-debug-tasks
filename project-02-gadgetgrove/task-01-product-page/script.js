const menuToggle = document.getElementById("menuToggle"); // Using a wrong id, menu-toggle is wrong
const mobileMenu = document.getElementById("mobileMenu");
const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");
const sizeSelect = document.getElementById("size");
const addToCartButton = document.getElementById("addToCart");
const cartMessage = document.getElementById("cartMessage");

menuToggle.addEventListener("click", function () {
  mobileMenu.classList.toggle("show");
});

thumbs.forEach(function (thumb) {
  thumb.addEventListener("click", function () {
    // thumb switch is using dataset.img instead of dataset.image
    mainImage.src = thumb.dataset.image;
  });
});

// Added interchangeable color for cartMessage
addToCartButton.addEventListener("click", function () {
  if (sizeSelect.value !== "") { // Changed to if not null or empty
    cartMessage.textContent = "Added headphones to cart!";
    cartMessage.style.color = "green";
    return;
  } else { // fixed the else condition
    cartMessage.textContent = "Please select a size first.";
    cartMessage.style.color = "red";
  }
});
