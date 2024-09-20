const scrollUpBtn = document.querySelector(".scroll-up");
const scrollDownBtn = document.querySelector(".scroll-down");
const namesContainer = document.querySelector(".names");
const loadingData = document.querySelector(".loading");

function showLoader() {
  loadingData.style.display = "block";
  namesContainer.style.display = "none";
}

function closeLoader() {
  loadingData.style.display = "none";
  namesContainer.style.display = "block";
}

async function displayNames() {
  showLoader();
  try {
    const response = await fetch("https://dummyjson.com/users?limit=300");
    const result = await response.json();
    const namesData = result.users;
    namesContainer.innerHTML = namesData
      .map((item) => {
        return `<li>${item.firstName} ${item.lastName}</li>`;
      })
      .join(" ");
    closeLoader();
  } catch (error) {
    console.log(error);
  }
}

displayNames();

scrollUpBtn.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

scrollDownBtn.addEventListener("click", () => {
  scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});
