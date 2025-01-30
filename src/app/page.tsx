'use client';

import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import Note from "./Components/Note";
import NoteForm from "./Components/NoteForm";
import { NoteType } from "./Types";
import SearchBar from "./Components/SerchBar";

export default function Home() {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const addNote = (text:string,category:string) => {
    const newNote:NoteType = {
      id: uuidv4(),
      text: text,
      pinned: false,
      category: category,
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id:string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (id:string,text:string) =>{
    setNotes(
      notes.map((note) =>
      note.id === id? { ...note,text:text,isEditing: !note.isEditing} : note)
    );
  };

  const togglePinNote = (id:string) =>{
    setNotes(
      notes.map((note) =>
      note.id === id? { ...note,pinned: !note.pinned} : note)
    );
  };

  const filrerednotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sortedNotes = [...filrerednotes].sort((a, b) => (a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1));

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-4">Sticky Notes</h1>
      <NoteForm addNote={addNote} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedNotes.map((note) => (
          <Note key={note.id} note={note} deleteNote={deleteNote} updateNote={updateNote} togglePinNote={togglePinNote} />
        ))}
      </div>
    </main>
  );
}