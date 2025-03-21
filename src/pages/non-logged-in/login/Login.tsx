
import LoginForm from "./components/LoginForm/LoginForm"

interface FormData {
    email: string;
    password: string;
}


interface LoginProps {
    handleLogin: (data: FormData) => void;
    loading:boolean;
    loginSuccess:boolean;
    loginErrorMsg:string;
}

const Login = ({ handleLogin ,loading,loginSuccess,loginErrorMsg}:LoginProps) => {



    return (
        <div>
            <h1>Login to your Account</h1>
            <LoginForm 
            handleLogin={handleLogin}
            loading={loading}
            loginSuccess={loginSuccess}
            loginErrorMsg={loginErrorMsg}
            />
        </div>
    )
}

export default Login