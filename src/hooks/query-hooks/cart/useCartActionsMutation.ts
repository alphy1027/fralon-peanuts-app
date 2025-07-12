import { cartService } from "@/services/cartService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type UpdateData = {
  productId: string;
  quantity: number;
};

export const useCartActionsMutation = () => {
  const queryClient = useQueryClient();
  const addToCart = useMutation({
    mutationFn: (productId: string) => cartService.addToCart(productId),
    onSuccess: (updatedCart) => {
      queryClient.setQueryData(["cart"], updatedCart);
      console.log("update success ::", updatedCart);
    },
    onError: (error) => {
      console.log("update error ::", error);
    },
  });

  const removeFromCart = useMutation({
    mutationFn: (productId: string) => cartService.removeFromCart(productId),
    onSuccess: (updatedCart) => {
      queryClient.setQueryData(["cart"], updatedCart);
      console.log("remove success ::", updatedCart);
    },
    onError: (error) => {
      console.log("remove error ::", error);
    },
  });

  const updateItemQuantity = useMutation({
    mutationFn: ({ productId, quantity }: UpdateData) => cartService.updateItemQuantity(productId, quantity),
    onSuccess: (updatedCart) => {
      queryClient.setQueryData(["cart"], updatedCart);
      console.log("Updated quantity cart ::", updatedCart);
    },
    onError: (error) => {
      console.log("update quantity error ::", error);
    },
  });

  return { addToCart, removeFromCart, updateItemQuantity };
};
