import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/components/UI-primitives/Button";
import Input from "@/components/UI-primitives/Input";
import UserIcon from "@/assets/svg/nav/UserIcon";
import Password from "@/assets/svg/nav/Password";
import Loading from "@/components/UI-primitives/Loading";
import FormContainer from "@/components/sections/FormContainer";
import { useEffect } from "react";

interface FormData {
  email: string;
  password: string;
}

interface LoginFormProps {
  handleLogin: SubmitHandler<FormData>;
  isPending: boolean;
  errorMsg?: string;
}

const LoginForm = ({ handleLogin, isPending, errorMsg }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    if (errorMsg) {
      setError("root", {
        type: "server",
        message: errorMsg,
      });
    }
  }, [errorMsg]);

  return (
    <FormContainer errorMsg={errors.root && errors.root.message} title="Login">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(handleLogin)}>
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

        <div>
          <Input
            error={errors.password && errors.password.message}
            leftIcon={<Password />}
            /* rightIcon={<Visible />} */
            type="text"
            id="password"
            label="Password"
            placeholder="Type your password..."
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
        </div>

        <Link to="/auth/forgot-password" className="text-primary self-end">
          Forgot password?
        </Link>

        <Button type="submit" size="md" width="full" leftIcon={isPending && <Loading className="fill-brand-white h-6 w-6" />} disabled={isPending}>
          {isPending ? "Logging in..." : "Log in"}
        </Button>

        <p className="text-center">
          Don't have an account?{" "}
          <Link className="text-primary" to="/auth/signup">
            Sign Up
          </Link>
        </p>
      </form>
    </FormContainer>
  );
};

export default LoginForm;
