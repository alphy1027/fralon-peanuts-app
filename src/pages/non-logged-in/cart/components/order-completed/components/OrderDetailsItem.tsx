import { PopulatedOrderItem } from "@/types";

const OrderDetailsItem = ({ orderItem }: { orderItem: PopulatedOrderItem }) => {
  return (
    <article className="flex items-center gap-x-2 py-2 sm:gap-x-6">
      <img src={orderItem.product.productImage.image} /* alt="fralon product photo" */ className="bg-primary-light h-12 w-12 rounded-sm" />
      <section className="flex flex-1 items-center justify-between">
        <div className="flex flex-col justify-center gap-y-0.5">
          <h4 className="text-body-default text-body font-semibold">
            {orderItem.product.productName} ({orderItem.product.packageSize})
          </h4>
          <p className="text-caption text-gray-500">
            {orderItem.product.type} | Qty: {orderItem.quantity}
          </p>
        </div>
        <h5 className="text-body-default text-body font-bold">{orderItem.subTotal}</h5>
      </section>
    </article>
  );
};

export default OrderDetailsItem;
