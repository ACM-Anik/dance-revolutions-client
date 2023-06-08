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
                        path: 'myEnrolledClasses',
                        element: <MyEnrolledClasses></MyEnrolledClasses>
                    },
                    {
                        path: 'paymentHistory',
                        element: <MyEnrolledClasses></MyEnrolledClasses>
                    },
                    // Instructor:-
                    // {
                    //     path: 'addItem',
                    //     element: <AdminRoute><AddItem></AddItem></AdminRoute>
                    // },
                    // Admin Routes:-
                    // {
                    //     path: 'adminHome',
                    //     element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
                    // },
                    // {
                    //     path: 'manageUsers',
                    //     element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
                    // },
                    // {
                    //     path: 'manageItems',
                    //     element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
                    // }
                ]
            }
        ]
    }
]);

export default router;