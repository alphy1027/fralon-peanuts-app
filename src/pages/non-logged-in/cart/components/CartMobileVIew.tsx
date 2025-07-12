import { CartItem } from "@/types";
import MobileCartTableItem from "./MobileCartTableItem";
import { RemoveFromCartAction } from "../types";

type CartProps = {
  cartItems: CartItem[];
  handleRemoveFromCart: RemoveFromCartAction;
};

const CartMobileVIew = ({ cartItems, handleRemoveFromCart }: CartProps) => {
  return (
    <div className="flex flex-col gap-y-[1px] bg-gray-300 md:hidden">
      {cartItems.map((item, index) => (
        <MobileCartTableItem handleRemoveFromCart={handleRemoveFromCart} key={index} cartItem={item} />
      ))}
    </div>
  );
};

export default CartMobileVIew;
