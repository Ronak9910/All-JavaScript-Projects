const contentWrapper = document.querySelector(".content-wrapper");
const progress = document.querySelector(".progress");

async function fetchContentFromAPI() {
  const response = await fetch("https://dummyjson.com/posts", {
    method: "GET",
  });
  const result = await response.json();
  displayResult(result.posts);
}

function displayResult(data) {
  data.forEach((item) => {
    const dataWrapper = document.createElement("div");
    dataWrapper.classList.add("data-wrapper");
    const dataTitle = document.createElement("p");
    dataTitle.classList.add("data-title");
    const dataBody = document.createElement("p");
    dataBody.classList.add("data-body");
    const dataTags = document.createElement("div");
    dataTags.classList.add("data-tags");

    dataTitle.textContent = item.title;
    dataBody.textContent = item.body;
    item.tags.forEach((tag) => {
      const setTag = document.createElement("p");
      setTag.textContent = tag;
      dataTags.appendChild(setTag);
    });
    dataWrapper.appendChild(dataTitle);
    dataWrapper.appendChild(dataBody);
    dataWrapper.appendChild(dataTags);

    contentWrapper.appendChild(dataWrapper);
  });
}

fetchContentFromAPI();

window.onscroll = function () {
  handleScroll();
};

function handleScroll() {
  const getScrollFromTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const howMuchPercentageAlreadyScrolled = (getScrollFromTop / height) * 100;

  progress.style.width = `${howMuchPercentageAlreadyScrolled}%`;
}
