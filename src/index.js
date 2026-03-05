import { createNote, addNoteTo } from "./logic.js";
import { displayNote } from "./display.js";

let testNote = createNote("newNote", "testNote", "today", "red")
addNoteTo("fleeting", testNote)
displayNote(testNote)