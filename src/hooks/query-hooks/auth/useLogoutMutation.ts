import { authService } from "@/services/authService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      return await authService.logoutUser();
    },
    onSuccess: (response) => {
      // clear all cached queries
      queryClient.removeQueries();
      console.log("Logout Mutation response :: ", response);
    },
    onError: (error) => {
      console.log("Logout Mutation Error :: ", error);
    },
  });
};
