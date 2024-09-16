import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth.tsx";

const PrivateRoute = () => {
    const { user } = useAuth()

    if (!user) return <Navigate to="/login" />;
    return <Outlet />;
};

export default PrivateRoute;