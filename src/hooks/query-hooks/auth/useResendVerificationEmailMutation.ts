import { authService } from "@/services/authService";
import { log } from "@/utils/log";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useResendVerificationEmailMutation = () => {
  return useMutation({
    mutationFn: (email: string) => authService.resendVerificationEmail(email),
    onSuccess: (response) => {
      log("Resending verification success :", response);
      toast.success(response.message || "New verification Email sent");
    },
    onError: (error) => {
      log("Resending verification error :", error);
      toast.error(error.message || "Failed to resend your verification Email");
    },
  });
};
