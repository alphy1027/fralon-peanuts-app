const OrderHistoryItem = () => {
  return (
    <article className="flex flex-col gap-y-3 border-b border-slate-300 py-4 sm:px-4">
      <div className="flex items-center justify-between">
        <h4 className="text-primary text-body font-semibold">#66043958092345</h4>
        <div className="bg-success-light text-caption sm:text-body text-primary rounded-md px-2 py-[3px] font-semibold">Completed</div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-body-default">Nov 21, 2024 at 11:55pm</p>
        <h5 className="text-body-lg font-semibold">$75.00</h5>
      </div>
    </article>
  );
};

export default OrderHistoryItem;
