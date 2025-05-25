import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from './layout/layout'
import Login from './pages/login/Login'

const App = () => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    useEffect(() =>{
        if(!token){
            navigate("login")
        }
    },[token])
    return token ? <Layout/> : <Login/>
}

export default App