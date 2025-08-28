import { ErrorResponse } from "@/lib/axios";
import { authService } from "@/services/authService";
import { ResetPasswordPayload } from "@/types";
import { log } from "@/utils/log";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const useResetPasswordMutation = () => {
  return useMutation({
    mutationFn: (data: ResetPasswordPayload) => authService.resetPassword(data),
    onSuccess: (response) => {
      log("Reset password success :", response);
      toast.success(response.message || "Password reset successful");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      log("Reset password error :", error);
      toast.error(error.response?.data.message || "Password reset successful");
    },
  });
};
