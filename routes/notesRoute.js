const express = require("express");
const {
  getNotes,
  addNote,
  deleteNote,
} = require("../controller/notesController");

const router = express.Router();

router.get("/", getNotes);
router.post("/", addNote);
router.delete("/:id", deleteNote);

module.exports = router;
