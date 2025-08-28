import { ErrorResponse } from "@/lib/axios";
import { authService } from "@/services/authService";
import { log } from "@/utils/log";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useForgotPasswordMutation = () => {
  return useMutation({
    mutationFn: (email: string) => authService.forgotPassword(email),
    onSuccess: (response) => {
      log("Forgot password success :", response);
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      log("Forgot password error :", error);
    },
  });
};
