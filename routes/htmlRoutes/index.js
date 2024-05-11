//Note: Required connections for html
const path = require("path");
const router = require("express").Router();

//Note: Serve the homepage from public directory
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

//Note: serve the notes page from public directory
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

//Note: Exporting configured router to be used in other parts of this application
module.exports = router;