// "use client";

// import { useState } from "react";

// import Note from "./types/notes";

// export default function Page() {
//   const [notes, setNotes] = useState<Note[]>([]);
//   const [input, setInput] = useState("");

//   const addNote = () => {
//     if (!input.trim()) return;

//     const newNote: Note = {
//       id: Date.now(),
//       text: input,
//     };

//     setNotes([...notes, newNote]);
//     setInput("");
//   };

//   const deleteNote = (id: number) => {
//     setNotes(notes.filter((note) => note.id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6 space-y-6">

//         <h1 className="text-2xl font-bold text-center">TO-DO List</h1>

//         <div className="flex gap-2">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Start writing the task..."
//             className="flex-1 border border-gray-300 p-2 rounded-md"
//           />
//           <button
//             onClick={addNote}
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//           >
//             Add
//           </button>
//         </div>

//         <div className="space-y-3">
//           {notes.map((note) => (
//             <div
//               key={note.id}
//               className="flex justify-between items-center bg-gray-50 p-3 rounded-md border"
//             >
//               <p>{note.text}</p>

//               <button
//                 onClick={() => deleteNote(note.id)}
//                 className="text-red-500 font-bold hover:text-red-700"
//               >
//                 X
//               </button>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Note from "./types/notes";

export default function Page() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [input, setInput] = useState("");

  const addNote = () => {
    if (!input.trim()) return;

    const newNote: Note = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setNotes([...notes, newNote]);
    setInput("");
  };

  const toggleComplete = (id: number) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, completed: !note.completed } : note
    ));
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addNote();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 space-y-6">

        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-800">My Tasks</h1>
          <p className="text-sm text-gray-500">
            {notes.filter(n => !n.completed).length} tasks remaining
          </p>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new task..."
            className="flex-1 border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button
            onClick={addNote}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
          >
            Add
          </button>
        </div>

        <div className="space-y-2">
          {notes.length === 0 ? (
            <p className="text-center text-gray-400 py-8">No tasks yet. Add one above!</p>
          ) : (
            notes.map((note) => (
              <div
                key={note.id}
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border-2 border-gray-100 hover:border-gray-200 transition-all group"
              >
                <input
                  type="checkbox"
                  checked={note.completed}
                  onChange={() => toggleComplete(note.id)}
                  className="w-5 h-5 rounded cursor-pointer accent-blue-600"
                />
                
                <p className={`flex-1 ${note.completed ? 'line-through text-gray-400' : 'text-gray-700'} transition-all`}>
                  {note.text}
                </p>

                <button
                  onClick={() => deleteNote(note.id)}
                  className="text-gray-400 hover:text-red-500 font-bold transition-colors opacity-0 group-hover:opacity-100"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}