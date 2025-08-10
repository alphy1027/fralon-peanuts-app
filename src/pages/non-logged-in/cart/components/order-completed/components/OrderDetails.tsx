import SummaryItem from "@/components/sections/SummaryItem";
import OrderDetailsItem from "./OrderDetailsItem";
import { Order } from "@/types";

const OrderDetails = ({ order }: { order: Order }) => {
  const delivery = 150;
  return (
    <section className="border-outline flex h-fit w-full flex-1 flex-col gap-y-2 rounded-sm border p-4 md:p-6">
      <div className="border-outline flex items-center justify-between border-b pb-2">
        <h4 className="text-heading-4 font-bold">Order Details</h4>
      </div>
      <div className="text-heading-5 flex items-center justify-between font-semibold">
        <h5 className="">Products</h5>
        <h5 className="">Sub Total</h5>
      </div>
      {order.items.map((item) => (
        <OrderDetailsItem key={item.product._id} orderItem={item} />
      ))}
      <div className="border-outline flex flex-col gap-y-2 border-y py-4">
        <SummaryItem label="Cart Total" amount={order.totalPrice} />
        <SummaryItem label="Discount" amount={0.0} />
        <SummaryItem label="Delivery fee" amount={delivery} />
      </div>

      <div className="flex flex-col gap-y-3">
        <SummaryItem bold label="Total" amount={order.totalPrice + delivery} />
      </div>
    </section>
  );
};

export default OrderDetails;
