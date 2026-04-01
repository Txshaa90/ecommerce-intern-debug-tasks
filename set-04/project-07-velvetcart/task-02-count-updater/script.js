const countBtn = document.getElementById("countBtn");
const countText = document.getElementById("cartCount");
let count = "0";
countBtn.addEventListener("click",() => {
  count+= 1;
  countText.textContent = count;
}
);
