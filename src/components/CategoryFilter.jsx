const categories = ["All", "Electronics", "Clothing", "Home"];

function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200
            ${
              activeCategory === cat
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-indigo-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-indigo-500/10"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
