const CartSummary = () => {
  return (
    <section className="bg-primary-light p-4">
      <article className="flex flex-col gap-y-2 border-b border-gray-400 py-2">
        <div className="text-body text-body-default flex items-center justify-between">
          <p>Cart Total</p>
          <p>$4500</p>
        </div>
        <div className="text-body text-body-default flex items-center justify-between">
          <p>Discount</p>
          <p>$0.00</p>
        </div>
        <div className="text-body text-body-default flex items-center justify-between">
          <p>Delivery fee</p>
          <p>$0.00</p>
        </div>
      </article>
      <div className="text-heading-4 text-brand-black flex items-center justify-between py-2 font-bold">
        <p>Total</p>
        <p>$4500.00</p>
      </div>
    </section>
  );
};

export default CartSummary;
