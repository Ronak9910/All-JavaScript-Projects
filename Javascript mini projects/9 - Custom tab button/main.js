const customBtns = document.querySelectorAll(".btn");
const content = document.querySelectorAll(".content");

let currentActiveBtn = 0;

customBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    customBtns[currentActiveBtn].classList.remove("active");
    content[currentActiveBtn].classList.remove("active");

    btn.classList.add("active");
    content[index].classList.add("active");

    currentActiveBtn = index;

    console.log(index);
  });
});
