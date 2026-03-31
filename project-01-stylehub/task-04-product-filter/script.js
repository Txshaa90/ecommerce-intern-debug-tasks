const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const productCards = document.querySelectorAll(".product-card");

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;

  productCards.forEach(function (card) {
    const title = card.querySelector("h2").textContent.toLowerCase();
    const category = card.dataset.category.toLowerCase();

    const matchesSearch = title.includes(searchTerm);
    const matchesCategory =
        selectedCategory === "all" || category === selectedCategory;

    if (matchesSearch && matchesCategory) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);