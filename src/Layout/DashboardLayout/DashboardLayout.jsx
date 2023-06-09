import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUsers, FaCalendarWeek, FaUpload } from 'react-icons/fa';
import useRole from "../../Hooks/useRole";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";

const DashboardLayout = () => {
    const [isAdmin, isInstructor] = useRole();
    // const {user, loading} = useContext(AuthContext);
    // const isAdmin = null;
    // const isInstructor = null;

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center p-4">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2 " className="btn border-2 border-[#2088d8] drawer-button lg:hidden">Options</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {
                            isAdmin ? 
                                <>
                                    <li><NavLink to="adminHome"><FaHome></FaHome> Admin Home</NavLink></li>
                                    <li><NavLink to="manageClasses"><FaCalendarAlt></FaCalendarAlt> Manage Classes</NavLink></li>
                                    <li><NavLink to="manageUsers"><FaUsers></FaUsers> Manage Users</NavLink></li>
                                </>
                                :
                                (
                                    isInstructor ?

                                    <li><NavLink to="/dashboard/addAClass"><FaUpload></FaUpload>Add A Class</NavLink></li>
                                :    
                                <>
                                    <li><NavLink to="studentHome"><FaHome></FaHome> Student Dashboard</NavLink></li>
                                    <li><NavLink to="mySelectedClasses"><FaCalendarWeek></FaCalendarWeek> My Selected Classes</NavLink></li>
                                    <li><NavLink to="myEnrolledClasses"><FaShoppingCart></FaShoppingCart> My Enrolled Classes</NavLink></li>
                                    <li><NavLink to="paymentHistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                                </>
                                    
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;