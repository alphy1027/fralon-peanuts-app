import TickIcon from "@/assets/svg/nav/TickIcon";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import Button from "@/components/UI-primitives/Button";

const SuccessfulPasswordReset = () => {
  return (
    <AuthPageContainer Icon={<TickIcon />} title="Successful Password Reset" body="You can now use your new password to login to your account">
      <Button size="md" width="full">
        Login
      </Button>
    </AuthPageContainer>
  );
};

export default SuccessfulPasswordReset;
