const cardContainer = document.querySelector(".card-container");
const loadBtn = document.querySelector(".btn");
let numberOfProducts = 0;

async function fetchProductsFromAPI() {
  const API_LINK = `https://dummyjson.com/products?limit=10&skip=${numberOfProducts}`;
  try {
    const result = await fetch(API_LINK, { method: "GET" });
    const productResults = await result.json();
    if (productResults && productResults.products)
      display(productResults.products);
  } catch (error) {
    console.log(error);
  }
}

function display(products) {
  // Append new products instead of replacing existing ones
  if (numberOfProducts === 90) {
    loadBtn.setAttribute("disabled", "true");
  }
  cardContainer.innerHTML += products
    .map((item, index) => {
      return `
        <div class="card">
          <img src="${item.thumbnail}" alt="${item.title}" />
          <h3>${item.title}</h3>
          <h4>$${item.price}</h4>
          <p>${item.description}</p>
        </div>`;
    })
    .join("");
}

fetchProductsFromAPI();

loadBtn.addEventListener("click", () => {
  numberOfProducts += 10; // Load more products
  fetchProductsFromAPI();
});
