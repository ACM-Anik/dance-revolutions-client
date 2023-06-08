import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const StudentHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1 className="text-5xl font-bold">Hello! {user.displayName}</h1>
        </div>
    );
};

export default StudentHome;