import { useAuthContext } from "@/context/AuthContext";
import { favoriteService } from "@/services/favoriteService";
import { useQuery } from "@tanstack/react-query";

export const useFavoriteQuery = () => {
  const { user } = useAuthContext();

  return useQuery({
    queryKey: ["favorites"],
    queryFn: () => favoriteService.getFavorites(),
    enabled: !!user.isAuthenticated,
  });
};
