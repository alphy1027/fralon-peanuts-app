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
  return <LoginForm handleLogin={handleLogin} loading={loading} loginSuccess={loginSuccess} loginErrorMsg={loginErrorMsg} />;
};

export default Login;
