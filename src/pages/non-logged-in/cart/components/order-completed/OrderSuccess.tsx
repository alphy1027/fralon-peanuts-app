import TickIcon from "@/assets/svg/nav/TickIcon";
import FeedbackHead from "./components/FeedbackHead";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import OrderDetails from "./components/OrderDetails";
import Button from "@/components/UI-primitives/Button";
import { useLocation } from "react-router-dom";
import { Order } from "@/types";
//import OrderSuccessSummaryDetails from "./components/OrderSuccessSummaryDetails";

const OrderSuccess = () => {
  /*  const { orderId } = useParams(); */
  const location = useLocation();
  const order: Order = location.state?.order;
  if (!order) {
    //refetch order using the orderId
    return <p className="">LOADING ORDER...</p>;
  }
  return (
    <SectionContainter className="">
      <div className="custom-margin-auto flex max-w-[990px] flex-col items-center gap-y-2">
        <FeedbackHead title="Your order is completed" headIcon={<TickIcon />}>
          Thank you for shopping with us, your order was successfully completed
        </FeedbackHead>
        {/* <section className="bg-primary flex w-full items-center justify-between rounded-sm p-6">
          <OrderSuccessSummaryDetails title="Order ID">{order._id}</OrderSuccessSummaryDetails>
          <OrderSuccessSummaryDetails title="Payment Method">{order.paymentMethod}</OrderSuccessSummaryDetails>
          <OrderSuccessSummaryDetails title="Transaction ID">{order._id}</OrderSuccessSummaryDetails>
          <OrderSuccessSummaryDetails title="Delivery Date">15 Feb 2024</OrderSuccessSummaryDetails>
        </section> */}
        <OrderDetails order={order} />
        <Button size="md">Back to Homepage</Button>
      </div>
    </SectionContainter>
  );
};

export default OrderSuccess;
