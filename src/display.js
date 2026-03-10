import { library } from "./logic.js";
import { createElement } from "./helper.js";

export {displayNote, displayPage}

function displayNote(note) {
  console.log(note.description);
  console.log(note.dueDate);
  console.log(note.priority);
};

function displayPage() {
  const content = document.getElementById("content");
  
  (function renderSidePanel() {
    const sidePanel = createElement("div", "panel", "side-panel");
    content.appendChild(sidePanel);

    for (let key in library) {
      const sidePanelSlot = createElement("div", "side-panel-slot", `${key}`);
      
      const SidePanelSlotText = createElement("p", "side-panel-slot-text", "");
      SidePanelSlotText.textContent = `${key}`;
      
      sidePanel.appendChild(sidePanelSlot);
      sidePanelSlot.appendChild(SidePanelSlotText);
    };
  })();
  
  (function renderMainPanel() {
    const mainPanel = createElement("div", "panel", "main-panel");
    content.appendChild(mainPanel);

    (function renderForm() {
      const noteForm = createElement("form", "form", "form");
      
      const noteFormInput = createElement("input", "input", "note-text-input");
      noteFormInput.setAttribute('type',"text");
      noteFormInput.setAttribute('name',"text-imput");
      
      const noteFormDueDate = createElement("input", "input", "note-due-date");
      noteFormDueDate.setAttribute(`type`, "date");
      noteFormDueDate.setAttribute(`name`, "due-date");
      const labelDueDate = createElement("label", "input-label", "note-label-due-date");
      labelDueDate.setAttribute(`for`, "note-due-date");
      labelDueDate.textContent = "Due Date";
      
      const noteFormPriorityLow = createElement("input", "input", "note-priority-low");
      noteFormPriorityLow.setAttribute(`type`, "radio");
      noteFormPriorityLow.setAttribute(`value`, "low");
      noteFormPriorityLow.setAttribute(`name`, "priority");
      const labelLow = createElement("label", "input-label", "note-priority-low");
      labelLow.setAttribute(`for`, "note-priority-low");
      labelLow.textContent = "Low";
      
      const noteFormPriorityMedium = createElement("input", "input", "note-priority-medium");
      noteFormPriorityMedium.setAttribute(`type`, "radio");
      noteFormPriorityMedium.setAttribute(`value`, "medium");
      noteFormPriorityMedium.setAttribute(`name`, "priority");
      const labelMedium = createElement("label", "input-label", "note-label-medium");
      labelMedium.setAttribute(`for`, "note-priority-medium");
      labelMedium.textContent = "Medium";
      
      const noteFormPriorityHigh = createElement("input", "input", "note-priority-high");
      noteFormPriorityHigh.setAttribute(`type`, "radio");
      noteFormPriorityHigh.setAttribute(`value`, "high");
      noteFormPriorityHigh.setAttribute(`name`, "priority");
      const labelHigh = createElement("label", "input-label", "note-label-high");
      labelHigh.setAttribute(`for`, "note-priority-high");
      labelHigh.textContent = "High";
      
      const noteFormButton = createElement("input", "input", "note-button");
      noteFormButton.setAttribute('type',"button");
      noteFormButton.setAttribute('value',"Submit");
      
      noteForm.appendChild(noteFormInput);
      noteForm.appendChild(noteFormDueDate);
      noteForm.appendChild(labelDueDate);
      noteForm.appendChild(noteFormPriorityLow);
      noteForm.appendChild(labelLow);
      noteForm.appendChild(noteFormPriorityMedium)
      noteForm.appendChild(labelMedium);
      noteForm.appendChild(noteFormPriorityHigh)
      noteForm.appendChild(labelHigh);
      noteForm.appendChild(noteFormButton);
      
      mainPanel.appendChild(noteForm);

      (function submitBtn() {
        noteFormButton.addEventListener("click", function() {
          const selectedPriority = document.querySelector('input[name="priority"]:checked');

          if(noteFormInput.value !== "" && noteFormDueDate.value !== "" && selectedPriority) {

            const userNote = createElement("div", "user-note", "");
            const userNoteText = createElement("p", "", "");
            userNoteText.textContent = noteFormInput.value;
            const userNoteDueDate = createElement("p", "", "");
            userNoteDueDate.textContent = noteFormDueDate.value;
            
            mainPanel.appendChild(userNote);
            userNote.appendChild(userNoteText);
            userNote.appendChild(userNoteDueDate);
        
            let userPriority;
        
            if(selectedPriority) {
              userPriority = selectedPriority.value;
            } else {
              userPriority = "";
            };
        
            if (userPriority) {
              const priorityElement = createElement("p", "", "");
              priorityElement.textContent = userPriority.charAt(0).toUpperCase() + userPriority.slice(1);
              userNote.appendChild(priorityElement);
            };
          } else return;
        });
      })();
    })();
  })();
};