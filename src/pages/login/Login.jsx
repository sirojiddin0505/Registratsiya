import { useForm } from 'react-hook-form'

const Login = () => {
    const {register, handleSubmit, formState:{errors},} = useForm()

  return (
    <section className='bg-blue-100'>
        <div className="container mx-auto  min-h-screen flex items-center justify-center ">
            <div className="bg-white py-8 px-6 rounded-[12px]  ">
                <h1 className="text-center font-bold text-[30px] pb-6">Kirish</h1>
                <form className='flex flex-col w-[350px]' onSubmit={handleSubmit()}>
                    <label className='block text-[20px] my-1'>Login</label>
                    <input type="text" className='border focus:border-blue-500 focus:bg-blue-50 rounded-[4px] bg-[#ffffff] outline-none py-1 px-2' placeholder='Loginni kiriting' {...register("login", {required:'login kiritish shart', minLength:{value:8, message:"kamida 6 ta belgi kiriting"}})}/>
                    {errors.login && <p className='text-red-500'>{errors.login.message}</p>}
                    <label className='block text-[18px] pt-2 my-1'>Parol</label>
                    <input type="password" className='border focus:border-blue-500 focus:bg-blue-50 rounded-[4px] bg-[#ffffff] outline-none py-1 px-2' placeholder='Parolni kiriting' {...register('password', {required:"iltimos parolni kiriting"})} />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    <button  type='submit' className="bg-blue-950 mt-4 my-2 py-1 px-2 rounded-[4px] text-[#ffff] font-semibold hover:opacity-80 ">Kirish</button>
                    <a href="#index" className="text-blue-600 text-center">Ro'yxatdan o'tish</a>
                </form>
            </div>
        </div>
    </section>
)
}

export default Login