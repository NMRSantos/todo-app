export {createNote, addNoteTo, library};

const library = {
  entry: [],
  today: [],
  soon: [],
};


function createNote(noteDescription, noteDueDate, notePriority) {
  const description = noteDescription;
  const dueDate = noteDueDate;
  const priority = notePriority;
  
  return {
    description,
    dueDate,
    priority,
  };
};

function addNoteTo(listName, note) {
  if (library[listName]) {
    library[listName].push(note);
  };
  console.log(library[listName]);
};

localStorage.setItem("noteGroups", "library");