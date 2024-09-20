const progress = document.querySelector(".progress");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const iconsWrapper = document.querySelectorAll(".icon-wrapper");

let currentSelectedStep = 0;

nextBtn.addEventListener("click", () => {
  if (currentSelectedStep < iconsWrapper.length) {
    currentSelectedStep++;
  }

  handleUpdateStep();
});

prevBtn.addEventListener("click", () => {
  if (currentSelectedStep > 0) {
    currentSelectedStep--;
  }

  handleUpdateStep();
});

function handleUpdateStep() {
  iconsWrapper.forEach((item, index) => {
    if (index < currentSelectedStep) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  progress.style.width =
    ((currentSelectedStep - 1) / (iconsWrapper.length - 1)) * 100 + "%";

  if (currentSelectedStep === 0) {
    prevBtn.disabled = true;
  } else if (currentSelectedStep === iconsWrapper.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
