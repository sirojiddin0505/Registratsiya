import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Layout from "../layout/layout";
import Index from "../pages/kirish";
import App from "../App";

export const Router = createBrowserRouter([
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/index',
        element:<Index/>
    }
])