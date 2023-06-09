import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const handleLogOut = () => {

        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navRoutes = <>
        <li className="font-bold"><NavLink to="/">Home</NavLink></li>
        {user &&
            <li className="font-bold"><NavLink to={
                isAdmin ?
                    "/dashboard/adminHome"
                    :
                    (
                        isInstructor ? 
                            "/dashboard/instructorHome"
                            :
                            "/dashboard/studentHome"
                    )
            }
            >Dashboard</NavLink></li>
        }
        {/* <li><NavLink to="/dashboard/mySelectedClasses">dashboard</NavLink></li> */}
        <li className="font-bold"><NavLink to="/classes">classes</NavLink></li>
        <li className="font-bold"><NavLink to="/instructors">Instructors</NavLink></li>
    </>

    const navIcons = <>
        <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <button className="btn btn-ghost btn-circle px-4">
            <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="badge badge-xs bg-[#2088d8] indicator-item"></span>
            </div>
        </button>
    </>

    return (
        <div className="shadow-black">
            <div className="navbar bg-[#f4f3f0f1] h-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="z-50 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {navRoutes}
                            {navIcons}
                        </ul>
                    </div>
                    <Link to="/" className=" normal-case text-xl">
                        <img style={{ height: '80px' }} src={logo} alt="Website logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navRoutes}
                    </ul>
                </div>
                <div className="navbar-end">
                    <li className="hidden lg:flex">{navIcons}</li>

                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-circle avatar border border-[#2088d8]">
                                    {
                                        user &&
                                        <div className="w-10 rounded-full ring ring-[#2088d8] ring-offset-base-100 ring-offset-2">
                                            {
                                                user?.photoURL ?
                                                    <img src={user?.photoURL} alt='profile' />
                                                    :
                                                    <button className="btn btn-circle rounded-full  text-xs">Profile</button>
                                            }
                                        </div>
                                    }
                                </label>
                                <div className="">
                                    <ul tabIndex={0} className="z-50 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between hover:bg-black hover:text-white hover:border-black font-semibold">
                                                Profile
                                                <span className="badge border-black">New</span>
                                            </a>
                                        </li>
                                        <li><button onClick={handleLogOut} className="btn-sm ps-4 font-semibold text-center btn-outline text-black border-black hover:bg-black hover:border-black">Logout</button></li>
                                    </ul>
                                </div>
                            </div>
                            :
                            <Link to="/login"><button className="btn btn-outline text-black rounded-lg border-black hover:border-[#1a1919] hover:bg-[#1a1919]">Login</button></Link>

                    }
                </div>
            </div>
        </div>
    );
};


export default Navbar;