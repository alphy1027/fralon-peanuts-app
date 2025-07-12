const CartSummary = ({ grandTotal }: { grandTotal: number }) => {
  return (
    <section className="bg-primary-light flex flex-col gap-y-2 p-4 lg:p-6">
      <div className="text-body lg:text-body-lg text-body-default flex items-center justify-between">
        <p>Cart Total</p>
        <p>{grandTotal}</p>
      </div>

      <div className="text-body lg:text-body-lg text-body-default flex items-center justify-between">
        <p>Discount</p>
        <p>$0.00</p>
      </div>

      <div className="text-body lg:text-body-lg text-body-default flex items-center justify-between">
        <p>Delivery fee</p>
        <p>$0.00</p>
      </div>

      <div className="text-heading-4 lg:text-heading-3 text-brand-black flex items-center justify-between border-t border-gray-500 pt-2 font-bold">
        <p>Total</p>
        <p>{grandTotal}</p>
      </div>
    </section>
  );
};

export default CartSummary;
