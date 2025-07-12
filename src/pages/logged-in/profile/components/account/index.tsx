import { useAuthContext } from "@/context/AuthContext";
import { useProfileQuery } from "@/hooks/query-hooks/profile/useProfileQuery";
import { Navigate } from "react-router-dom";

const Account = () => {
  const { user } = useAuthContext();
  const profileQuery = useProfileQuery();
  console.log("profile data ::", profileQuery.data);
  if (!user.isAuthenticated) return <Navigate to="/auth/login" />;

  if (profileQuery.error) return <p className="">ERROR :: {profileQuery.error.message}</p>;
  return (
    <div className="">
      <p className="">{profileQuery.data?.username}</p>
      <p className="">{profileQuery.data?.email}</p>
      <p className="">{profileQuery.data?.phoneNumber}</p>
      <p className="">{profileQuery.data?.membership}</p>
    </div>
  );
};

export default Account;
