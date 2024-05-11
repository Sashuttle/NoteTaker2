//Note: Express router instance and importing apiRoutes module
const router = require("express").Router();
const notes = require("../../db/db.json");
const {verifyNote, createNote, deleteNote} = require("../../lib/notes.js");

//Note:GET route to fetch all the notes
router.get("/notes", (req, res) => {
    res.json(notes);
});

//Note: POST route to create a new note, use verification function, and create new note to add to the array
router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();
    if (!verifyNote(req.body)) {
        res.status(400).send("Please verify your note format is correct!");
    } else {
        const newNote = createNote(req.body, notes);
        res.json(newNote);
    }
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    deleteNote(id, notes);
    res.json({});
    console.log(id);
});

//Note: Exporting configured router to be used in other parts of this application
module.exports = router;