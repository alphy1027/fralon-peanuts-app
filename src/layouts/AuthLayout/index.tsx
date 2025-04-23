import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="self-start">AuthLayout</h1>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
