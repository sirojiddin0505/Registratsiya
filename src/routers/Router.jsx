import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Layout from "../layout/layout";
import Index from "../pages/kirish";

export const Router = createBrowserRouter([
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/layout',
        element:<Layout/>
    },
    {
        path:'/index',
        element:<Index/>
    }
])