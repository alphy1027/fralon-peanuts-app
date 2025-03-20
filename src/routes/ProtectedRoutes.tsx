import { Route } from "react-router-dom"
// Auth component
import RequireAuth from "./RequireAuth"
// Pages
import Profile from "@/pages/logged-in/profile/Profile"

const ProtectedRoutes = [
    <Route element={<RequireAuth />}>
        <Route path="profile" element={<Profile />} />
    </Route>
]

export default ProtectedRoutes