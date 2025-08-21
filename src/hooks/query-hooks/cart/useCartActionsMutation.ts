import { cartService } from "@/services/cartService";
import { log } from "@/utils/log";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

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
      log("update success ::", updatedCart);
      toast.success("Item added to cart successfully");
    },
    onError: (error) => {
      log("update error ::", error);
      toast.success("Error adding item to cart");
    },
  });

  const removeFromCart = useMutation({
    mutationFn: (productId: string) => cartService.removeFromCart(productId),
    onSuccess: (updatedCart) => {
      queryClient.setQueryData(["cart"], updatedCart);
      log("remove success ::", updatedCart);
      toast.success("Item removed from cart successfully");
    },
    onError: (error) => {
      log("remove error ::", error);
      toast.error("Error removing item from cart");
    },
  });

  const updateItemQuantity = useMutation({
    mutationFn: ({ productId, quantity }: UpdateData) => cartService.updateItemQuantity(productId, quantity),
    onSuccess: (updatedCart) => {
      queryClient.setQueryData(["cart"], updatedCart);
      log("Updated quantity cart ::", updatedCart);
      toast.success("Item quantity updated successfully");
    },
    onError: (error) => {
      log("update quantity error ::", error);
      toast.error("Error updating item quantity in cart");
    },
  });

  return { addToCart, removeFromCart, updateItemQuantity };
};
