import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useForm } from 'react-hook-form';
import google from '/Users/user/OneDrive/Desktop/Registratsiya/src/assets/image.png'


const Index = () => {
    const {register, handleSubmit, formState:{errors}}= useForm()
  return (
     <section className='bg-blue-100' id='index'>
        <div className="container mx-auto  min-h-screen flex items-center justify-center border-2 border-red-600 ">
            <div className="bg-white py-6 px-8 rounded-[12px]  ">
                <Link to={"/login"}><button className='text-4xl font-bold cursor-pointer hover:opacity-80'><IoMdArrowRoundBack/></button></Link>
                <h1 className="font-bold text-center text-[30px] pb-8">Ro'yxatdan o'tish</h1>
                <form className='flex flex-col w-[350px]' onSubmit={handleSubmit()}>
                    <input type="text" className='border focus:border-blue-500 focus:bg-blue-50 rounded-[4px] bg-[#ffffff] outline-none p-2 mt-4' placeholder='Ismingizni kiriting' {...register("name", {required: 'ismingizni kiriting'})} />
                    {errors.name && <p className='text-red-500 text-[14px] ml-1'>{errors.name.message}</p>}
                    <input type="number" className='border focus:border-blue-500 focus:bg-blue-50 rounded-[4px] bg-[#ffffff] outline-none p-2 mt-4' placeholder='raqamingizni kiriting' {...register("number", {required:'raqam kiriting', minLength:{value:8, message:'minimum 8'}, maxLength:{value:12, message:"maximal 12 belgi"}})}/>
                    {errors.number && <p className='text-red-500 text-[14px] ml-1'>{errors.number.message}</p>}
                    <input type="email" className='border focus:border-blue-500 focus:bg-blue-50 rounded-[4px] bg-[#ffffff] outline-none p-2 mt-4' placeholder='email kiriting' {...register("email", {required:'email kiriting',})} />
                    {errors.email && <p className='text-red-500 text-[14px]'>{errors.email.message}</p>}
                    <button  type='submit' className="bg-blue-950 p-2 my-4 rounded-[4px] text-[#ffff] font-semibold hover:opacity-80 cursor-pointer">Hisob yaratish</button>
                        <NavLink className="flex justify-center items-center gap-1 cursor-pointer"> 
                            <img src={google} alt="logo google" className='w-[20px] h-[20px]' /> 
                            <button className='cursor-pointer text-blue-600'>Google orqali kiring</button>
                        </NavLink>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Index