import { useCartActionsMutation } from "@/hooks/query-hooks/cart/useCartActionsMutation";
import { useCartQuery } from "@/hooks/query-hooks/cart/useCartQuery";
import { RemoveFromCartAction } from "@/pages/non-logged-in/cart/types";
import { CartItem } from "@/types";
import { createContext, ReactNode, useContext } from "react";

interface CartContextType {
  handleRemoveFromCart: RemoveFromCartAction;
  cartItems: CartItem[] | undefined;
  isProductInCart: (productId: string) => number | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCartContext must be used within CartProvider");
  return context;
};

const CartProvider = ({ children }: { children: ReactNode }) => {
  const { data: cart } = useCartQuery();
  const { removeFromCart } = useCartActionsMutation();

  const cartItems = cart?.items;
  const handleRemoveFromCart = (productId: string) => {
    removeFromCart.mutate(productId);
  };

  const isProductInCart = (productId: string) => {
    const productInCart = cartItems?.find((item) => item.product._id.toString() === productId.toString());
    if (!productInCart) return null;
    return productInCart.quantity;
  };

  const value: CartContextType = {
    handleRemoveFromCart,
    cartItems,
    isProductInCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
