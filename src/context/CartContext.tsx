import { useCartActionsMutation } from "@/hooks/query-hooks/cart/useCartActionsMutation";
import { useCartQuery } from "@/hooks/query-hooks/cart/useCartQuery";
import { RemoveFromCartAction } from "@/pages/non-logged-in/cart/types";
import { CartItem } from "@/types";
import { createContext, ReactNode, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import toast from "react-hot-toast";

interface CartContextType {
  handleRemoveFromCart: RemoveFromCartAction;
  cartItems: CartItem[] | undefined;
  isProductInCart: (productId: string) => number | null;
  handleAddToCart: (productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCartContext must be used within CartProvider");
  return context;
};

const CartProvider = ({ children }: { children: ReactNode }) => {
  const { data: cart } = useCartQuery();
  const { removeFromCart, addToCart } = useCartActionsMutation();
  const { user } = useAuthContext();

  const cartItems = cart?.items;
  const handleRemoveFromCart = (productId: string) => {
    removeFromCart.mutate(productId);
  };

  const isProductInCart = (productId: string) => {
    const productInCart = cartItems?.find((item) => item.product._id.toString() === productId.toString());
    if (!productInCart) return null;
    return productInCart.quantity;
  };

  const handleAddToCart = (productId: string) => {
    if (!user.isAuthenticated) {
      return toast.error("Please login to add item to cart");
    }
    addToCart.mutate(productId);
  };

  const value: CartContextType = {
    handleRemoveFromCart,
    cartItems,
    isProductInCart,
    handleAddToCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
