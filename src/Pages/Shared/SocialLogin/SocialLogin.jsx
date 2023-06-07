import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="px-10 pb-6 font-semibold">
            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn border-black hover:text-white hover:bg-black">
                    Google <FaGoogle className=""/>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;