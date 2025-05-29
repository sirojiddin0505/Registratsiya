import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const News = () => {
    const [news, setNews] = useState([])
    const {register, handleSubmit} = useForm()
    const [loading, setLoading] = useState()
    const [modal, setModal] = useState(false)
    const [file, setFile] = useState(null)
    const getNews = async()=> {
        setLoading(true)
        try{
            const res = await axios.get("https://testpsyedu.limsa.uz/advertisement")
            setNews(res?.data?.data)
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=> {
        getNews()
    }, [])
    const addNews = async (data)=> {
        const formData = new FormData()
        formData.append("title", data?.title)
        formData.append("file", data?.file)
        formData.append("finishAt", data?.finishAt)
        try{
            const res = axios.post("https://testpsyedu.limsa.uz/advertisement", formData)
        }catch(error){
            console.log(error);
        }
    }
  return (
    <section className='py-4 px-6'>
        <header className='flex justify-between py-4'>
            <h1 className='text-3xl font-semibold'>News</h1>
            <button className='cursor-pointer py-2 px-4 bg-blue-500 text-white rounded-md' onClick={()=> setModal(!modal)}>Add News</button>
        </header>
        {
            loading ? <div className='loader'></div> :
            
            news && news.map((item, index) => (
                <div>
                   <div className='w-[350px] rounded-2xl border-2 overflow-hidden'>
                      <video src={item?.video} controls className='w-full'></video>
                   </div>
                   <h3 className='py-2 text-2xl font-semibold'>{item?.title}</h3>
                </div>
            ))  
        }
        {
            modal ? <div className='flex justify-between items-center'>
                <input type="text" placeholder='title' {...register("title")} className='border outline-none py-1 px-2 focus:bg-blue-100 rounded-md'/>
                <input type="file" placeholder='Choose file' onChange={(e)=> setFile(e?.target.files[0])} className='border outline-none py-1 px-2 focus:bg-blue-100 rounded-md'/>
                <input type="date" placeholder='enter date' {...register("finishAt")} className='border outline-none py-1 px-2 focus:bg-blue-100 rounded-md' />
                <button onClick={() => setModal(false)} className='bg-red-500 py-2 px-4 rounded-md text-white cursor-pointer'>Close</button>
                <button onClick={handleSubmit(addNews)} className='bg-blue-500 py-2 px-4 rounded-md text-white cursor-pointer'>Add</button>
            </div> : ""
        }
    </section>
)
}

export default News