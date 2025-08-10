import { Order } from "@/types";
import dateFormatter from "@/utils/dateFormatter";
import OrderStatusIndicator from "./OrderStatusIndicator";

type OrderProps = {
  order: Order;
};

const OrderHistoryItem = ({ order }: OrderProps) => {
  return (
    <article className="flex flex-col gap-y-1 rounded-sm border border-slate-300 px-2 py-4 sm:px-4">
      <div className="flex items-center justify-between">
        <h5 className="text-primary text-body font-semibold">#{order._id}</h5>
        <OrderStatusIndicator>{order.status}</OrderStatusIndicator>
      </div>
      {order.items?.map((item) => (
        <h4 key={item._id} className="text-body-lg w-fit py-1 font-semibold">
          <span className="">
            {item.product?.productName}({item.product?.packageSize})
          </span>{" "}
          <span className="text-body font-normal">X {item.quantity}</span>
        </h4>
      ))}
      <div className="flex items-center justify-between">
        <p className="text-body text-slate-500">{dateFormatter(order.createdAt)}</p>
        <h5 className="text-body-lg font-semibold">Ksh {order.totalPrice}</h5>
      </div>
    </article>
  );
};

export default OrderHistoryItem;
