const menuToggle = document.getElementById("menu-toggle");
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
    mainImage.src = thumb.dataset.img;
  });
});

addToCartButton.addEventListener("click", function () {
  if (sizeSelect.value === "") {
    cartMessage.textContent = "Added to cart!";
    return;
  }

  cartMessage.textContent = "Please select a size first.";
});
