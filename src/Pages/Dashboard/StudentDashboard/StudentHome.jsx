import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const StudentHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <Helmet>
                <title>Dashboard Home | Dance Revolutions</title>
            </Helmet>
            <h1 className="text-3xl font-bold">Hello! <span className="text-6xl font-bold text-[#2088d8]">{user?.displayName}</span></h1>
        </div>
    );
};

export default StudentHome;