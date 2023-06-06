import { Link, useRouteError } from 'react-router-dom';
import err from '../../../assets/404.jpg';

const ErrorPage = () => {
    const { error } = useRouteError()

    return (
        <div className="hero min-h-screen" >
            <div className=""></div>
            <div className="hero-content text-center">
                <div className="max-w-lg flex flex-col items-center justify-center px-5 my-8">

                    <div className='max-w-lg text-center'>
                        <img className='w-[600px] shadow-xl rounded' src={err} alt="404" />
                        <p className=' font-semibold md:text-2xl mb-8'>
                            {error?.message}
                        </p>
                        <Link to='/' className='btn text-white rounded-lg border-0 bg-black hover:bg-[#1b1b1b]'>
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ErrorPage;
