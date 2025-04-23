import useFetch from "@/hooks/useFetch";
import { CartItem, CartResponse } from "@/types";
import { createContext } from "react";

interface DataContextType {
  cartItems: CartItem[];
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: React.ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const { data: cart } = useFetch<CartResponse>({ url: "/cart" });

  console.log(cart);

  const cartItems = cart?.cart.items || [];
  if (!cart) {
    return <p>No Cart Items</p>;
  }

  return <DataContext.Provider value={{ cartItems }}>{children}</DataContext.Provider>;
};

export default DataContext;
