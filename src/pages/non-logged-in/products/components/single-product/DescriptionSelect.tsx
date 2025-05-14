const DescriptionSelect = () => {
  return (
    <select aria-label="Select product category" name="category" id="category" className="min-w-[130px] rounded-md border border-gray-300 px-1 py-1">
      <option value="">All Products</option>
      <option value="butter">Butter</option>
      <option value="powder">Powder</option>
      <option value="roasted">Roasted</option>
      <option value="raw">Raw</option>
      <option value="butter">Butter</option>
    </select>
  );
};

export default DescriptionSelect;
