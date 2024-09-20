let stars = document.querySelectorAll(".fas");
let printFinalRating = document.querySelector(".rating-value");

let finalRating = -1;
stars.forEach((starItem, index) => {
  starItem.dataset.rating = index + 1;
  starItem.addEventListener("mouseover", handleMouseOver);
  starItem.addEventListener("click", handleMouseClick);
  starItem.addEventListener("mouseout", handleMouseOut);
});
function handleMouseOver(event) {
  let currRating = event.target.dataset.rating;
  stars.forEach((starItem) => {
    if (starItem.dataset.rating <= currRating) {
      starItem.classList.replace("fa-star-o", "fa-star");
    } else {
      starItem.classList.replace("fa-star", "fa-star-o");
    }
  });
}

function handleMouseClick(event) {
  finalRating = event.target.dataset.rating;
  printFinalRating.textContent = finalRating;
}
function handleMouseOut() {
  stars.forEach((starItem) => {
    if (starItem.dataset.rating > finalRating) {
      starItem.classList.replace("fa-star", "fa-star-o");
    } else {
      starItem.classList.replace("fa-star-o", "fa-star");
    }
  });
}
