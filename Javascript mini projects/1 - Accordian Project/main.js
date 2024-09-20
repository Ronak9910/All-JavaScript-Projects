const data = [
  {
    id: "1",
    question: "What is Machine Learning?",
    answer:
      "Machine Learning is a subset of artificial intelligence (AI) that involves training algorithms to learn patterns from data and make decisions or predictions based on that data.",
  },
  {
    id: "2",
    question: "What is supervised learning?",
    answer:
      "Supervised learning is a type of machine learning where the model is trained on labeled data, meaning that the input data is paired with the correct output. The model learns to predict the output from the input data.",
  },
  {
    id: "3",
    question: "What is a neural network?",
    answer:
      "A neural network is a series of algorithms that attempt to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates.",
  },
  {
    id: "4",
    question: "What is a web framework?",
    answer:
      "A web framework is a software framework designed to aid the development of web applications including web services, web resources, and web APIs. Examples include React, Angular, and Django.",
  },
  {
    id: "5",
    question: "What is responsive design?",
    answer:
      "Responsive design is an approach to web design that ensures a website looks good and functions well on devices of all sizes, from desktop computers to mobile phones. It involves flexible grids, layouts, and media queries.",
  },
  {
    id: "6",
    question: "What is Progressive Web App (PWA)?",
    answer:
      "A Progressive Web App is a type of application software delivered through the web, built using common web technologies including HTML, CSS, and JavaScript, and intended to work on any platform that uses a standards-compliant browser.",
  },
  {
    id: "7",
    question: "What is a native mobile app?",
    answer:
      "A native mobile app is a software application developed specifically for a particular mobile operating system, such as iOS or Android, using the platform’s native programming language and tools.",
  },
  {
    id: "8",
    question: "What is cross-platform mobile development?",
    answer:
      "Cross-platform mobile development is the process of building mobile applications that can run on multiple operating systems, such as iOS and Android, using a single codebase. Frameworks like Flutter and React Native are commonly used.",
  },
  {
    id: "9",
    question: "What is an API?",
    answer:
      "An API (Application Programming Interface) is a set of rules and tools for building software applications. It defines the methods and data formats that applications can use to communicate with each other.",
  },
  {
    id: "10",
    question: "What is DevOps?",
    answer:
      "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). The goal is to shorten the development lifecycle and deliver high-quality software continuously through automation and collaboration.",
  },
  {
    id: "11",
    question: "What is continuous integration?",
    answer:
      "Continuous integration (CI) is a development practice where code changes are automatically tested and integrated into the shared codebase frequently. This helps to identify issues early and ensure the software remains reliable.",
  },
  {
    id: "12",
    question: "What is version control?",
    answer:
      "Version control is a system that tracks changes to files or code over time, allowing multiple people to collaborate on a project. Tools like Git and SVN are commonly used for version control.",
  },
];

let setItems = document.querySelector(".accordian");
function generateAccordianItem() {
  setItems.innerHTML = data
    .map((itemSet) => {
      return `
      <div class = "item">
        <div class = "itemTitle">
          <h3>${itemSet.question}</h3>
          <i class="fas fa-arrow-down"></i>
        </div>
        <div class = "itemContent">
          <p>${itemSet.answer}</p>
        </div>
      </div>
    `;
    })
    .join(" ");
}
generateAccordianItem();
let getAllTitle = document.querySelectorAll(".itemTitle");
getAllTitle.forEach((currentItem) => {
  currentItem.addEventListener("click", function () {
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      let allActiveClassItem = document.querySelectorAll(".active");
      allActiveClassItem.forEach((currentActiveItem) => {
        currentActiveItem.classList.remove("active");
      });
      currentItem.classList.add("active");
    }
  });
});
