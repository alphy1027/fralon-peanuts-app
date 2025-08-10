import SectionContainter from "@/components/UI-primitives/SectionContainter";
import OrderHistoryItem from "./components/OrderHistoryItem";
import SortIcon from "@/assets/svg/nav/SortIcon";
import Input from "@/components/UI-primitives/Input";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import { useOrdersQuery } from "@/hooks/query-hooks/orders/useOrdersQuery";

const OrderHistory = () => {
  const { data, isPending, error } = useOrdersQuery();

  if (!data) return <p className="">NO PREVIOUS ORDERS FOUND</p>;
  if (isPending) return <p className="">ORDERS IS LOADING</p>;
  if (error) return <p className="">ERROR :: {error.message}</p>;
  console.log("Order history", data);
  return (
    <SectionContainter className="flex flex-col gap-y-4">
      <SectionTitle className="text-start">Order History ({data.orders.length})</SectionTitle>
      <div className="flex items-center justify-between pt-4">
        <Input inputSize="sm" placeholder="Search" className="w-[200px] sm:w-[300px]" />
        <div className="text-body-default flex items-center gap-2">
          <span>Sort</span>
          <SortIcon />
        </div>
      </div>
      <section className="flex flex-col gap-y-4">
        {data.orders.map((order) => (
          <OrderHistoryItem key={order._id} order={order} />
        ))}
      </section>
    </SectionContainter>
  );
};

export default OrderHistory;
