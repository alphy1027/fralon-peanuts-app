const CategorySelect = () => {
  return (
    <div className="flex items-center gap-4 sm:gap-6">
      <label htmlFor="category" className="text-body-default text-heading-5 font-semibold">
        Categories
      </label>
      <select aria-label="Select product category" name="category" id="category" className="w-[300px] min-w-[150px] rounded-md border border-gray-300 px-1 py-1.5">
        <option value="butter">All Products</option>
        <option value="butter">Butter</option>
        <option value="powder">Powder</option>
        <option value="roasted">Roasted</option>
        <option value="raw">Raw</option>
        <option value="butter">Butter</option>
      </select>
    </div>
  );
};

export default CategorySelect;
