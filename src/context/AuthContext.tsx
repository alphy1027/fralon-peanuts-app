import { createContext, ReactNode, useContext, useState } from "react";
// User state from the backend on login
export interface UserData {
  userId: string;
  username: string;
  accessToken: string;
  roles: string[];
}
// Authentication state
export interface UserAuthState {
  userId: string | null;
  username: string | null;
  accessToken: string | null;
  roles: string[];
  isAuthenticated: boolean;
}
// Context value types
interface AuthContextType {
  user: UserAuthState;
  login: (userData: UserData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserAuthState>({
    userId: null,
    username: null,
    accessToken: null,
    roles: [],
    isAuthenticated: false,
  });

  const login = (userData: UserData) => {
    setUser({
      userId: userData.userId,
      username: userData.username,
      accessToken: userData.accessToken,
      roles: userData.roles,
      isAuthenticated: true,
    });
  };

  const logout = () => {
    setUser({
      userId: null,
      username: null,
      accessToken: null,
      roles: [],
      isAuthenticated: false,
    });
  };

  const value: AuthContextType = { user, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
