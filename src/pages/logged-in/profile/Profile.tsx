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
  return (
    <section className="">
      <Outlet />
    </section>
  );
};

export default Profile;
