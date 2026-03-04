export {createNote}
  
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