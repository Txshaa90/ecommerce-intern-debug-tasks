const buttons = document.querySelectorAll(".size");
const label = document.getElementById("label");
buttons.forEach((button) => {
  button.addEventListener("click",() => {
    buttons.forEach((item)=>item.classList.remove("active"));
    button.classList.add("active");
    label.textContent = "Selected: "+button.dataset.value;
  }
  );
}
);
