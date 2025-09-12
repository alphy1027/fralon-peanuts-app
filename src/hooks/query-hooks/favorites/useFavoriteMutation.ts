import { ErrorResponse } from "@/lib/axios";
import { favoriteService } from "@/services/favoriteService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const useFavoriteMutation = () => {
  const queryClient = useQueryClient();
  const addToFavorite = useMutation({
    mutationFn: (productId: string) => favoriteService.addToFavorite(productId),
    onSuccess: (favProducts) => {
      console.log("Favorite response ::", favProducts);
      queryClient.setQueryData(["favorites"], favProducts);
      toast.success("Item added to favorites");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      console.log("Favorite response ::", error);
      toast.error(error?.response?.data.message || error.message || "Failed to add item to favorites");
    },
  });

  const removeFromFavorite = useMutation({
    mutationFn: (productId: string) => favoriteService.removeFromFavorite(productId),
    onSuccess: (favProducts) => {
      console.log("Favorite response ::", favProducts);
      queryClient.setQueryData(["favorites"], favProducts);
      toast.success("Item removed from favorites");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      console.log("Favorite response ::", error);
      toast.error(error?.response?.data.message || error.message || "Failed to remove item from favorites");
    },
  });

  return { addToFavorite, removeFromFavorite };
};
