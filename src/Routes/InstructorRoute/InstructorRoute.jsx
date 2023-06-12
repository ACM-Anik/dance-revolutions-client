import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../../Hooks/useInstructor";




const InstructorRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [ isInstructor, isInstructorLoading ] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <span className="loading loading-spinner loading-lg text-[#2088d8]"></span>
    }
    
    if(user && isInstructor){
        return children;
    }

    return <Navigate to="/" state={{from: location}} replace></Navigate>;
};

export default InstructorRoute;