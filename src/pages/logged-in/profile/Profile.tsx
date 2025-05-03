/*import SectionTitle from "@/components/UI-primitives/SectionTitle"; 
import useFetch from "@/hooks/useFetch";
import dateFormatter from "@/utils/dateFormatter";*/
import { Outlet } from "react-router-dom";
/* 
interface User {
  _id: string;
  username: string;
  email: string;
  phoneNumber: string;
  membership: string;
  createdAt: Date;
} */

/* interface UserResponse {
  client: User;
} */

const Profile = () => {
  /* const { data, loading, error } = useFetch<UserResponse>({ url: "/profile" });
  const { client: user } = data || {};
  if (loading) return <p className="text-center">loading...</p>;
  if (error) return <p className="text-center">{error.message}</p>; */
  return (
    <section className="">
      <section className="">
        {/*  {user ? (
          <>
            <p>ID : {user._id}</p>
            <h3>Username : {user.username}</h3>
            <p>Email : {user.email}</p>
            <p>Phone : {user.phoneNumber}</p>
            <p>Membership : {user.membership}</p>
            <p>Phone : {dateFormatter(user.createdAt)}</p>
          </>
        ) : (
          <p>User not found</p>
        )} */}

        <Outlet />
      </section>
    </section>
  );
};

export default Profile;
