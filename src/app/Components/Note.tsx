import { useState } from "react";
import { NoteType} from "../Types";
type NoteProps ={
    note: NoteType;
    deleteNote: (id:string) => void;
    updateNote: (id:string,text:string) => void;
    togglePinNote: (id:string) => void;
};

export default function Note({note,deleteNote,updateNote,togglePinNote}: NoteProps) {
    const[editText,setEditText] = useState(note.text);

    const handleEditChange = (event:React.ChangeEvent<HTMLTextAreaElement>) =>{
        setEditText(event.target.value);
    };

    const handleEditSubmit = (event:React.FormEvent) =>{
        event.preventDefault();
        updateNote(note.id,editText);
    };
    return (
        <div className="bg-yellow-200 p-4 rounded shadow-md">
            {note.isEditing ? (
                <form onSubmit={handleEditSubmit}>
                    <textarea
                        value={editText}
                        onChange={handleEditChange}
                        className="w-full text-black"
                        id = {note.id}
                    />
                    <button type="submit" className="bg-green-500 text-white px-2 py-1 rounded mt-2">Save</button>
                </form>
            ) : (
                <>
                <p className="text-black">{note.text}</p>
                <button onClick={() =>updateNote(note.id,editText)} className="
                bg-yellow-500 text-black px-4 py-2 rounded mt-2">EDIT</button>
                <p className="text-black">{note.text}</p>
                <button onClick={() => deleteNote(note.id)} className="bg-red-500 text-white px-2 py-1 rounded mt-2 mr-2">Delete</button>
                <button onClick={() => togglePinNote(note.id)} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
            {note.pinned ? 'Unpin' : 'Pin'}
                </button>
                </>
            )}
        </div>
    );
}

