import Login from "../Login";
import { SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "@/hooks/query-hooks/auth/useLoginMutation";

interface FormData {
  email: string;
  password: string;
}

const LoginContainer = () => {
  const { mutate: loginMutate, isPending, error, isSuccess } = useLoginMutation();

  const handleLogin: SubmitHandler<FormData> = (data) => {
    loginMutate(data);
  };

  return <Login handleLogin={handleLogin} loading={isPending} loginSuccess={isSuccess} loginErrorMsg={error?.message || ""} />;
};

export default LoginContainer;
