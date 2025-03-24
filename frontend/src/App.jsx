import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://your-backend.onrender.com";

function App() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("");

    useEffect(() => {
        axios.get(`${API_URL}/notes`).then(res => setNotes(res.data));
    }, []);

    const addNote = () => {
        axios.post(`${API_URL}/notes`, { text: newNote }).then(res => {
            setNotes([...notes, res.data]);
            setNewNote("");
        });
    };

    const deleteNote = (id) => {
        axios.delete(`${API_URL}/notes/${id}`).then(() => {
            setNotes(notes.filter(note => note.id !== id));
        });
    };

    return (
        <div>
            <h1>Quick Notes</h1>
            <input 
                value={newNote} 
                onChange={(e) => setNewNote(e.target.value)} 
                placeholder="Type a note..."
            />
            <button onClick={addNote}>Add</button>
            <ul>
                {notes.map(note => (
                    <li key={note.id}>
                        {note.text} 
                        <button onClick={() => deleteNote(note.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
