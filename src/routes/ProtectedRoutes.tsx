import { Route } from "react-router-dom";
// Auth component
import RequireAuth from "./RequireAuth";
// Pages
import Profile from "@/pages/logged-in/profile/Profile";
import PersistLogin from "@/components/PersistLogin";

const ProtectedRoutes = [
  <Route element={<PersistLogin />}>
    <Route element={<RequireAuth />}>
      <Route path="profile" element={<Profile />} />
    </Route>
  </Route>,
];

export default ProtectedRoutes;
