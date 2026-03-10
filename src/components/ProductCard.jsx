function ProductCard({ product }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6 flex flex-col gap-3">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{product.name}</h3>
      <span className="inline-block self-start px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700">
        {product.category}
      </span>
      <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-auto">
        ₹{product.price.toLocaleString("en-IN")}
      </p>
    </div>
  );
}

export default ProductCard;
