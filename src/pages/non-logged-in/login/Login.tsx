import LoginForm from "./components/LoginForm/LoginForm";

interface FormData {
  email: string;
  password: string;
}

interface LoginProps {
  handleLogin: (data: FormData) => void;
  isPending: boolean;
  errorMsg?: string;
}

const Login = ({ handleLogin, isPending, errorMsg }: LoginProps) => {
  return <LoginForm handleLogin={handleLogin} isPending={isPending} errorMsg={errorMsg} />;
};

export default Login;
