type SearchBarProps = {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
};

export default function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
    return (
        <div className ="mb-4">
        <input
            type="text"
            id="search"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mb-4 text-black"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                Search Notes
            </button>
        </div>
    );
}