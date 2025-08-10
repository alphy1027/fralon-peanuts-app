import { authService } from "@/services/authService.";
import { useMutation } from "@tanstack/react-query";

export const useRefreshMutation = () => {
  return useMutation({
    mutationFn: () => authService.refreshUserToken(),
    onSuccess: (response) => {
      console.log("Refresh response ::", response);
    },
    onError: (error) => console.log("Refreshing token error ::", error),
  });
};
