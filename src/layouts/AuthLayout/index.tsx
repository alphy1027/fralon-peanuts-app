import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
