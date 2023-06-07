import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Classes from "../../Pages/Classes/Classes";
import Instructors from "../../Pages/Instructors/Instructors";

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
      ]
    },
    {
        
    }
]);

export default router;