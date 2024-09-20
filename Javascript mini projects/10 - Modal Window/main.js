const openWindow = document.querySelector(".open-modal");
const modal = document.querySelector(".modal-background");
const closeWindow = document.querySelector(".close-modal");
const closeBtn = document.querySelector(".close");

openWindow.addEventListener("click", () => {
  modal.style.display = "block";
});
closeWindow.addEventListener("click", () => {
  modal.style.display = "none";
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
