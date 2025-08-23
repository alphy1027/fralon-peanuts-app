import Button from "@/components/UI-primitives/Button";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { FC } from "react";
import Input from "@/components/UI-primitives/Input";
import UserIcon from "@/assets/svg/nav/UserIcon";
import Password from "@/assets/svg/nav/Password";
import FormContainer from "@/components/sections/FormContainer";

interface FormData {
  username: string;
  email: string;
  phoneNumber: number;
  password: string;
  confirmPassword: string;
}

interface SignupFormProps {
  handleSignup: SubmitHandler<FormData>;
  loading: boolean;
  signupSuccess: boolean;
  signUpErrorMsg: string;
}

const SignupForm: FC<SignupFormProps> = ({ handleSignup = () => {} }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Signup Form data submitted:", data);
    handleSignup(data);
    reset();
  };

  return (
    <FormContainer>
      <h2 className="text-body-default text-heading-1 text-center font-bold">Sign up</h2>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          {errors.username && <p>{errors.username.message}</p>}
          <Input
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
          {errors.email && <p>{errors.email.message}</p>}
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

        <div className="">
          {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}

          <Input
            leftIcon={<UserIcon className="h-5 w-5" />}
            type="tel"
            id="phone"
            label="Phone"
            placeholder="Type your phone number..."
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
          />
        </div>

        <div className="">
          {errors.password && <p>{errors.password.message}</p>}

          <Input
            leftIcon={<Password />}
            /* rightIcon={<Visible />} */
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
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

          <Input
            leftIcon={<Password />}
            /* rightIcon={<Visible />} */
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

        <Button size="md" type="submit" className="w-full">
          Sign Up
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
