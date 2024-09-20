const navBar = document.querySelector(".nav-bar");
const heightAboveNavBar = navBar.offsetTop;

window.onscroll = function () {
  handleScroll();
};

function handleScroll() {
  if (window.scrollY >= heightAboveNavBar) navBar.classList.add("fixed-navBar");
  else navBar.classList.remove("fixed-navBar");
}
