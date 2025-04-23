import { useAuth } from "@/context/AuthContext";
import useRefreshToken from "@/hooks/useRefreshToken";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const PersistLogin = () => {
  const [loading, setLoading] = useState(true);
  const refresh = useRefreshToken();
  const { user } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    !user.isAuthenticated ? verifyRefreshToken() : setLoading(false);
  }, []);

  return <>{loading ? <p>Refreshing, Loading...</p> : <Outlet />}</>;
};

export default PersistLogin;
