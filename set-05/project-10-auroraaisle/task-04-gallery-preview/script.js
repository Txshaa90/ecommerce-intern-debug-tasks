const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");
thumbs.forEach((thumb) => {
  thumb.addEventListener("click",() => {
    mainImage.src = thumb.dataset.image;
  }
  );
}
);