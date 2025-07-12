type SelectProps = {
  handleTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const TypeSelect = ({ handleTypeChange }: SelectProps) => {
  const options = [
    { value: "smooth", label: "Smooth" },
    { value: "crunchy", label: "Crunchy" },
  ];
  return (
    <select onChange={handleTypeChange} aria-label="Select product category" name="category" id="category" className="min-w-[130px] rounded-md border border-gray-300 px-1 py-1">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default TypeSelect;
