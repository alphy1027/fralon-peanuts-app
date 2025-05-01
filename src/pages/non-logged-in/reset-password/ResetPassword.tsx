import AuthPageContainer from "@/components/auth/AuthPageContainer";
import Button from "@/components/UI-primitives/Button";
import Input from "@/components/UI-primitives/Input";

const ResetPassword = () => {
  return (
    <AuthPageContainer title="Reset Password" body="Enter your new password to complete your password reset process">
      <form className="flex max-w-[442px] flex-col gap-y-6">
        <Input type="password" label="New Password" id="password" placeholder="Password" />
        <Input type="password" label="Confirm Password" id="confirm-password" placeholder="Confirm Password" />
        <Button type="submit" size="md" width="full">
          Reset Password
        </Button>
      </form>
    </AuthPageContainer>
  );
};

export default ResetPassword;
