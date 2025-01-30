import { useState } from "react";
type NoteFormProps ={
    addNote:(text:string,category:string) => void;
};
export default function NoteForm({addNote}: NoteFormProps) {
    const [noteText, setNoteText] = useState("");
    const [noteCategory, setNoteCategory] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNoteText(event.target.value);
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setNoteCategory(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (noteText.trim().length > 0) {
            addNote(noteText, noteCategory);
            setNoteText("");
            setNoteCategory("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <textarea
                id="text"
                value={noteText}
                onChange={handleChange}
                className="w-full p-2 border rounded text-black"
                placeholder="Enter your note here..."
            />
             <select id="category" name="category" value={noteCategory} onChange={handleCategoryChange} className="w-full p-2 border rounded mt-2 text-black">
                <option value="">Select a category...</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Other">Other</option>
            </select>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                Add Note
            </button>
        </form>
    );
}
