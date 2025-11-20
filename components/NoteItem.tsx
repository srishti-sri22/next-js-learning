import React from "react";

export default function NoteItem({ text }: { text: string }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
      <p className="text-gray-800">{text}</p>
    </div>
  );
}
