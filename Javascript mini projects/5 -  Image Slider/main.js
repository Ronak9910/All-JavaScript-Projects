const uploadImages = document.querySelector(".images");
const dotContainer = document.querySelector(".dot-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const inputSlides = document.querySelector(".input-slides");
const generateImages = document.querySelector(".generate");
let numberOfImages = 10;
let currentSlide = 0;

async function fetchImagesFromAPI() {
  currentSlide = 0;
  const API_LINK = `https://picsum.photos/v2/list?page=1&limit=${numberOfImages}`;
  const imgagesResult = await fetch(API_LINK, { method: "GET" });
  const imagesData = await imgagesResult.json();
  uploadImages.innerHTML = imagesData;
  uploadImages.innerHTML = imagesData
    .map((itemSet, index) => {
      return `
        <div class="img-slide" style="display: ${
          index === currentSlide ? "block" : "none"
        };">
          <img src="${itemSet.download_url}" alt="${itemSet.id}" />
        </div>`;
    })
    .join("");
  dotContainer.innerHTML = imagesData
    .map((item, index) => {
      return `
        <span class = "dot ${
          index === currentSlide ? "active" : ""
        } data-slide = "${index}"></span>
        `;
    })
    .join("");
  document.querySelectorAll(".dot").forEach((item, index) => {
    item.addEventListener("click", () => showSlide(index));
  });
}

function showSlide(slideIndex) {
  const slides = document.querySelectorAll(".img-slide");
  const dots = document.querySelectorAll(".dot");

  // Hide the current slide and remove the active class from the current dot
  slides[currentSlide].style.display = "none";
  dots[currentSlide].classList.remove("active");

  // Show the new slide and add the active class to the new dot
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");

  currentSlide = slideIndex;
}

nextBtn.addEventListener("click", () => {
  const newSlide = (currentSlide + 1 + numberOfImages) % numberOfImages;
  showSlide(newSlide);
});
prevBtn.addEventListener("click", () => {
  const newSlide = (currentSlide - 1 + numberOfImages) % numberOfImages;
  showSlide(newSlide);
});
generateImages.addEventListener("click", () => {
  numberOfImages = parseInt(inputSlides.value);
  if (numberOfImages < 1) {
    alert("Minimum 1 slide is Required");
  } else if (numberOfImages > 30) {
    alert("Maximum 30 slides can be showed");
  } else {
    inputSlides.value = "";
    console.log("y");
    fetchImagesFromAPI();
  }
});
fetchImagesFromAPI();
