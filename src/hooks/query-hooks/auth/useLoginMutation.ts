import { useAuthContext } from "@/context/AuthContext";
import { ErrorResponse } from "@/lib/axios";
import { authService } from "@/services/authService";
import { log } from "@/utils/log";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

interface LoginCredentials {
  email: string;
  password: string;
}

export const useLoginMutation = () => {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  return useMutation({
    mutationFn: async ({ email, password }: LoginCredentials) => {
      return await authService.loginUser(email, password);
    },
    onSuccess: (userData) => {
      log("Login Mutation response :: ", userData);
      setUser({
        userId: userData.userId,
        username: userData.username,
        roles: userData.roles || [],
        isAuthenticated: true,
      });
      navigate(from, { replace: true });
      toast.success("Login was successful");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      log("Login Mutation Error :: ", error);
      toast.error(error.response?.data.message || "Failed to login");
    },
  });
};
