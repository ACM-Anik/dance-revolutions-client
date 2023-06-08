import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUsers, FaCalendarWeek, FaUpload } from 'react-icons/fa';

const DashboardLayout = () => {

    const isAdmin = null;

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

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
                                <>
                                    <li><NavLink to="studentHome"><FaHome></FaHome> Student Dashboard</NavLink></li>
                                    <li><NavLink to="mySelectedClasses"><FaCalendarWeek></FaCalendarWeek> My Selected Classes</NavLink></li>
                                    <li><NavLink to="myEnrolledClasses"><FaShoppingCart></FaShoppingCart> My Enrolled Classes</NavLink></li>
                                    <li><NavLink to="paymentHistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                                </>
                        }
                        <li><NavLink to="/dashboard/addItem"><FaUpload></FaUpload>Add An Item</NavLink></li>
                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/classes">Classes</NavLink></li>
                        <li><NavLink to="/instructors">Instructors</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;