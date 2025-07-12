import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/components/UI-primitives/Button";
import Input from "@/components/UI-primitives/Input";
import UserIcon from "@/assets/svg/nav/UserIcon";
import Password from "@/assets/svg/nav/Password";
/* import Visible from "@/assets/svg/nav/Visible"; */
/* import Hidden from "@/assets/svg/nav/hidden"; */

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

const LoginForm = ({ handleLogin, loading }: LoginFormProps) => {
  const { register, handleSubmit } = useForm<FormData>();

  return (
    <div className="flex w-[75%] max-w-[350px] flex-col gap-y-9 sm:w-[50%] md:w-[55%] lg:w-[40%]">
      <h2 className="text-body-default text-heading-1 text-center font-bold">Login</h2>
      <form className="w- flex flex-col gap-4" onSubmit={handleSubmit(handleLogin)}>
        <div className="">
          <Input
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
                message: "Password must be at least 6 characters long",
              },
            })}
          />
        </div>
        <Link to="/auth/forgot-password" className="text-primary self-end">
          Forgot password?
        </Link>
        <Button type="submit" size="md" width="full" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>

        <p className="text-center">
          Don't have an account?{" "}
          <Link className="text-primary" to="/auth/signup">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
