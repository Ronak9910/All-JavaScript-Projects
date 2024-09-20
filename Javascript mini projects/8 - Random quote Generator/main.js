const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");
const randomBtn = document.querySelector(".btn");

async function fetchRandomQuote() {
  const randomNumber = Math.floor(Math.random() * 1454);
  const API_LINK = `https://dummyjson.com/quotes?limit=1&skip=${randomNumber}`;
  try {
    const result = await fetch(API_LINK, {
      method: "GET",
    });
    const data = await result.json();
    displayQuote(data.quotes[0]);
  } catch (error) {
    console.error("Error fetching quote:", error);
    quoteText.textContent = "Oops! Something went wrong.";
    quoteAuthor.textContent = "";
  }
}

function displayQuote(quoteData) {
  quoteText.textContent = `"${quoteData.quote}"`;
  quoteAuthor.textContent = `- ${quoteData.author}`;
}

randomBtn.addEventListener("click", fetchRandomQuote);
