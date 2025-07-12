import { useAuthContext } from "@/context/AuthContext";
import { profileService } from "@/services/profileService";
import { tokenManager } from "@/utils/tokenManager";
import { useQuery } from "@tanstack/react-query";

export const useProfileQuery = () => {
  const { user } = useAuthContext();
  const token = tokenManager.getToken();

  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => await profileService.getProfile(),
    enabled: !!user.isAuthenticated && !!token,
    staleTime: 5 * 60 * 1000,
  });
};
