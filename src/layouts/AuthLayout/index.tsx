import { useAuthContext } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { user } = useAuthContext();

  return user.isAuthenticated ? (
    <Navigate to="/" replace />
  ) : (
    <div className="flex h-full flex-1 flex-col items-center justify-center pt-28 md:justify-start md:pt-14">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
{
  /* <EmptyPage link="Back to Homepage" to="/" linkIcon={<LeftArrow className="fill-primary" />}>
      LOGGED IN USERS CANNOT VIEW THIS PAGE
    </EmptyPage> */
}
