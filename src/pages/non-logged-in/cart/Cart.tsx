import SectionContainter from "@/components/UI-primitives/SectionContainter";
import CartTableContainer from "./containers/CartTableContainer";

const Cart = () => {
  return (
    <SectionContainter className="flex flex-col gap-6">
      <CartTableContainer />
    </SectionContainter>
  );
};

export default Cart;
