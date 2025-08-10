type SelectProps = {
  handlePriceChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
const PriceSelect = ({ handlePriceChange }: SelectProps) => {
  const options = [
    { value: "unitPrice", label: "Retail" },
    { value: "wholesaleUnitPrice", label: "Wholesale" },
  ];
  return (
    <select onChange={handlePriceChange} aria-label="Select product category" name="category" id="category" className="min-w-[130px] rounded-sm border border-gray-300 px-1 py-1">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default PriceSelect;
