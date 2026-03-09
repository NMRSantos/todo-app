import { createNote, addNoteTo } from "./logic.js";
import { displayNote, displayPage } from "./display.js";
import "./styles.css";

let testNote = createNote("testNote", "today", "red")
addNoteTo("entry", testNote)
displayNote(testNote)
displayPage()