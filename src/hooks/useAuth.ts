import { useLoginMutation } from "@/hooks/query-hooks/auth/useLoginMutation";
import { useLogoutMutation } from "@/hooks/query-hooks/auth/useLogoutMutation";
import { useState } from "react";

// Authentication state
export interface UserAuthState {
  userId: string | null;
  username: string | null;
  roles: string[];
  isAuthenticated: boolean;
}
// Context value types
interface AuthType {
  user: UserAuthState;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const useAuth = (): AuthType => {
  const loginMutate = useLoginMutation();
  const { mutateAsync: logoutMutate } = useLogoutMutation();
  const [user, setUser] = useState<UserAuthState>({
    userId: null,
    username: null,
    roles: [],
    isAuthenticated: false,
  });

  const login = async (email: string, password: string) => {
    await loginMutate.mutateAsync(
      { email, password },
      {
        onSuccess: (userData) => {
          setUser({
            userId: userData.userId,
            username: userData.username,
            roles: userData.roles || [],
            isAuthenticated: true,
          });
          console.log("Login Mutation response :: ", userData);
        },
        onError: (error) => {
          console.log("Login Mutation Error :: ", error);
        },
      },
    );
    return loginMutate;
  };

  const logout = async (): Promise<boolean> => {
    const logoutData = await logoutMutate();
    if (logoutData.success) {
      setUser({
        userId: null,
        username: null,
        roles: [],
        isAuthenticated: false,
      });
    }
    if (logoutData.success) alert("Logout Successful");
    return logoutData.success;
  };

  return {
    login,
    logout,
    user,
  };
};

export default useAuth;
