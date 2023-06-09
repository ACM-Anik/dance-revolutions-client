import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";


const InstructorHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <Helmet>
                <title>Dashboard | Dance Revolutions</title>
            </Helmet>
            <h1 className="text-3xl font-bold">Hello! <span className="text-6xl font-bold text-[#2088d8]">{user?.displayName}</span></h1>
        </div>
    );
};

export default InstructorHome;