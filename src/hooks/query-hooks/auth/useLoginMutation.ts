import { useAuthContext } from "@/context/AuthContext";
import { authService } from "@/services/authService.";
import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";

interface LoginCredentials {
  email: string;
  password: string;
}
interface ErrorProp {
  AxiosError?: string;
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
      console.log("Login Mutation response :: ", userData);
      setUser({
        userId: userData.userId,
        username: userData.username,
        roles: userData.roles || [],
        isAuthenticated: true,
      });
      navigate(from, { replace: true });
      alert(`Welcome back, ${userData.username}`);
    },
    onError: (error: ErrorProp) => {
      console.log("Login Mutation Error :: ", error);
      alert(error);
    },
  });
};
