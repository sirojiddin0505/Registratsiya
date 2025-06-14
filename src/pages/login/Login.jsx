import axios from 'axios'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import logo1 from "../../assets/logo.png"

const Login = () => {
    const {register, handleSubmit, formState:{errors }} = useForm()
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        try{
            const response = await axios.post('https://testpsyedu.limsa.uz/auth/login', {
                phone: data.phone,
                password: data.password
            })
            localStorage.setItem('token', response?.data?.access_token)
            navigate("/")
            toast.success("kirish muvaffaqiyatli amalga oshirildi")
        }catch(error){
            toast.error("parol yoki raqam noto'gri")
        }
    }
  return (
    <section className='bg-blue-100'>
        <div className="container mx-auto  min-h-screen flex items-center justify-center ">
            <div className="bg-white py-8 px-6 rounded-[12px]  ">
                <img src={logo1} alt="" className='w-[130px] mx-auto py-2' />
                <h1 className="text-center font-bold text-[28px] pb-6 text-blue-800 pt-2" >Hisobga kirish</h1>
                <form className='flex flex-col w-[350px]' onSubmit={handleSubmit(onSubmit)}>
                    <label className='block text-[20px] pb-1'>Telefon raqam</label>
                    <input type="text" className='border focus:border-blue-500 focus:bg-blue-50 rounded-[4px] bg-[#ffffff] outline-none px-2 py-[6px]' placeholder='Raqam kiriting' {...register('phone', {required:'raqam kiritish shart', minLength:{value:8, message:"kamida 6 ta belgi kiriting"}, maxLength:{value:16, message:"maximal belgi 16"}})}/>
                    {errors.phone && <p className='text-red-500 text-[14px]'>{errors.phone.message}</p>}
                    <label className='block text-[18px] mt-4 pb-1'>Parol</label>
                    <input type="password" className='border focus:border-blue-500 focus:bg-blue-50 rounded-[4px] bg-[#ffffff] outline-none px-2 py-[6px]' placeholder='Parolni kiriting' {...register('password', {required:"parolni kiriting", minLength:{value:8, message:"kamida 6 ta belgi kiriting"}, maxLength:{value:12, message:"maximal belgi 12"}})} />
                    {errors.password && <p className='text-red-500 text-[14px]'>{errors.password.message}</p>}
                    <button type='submit' className="bg-blue-950 p-2 mt-4 mb-2 rounded-[4px] text-[#ffff] font-semibold hover:opacity-80 cursor-pointer " onClick={handleSubmit(onSubmit)}>Kirish</button>
                    <ToastContainer/>
                    <NavLink to={"/index"} className="text-blue-600 text-center">Ro'yxatdan o'tish</NavLink>
                </form>
            </div>
        </div>
    </section>
)
}

export default Login