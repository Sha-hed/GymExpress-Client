import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import IsAdmin from "../Hooks/IsAdmin";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const [isAdmin, isLoading] = IsAdmin();

    console.log('Admin panel er ki obosta ', isAdmin, isLoading)
    const location = useLocation();

    if (loading || isLoading) {
        return <div className="w-full h-screen border-2 border-red-600 flex justify-center items-center">
            <div className="w-32 h-32 rounded-full bg-gray-300 animate-pulse">

            </div>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location.pathname }}></Navigate>

};

export default PrivateRoute;