import { Route } from "react-router-dom";
// Auth component
import RequireAuth from "./RequireAuth";
// Pages
import Profile from "@/pages/logged-in/profile/Profile";
import PersistLogin from "@/components/PersistLogin";
import Account from "@/pages/logged-in/profile/components/account";
import Notifications from "@/pages/logged-in/profile/components/notifications";
import OrderHistory from "@/pages/logged-in/profile/components/order-history";
import Favorites from "@/pages/logged-in/profile/components/favorites";
import HelpAndSupport from "@/pages/logged-in/profile/components/help-and-support";
import Settings from "@/pages/logged-in/profile/components/settings";

const ProtectedRoutes = [
  <Route element={<PersistLogin />}>
    <Route element={<RequireAuth />}>
      <Route path="profile" element={<Profile />}>
        <Route path="account" element={<Account />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="order-history" element={<OrderHistory />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="help" element={<HelpAndSupport />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Route>
  </Route>,
];

export default ProtectedRoutes;
