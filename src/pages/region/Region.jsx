import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Region = () => {
    const [regions, setRegions] = useState()
    const [loading, setLoading] = useState()
    const fetchUsers = async ()=>{
        setLoading(true)
        try{
            const res = await axios.get("https://testpsyedu.limsa.uz/region")
            setRegions(res?.data?.data)
        }catch(error){
            console.log(error);   
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=> {
        fetchUsers()
    }, [])
  return (
    <section className='px-10 py-2'>
        <h1 className='text-3xl text-[#232323] font-bold pb-4'>Regions</h1>
        <table>
        <thead>
          <tr className='bg-gray-200' >
            <th className='border border-gray-400 px-4 py-2 text-sm text-gray-800'>№</th>
            <th className='border border-gray-400 px-4 py-2 text-sm text-gray-800'>Name</th>
            <th className='border border-gray-400 px-4 py-2 text-sm text-gray-800'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            loading ? <div className='loader'></div> :
            regions && regions.map((item, index)=>(
              <tr key={item.id}>
               <td className='border border-gray-400 px-4 py-2 text-sm text-gray-800'>{index+1}</td>
               <td className='border border-gray-400 px-4 py-2 text-sm text-gray-800'>{item?.name}</td>
               <td className='border border-gray-400 px-4 py-2 text-sm text-gray-800'>
                <button className='bg-blue-700 text-white py-1 px-2 cursor-pointer rounded-sm'>Edit</button>
                <button className='bg-red-600 text-white py-1 px-2 cursor-pointer rounded-sm'>Delete</button>
               </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
)
}

export default Region