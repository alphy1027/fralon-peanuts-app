/* import { useCart } from "@/context/CartContext"; */
import { useCartQuery } from "@/hooks/query-hooks/cart/useCartQuery";
import CartTable from "../components/CartTable";
import { useCartActionsMutation } from "@/hooks/query-hooks/cart/useCartActionsMutation";
import { useAuthContext } from "@/context/AuthContext";
import EmptyPage from "@/components/sections/EmptyPage";
import EmptyCartIcon from "@/assets/svg/cart/EmptyCartIcon";
import LoginIcon from "@/assets/svg/cart/LoginIcon";

const CartTableContainer = () => {
  const { user } = useAuthContext();
  const { data: cart, isPending, error } = useCartQuery();
  const { removeFromCart } = useCartActionsMutation();

  const handleRemoveFromCart = (productId: string) => {
    removeFromCart.mutate(productId);
  };
  console.log(cart?.items);
  if (!user.isAuthenticated) return <EmptyPage icon={<LoginIcon />}>Login to view your cart</EmptyPage>;
  if (!cart?.items.length) return <EmptyPage icon={<EmptyCartIcon />}>Your cart is empty</EmptyPage>;
  return <CartTable cartItems={cart.items} handleRemoveFromCart={handleRemoveFromCart} />;
};

export default CartTableContainer;
