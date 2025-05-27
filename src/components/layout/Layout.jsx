import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import logo from '/Users/user/OneDrive/Desktop/react/Registratsiya/src/assets/PSYEDU.svg'

const Layout = () => {
  const navigate = useNavigate()
  const logOut = () => {
    localStorage.removeItem("token")
    navigate('/login')
  }
  return (
    <section className='min-h-screen'>
      <div className='flex'>
        <div className='flex flex-col gap-6 w-[300px] min-h-screen py-4 px-8 bg-blue-950'>
          <div><img src={logo} alt="" className='w-[80px] bg-blue-950'/></div>
          <NavLink to={'/'} className='font-semibold text-[18px] text-white'>Dashboard</NavLink>
          <NavLink to={'/users'} className='font-semibold text-[18px] text-white'>Users</NavLink>
          <NavLink to={'/users'} className='font-semibold text-[18px] text-white'>Regions</NavLink>
          <NavLink to={'/users'} className='font-semibold text-[18px] text-white'>Lessons</NavLink>
          <NavLink to={'/users'} className='font-semibold text-[18px] text-white'>Course-Module</NavLink>
          <NavLink to={'/users'} className='font-semibold text-[18px] text-white'>Test</NavLink>
          <button onClick={logOut} className='cursor-pointer bg-red-500 text-white py-[6px] w-[100px] rounded-[6px]'>LogOut</button>
        </div>
        <div className='bg-gray-200 w-full'>
          <Outlet/>
        </div>
      </div>
    </section>

  )
}

export default Layout