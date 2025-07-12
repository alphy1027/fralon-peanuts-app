import { useLoginMutation } from "@/hooks/query-hooks/auth/useLoginMutation";
import { useLogoutMutation } from "@/hooks/query-hooks/auth/useLogoutMutation";
import useAuth from "@/hooks/useAuth";
import { createContext, ReactNode, useContext, useState } from "react";
// User state from the backend on login

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
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserAuthState>({
    userId: null,
    username: null,
    roles: [],
    isAuthenticated: false,
  });
  const value: AuthContextType = { user, setUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
