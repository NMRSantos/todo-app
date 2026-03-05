export {displayNote, displayPage}

function displayNote(note) {
  console.log(note.name);
  console.log(note.description);
  console.log(note.dueDate);
  console.log(note.priority);
};

function displayPage() {
  const content = document.getElementById("content");
  
  const sidePanel = document.createElement("div");
  sidePanel.className = "panel";
  sidePanel.id = "test";
  const mainPanel = document.createElement("div");
  mainPanel.className = "panel";
  
  content.appendChild(sidePanel)
  content.appendChild(mainPanel)
};