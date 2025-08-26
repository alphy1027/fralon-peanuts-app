import CloseIcon from "@/assets/svg/nav/CloseIcon";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import BodyText from "@/components/UI-primitives/BodyText";
import Button from "@/components/UI-primitives/Button";
import { NavigateFunction } from "react-router-dom";

const FailureEmailVerification = ({ navigate, errorMsg, action }: { navigate: NavigateFunction; errorMsg: string; action: "resend" | "login" | "retry" }) => {
  return (
    <AuthPageContainer bg="error-light" Icon={<CloseIcon size={32} className="fill-error" />} title="Email Verification Failed" body={errorMsg}>
      {action === "login" ? (
        <Button onClick={() => navigate("/auth/login")} size="md" width="full">
          login
        </Button>
      ) : action === "resend" ? (
        <Button size="md" width="full">
          Resend
        </Button>
      ) : (
        <BodyText>Please try again later</BodyText>
      )}
    </AuthPageContainer>
  );
};

export default FailureEmailVerification;
