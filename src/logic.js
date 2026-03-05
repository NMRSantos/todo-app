export {createNote, addNoteTo}

const library = {
  entry: [],
  today: [],
  soon: [],
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

function addNoteTo(listName, note) {
  if (library[listName]) {
    library[listName].push(note);
  }
    console.log(library[listName]);
}