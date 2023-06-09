import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useRole from "../../Hooks/useRole";


const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useRole();
    const location = useLocation();

    if(loading && isAdminLoading){
        return <span className="loading loading-spinner loading-lg text-[#2088d8]"></span>
    }
    
    if(user && isAdmin){
        return children;
    }

    return <Navigate to="/" state={{from: location}} replace></Navigate>;
};

export default AdminRoute;