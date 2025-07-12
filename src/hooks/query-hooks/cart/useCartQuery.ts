import { useAuthContext } from "@/context/AuthContext";
import { cartService } from "@/services/cartService";
import { useQuery } from "@tanstack/react-query";

export const useCartQuery = () => {
  const { user } = useAuthContext();

  return useQuery({
    queryKey: ["cart"],
    queryFn: () => cartService.getCart(),
    enabled: !!user.isAuthenticated,
  });
};
