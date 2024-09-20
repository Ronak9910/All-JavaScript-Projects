const inputText = document.querySelector(".input-text");
const addBtn = document.querySelector(".add-btn");
const errorMessage = document.querySelector(".error-container");
const sameMessage = document.querySelector(".same-container");
const listContainer = document.querySelector(".list-container");

let currentEdit = null;

function displayCurrentNote(note) {
  const noteContainer = document.createElement("div");
  noteContainer.classList.add("item");

  const noteText = document.createElement("p");
  noteText.classList.add("note-text");
  noteText.innerText = note;

  const editBtn = document.createElement("button");
  editBtn.classList.add("note-edit-btn");
  editBtn.innerText = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("note-delete-btn");
  deleteBtn.innerText = "Delete";

  noteContainer.appendChild(noteText);
  noteContainer.appendChild(editBtn);
  noteContainer.appendChild(deleteBtn);

  listContainer.appendChild(noteContainer);
}

function showItemAfterReload() {
  let input;
  if (localStorage.getItem("notes") === null) {
    input = [];
  } else {
    input = JSON.parse(localStorage.getItem("notes"));
  }
  input.forEach((item) => {
    displayCurrentNote(item);
  });
}

function addToStorage(currentNote) {
  let input;
  if (localStorage.getItem("notes") === null) {
    input = [];
  } else {
    input = JSON.parse(localStorage.getItem("notes"));
  }
  input.push(currentNote);
  localStorage.setItem("notes", JSON.stringify(input));
}

function updateTheDetails(currentNote) {
  //update details
  let input;
  if (localStorage.getItem("notes") === null) {
    input = [];
  } else {
    input = JSON.parse(localStorage.getItem("notes"));
  }
  const getIndex = input.indexOf(currentEdit.children[0].innerText);
  input[getIndex] = currentNote;
  localStorage.setItem("notes", JSON.stringify(input));
  currentEdit.children[0].innerText = currentNote;

  //update button
  addBtn.innerText = "Add Note";
}

function removeErrorMessages() {
  sameMessage.style.display = "none";
  errorMessage.style.display = "none";
}

function checkForMessage(currentNote) {
  removeErrorMessages();
  if (currentNote.length <= 0) {
    errorMessage.style.display = "block";
    return true;
  }
  let input;
  if (localStorage.getItem("notes") === null) {
    input = [];
  } else {
    input = JSON.parse(localStorage.getItem("notes"));
  }
  if (input.indexOf(currentNote) !== -1) {
    sameMessage.style.display = "block";
    return true;
  }
  return false;
}

function addNewNote() {
  const currentNote = inputText.value.trim();
  inputText.value = "";
  if (checkForMessage(currentNote)) {
    addBtn.innerText = "Add Note";
    return false;
  }
  if (addBtn.innerText === "Edit Note") {
    updateTheDetails(currentNote);
    return;
  } else {
    displayCurrentNote(currentNote);
    addToStorage(currentNote);
  }
}

function deleteHandle(noteContainer) {
  let input;
  if (localStorage.getItem("notes") === null) {
    input = [];
  } else {
    input = JSON.parse(localStorage.getItem("notes"));
  }
  const getIndex = input.indexOf(noteContainer.children[0].innerHTML);
  input.splice(getIndex, 1);
  localStorage.setItem("notes", JSON.stringify(input));
}

function editOrDeleteHandle(event) {
  if (event.target.innerHTML === "Edit") {
    currentEdit = event.target.parentElement;
    addBtn.innerText = "Edit Note";
    inputText.value = currentEdit.children[0].innerHTML;
    inputText.focus();
    removeErrorMessages();
  } else if (event.target.innerHTML === "Delete") {
    removeErrorMessages();
    listContainer.removeChild(event.target.parentElement);
    deleteHandle(event.target.parentElement);
  }
}

addBtn.addEventListener("click", addNewNote);
document.addEventListener("DOMContentLoaded", showItemAfterReload);
listContainer.addEventListener("click", editOrDeleteHandle);
inputText.addEventListener("click", removeErrorMessages);
