//Note: Importing file system module & import path module to work with my file and directory paths
if (typeof require !== 'undefined') {
    const fs = require("fs");
    const path = require("path");
    
    //Note: Verifying the validity of note objects & checking if title and body are not empty
    function verifyNote(note) {
        if (!note.title || typeof note.title !== "string") {
            return false;
        }
        if (!note.text || typeof note.text !== "string") {
            return false;
        }
        return true;
    }
    
    //Note: Function to create a new note and update the notes array
    function createNote (body, notesArray) {
        const note = body;
        notesArray.push(note);
        fs.writeFileSync(
            path.join(__dirname, "../db/db.json"),
            JSON.stringify(notesArray, null, 2)
        );
        return note;
    }

    //Note: Function to delete note
    function deleteNote(idToRemove, array) {
        const index = array.findIndex(obj => obj.id === idToRemove);
        if (index !== -1) {
            array.splice(index, 1);
        }
        fs.writeFileSync(
            path.join(__dirname, "../db/db.json"),
            JSON.stringify(array, null, 2)
        );
    }
    
    //Note: Exporting the functions to be used in other parts of the application
    module.exports = { verifyNote, createNote, deleteNote };
    }