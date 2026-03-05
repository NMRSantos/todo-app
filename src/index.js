import { createNote, addToLibrary } from "./logic.js";
import { displayNote } from "./display.js";

let testNote = createNote("newNote", "testNote", "today", "red")
addToLibrary(testNote)
displayNote(testNote)