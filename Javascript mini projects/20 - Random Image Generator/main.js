const generateBtn = document.querySelector(".btn");
const imagesWrapper = document.querySelector(".images-wrapper");
let count = 1;

function generateImages() {
  for (let i = count; i <= count + 4; i++) {
    const newImage = document.createElement("img");
    newImage.src = `https://picsum.photos/300?random=${i}`;
    imagesWrapper.appendChild(newImage);
  }
  count += 5;
}

generateBtn.addEventListener("click", () => {
  generateImages();
});

generateImages(count);
