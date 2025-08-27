import { authService } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";
import { SignupPayload } from "@/types";
import { log } from "@/utils/log";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { ErrorResponse } from "@/lib/axios";

export const useSignupMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (signupPayload: SignupPayload) => authService.createUser(signupPayload),
    onSuccess: (newUser) => {
      log("New signed in User :", newUser);
      navigate("/auth/verification-sent", { state: { email: newUser.email, username: newUser.username } });
      toast.success("Account created successfully");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      log("Failed to create new user:", error);
      toast.error(error.message || "Failed to create account");
    },
  });
};
