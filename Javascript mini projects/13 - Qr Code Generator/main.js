const inputValueForQR = document.querySelector(".input-value");
const generateQRBtn = document.querySelector(".btn");
const QRCodeWrapper = document.querySelector(".qr-code-wrapper");

let lastGeneratedQR = "";

generateQRBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent button default behavior

  const QRcodeValue = inputValueForQR.value.trim();

  // Prevent generating same QR multiple times
  if (QRcodeValue === lastGeneratedQR) {
    return;
  }

  if (QRcodeValue) {
    // Clear previous QR code
    QRCodeWrapper.innerHTML = "";

    // Generate new QR code
    new QRCode(QRCodeWrapper, {
      text: QRcodeValue,
      width: Math.min(350, window.innerWidth * 0.7), // Responsive sizing
      height: Math.min(350, window.innerWidth * 0.7),
      colorDark: "#000",
      colorLight: "#fff",
    });

    // Store the generated QR value to avoid regenerating the same code
    lastGeneratedQR = QRcodeValue;
    inputValueForQR.value = "";
  } else {
    // Error message if input is empty
    QRCodeWrapper.innerHTML = `<p>Please enter a valid text or URL!</p>`;
  }
});
