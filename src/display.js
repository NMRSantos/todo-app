import { library } from "./logic.js";

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
  sidePanel.id = "side-panel";
  const mainPanel = document.createElement("div");
  mainPanel.className = "panel";
  mainPanel.id = "main-panel";
  
  content.appendChild(sidePanel);
  content.appendChild(mainPanel);

  for (let key in library) {
    const sidePanelSlot = document.createElement("div");
    sidePanelSlot.className = "side-panel-slot";
    sidePanelSlot.id = `${key}`;
    
    const SidePanelSlotText = document.createElement("p");
    SidePanelSlotText.className = "side-panel-slot-text";
    SidePanelSlotText.textContent = `${key}`;
    
    sidePanel.appendChild(sidePanelSlot);
    sidePanelSlot.appendChild(SidePanelSlotText);
  };

  const noteForm = document.createElement("form");
  noteForm.setAttribute('action',"submit.php");
  noteForm.setAttribute('method',"post");
  
  const noteFormInput = document.createElement("input"); //input element, text
  noteFormInput.setAttribute('type',"text");
  noteFormInput.setAttribute('name',"note-text");
  
  const noteFormDueDate = document.createElement("input");
  noteFormDueDate.setAttribute(`type`, "date");
  noteFormDueDate.setAttribute(`name`, "due-date");
  
  const noteFormPriorityLow = document.createElement("input");
  noteFormPriorityLow.setAttribute(`type`, "checkbox");
  noteFormPriorityLow.setAttribute(`value`, "low");
  noteFormPriorityLow.setAttribute(`name`, "due-date");
  noteFormPriorityLow.setAttribute(`id`, "due-date");
  const labelLow = document.createElement("label");
  labelLow.setAttribute(`for`, "id")
  labelLow.innerHTML = "Low"

  const noteFormPriorityMedium = document.createElement("input");
  noteFormPriorityMedium.setAttribute(`type`, "checkbox");
  noteFormPriorityMedium.setAttribute(`value`, "low");
  noteFormPriorityMedium.setAttribute(`name`, "due-date");
  noteFormPriorityMedium.setAttribute(`id`, "due-date");
  const labelMedium = document.createElement("label");
  labelMedium.setAttribute(`for`, "id")
  labelMedium.innerHTML = "Medium"
  
  const noteFormPriorityHigh = document.createElement("input");
  noteFormPriorityHigh.setAttribute(`type`, "checkbox");
  noteFormPriorityHigh.setAttribute(`value`, "low");
  noteFormPriorityHigh.setAttribute(`name`, "due-date");
  noteFormPriorityHigh.setAttribute(`id`, "due-date");
  const labelHigh = document.createElement("label");
  labelHigh.setAttribute(`for`, "id")
  labelHigh.innerHTML = "High"
  
  const noteFormButton = document.createElement("input");
  noteFormButton.setAttribute('type',"submit");
  noteFormButton.setAttribute('value',"Submit");
  
  noteForm.appendChild(noteFormInput);
  noteForm.appendChild(noteFormDueDate);
  noteForm.appendChild(noteFormPriorityLow);
  noteForm.appendChild(labelLow);
  noteForm.appendChild(noteFormPriorityMedium)
  noteForm.appendChild(labelMedium);
  noteForm.appendChild(noteFormPriorityHigh)
  noteForm.appendChild(labelHigh);
  noteForm.appendChild(noteFormButton);
  
  mainPanel.appendChild(noteForm);
};