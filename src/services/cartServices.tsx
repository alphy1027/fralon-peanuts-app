/* import useFetch from "@/hooks/useFetch";
import { Cart, CartItem } from "@/types";

type CartServicesProps = {
  setIsLoading: (loading: boolean) => void;
  setCart: (cartItems: CartItem[]) => void;
  setCartError: (error: unknown) => void;
};

export const fetchCart = ({ setIsLoading, setCartError, setCart }: CartServicesProps) => {
  const { data, loading, error } = useFetch<{ cart: Cart }>({ url: "/cart" });
  if (!data) return <p>Cart not found</p>;
  setIsLoading(loading);
  setCartError(error);
  const cartItems = data.cart.items;
  setCart(cartItems);
};

export const addToCart = ({ productId, setIsLoading, setCartError, setCart }: CartServicesProps & { productId: string }) => {
  const { data, loading, error } = useFetch<{ updatedCart: Cart }>({ url: "/cart/add", method: "POST", body: { productId } });
  if (!data) return <p>Product not added to cart</p>;
  setIsLoading(loading);
  setCartError(error);
  const cartItems = data.updatedCart.items;
  setCart(cartItems);
};

export const removeFromCart = ({ productId, setIsLoading, setCartError, setCart }: CartServicesProps & { productId: string }) => {
  const { data, loading, error } = useFetch<{ updatedCart: Cart }>({ url: "/cart/remove", method: "DELETE", body: { productId } });
  if (!data) return <p>Product not added to cart</p>;
  setIsLoading(loading);
  setCartError(error);
  const cartItems = data.updatedCart.items;
  setCart(cartItems);
};

export const updateQuantity = () => {};

export const getCartTotal = (cart: CartItem[]) => {
  return cart.reduce((acc, cartItem): number => acc + cartItem.quantity, 0);
};

export const getCartCount = (cart: CartItem[]): number => {
  return cart.length;
};
 */
