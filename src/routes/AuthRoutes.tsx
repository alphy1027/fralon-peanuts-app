import ForgotPassword from "@/pages/non-logged-in/forgot-password/ForgotPassword"
import LoginContainer from "@/pages/non-logged-in/login/containers/LoginContainer"
import ResetPassword from "@/pages/non-logged-in/reset-password/ResetPassword"
import SignupContainer from "@/pages/non-logged-in/Signup/containers/SignupContainer"
import { Route } from "react-router-dom"

const AuthRoutes = [
    <Route path="login" element={<LoginContainer />} />,
    <Route path="signup" element={<SignupContainer />} />,
    <Route path="forgot-password" element={<ForgotPassword />} />,
    <Route path="reset-password" element={<ResetPassword />} />
]

export default AuthRoutes