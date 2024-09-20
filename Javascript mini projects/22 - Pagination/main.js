const paginationWrapper = document.querySelector(".pagination-wrapper");
const inputWrapper = document.querySelector(".input-wrapper");
const submitBtn = document.querySelector(".submit");
const pageNumberValue = document.querySelector("#totalPage");
const cardNumberValue = document.querySelector("#perPage");
let totalNumberOfPages = 0;
let totalNumberOfCards = 0;
let cardsPerPage = 0;
let pageNumber = 1;

submitBtn.addEventListener("click", () => {
  totalNumberOfPages = Number(pageNumberValue.value);
  if (totalNumberOfPages < 1 || totalNumberOfPages > 10) {
    console.log(`Invalid number of pages: ${totalNumberOfPages}`);
    alert("Max number of Pages can be 10 and Min number of pages can be 1");
    return;
  }
  cardsPerPage = Number(cardNumberValue.value);
  if (cardsPerPage < 1) {
    alert("Min number of per pages can be 1");
    return;
  }
  totalNumberOfCards = cardsPerPage * totalNumberOfPages;
  handleSubmitBtn();
});

function handleSubmitBtn() {
  console.log(
    `Handling submission: ${totalNumberOfCards} cards across ${totalNumberOfPages} pages.`
  );
  pageNumberValue.value = "";
  cardNumberValue.value = "";
  inputWrapper.style.display = "none";
  paginationWrapper.style.display = "block";

  // Dynamically set the pagination HTML structure
  paginationWrapper.innerHTML = `
    <div class="cards-wrapper"></div>
    <div class="btns-wrapper">
      <button class="prev">prev</button>
      <div class="page-btn"></div>
      <button class="next">next</button>
    </div>
    <div class="reset-btn">
      <button class="reset">Reset</button>
    </div>
  `;

  // Now, select the dynamically created elements
  const cardsWrapper = document.querySelector(".cards-wrapper");
  const pageBtns = document.querySelector(".page-btn");

  handlePagination(cardsWrapper, pageBtns);
}

function handlePagination(cardsWrapper, pageBtns) {
  displayCards(cardsWrapper);
  displayBtns(pageBtns);

  const cards = document.querySelectorAll(".card");
  const btns = document.querySelectorAll(".btn");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const resetBtn = document.querySelector(".reset");

  if (cards.length === 0 || btns.length === 0) {
    console.error("Cards or buttons are not created properly.");
    return;
  }

  attachEventListeners(
    cards,
    btns,
    prevBtn,
    nextBtn,
    resetBtn,
    cardsWrapper,
    pageBtns
  );
  displayCurrentPage(cards, btns, prevBtn, nextBtn);
}

function attachEventListeners(
  cards,
  btns,
  prevBtn,
  nextBtn,
  resetBtn,
  cardsWrapper,
  pageBtns
) {
  console.log("Attaching event listeners.");
  prevBtn.addEventListener("click", () => {
    if (pageNumber > 1) {
      pageNumber--;
      displayCurrentPage(cards, btns, prevBtn, nextBtn);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (pageNumber < totalNumberOfPages) {
      pageNumber++;
      displayCurrentPage(cards, btns, prevBtn, nextBtn);
    }
  });

  btns.forEach((item, index) => {
    item.addEventListener("click", () => {
      pageNumber = index + 1;
      displayCurrentPage(cards, btns, prevBtn, nextBtn);
    });
  });

  resetBtn.addEventListener("click", () => {
    handleReset(cardsWrapper, pageBtns);
  });
}

function displayCards(cardsWrapper) {
  console.log("Displaying cards.");
  cardsWrapper.innerHTML = ""; // Clear previous cards
  for (let i = 1; i <= totalNumberOfCards; i++) {
    const card = document.createElement("p");
    card.textContent = `Card ${i}`;
    card.classList.add("card", "not-active");
    cardsWrapper.appendChild(card);
  }
}

function displayBtns(pageBtns) {
  console.log("Displaying buttons.");
  pageBtns.innerHTML = ""; // Clear previous buttons
  for (let i = 1; i <= totalNumberOfPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.classList.add("btn");
    pageBtns.appendChild(btn);
  }
}

function displayCurrentPage(cards, btns, prevBtn, nextBtn) {
  console.log(`Displaying page ${pageNumber}.`);
  document.querySelectorAll(".active").forEach((item) => {
    item.classList.remove("active");
  });
  document.querySelectorAll(".color").forEach((item) => {
    item.classList.remove("color");
  });

  for (
    let i = (pageNumber - 1) * cardsPerPage;
    i < pageNumber * cardsPerPage && i < cards.length;
    i++
  ) {
    if (cards[i]) {
      cards[i].classList.add("active");
    }
  }

  if (btns[pageNumber - 1]) {
    btns[pageNumber - 1].classList.add("color");
  }
  fixBtns(prevBtn, nextBtn);
}

function fixBtns(prevBtn, nextBtn) {
  console.log(`Adjusting buttons for page ${pageNumber}.`);
  prevBtn.disabled = pageNumber === 1;
  nextBtn.disabled = pageNumber === totalNumberOfPages;
}

function handleReset(cardsWrapper, pageBtns) {
  console.log("Resetting pagination system.");
  cardsWrapper.innerHTML = "";
  pageBtns.innerHTML = "";
  pageNumber = 1;
  paginationWrapper.style.display = "none";
  inputWrapper.style.display = "flex";
}
