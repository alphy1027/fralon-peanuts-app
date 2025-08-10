import SectionContainter from "@/components/UI-primitives/SectionContainter";
import FeedbackHead from "./components/FeedbackHead";
import CloseIcon from "@/assets/svg/nav/CloseIcon";
import Button from "@/components/UI-primitives/Button";

const OrderFailure = () => {
  return (
    <SectionContainter>
      <div className="custom-margin-auto flex max-w-[990px] flex-col items-center gap-y-2">
        <FeedbackHead error title="Order Failed" headIcon={<CloseIcon size={48} />}>
          Sorry, We are unable to complete your order, please replace the order
        </FeedbackHead>
        {/*  <OrderDetails /> */}
        <Button size="md">Place Order again</Button>
      </div>
    </SectionContainter>
  );
};

export default OrderFailure;
