"use client";

import { useState } from "react";

interface Note {
  id: number;
  text: string;
}

export default function Page() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [input, setInput] = useState("");

  const addNote = () => {
    if (!input.trim()) return;

    const newNote: Note = {
      id: Date.now(),
      text: input,
    };

    setNotes([...notes, newNote]);
    setInput("");
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6 space-y-6">

        <h1 className="text-2xl font-bold text-center">Notes App</h1>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a note..."
            className="flex-1 border border-gray-300 p-2 rounded-md"
          />
          <button
            onClick={addNote}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        <div className="space-y-3">
          {notes.map((note) => (
            <div
              key={note.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-md border"
            >
              <p>{note.text}</p>

              <button
                onClick={() => deleteNote(note.id)}
                className="text-red-500 font-bold hover:text-red-700"
              >
                X
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
