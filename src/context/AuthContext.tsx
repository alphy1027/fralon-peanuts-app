import { useLogoutMutation } from "@/hooks/query-hooks/auth/useLogoutMutation";
import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";

// Authentication state
export interface UserAuthState {
  userId: string | null;
  username: string | null;
  roles: string[];
  isAuthenticated: boolean;
}
// Context value types
interface AuthContextType {
  user: UserAuthState;
  setUser: React.Dispatch<React.SetStateAction<UserAuthState>>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

const initialUserState = {
  userId: null,
  username: null,
  roles: [],
  isAuthenticated: false,
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserAuthState>(initialUserState);
  const logoutMutate = useLogoutMutation();

  const logout = async () => {
    const response = await logoutMutate.mutateAsync();
    if (!response.success) {
      throw new Error(response.message || "Failed to logout");
    }
    setUser({
      userId: null,
      username: null,
      roles: [],
      isAuthenticated: false,
    });
    window.location.href = "/";
    toast.error("Logout was successfull");
  };

  const value: AuthContextType = { user, setUser, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
