const changeBtn = document.querySelector(".btn");
const body = document.querySelector(".body");

changeBtn.addEventListener("click", () => {
  if (body.getAttribute("data-theme") === "dark") {
    body.setAttribute("data-theme", null);
    changeBtn.setAttribute("data-theme", null);
  } else {
    body.setAttribute("data-theme", "dark");
    changeBtn.setAttribute("data-theme", "dark");
  }
});
