import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

const NOTES_FILE = "notes.json";

// Load notes from file
const loadNotes = () => {
    if (fs.existsSync(NOTES_FILE)) {
        return JSON.parse(fs.readFileSync(NOTES_FILE));
    }
    return [];
};

// Save notes to file
const saveNotes = (notes) => {
    fs.writeFileSync(NOTES_FILE, JSON.stringify(notes, null, 2));
};

// Get all notes
app.get("/notes", (req, res) => {
    res.json(loadNotes());
}
