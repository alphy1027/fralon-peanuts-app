import { useAuthContext } from "@/context/AuthContext";
import { orderService } from "@/services/orderService";
import { tokenManager } from "@/utils/tokenManager";
import { useQuery } from "@tanstack/react-query";

export const useOrdersQuery = () => {
  const { user } = useAuthContext();
  const token = tokenManager.getToken();

  return useQuery({
    queryKey: ["orders"],
    queryFn: () => orderService.getUserOrders(),
    enabled: !!user.isAuthenticated && !!token,
    staleTime: 5 * 60 * 1000,
  });
};
