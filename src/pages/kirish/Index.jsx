import React from 'react'

const Index = () => {
  return (
     <section className='bg-blue-100' id='index'>
        <div className="container mx-auto  min-h-screen flex items-center justify-center border-2 border-red-600 ">
            <div className="bg-white py-10 px-6 rounded-[12px]  ">
                <h1 className="text-center font-bold text-[30px] pb-6">Ro'yxatdan o'tish</h1>
                <form className='flex flex-col w-[350px] gap-4'>
                    <input type="text" className='border focus:border-blue-500 focus:bg-blue-50 rounded-[4px] bg-[#ffffff] outline-none py-1 px-2' placeholder='Ismingizni kiriting' />
                    <input type="email" className='border focus:border-blue-500 focus:bg-blue-50 rounded-[4px] bg-[#ffffff] outline-none py-1 px-2' placeholder='email kiriting' />
                    <button  type='submit' className="bg-blue-950 py-1 px-2 rounded-[4px] text-[#ffff] font-semibold hover:opacity-80 ">Hisob yaratish</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Index