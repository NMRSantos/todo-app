export {createNote, addNoteTo, library, setStorage, getStorage};

let library = {
  entry: [],
  important: [],
};


function createNote(noteText, noteDueDate, noteCategory, notePriority) {
  const description = noteText;
  const dueDate = noteDueDate;
  const category = noteCategory;
  const priority = notePriority;
  
  return {
    description,
    dueDate,
    category,
    priority,
  };
};

function addNoteTo(listName, note) {
  if (library[listName]) {
    library[listName].push(note);
  };
};

function setStorage() {
  localStorage.setItem("library-storage", JSON.stringify(library));
};

function getStorage() {
  library = JSON.parse(localStorage.getItem("library-storage"));
};