import { authService } from "@/services/authService";
import { useQuery } from "@tanstack/react-query";

export const useEmailVerificationQuery = (verificationToken: string) => {
  return useQuery({
    queryKey: ["verify-email", verificationToken],
    queryFn: () => authService.verifyEmail(verificationToken),
    enabled: !!verificationToken,
  });
};
