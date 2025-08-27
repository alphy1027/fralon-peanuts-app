import Login from "../Login";
import { SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "@/hooks/query-hooks/auth/useLoginMutation";

interface FormData {
  email: string;
  password: string;
}

const LoginContainer = () => {
  const { mutate: loginMutate, isPending, error } = useLoginMutation();

  const handleLogin: SubmitHandler<FormData> = (data) => {
    loginMutate(data);
  };

  return <Login handleLogin={handleLogin} isPending={isPending} errorMsg={error?.response?.data.message} />;
};

export default LoginContainer;
