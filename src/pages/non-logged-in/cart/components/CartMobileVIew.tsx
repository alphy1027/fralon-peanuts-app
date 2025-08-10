import MobileCartTableItem from "./MobileCartTableItem";
import { useCartContext } from "@/context/CartContext";

const CartMobileVIew = () => {
  const { cartItems } = useCartContext();
  return <div className="flex flex-1 flex-col gap-y-[1px] lg:hidden">{cartItems && cartItems.map((item, index) => <MobileCartTableItem key={index} cartItem={item} />)}</div>;
};

export default CartMobileVIew;
