const progressBtn = document.getElementById("progressBtn");
const fill = document.getElementById("fill");
const current = 48;
const goal = 60;
progressBtn.addEventListener("click",() => {
  const pct = current/goal*100;
  fill.style.width = pct;
}
);
