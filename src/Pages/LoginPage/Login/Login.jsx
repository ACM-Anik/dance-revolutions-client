import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../../Providers/AuthProvider";
import { toast } from "react-hot-toast";



const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const onSubmit = data => {
        console.log(data)

        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully logged in!')
                reset();
                navigate(from, { replace: true });
        })
    }


    return (
        <>
            <Helmet>
                <title>Login | Dance Revolutions</title>
            </Helmet>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-0 lg:h-[600px] w-full ">
                    <div className="text-center md:w-1/2 lg:text-left h-full">
                        <img src="https://i.ibb.co/x2NMHCz/loginjpg.jpg" alt="" className="h-full object-cover"/>
                    </div>
                    <div className="card md:w-1/2 max-w-sm bg-base-100 h-full rounded-none">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Email is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={showPassword}
                                        onChange={() => setShowPassword(!showPassword)}
                                    />
                                    <span className="label-text mx-2">Show Password</span>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn bg-black text-white hover:bg-[#1a1919]" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="pl-8 pb-4"><small>New To Dance Revolutions? <Link to="/register" className="text-[#2088d8] font-bold">Register</Link> </small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;