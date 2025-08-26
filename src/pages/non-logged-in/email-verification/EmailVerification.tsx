import Loading from "@/components/UI-primitives/Loading";
import { useEmailVerificationQuery } from "@/hooks/query-hooks/auth/useEmailVerificationQuery";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import SuccessfulEmailVerification from "./SuccessfulEmailVerification";
import FailureEmailVerification from "./FailureEmailVerification";
import EmptyPage from "@/components/sections/EmptyPage";

const EmailVerification = () => {
  const navigate = useNavigate();
  const { verificationToken } = useParams<{ verificationToken: string }>();
  if (!verificationToken) {
    return <Navigate to="/auth/signup" replace />;
  }
  const { data, isPending } = useEmailVerificationQuery(verificationToken);
  if (!data) return <EmptyPage>No data</EmptyPage>;
  if (data.success) return <SuccessfulEmailVerification navigate={navigate} />;
  if (!data.success) return <FailureEmailVerification navigate={navigate} action={data.statusCode === 409 ? "login" : data.statusCode === 400 ? "resend" : "retry"} errorMsg={data.message} />;
  return (
    <>
      {isPending && (
        <EmptyPage>
          <Loading className="h-14 w-14" />
        </EmptyPage>
      )}
    </>
  );
};

export default EmailVerification;
