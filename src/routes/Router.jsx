import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/login/Login"
import Index from "../pages/kirish/Index"
import Dashboard from "../pages/dashboard/Dashboard"
import Users from "../pages/users/Users"
import Region from "../pages/region/Region"
import Lesson from "../pages/lesson/Lesson"
import Test from "../pages/test/Test"
import App from "../App"
import News from "../pages/news/News"

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
        element:<App />,
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
            },
            {
                path: "/lesson",
                element: <Lesson/>
            },
            {
                path: "/test",
                element: <Test/>
            },
            {
                path: "/news",
                element: <News/>
            }
        ]
    }
])
    