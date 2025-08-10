import { useAuthContext } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import EmptyPage from "./sections/EmptyPage";
import { useRefreshMutation } from "@/hooks/query-hooks/auth/useRefreshMutation";

const PersistLogin = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const refreshMutate = useRefreshMutation();
  const { user } = useAuthContext();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refreshMutate.mutateAsync();
      } catch (err) {
        console.log("Refresh, persist login error ::", err);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    !user.isAuthenticated ? verifyRefreshToken() : setLoading(false);
  }, []);

  return <>{loading ? <EmptyPage>Refreshing tokens in process ...</EmptyPage> : <Outlet />}</>;
};

export default PersistLogin;
