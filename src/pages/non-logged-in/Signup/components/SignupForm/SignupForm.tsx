import Button from "@/components/UI-primitives/Button";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/components/UI-primitives/Input";
import UserIcon from "@/assets/svg/nav/UserIcon";
import Password from "@/assets/svg/nav/Password";
import FormContainer from "@/components/sections/FormContainer";
import { useSignupMutation } from "@/hooks/query-hooks/auth/useSignupMutation";
import Loading from "@/components/UI-primitives/Loading";
import { SignupPayload } from "@/types";
import toast from "react-hot-toast";
import { useEffect } from "react";

const SignupForm = () => {
  const { mutateAsync, isPending, error } = useSignupMutation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm<SignupPayload>();

  const handleSignupUser: SubmitHandler<SignupPayload> = async (data) => {
    console.log("Signup Form data submitted:", data);
    const signupResponse = mutateAsync(data);
    toast.promise(signupResponse, {
      loading: "Creating account",
      success: "Your account is ready",
      error: "Oops, Failed to create account",
    });
  };

  useEffect(() => {
    if (error) {
      setError("root", {
        type: "server",
        message: error.response?.data.message,
      });
    }
  }, [error]);

  return (
    <FormContainer title="Sign up" errorMsg={errors.root && errors.root.message}>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(handleSignupUser)}>
        <div className="">
          <Input
            error={errors.username && errors.username.message}
            leftIcon={<UserIcon className="h-5 w-5" />}
            type="text"
            id="username"
            label="Username"
            placeholder="Type your username..."
            {...register("username", {
              required: "Username is required",
            })}
          />
        </div>

        <div className="">
          <Input
            error={errors.email && errors.email.message}
            leftIcon={<UserIcon className="h-5 w-5" />}
            type="text"
            id="email"
            label="Email"
            placeholder="Type your email..."
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
        </div>

        <div className="">
          <Input
            error={errors.password && errors.password.message}
            leftIcon={<Password />}
            type="password"
            id="password"
            label="Password"
            placeholder="Type your password..."
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
        </div>

        <div className="pb-3">
          <Input
            error={errors.confirmPassword && errors.confirmPassword.message}
            leftIcon={<Password />}
            type="password"
            id="confirmPassword"
            label="Confirm Password"
            placeholder="Type your confirm password..."
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) => value === watch("password") || "Passwords do not match",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
        </div>

        <Button disabled={isPending} leftIcon={isPending && <Loading className="fill-brand-white h-6 w-6" />} size="md" type="submit" className="w-full">
          {isPending ? "Signing up" : "Sign up"}
        </Button>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-primary">
            Log In
          </Link>
        </p>
      </form>
    </FormContainer>
  );
};

export default SignupForm;
