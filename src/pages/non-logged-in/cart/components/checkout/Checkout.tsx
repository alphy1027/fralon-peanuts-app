import SectionContainter from "@/components/UI-primitives/SectionContainter";
import CartSummary from "../CartSummary";
import CheckoutForm from "./components/CheckoutForm";

const Checkout = () => {
  return (
    <SectionContainter className="flex flex-col justify-center gap-4 gap-y-10 lg:flex-row lg:gap-6">
      <div className="lg:w-2/3">
        <CheckoutForm />
      </div>
      <CartSummary form="order-form" type="submit" buttonLabel="Pay Now" />
    </SectionContainter>
  );
};

export default Checkout;
