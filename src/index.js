import { createNote } from "./logic.js";
import { displayNote } from "./display.js";

let testNote = createNote("newNote", "testNote", "today", "red")
displayNote(testNote)