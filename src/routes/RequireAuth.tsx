import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
    const user = 'alphy';

    return user ? <Outlet /> : <Navigate to='/' replace={true} />
}

export default RequireAuth