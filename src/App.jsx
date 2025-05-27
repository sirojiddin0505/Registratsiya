import { useNavigate } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Login from "./pages/login/Login"
import { useEffect } from "react"

  
  export default function App() {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    useEffect(()=> {
        if(!token){
            navigate("/")
        }
    }, [token])
    return token ? <Layout/> : <Login/>
  }
  