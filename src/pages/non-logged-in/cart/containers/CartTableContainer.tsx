import CartTable from "../components/CartTable";
import { useAuthContext } from "@/context/AuthContext";
import EmptyPage from "@/components/sections/EmptyPage";
import EmptyCartIcon from "@/assets/svg/cart/EmptyCartIcon";
import LoginIcon from "@/assets/svg/cart/LoginIcon";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "@/context/CartContext";

const CartTableContainer = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { cartItems } = useCartContext();

  const handleOpenCheckout = () => {
    navigate("/cart/checkout");
  };

  if (!user.isAuthenticated)
    return (
      <EmptyPage link="Login" to="/auth/login" icon={<LoginIcon />}>
        Login to view your cart
      </EmptyPage>
    );
  if (!cartItems) return <EmptyPage icon={<EmptyCartIcon />}>Your cart is Loading...</EmptyPage>;
  /* if (isPending) return <EmptyPage icon={<EmptyCartIcon />}>Your cart is Loading...</EmptyPage>; */
  if (!cartItems.length) return <EmptyPage icon={<EmptyCartIcon />}>Your cart is empty</EmptyPage>;

  return <CartTable cartItems={cartItems} handleOpenCheckout={handleOpenCheckout} />;
};

export default CartTableContainer;
