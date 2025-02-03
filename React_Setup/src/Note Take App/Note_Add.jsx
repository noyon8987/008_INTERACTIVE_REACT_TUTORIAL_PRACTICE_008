import React, { useState } from "react";

export default function Note_Add() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([
    { id: 1, title: "Note-01" },
    { id: 2, title: "Note-02" },
  ]);

  function noteChangeHandler(e) {
    setNoteTitle(e.target.value);
  }

  function noteSubmitHandler(e) {
    e.preventDefault();
    if (noteTitle.trim() === "") {
      return alert(`Please write a valid note`);
    }
    const newNote = {
      id: Date.now() + "",
      title: noteTitle,
    };
    setNotes([...notes, newNote]);
    setNoteTitle("");
  }

  function removeNoteHandler(noteId) {
    const updateNotes = notes.filter((item) => item.id !== noteId);
    setNotes(updateNotes);
  }

  return (
    <div className="input-note">
      <form onSubmit={noteSubmitHandler}>
        <h2>Write Your Notes</h2>
        <input type="text" value={noteTitle} onChange={noteChangeHandler} />
        <button type="submit">Add Note</button>
      </form>
      <br />
      <div className="note-list">
        <h2>All Notes</h2>
        <br />
        <ul>
          {notes.map((note) => (
            <>
              <li>
                <span>{note.title}</span>
                <button>Edit</button>
                <button onClick={() => removeNoteHandler(note.id)}>
                  Delete
                </button>
              </li>
              <br />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
