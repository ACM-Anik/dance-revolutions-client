import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet></Outlet>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
]);

export default router;