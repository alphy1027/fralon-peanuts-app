import CloseIcon from "@/assets/svg/nav/CloseIcon";
import LeftAngledBracket from "@/assets/svg/nav/LeftAngledBracket";
import TickIcon from "@/assets/svg/nav/TickIcon";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import Button from "@/components/UI-primitives/Button";
import Input from "@/components/UI-primitives/Input";
import Loading from "@/components/UI-primitives/Loading";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import { useForgotPasswordMutation } from "@/hooks/query-hooks/auth/useForgotPasswordMutation";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

type FormValue = {
  email: string;
};

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { mutate, isPending, error, isSuccess } = useForgotPasswordMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const handleSubmitEmail = (data: FormValue) => {
    mutate(data.email);
  };

  if (isPending) return <Loading className="h-20 w-20" />;
  if (error) {
    return (
      <AuthPageContainer Icon={<CloseIcon size={40} className="fill-error" />} bg="error-light" title="Failed to complete request" body={error.response?.data.message || error.message}>
        <Button onClick={() => navigate("/auth/login")} variant="outline" size="md">
          Try again
        </Button>
      </AuthPageContainer>
    );
  }
  if (isSuccess) return <AuthPageContainer Icon={<TickIcon />} title="Email sent Successfully" body="Please check you Email and follow the link we sent you to reset your password" />;

  return (
    <SectionContainter className="w-full max-w-[420px]">
      <AuthPageContainer title="Forgot your Password?" body="Enter your email address and we'll send you a link to reset your password">
        {/* <FormErrorContainer errorMsg={error && error.response?.data.message} /> */}
        <form className="flex w-full flex-col gap-y-6" onSubmit={handleSubmit(handleSubmitEmail)}>
          <Input
            error={errors.email && errors.email.message}
            type="email"
            label="Email"
            id="email"
            placeholder="Enter your Email"
            {...register("email", {
              required: "Please enter your email",
            })}
          />
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
