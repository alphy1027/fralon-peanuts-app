import SectionContainter from "@/components/UI-primitives/SectionContainter";
import OrderHistoryItem from "./components/OrderHistoryItem";
import SortIcon from "@/assets/svg/nav/SortIcon";
import Input from "@/components/UI-primitives/Input";
import SectionTitle from "@/components/UI-primitives/SectionTitle";

const OrderHistory = () => {
  return (
    <SectionContainter className="flex flex-col gap-y-4">
      <SectionTitle className="text-start">Order History</SectionTitle>
      <div className="flex items-center justify-between pt-4">
        <Input inputSize="sm" placeholder="Search" className="w-[200px] sm:w-[300px]" />
        <div className="text-body-default flex items-center gap-2">
          <span>Sort</span>
          <SortIcon />
        </div>
      </div>
      <section className="">
        <OrderHistoryItem></OrderHistoryItem>
        <OrderHistoryItem></OrderHistoryItem>
        <OrderHistoryItem></OrderHistoryItem>
        <OrderHistoryItem></OrderHistoryItem>
        <OrderHistoryItem></OrderHistoryItem>
        <OrderHistoryItem></OrderHistoryItem>
        <OrderHistoryItem></OrderHistoryItem>
        <OrderHistoryItem></OrderHistoryItem>
      </section>
    </SectionContainter>
  );
};

export default OrderHistory;
