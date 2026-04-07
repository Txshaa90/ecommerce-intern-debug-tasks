const menuToggle = document.getElementById("menuToggle");
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
    mainImage.src = thumb.dataset.image;

    thumbs.forEach(t => t.classList.remove("active"));
    thumb.classList.add("active");
  });
});

addToCartButton.addEventListener("click", function () {
  if (sizeSelect.value === "") {
    cartMessage.textContent = "Please select a size first.";
    return;
  }

  cartMessage.textContent = "Added headphones to cart!";
});
