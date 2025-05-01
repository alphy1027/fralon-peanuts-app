import MessageIcon from "@/assets/svg/nav/MessageIcon";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import BodyText from "@/components/UI-primitives/BodyText";
import { Link } from "react-router-dom";

const VerificationEmailSent = () => {
  return (
    <AuthPageContainer Icon={<MessageIcon />} title="Verification Email Sent" body="We have sent you an email at reddington@gmail.com. Check your inbox and follow the link for verification">
      <div className="h-[2px] w-full bg-slate-200"></div>
      <BodyText className="self-center">
        Did not receive the email?{" "}
        <Link to="" className="text-primary underline">
          Resend Email
        </Link>
      </BodyText>
    </AuthPageContainer>
  );
};

export default VerificationEmailSent;
