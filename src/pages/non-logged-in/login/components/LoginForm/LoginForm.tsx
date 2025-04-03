import { FC } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/components/UI-primitives/Button";

interface FormData {
  email: string;
  password: string;
}

interface LoginFormProps {
  handleLogin: SubmitHandler<FormData>;
  loading: boolean;
  loginSuccess: boolean;
  loginErrorMsg: string;
}

const LoginForm: FC<LoginFormProps> = ({ handleLogin }) => {
  const { register, handleSubmit } = useForm<FormData>();

  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Type your email..."
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
        />

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
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
        <Button onClick={() => alert("Log In button clicked")}>Log In</Button>

        <Link to="">Forgot password?</Link>
        <p>
          Don't have an account?
          <Link to="auth/signup"> Sign Up</Link>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
