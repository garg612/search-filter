function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search products by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                   text-gray-700 placeholder-gray-400 text-base
                   dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-500"
      />
    </div>
  );
}

export default SearchBar;
