import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div>
            <h1>AuthLayout</h1>
            <h2 className="">LOGO</h2>
            <Outlet />
        </div>
    )
}

export default AuthLayout