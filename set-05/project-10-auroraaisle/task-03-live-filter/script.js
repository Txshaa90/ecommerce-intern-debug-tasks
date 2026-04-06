const searchInput = document.getElementById("searchInput");
const items = document.querySelectorAll("#list li");
searchInput.addEventListener("input",() => {
  const term = searchInput.value.toLowerCase();
  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(term)?"list-item":"none";
  }
  );
}
);
