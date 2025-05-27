import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Login from "../pages/login/Login"
import Index from "../pages/kirish/Index"
// import App from "../App"
import Dashboard from "../pages/dashboard/Dashboard"
import Users from "../pages/users/Users"
import Region from "../pages/region/Region"

export const Router = createBrowserRouter([
    {
        path:"/login",
        element:<Login />
    },
    {
        path:"/index",
        element: <Index/>
    },
    {
        path:'/',
        element:<Layout />,
        children:[
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path:"/users",
                element: <Users/>
            },
            {
                path: "/region",
                element: <Region/>  
            }
        ]
    }
])
    