import { addNoteTo, createNote, library } from "./logic.js";
import { createElement, setRadioAtributes } from "./helper.js";

export {displayPage}


let mainPanel, noteForm, noteDisplayer;

function displayPage() {
  const content = document.getElementById("content");
  
  renderSidePanel(content);
  renderMainPanel(content);
  renderForm();
};

function renderMainPanel(content) {
  mainPanel = createElement("div", "panel", "main-panel");
  noteDisplayer = createElement("div", "note-displayer", "note-displayer");
  content.appendChild(mainPanel);  
  mainPanel.appendChild(noteDisplayer);
};

function renderSidePanel(content) {
  const sidePanel = createElement("div", "panel", "side-panel");
  content.appendChild(sidePanel);
  
  for (let key in library) {
    const sidePanelSlot = createElement("div", "side-panel-slot", `${key}`);
    
    const SidePanelSlotText = createElement("p", "side-panel-slot-text", "");
    SidePanelSlotText.textContent = `${key}`;
    
    sidePanel.appendChild(sidePanelSlot);
    sidePanelSlot.appendChild(SidePanelSlotText);

    sidePanelSlot.addEventListener("click", function() {
      displayNote(key);
    });
  };
};

function renderForm() {
  noteForm = createElement("form", "form", "form");
  
  const noteFormInput = createElement("input", "input", "note-text-input");
  noteFormInput.setAttribute('type',"text");
  noteFormInput.setAttribute('name',"text-input");
  
  const noteFormDueDate = createElement("input", "input", "note-due-date");
  noteFormDueDate.setAttribute(`type`, "date");
  noteFormDueDate.setAttribute(`name`, "due-date");
  const labelDueDate = createElement("label", "input-label", "note-label-due-date");
  labelDueDate.setAttribute(`for`, "note-due-date");
  labelDueDate.textContent = "Due Date";
  
  const noteFormCategoryEntry = createElement("input", "input", "note-category-entry");
  setRadioAtributes(noteFormCategoryEntry, "entry", "category");
  const labelEntry = createElement("label", "input-label", "note-label-entry");
  labelEntry.setAttribute(`for`, "note-category-entry");
  labelEntry.textContent = "Entry";
  
  const noteFormCategoryImportant = createElement("input", "input", "note-category-important");
  setRadioAtributes(noteFormCategoryImportant, "important", "category");
  const labelImportant = createElement("label", "input-label", "note-label-important");
  labelImportant.setAttribute(`for`, "note-category-important");
  labelImportant.textContent = "Important";

  const noteFormPriorityLow = createElement("input", "input", "note-priority-low");
  setRadioAtributes(noteFormPriorityLow, "low", "priority");
  const labelLow = createElement("label", "input-label", "note-priority-low");
  labelLow.setAttribute(`for`, "note-priority-low");
  labelLow.textContent = "Low";
  
  const noteFormPriorityMedium = createElement("input", "input", "note-priority-medium");
  setRadioAtributes(noteFormPriorityMedium, "medium", "priority");
  const labelMedium = createElement("label", "input-label", "note-label-medium");
  labelMedium.setAttribute(`for`, "note-priority-medium");
  labelMedium.textContent = "Medium";
  
  const noteFormPriorityHigh = createElement("input", "input", "note-priority-high");
  setRadioAtributes(noteFormPriorityHigh, "high", "priority");
  const labelHigh = createElement("label", "input-label", "note-label-high");
  labelHigh.setAttribute(`for`, "note-priority-high");
  labelHigh.textContent = "High";
  
  const noteFormButton = createElement("input", "input", "note-button");
  noteFormButton.setAttribute('type',"button");
  noteFormButton.setAttribute('value',"Submit");
  
  noteForm.appendChild(noteFormInput);
  noteForm.appendChild(noteFormDueDate);
  noteForm.appendChild(labelDueDate);
  noteForm.appendChild(noteFormCategoryEntry);
  noteForm.appendChild(labelEntry);
  noteForm.appendChild(noteFormCategoryImportant);
  noteForm.appendChild(labelImportant);
  noteForm.appendChild(noteFormPriorityLow);
  noteForm.appendChild(labelLow);
  noteForm.appendChild(noteFormPriorityMedium)
  noteForm.appendChild(labelMedium);
  noteForm.appendChild(noteFormPriorityHigh)
  noteForm.appendChild(labelHigh);
  noteForm.appendChild(noteFormButton);
  
  mainPanel.insertBefore(noteForm, noteDisplayer);
  
  noteFormButton.addEventListener("click", function() {
    const noteText = noteFormInput.value;
    const noteDueDate = noteFormDueDate.value;
    const noteElementCategory = document.querySelector(`input[name="category"]:checked`);
    const noteElementPriority = document.querySelector(`input[name="priority"]:checked`);
    if(noteText && noteDueDate && noteElementCategory && noteElementPriority) {
      const noteNotCapitalizedCategory = noteElementCategory.value;
      const noteCategory = noteNotCapitalizedCategory.charAt(0).toUpperCase() + noteNotCapitalizedCategory.slice(1);
      const noteNotCapitalizedPriority = noteElementPriority.value;
      const notePriority = noteNotCapitalizedPriority.charAt(0).toUpperCase() + noteNotCapitalizedPriority.slice(1);
      const note = createNote(noteText, noteDueDate, noteCategory, notePriority);

      addNoteTo(noteNotCapitalizedCategory, note);
      noteForm.reset();
      displayNote(noteNotCapitalizedCategory);

      return
    } else return
  });
};

function displayNote(listName) {
  noteDisplayer.innerHTML = "";
  console.log(library);
  library[listName].forEach(element => {
    const note = createElement("p", "note", ``);
    note.innerText = `${element.description} // ${element.dueDate} // ${element.category} // ${element.priority}`;
    noteDisplayer.appendChild(note);
  });
};