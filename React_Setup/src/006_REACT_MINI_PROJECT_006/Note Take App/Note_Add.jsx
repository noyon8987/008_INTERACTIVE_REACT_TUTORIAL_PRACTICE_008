import React, { useState } from "react";

export default function Note_Add() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([
    { id: 1, title: "Note-01" },
    { id: 2, title: "Note-02" },
  ]);
  const [editNote, setEditNote] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  function noteChangeHandler(e) {
    setNoteTitle(e.target.value);
  }

  function noteSubmitHandler(e) {
    e.preventDefault();
    if (noteTitle.trim() === "") {
      return alert(`Please write a valid note`);
    }
    editNote ? updatedNote() : createNote();
  }

  const createNote = () => {
    const newNote = {
      id: Date.now() + "",
      title: noteTitle,
    };
    setNotes([...notes, newNote]);
    setNoteTitle("");
  };

  const updatedNote = () => {
    const updatedNotes = notes.map((item) => {
      if (item.id === editableNote.id) {
        return { ...item, title: noteTitle };
      }
      return item;
    });
    setNotes(updatedNotes);
    setEditNote(false);
    setNoteTitle("");
  };

  function removeNoteHandler(noteId) {
    const updateNotes = notes.filter((item) => item.id !== noteId);
    setNotes(updateNotes);
  }

  function editNoteHandler(note) {
    setEditNote(true);
    setEditableNote(note);
    setNoteTitle(note.title);
  }

  return (
    <div className="input-note">
      <form onSubmit={noteSubmitHandler}>
        <h2>Write Your Notes</h2>
        <input type="text" value={noteTitle} onChange={noteChangeHandler} />
        <button type="submit">{editNote ? "Update Note" : "Add Note"}</button>
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
                <button onClick={() => editNoteHandler(note)}>Edit</button>
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
