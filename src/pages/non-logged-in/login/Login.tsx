import Badge from "@/components/logo+title/Badge";
import LoginForm from "./components/LoginForm/LoginForm";

interface FormData {
  email: string;
  password: string;
}

interface LoginProps {
  handleLogin: (data: FormData) => void;
  loading: boolean;
  loginSuccess: boolean;
  loginErrorMsg: string;
}

const Login = ({ handleLogin, loading, loginSuccess, loginErrorMsg }: LoginProps) => {
  return (
    <section className="flex flex-col items-center gap-8 p-4">
      <Badge size="large" />
      <LoginForm handleLogin={handleLogin} loading={loading} loginSuccess={loginSuccess} loginErrorMsg={loginErrorMsg} />
    </section>
  );
};

export default Login;
