import EmailVerification from "@/pages/non-logged-in/email-verification/EmailVerification";
import VerificationEmailSent from "@/pages/non-logged-in/email-verification/VerificationEmailSent";
import ForgotPassword from "@/pages/non-logged-in/forgot-password/ForgotPassword";
import LoginContainer from "@/pages/non-logged-in/login/containers/LoginContainer";
import ResetPassword from "@/pages/non-logged-in/reset-password/ResetPassword";
import SuccessfulPasswordReset from "@/pages/non-logged-in/reset-password/SuccessfulPasswordReset";
import SignupContainer from "@/pages/non-logged-in/Signup/containers/SignupContainer";
import { Route } from "react-router-dom";

const AuthRoutes = [
  <Route path="login" element={<LoginContainer />} />,
  <Route path="signup" element={<SignupContainer />} />,
  <Route path="forgot-password" element={<ForgotPassword />} />,
  <Route path="reset-password/:resetPasswordToken" element={<ResetPassword />} />,
  <Route path="successful-reset" element={<SuccessfulPasswordReset />} />,
  <Route path="verify-email/:verificationToken" element={<EmailVerification />} />,
  <Route path="verification-sent" element={<VerificationEmailSent />} />,
];

export default AuthRoutes;
