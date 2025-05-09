const ToggleButton = () => {
  return (
    <button className="p-2">
      <div className="bg-primary flex w-12 items-center justify-end rounded-full border border-slate-300 p-0.5">
        <div className="bg-brand-white h-4 w-4 rounded-full border-slate-200" />
      </div>
    </button>
  );
};

export default ToggleButton;
