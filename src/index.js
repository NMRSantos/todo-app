import { createNote, addNoteTo } from "./logic.js";
import { displayNote, displayPage } from "./display.js";
import "./styles.css";

let testNote = createNote("newNote", "testNote", "today", "red")
addNoteTo("fleeting", testNote)
displayNote(testNote)
displayPage()