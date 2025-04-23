/* import { useCart } from "@/context/CartContext"; */
import CartTable from "../components/CartTable";

const CartTableContainer = () => {
  /*  const { cart, getCartTotal, removeFromCart } = useCart(); */

  return /* !cart.length ? <h3 className="text-center">NO PRODUCTS IN THE CART</h3> :  */ <CartTable /* cart={cart} getCartTotal={getCartTotal} removeFromCart={removeFromCart} */ />;
};

export default CartTableContainer;
