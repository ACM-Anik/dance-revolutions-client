import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Classes from "../../Pages/Classes/Classes";
import Instructors from "../../Pages/Instructors/Instructors";
import Login from "../../Pages/LoginPage/Login/Login";
import Register from "../../Pages/LoginPage/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MySelectedClasses from "../../Pages/Dashboard/StudentDashboard/MySelectedClasses";
import MyEnrolledClasses from "../../Pages/Dashboard/StudentDashboard/MyEnrolledClasses";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import StudentHome from "../../Pages/Dashboard/StudentDashboard/StudentHome";
import AddAClass from "../../Pages/Dashboard/InstructorDashboard/AddAClass";
import AdminHome from "../../Pages/Dashboard/AdminDashboard/AdminHome";
import ManageClasses from "../../Pages/Dashboard/AdminDashboard/ManageClasses";
import ManageUsers from "../../Pages/Dashboard/AdminDashboard/ManageUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import InstructorHome from "../../Pages/Dashboard/InstructorDashboard/InstructorHome";
import MyClasses from "../../Pages/Dashboard/InstructorDashboard/MyClasses";
import ManageFeedback from "../../Pages/Dashboard/AdminDashboard/ManageFeedback";
import Payment from "../../Pages/Dashboard/StudentDashboard/Payment";
import PaymentHistory from "../../Pages/Dashboard/StudentDashboard/PaymentHistory";
import InstructorRoute from "../InstructorRoute/InstructorRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'dashboard',
                element: <ErrorPage></ErrorPage>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            // Dashboard:----
            {
                path: 'dashboard',
                element: <PrivateRoute>
                    <DashboardLayout></DashboardLayout>
                </PrivateRoute>,
                children: [
                    {
                        path: 'studentHome',
                        element: <StudentHome></StudentHome>
                    },
                    {
                        path: 'mySelectedClasses',
                        element: <MySelectedClasses></MySelectedClasses>
                    },
                    {
                        path: 'payment/:id',
                        element: <Payment></Payment>
                    },
                    {
                        path: 'myEnrolledClasses',
                        element: <MyEnrolledClasses></MyEnrolledClasses>
                    },
                    {
                        path: 'paymentHistory',
                        element: <PaymentHistory></PaymentHistory>
                    },
                    // Instructor:-
                    {
                        path: 'instructorHome',
                        element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
                    },
                    {
                        path: 'myAddedClasses',
                        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
                    },
                    {
                        path: 'addAClass',
                        element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
                    },
                    // Admin Routes:-
                    {
                        path: 'adminHome',
                        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
                    },
                    {
                        path: 'manageUsers',
                        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
                    },
                    {
                        path: 'manageClasses',
                        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
                    }
                ]
            },
            {
                path: 'manageFeedback/:id',
                element: <AdminRoute><ManageFeedback></ManageFeedback></AdminRoute>
            }
        ]
    }
]);

export default router;