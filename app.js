const title = document.getElementById("title");
const text = document.getElementById("text");
const add = document.getElementById("add");
const storeNotes = document.getElementById("store-notes");
// let notes = [];
showNotes();

const dltAll = document.getElementById("dltAll");
dltAll.addEventListener("click", () => {
  localStorage.clear();
  storeNotes.innerHTML = "";
});

function deleteNote(ind) {
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    return;
  } else {
    notes = JSON.parse(notes);
  }
  notes.splice(ind, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

function addNotes() {
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notes = [];
  } else {
    notes = JSON.parse(notes);
  }

  if (title.value === "" || text.value === "") {
    return;
  }
  const notesObj = {
    title: title.value,
    text: text.value,
  };
  notes.push(notesObj);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

function showNotes() {
  let note = "";
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    return;
  } else {
    notes = JSON.parse(notes);
  }
  for (let i = 0; i < notes.length; i++) {
    note += `
    <div class="newNote">
    <div class="ntitle">${notes[i].title}</div>
    <div class="ntext">${notes[i].text}</div>
    <button class="deleteBtn" id="${i}" onclick="deleteNote(${i})">Delete</button>
    </div>
    `;
  }
  storeNotes.innerHTML = note;
  title.value = "";
  text.value = "";
}

add.addEventListener("click", addNotes);
