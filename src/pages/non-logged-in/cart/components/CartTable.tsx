import SectionTitle from "@/components/UI-primitives/SectionTitle";
import { CartItem } from "@/types";
import CartSummary from "./CartSummary";
import CartTableComponents from "./CartTableComponents";

type TableProps = {
  cartItems: CartItem[];
  handleOpenCheckout: () => void;
};

const CartTable = ({ cartItems, handleOpenCheckout }: TableProps) => {
  return (
    <div className="flex flex-col gap-y-10">
      <SectionTitle className="text-start">Cart ({cartItems.length})</SectionTitle>

      <div className="flex flex-col justify-center gap-4 lg:flex-row lg:gap-6">
        <div className="lg:w-2/3">
          <CartTableComponents />
        </div>
        <CartSummary buttonLabel="Proceed to Checkout" onClickFn={handleOpenCheckout} />
      </div>
    </div>
  );
};

export default CartTable;
