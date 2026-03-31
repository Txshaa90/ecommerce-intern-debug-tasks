const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const productCards = document.querySelectorAll(".product-card");

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase(); 
  const selectedCategory = categoryFilter.value;

  productCards.forEach(function (card) {
    const title = card.querySelector("h2").textContent.toLowerCase(); // Wrongly targeting h3, changed to h2
    const category = card.dataset.category;

    const matchesSearch = title.includes(searchTerm);
    const matchesCategory =
      selectedCategory === "all" || category === selectedCategory; // category === "bag" is incorrect

    // logic is reversed
    if (matchesSearch && matchesCategory) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

searchInput.addEventListener("keyup", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
