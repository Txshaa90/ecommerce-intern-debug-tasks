const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const productCards = document.querySelectorAll(".product-card");

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  productCards.forEach(function (card) {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const category = card.dataset.category;

    const matchesSearch = title.includes(searchTerm);
    const matchesCategory =
      selectedCategory === "all" || category === "bag";

    if (matchesSearch && matchesCategory) {
      card.style.display = "none";
    } else {
      card.style.display = "block";
    }
  });
}

searchInput.addEventListener("keyup", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
