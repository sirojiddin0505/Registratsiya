import axios from 'axios'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
    const {register, handleSubmit, formState:{errors }} = useForm()
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        try{
            const response = await axios.post('https://testpsyedu.limsa.uz/auth/login', {
                login: data.login,
                password: data.password
            })
            localStorage.setItem('token', response?.data?.access_token)
            navigate("/")
            alert("good")
        }catch(error){
            alert("bad")
        }
    }
  return (
    <section className='bg-blue-100'>
        <div className="container mx-auto  min-h-screen flex items-center justify-center ">
            <div className="bg-white py-8 px-6 rounded-[12px]  ">
                <h1 className="text-center font-bold text-[30px] pb-6">Kirish</h1>
                <form className='flex flex-col w-[350px]'>
                    <label className='block text-[20px] pb-1'>Login</label>
                    <input type="text" className='border focus:border-blue-500 focus:bg-blue-50 rounded-[4px] bg-[#ffffff] outline-none px-2 py-[6px]' placeholder='Loginni kiriting' {...register('login', {required:'login kiritish shart', minLength:{value:8, message:"kamida 6 ta belgi kiriting"}, maxLength:{value:16, message:"maximal belgi 16"}})}/>
                    {errors.login && <p className='text-red-500 text-[14px]'>{errors.login.message}</p>}
                    <label className='block text-[18px] mt-4 pb-1'>Parol</label>
                    <input type="password" className='border focus:border-blue-500 focus:bg-blue-50 rounded-[4px] bg-[#ffffff] outline-none px-2 py-[6px]' placeholder='Parolni kiriting' {...register('password', {required:"parolni kiriting", minLength:{value:8, message:"kamida 6 ta belgi kiriting"}, maxLength:{value:12, message:"maximal belgi 12"}})} />
                    {errors.password && <p className='text-red-500 text-[14px]'>{errors.password.message}</p>}
                    <button type='submit' className="bg-blue-950 p-2 mt-4 mb-2 rounded-[4px] text-[#ffff] font-semibold hover:opacity-80 cursor-pointer " onClick={handleSubmit(onSubmit)}>Kirish</button>
                    <NavLink to={"/index"} className="text-blue-600 text-center">Ro'yxatdan o'tish</NavLink>
                </form>
            </div>
        </div>
    </section>
)
}

export default Login