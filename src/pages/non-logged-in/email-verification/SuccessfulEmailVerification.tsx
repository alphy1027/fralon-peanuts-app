import TickIcon from "@/assets/svg/nav/TickIcon";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import Button from "@/components/UI-primitives/Button";
import { NavigateFunction } from "react-router-dom";

const SuccessfulEmailVerification = ({ navigate }: { navigate: NavigateFunction }) => {
  return (
    <AuthPageContainer Icon={<TickIcon />} title="Email Verification successful" body="Email verification completed. You can now login to your account">
      <Button onClick={() => navigate("/auth/login")} size="md" width="full">
        Login
      </Button>
    </AuthPageContainer>
  );
};

export default SuccessfulEmailVerification;
