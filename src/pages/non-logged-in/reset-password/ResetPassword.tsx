import TickIcon from "@/assets/svg/nav/TickIcon";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import FormErrorContainer from "@/components/sections/components/FormErrorContainer";
import Button from "@/components/UI-primitives/Button";
import Input from "@/components/UI-primitives/Input";
import Loading from "@/components/UI-primitives/Loading";
import { useResetPasswordMutation } from "@/hooks/query-hooks/auth/useResetPasswordMutation";
import { ResetPasswordPayload } from "@/types";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { resetPasswordToken } = useParams();
  const { mutate, isPending, error, isSuccess } = useResetPasswordMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordPayload>();

  if (!resetPasswordToken) {
    return <Navigate to="/auth/login" />;
  }

  const handleSetNewPassword = (data: Pick<ResetPasswordPayload, "password" | "confirmPassword">) => {
    mutate({ ...data, resetPasswordToken });
  };

  if (isPending) return <Loading className="h-20 w-20" />;
  if (isSuccess) {
    return (
      <AuthPageContainer Icon={<TickIcon />} title="Password reset Successfully" body="Your password reset was successful, you can now login to your account">
        <Button onClick={() => navigate("/auth/login")} variant="outline" size="md">
          Login
        </Button>
      </AuthPageContainer>
    );
  }

  return (
    <AuthPageContainer title="Reset Password" body="Enter your new password to complete your password reset process">
      <FormErrorContainer errorMsg={(error && error.response?.data.message) || (error && error.message)} />
      <form onSubmit={handleSubmit(handleSetNewPassword)} className="flex w-full max-w-[442px] flex-col gap-y-6">
        <Input
          error={errors.password && errors.password.message}
          type="password"
          label="New Password"
          id="password"
          placeholder="Password"
          {...register("password", {
            required: "Please enter your new password",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        <Input
          error={errors.confirmPassword && errors.confirmPassword.message}
          type="password"
          label="Confirm Password"
          id="confirmPassword"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: "Please confirm your new password",
            validate: (value) => value === watch("password") || "Passwords do not match",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        <Button type="submit" size="md" className="self-center" width="full">
          Reset Password
        </Button>
      </form>
    </AuthPageContainer>
  );
};

export default ResetPassword;
