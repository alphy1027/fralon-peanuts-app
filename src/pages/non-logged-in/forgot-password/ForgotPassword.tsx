import LeftAngledBracket from "@/assets/svg/nav/LeftAngledBracket";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import Button from "@/components/UI-primitives/Button";
import Input from "@/components/UI-primitives/Input";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <SectionContainter className="w-full max-w-[420px]">
      <AuthPageContainer title="Forgot your Password?" body="Enter your email address and we'll send you a link to reset your password">
        <form className="flex w-full flex-col gap-y-6">
          <Input type="email" label="Email" id="email" placeholder="Enter your Email" />
          <Button type="submit" size="md" width="full">
            Send Reset Link
          </Button>
        </form>
        <Link to="/auth/login" className="text-primary text-body-lg flex items-center gap-x-2 self-center text-center font-medium">
          <LeftAngledBracket />
          <span className="">Go back to Login</span>
        </Link>
      </AuthPageContainer>
    </SectionContainter>
  );
};

export default ForgotPassword;
