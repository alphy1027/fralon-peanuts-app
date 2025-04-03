import SectionTitle from "@/components/UI-primitives/SectionTitle";
import useFetch from "@/hooks/useFetch";
import dateFormatter from "@/utils/dateFormatter";

interface User {
  _id: string;
  username: string;
  email: string;
  phoneNumber: string;
  membership: string;
  createdAt: Date;
}

interface UserResponse {
  client: User;
}

const Profile = () => {
  const { data, loading, error } = useFetch<UserResponse>({ url: "/profile" });
  const { client: user } = data || {};
  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  return (
    <section className="">
      <SectionTitle>Profile</SectionTitle>
      <section className="">
        {user ? (
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
        )}
      </section>
    </section>
  );
};

export default Profile;
