export {createNote, addNoteTo}

const library = {
  fleeting: [],
  thrash: [],
};

function createNote(noteName, noteDescription, noteDueDate, notePriority) {
  const name = noteName;
  const description = noteDescription;
  const dueDate = noteDueDate;
  const priority = notePriority;

  return {
    name,
    description,
    dueDate,
    priority,
  };
};

// function addNoteTo(note) {};

// function removeNoteFrom(note) {}

// addNoteTo.library = function (note) {
//   library.push(note);
//   console.log(library);
// };

// removeNoteFrom.library = function (note) {
//   library.pop(note);
//   console.log(library);
// };

function addNoteTo(listName, note) {
  if (library[listName]) {
    library[listName].push(note);
  }
    console.log(library[listName]);
}