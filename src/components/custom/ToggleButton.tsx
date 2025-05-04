import { useState } from "react";

const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <button onClick={handleToggle} className="">
      <div
        className={`flex h-4 w-12 items-center border border-slate-300 transition-all duration-300 ease-in-out ${darkMode ? "bg-primary justify-end" : "bg-brand-white justify-start"} rounded-2xl sm:h-5 sm:w-15`}
      >
        <div className="bg-brand-white h-6 w-6 rounded-full border border-slate-300 sm:h-7 sm:w-7"></div>
      </div>
    </button>
  );
};

export default ToggleButton;
