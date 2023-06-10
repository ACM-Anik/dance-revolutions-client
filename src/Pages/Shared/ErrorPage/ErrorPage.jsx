import { Link, useRouteError } from 'react-router-dom';
import err from "../../../assets/404.json";
import Lottie from "lottie-react";


const ErrorPage = () => {
    const { error } = useRouteError();

    return (
        <div className="hero min-h-screen" >
            <div className=""></div>
            <div className="hero-content text-center">
                <div className="max-w-lg flex flex-col items-center justify-center px-5 my-8">

                    <div className='max-w-lg text-center'>
                        <Lottie animationData={err} loop={true} />;
                        {/* TODO: */}
                        <p className=' font-semibold md:text-2xl mb-4'>
                            {error && error?.message}
                        </p>
                        <Link to='/' className='btn text-white rounded-lg border-0 bg-black hover:bg-[#1b1b1b] my-2'>
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ErrorPage;
