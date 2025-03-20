import { FC } from 'react'
import LoginForm from "./components/LoginForm/LoginForm"

interface FormData {
    email: string;
    password: string;
}


interface LoginProps {
    handleLogin: (data: FormData) => void;
}

const Login: FC<LoginProps> = ({ handleLogin = () => { } }) => {



    return (
        <div>
            <h1>Login to your Account</h1>
            <LoginForm handleLogin={handleLogin} />
        </div>
    )
}

export default Login