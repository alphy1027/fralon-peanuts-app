import { useAuthContext } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const { user } = useAuthContext();

  return user ? <Outlet /> : <Navigate to="/" replace={true} />;
};

export default RequireAuth;
