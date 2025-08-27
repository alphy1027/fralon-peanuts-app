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
    <div className="flex h-full flex-1 flex-col items-center justify-center bg-red-200 pt-28 md:justify-start md:pt-14">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
