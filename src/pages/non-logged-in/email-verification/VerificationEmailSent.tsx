import MessageIcon from "@/assets/svg/nav/MessageIcon";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import BodyText from "@/components/UI-primitives/BodyText";
import Button from "@/components/UI-primitives/Button";
import { useResendVerificationEmailMutation } from "@/hooks/query-hooks/auth/useResendVerificationEmailMutation";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";

const VerificationEmailSent = () => {
  const location = useLocation();
  const { mutateAsync, isPending } = useResendVerificationEmailMutation();
  if (!location.state || !location.state.email || !location.state.username) {
    return <Navigate to="/auth/signup" replace />;
  }
  const { email, username } = location.state;

  const handleResend = async () => {
    const verifyPromise = mutateAsync(email);

    toast.promise(verifyPromise, {
      loading: "Resending verification Email",
      success: "Email successfull sent, check you Email",
      error: "Failed to resend verification Email",
    });
  };

  return (
    <AuthPageContainer bg="primary-light" Icon={<MessageIcon />} title="Verification Email Sent" body={<VerifyBody username={username} email={email} />}>
      <div className="h-[2px] w-full bg-slate-200"></div>
      <BodyText className="self-center">Did not receive the email? </BodyText>
      <Button loading={isPending} onClick={handleResend} variant="outline" className="text-primary">
        {isPending ? "Resending Email..." : "Resend Email"}
      </Button>
    </AuthPageContainer>
  );
};

const VerifyBody = ({ email, username }: { email: string; username: string }) => {
  return (
    <>
      <BodyText className="text-body-lg pb-4 font-bold">Welcome, {username}</BodyText>
      <BodyText>
        We have sent you an email at <span className="text-primary font-bold">{email}</span>. Check your inbox and follow the link for to activate your account
      </BodyText>
    </>
  );
};

export default VerificationEmailSent;
