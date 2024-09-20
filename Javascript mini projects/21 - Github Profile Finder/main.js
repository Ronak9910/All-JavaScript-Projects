const searchBtn = document.querySelector(".btn");
const getUserName = document.querySelector(".username");
const profileWrapper = document.querySelector(".profile-details");
const loading = document.querySelector(".loading");
const API_LINK = "https://api.github.com/users/";

function showLoader() {
  loading.style.display = "block";
}
function closeLoader() {
  loading.style.display = "none";
}

async function fetchDataFromAPI(username) {
  profileWrapper.innerHTML = "";
  showLoader();
  try {
    const response = await fetch(`${API_LINK}${username}`, {
      method: "GET",
    });
    const result = await response.json();

    const { login, avatar_url, public_repos, followers, following, html_url } =
      result;
    closeLoader();
    if (!login) {
      throw new Error("Enter correct username");
    }
    profileWrapper.innerHTML = `
    <a href = "${html_url}">
    <h2>${login}</h2>
    </a>
    <img src="${avatar_url}" alt="User avatar" />
    <p>Total repos: ${public_repos}</p>
    <p>Followers: ${followers}</p>
    <p>Following: ${following}</p>
`;
  } catch (error) {
    alert(error);
  }
}

searchBtn.addEventListener("click", () => {
  fetchDataFromAPI(getUserName.value);
});
