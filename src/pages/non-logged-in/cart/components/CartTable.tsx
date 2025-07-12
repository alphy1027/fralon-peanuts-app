import LeftArrow from "@/assets/svg/nav/LeftArrow";
import RightArrow from "@/assets/svg/nav/RightArrow";
import Button from "@/components/UI-primitives/Button";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import { CartItem } from "@/types";
import CartSummary from "./CartSummary";
import Table from "./Table";
import CartMobileVIew from "./CartMobileVIew";
import { RemoveFromCartAction } from "../types";

type TableProps = {
  cartItems: CartItem[];
  handleRemoveFromCart: RemoveFromCartAction;
};

const CartTable = ({ cartItems, handleRemoveFromCart }: TableProps) => {
  const grandTotal = cartItems.reduce((acc, current) => {
    return acc + current.product.unitPrice * current.quantity;
  }, 0);

  return (
    <div className="flex flex-col gap-y-6">
      <SectionTitle className="text-start">Cart ({cartItems.length})</SectionTitle>
      <Table handleRemoveFromCart={handleRemoveFromCart} cartItems={cartItems} />
      <CartMobileVIew handleRemoveFromCart={handleRemoveFromCart} cartItems={cartItems} />
      <CartSummary grandTotal={grandTotal} />
      <section className="flex items-center justify-evenly">
        <Button variant="outline" leftIcon={<LeftArrow className="fill-primary" />}></Button>
        <Button rightIcon={<RightArrow className="fill-brand-white" />}></Button>
      </section>
    </div>
  );
};

export default CartTable;
