import useFetch from "@/hooks/useFetch";
import { Cart, CartItem } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

interface CartContextType {
  cart: CartItem[];
  fetchCart: () => void;
  addToCart: (productId: string) => void;
  getCartTotal: () => number;
  removeFromCart: (productId: string) => void;
  getCartCount: () => number;
  updateQuantity: (productId: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart can only be used within a CartProvider");
  return context;
};

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cartError, setCartError] = useState<unknown | null>(null);

  const fetchCart = () => {
    const { data, loading, error } = useFetch<{ cart: Cart }>({ url: "/cart" });
    if (!data) return <p>Cart not found</p>;
    console.log("Cart fetch successfull", data);
    setIsLoading(loading);
    setCartError(error);
    const cartItems = data.cart.items;
    setCart(cartItems);
  };

  const addToCart = (productId: string) => {
    const { data, loading, error } = useFetch<{ updatedCart: Cart }>({ url: "/cart/add", method: "POST", body: { productId } });
    if (!data) return <p>Product not added to cart</p>;
    setIsLoading(loading);
    setCartError(error);
    const cartItems = data.updatedCart.items;
    setCart(cartItems);
  };

  const removeFromCart = (productId: string) => {
    const { data, loading, error } = useFetch<{ updatedCart: Cart }>({ url: "/cart/remove", method: "DELETE", body: { productId } });
    if (!data) return <p>Product not added to cart</p>;
    setIsLoading(loading);
    setCartError(error);
    const cartItems = data.updatedCart.items;
    setCart(cartItems);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    const { data, loading, error } = useFetch<{ updatedCart: Cart }>({ url: "/cart", method: "PATCH", body: { productId, quantity } });
    if (!data) return <p>Product not added to cart</p>;
    setIsLoading(loading);
    setCartError(error);
    const cartItems = data.updatedCart.items;
    setCart(cartItems);
  };

  const getCartTotal = () => {
    return cart.reduce((acc, cartItem): number => acc + cartItem.quantity * cartItem.product.unitPrice, 0);
  };

  const getCartCount = (): number => {
    return cart.length;
  };

  const value = {
    cart,
    fetchCart,
    addToCart,
    getCartTotal,
    removeFromCart,
    getCartCount,
    updateQuantity,
    isLoading,
    cartError,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
