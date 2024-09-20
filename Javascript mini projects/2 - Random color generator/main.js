// For hex color generator
let hexColorGenerator = document.querySelector(".hex-color-generator");
let hexColorBtn = document.querySelector(".hex-color-btn");
let hexColorValue = document.querySelector(".hex-color-value");
let hexColorCopy = document.querySelector(".hex-color-copy");

hexColorBtn.addEventListener("click", () => {
  let hexValues = "0123456789abcdef";
  let newHexColorValue = "#";
  let hexValueLength = hexValues.length;
  for (let i = 0; i < 6; i++) {
    newHexColorValue += hexValues.charAt(
      Math.floor(Math.random() * hexValueLength)
    );
  }
  hexColorValue.textContent = newHexColorValue;
  hexColorGenerator.style.backgroundColor = newHexColorValue;
  hexColorBtn.style.color = newHexColorValue;
});
hexColorCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(hexColorValue.textContent);
  alert("Hex color Copied");
});

//For RGB Color generator
let rgbColorGenerator = document.querySelector(".rgb-color-generator");
let rgbRedColorValue = document.querySelector("#red");
let rgbGreenColorValue = document.querySelector("#green");
let rgbBlueColorValue = document.querySelector("#blue");
let rgbColorBtn = document.querySelector(".rgb-color-btn");
let rgbColorValue = document.querySelector(".rgb-color-value");
let rgbColorCopy = document.querySelector(".rgb-color-copy");

rgbColorBtn.addEventListener("click", () => {
  let newRGBColor = `rgb(${rgbRedColorValue.value}, ${rgbGreenColorValue.value}, ${rgbBlueColorValue.value})`;
  rgbColorValue.textContent = newRGBColor;
  rgbColorGenerator.style.backgroundColor = newRGBColor;
  rgbColorBtn.style.color = newRGBColor;
});

rgbColorCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(rgbColorValue.textContent);
  alert("RGB color Copied");
});
