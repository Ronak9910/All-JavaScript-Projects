const filterBtns = document.querySelector(".filter-btn-wrapper");
const cards = document.querySelector(".cards");

const btns = ["All", "Men", "Women", "Kids", "Accessories", "Footwear", "Sale"];
const cardsData = [
  { id: "Men", label: "Men's Formal Shirt" },
  { id: "Men", label: "Men's Casual T-Shirt" },
  { id: "Men", label: "Men's Leather Jacket" },
  { id: "Men", label: "Men's Jeans" },
  { id: "Men", label: "Men's Sneakers" },
  { id: "Men", label: "Men's Sunglasses" },
  { id: "Men", label: "Men's Watch" },
  { id: "Women", label: "Women's Summer Dress" },
  { id: "Women", label: "Women's Winter Coat" },
  { id: "Women", label: "Women's Handbag" },
  { id: "Women", label: "Women's Flats" },
  { id: "Women", label: "Women's Jewelry Set" },
  { id: "Women", label: "Women's Scarf" },
  { id: "Women", label: "Women's Sportswear" },
  { id: "Kids", label: "Kids' Toy Car" },
  { id: "Kids", label: "Kids' Backpack" },
  { id: "Kids", label: "Kids' T-Shirt" },
  { id: "Kids", label: "Kids' Sneakers" },
  { id: "Kids", label: "Kids' Cap" },
  { id: "Kids", label: "Kids' Lunch Box" },
  { id: "Accessories", label: "Leather Belt" },
  { id: "Accessories", label: "Sunglasses" },
  { id: "Accessories", label: "Wristwatch" },
  { id: "Accessories", label: "Wallet" },
  { id: "Accessories", label: "Necklace" },
  { id: "Accessories", label: "Backpack" },
  { id: "Footwear", label: "Running Shoes" },
  { id: "Footwear", label: "Heels" },
  { id: "Footwear", label: "Boots" },
  { id: "Footwear", label: "Sandals" },
  { id: "Footwear", label: "Sneakers" },
  { id: "Footwear", label: "Slippers" },
  { id: "Sale", label: "50% Off Men's Jacket" },
  { id: "Sale", label: "Buy 1 Get 1 Women's Dress" },
  { id: "Sale", label: "Kids' Toys 30% Off" },
  { id: "Sale", label: "Footwear Discount 40%" },
  { id: "Sale", label: "Accessories Clearance Sale" },
];

// Display buttons using DocumentFragment for better performance
function displayBtns() {
  const fragment = document.createDocumentFragment();
  btns.forEach((item) => {
    const currBtn = document.createElement("button");
    currBtn.innerText = item;
    currBtn.classList.add("btn");
    currBtn.setAttribute("data-id", item.toLowerCase());
    fragment.appendChild(currBtn);
  });
  filterBtns.appendChild(fragment);
}

// Display cards using DocumentFragment
function displayCards() {
  const fragment = document.createDocumentFragment();
  cardsData.forEach((item) => {
    const currCard = document.createElement("div");
    currCard.innerText = item.label;
    currCard.classList.add("card", item.id.toLowerCase());
    fragment.appendChild(currCard);
  });
  cards.appendChild(fragment);
}

displayBtns();
displayCards();

// Add listeners to filter buttons
function addFilterButtonListeners() {
  const filterByBtns = document.querySelectorAll(".btn");
  const filteredCards = document.querySelectorAll(".card");

  filterByBtns.forEach((item) => {
    item.addEventListener("click", () => {
      displayFilterData(item.dataset.id, filteredCards);
      // Highlight the selected button
      filterByBtns.forEach((btn) => btn.classList.remove("active"));
      item.classList.add("active");
    });
  });
}

// Display filtered cards based on category
function displayFilterData(category, filteredCards) {
  if (category === "all") {
    filteredCards.forEach((card) => card.classList.remove("hide"));
  } else {
    filteredCards.forEach((card) => {
      card.classList.toggle("hide", !card.classList.contains(category));
    });
  }
}

// Set "All" as default filter and highlight its button
document.querySelector('.btn[data-id="all"]').classList.add("active");

addFilterButtonListeners();
