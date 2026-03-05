export {createNote, addToLibrary}

const noteLibrary = [];

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

function addToLibrary(note) {
  noteLibrary.push(note);
  console.log(noteLibrary)
}