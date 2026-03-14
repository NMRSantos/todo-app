export {createNote, addNoteTo, library};
import { formatDistance, subDays } from "date-fns";

const library = {
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

