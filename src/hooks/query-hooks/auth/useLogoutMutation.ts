import { useAuthContext } from "@/context/AuthContext";
import { authService } from "@/services/authService.";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useLogoutMutation = () => {
  const { setUser } = useAuthContext();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async () => {
      return await authService.logoutUser();
    },
    onSuccess: (response) => {
      // clear all cached queries
      queryClient.removeQueries();
      console.log("Logout Mutation response :: ", response);
      setUser({
        userId: null,
        username: null,
        roles: [],
        isAuthenticated: false,
      });
      navigate("/", { replace: true });
      alert(response.message);
    },
    onError: (error) => {
      console.log("Logout Mutation Error :: ", error);
    },
  });
};
