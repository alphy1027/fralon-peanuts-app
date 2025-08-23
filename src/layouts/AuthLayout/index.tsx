import LeftArrow from "@/assets/svg/nav/LeftArrow";
import EmptyPage from "@/components/sections/EmptyPage";
import { useAuthContext } from "@/context/AuthContext";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { user } = useAuthContext();

  return user.isAuthenticated ? (
    <EmptyPage link="Back to Homepage" to="/" linkIcon={<LeftArrow className="fill-primary" />}>
      LOGGED IN USERS CANNOT VIEW THIS PAGE
    </EmptyPage>
  ) : (
    <div className="flex min-h-screen flex-col items-center justify-center md:justify-start md:pt-14">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
