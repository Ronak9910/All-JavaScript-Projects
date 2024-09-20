let getItems = document.querySelector(".get-items");
let link = "https://json-placeholder.mock.beeceptor.com/posts";

//Using XHR Method
function usingXHRmethod() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", link);
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      displayMethod(xhr.response);
    } else {
      console.log("Error in XHR method");
    }
  };
}

// usingXHRmethod();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Using Fetch Method

function usingFetchMethod() {
  const fetchRequest = fetch(link, {
    method: "GET",
  });
  fetchRequest
    .then((response) => response.json())
    .then((response) => displayMethod(response))
    .catch((error) => console.log("Error in fetch method:", error));
}

// usingFetchMethod();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Using async await Method

async function usingAsyncAwaitMethod() {
  try {
    const fetchRequest = await fetch(link, {
      method: "GET",
    });
    const data = await fetchRequest.json();
    displayMethod(data);
  } catch (error) {
    console.log("Error in async await method:- ", error);
  }
}

// usingAsyncAwaitMethod();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Using XHR and async await Method

function helperMethod(getLink, Method) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(Method, getLink);
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject("Error in XHR and async await method");
      }
    };
  });
  return promise;
}

async function usingXHRAsyncAwaitMethod() {
  try {
    const getData = await helperMethod(link, "GET");
    displayMethod(getData);
  } catch (error) {
    console.log(error);
  }
}

usingXHRAsyncAwaitMethod();

function displayMethod(result) {
  getItems.innerHTML = result
    .map((item) => {
      return `
              <div class="item">
                <h3>${item.title}</h3>
                <p>${item.body}</p>
              </div>
          `;
    })
    .join(" ");
}
