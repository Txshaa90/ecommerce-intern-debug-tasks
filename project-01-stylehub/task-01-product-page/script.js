const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");
const sizeSelect = document.getElementById("size");
const addToCartButton = document.getElementById("addToCart");
const cartMessage = document.getElementById("cartMessage");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove("show");
  }
});

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.dataset.image;
  });
});

addToCartButton.addEventListener("click", () => {
  if (sizeSelect.value === "") {
    cartMessage.textContent = "Please select a size first.";
    cartMessage.style.color = "red";
    return;
  }

  cartMessage.textContent = "Item added to cart!";
  cartMessage.style.color = "green";
});