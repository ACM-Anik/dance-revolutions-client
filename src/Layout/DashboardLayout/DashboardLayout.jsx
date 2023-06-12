import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaListAlt, FaHome, FaUsers, FaCalendarCheck, FaUpload, FaClipboardList, FaDollyFlatbed } from 'react-icons/fa';
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";


const DashboardLayout = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

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
                                    <li><NavLink to="adminHome"><FaHome></FaHome>Dashboard Home</NavLink></li>
                                    <li><NavLink to="manageClasses"><FaClipboardList></FaClipboardList> Manage Classes</NavLink></li>
                                    <li><NavLink to="manageUsers"><FaUsers></FaUsers> Manage Users</NavLink></li>
                                </>
                                :
                                (
                                    isInstructor ?

                                        <>
                                            <li><NavLink to="/dashboard/instructorHome"><FaHome></FaHome>Dashboard Home</NavLink></li>
                                            <li><NavLink to="/dashboard/addAClass"><FaUpload></FaUpload>Add A Class</NavLink></li>
                                            <li><NavLink to="/dashboard/myAddedClasses"><FaListAlt></FaListAlt>My Added Classes</NavLink></li>
                                        </>
                                        :
                                        <>
                                            <li><NavLink to="studentHome"><FaHome></FaHome>Dashboard Home</NavLink></li>
                                            <li><NavLink to="mySelectedClasses"><FaCalendarCheck></FaCalendarCheck> My Selected Classes</NavLink></li>
                                            <li><NavLink to="myEnrolledClasses"><FaDollyFlatbed></FaDollyFlatbed> My Enrolled Classes</NavLink></li>
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