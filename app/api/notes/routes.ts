import { NextRequest } from "next/server";
import { Note } from "../../types/notes";

let notes: Note[] = [];

export async function GET() {
  return Response.json({ notes });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const newNote: Note = {
    id: notes.length + 1,
    text: body.text,
  };

  notes.push(newNote);
  return Response.json({ notes });
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const id: number = body.id;

  notes = notes.filter((n) => n.id !== id);

  notes = notes.map((n, index) => ({
    ...n,
    id: index + 1,
  }));

  return Response.json({ notes });
}
