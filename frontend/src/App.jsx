import { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get("https://your-backend-url.onrender.com/notes")
      .then(res => setNotes(res.data));
  }, []);

  const addNote = async () => {
    const res = await axios.post("https://your-backend-url.onrender.com/notes", { text });
    setNotes([...notes, res.data]);
    setText("");
  };

  return (
    <div>
      <h1>Markdown Notes</h1>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addNote}>Save</button>
      {notes.map((note, index) => (
        <div key={index}>
          <ReactMarkdown>{note.text}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
}

export default App;
