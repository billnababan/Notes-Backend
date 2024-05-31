const express = require("express");
const { getNotes, addNotes, updateNotes, deleteNotes, getNotesById } = require("../controller/Notes");

const routeNotes = express.Router();
routeNotes.get("/notes", getNotes);
routeNotes.get("/notes/:id", getNotesById);
routeNotes.post("/notes", addNotes);
routeNotes.put("/notes/:id", updateNotes);
routeNotes.delete("/notes/:id", deleteNotes);

module.exports = routeNotes;
