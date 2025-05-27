import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchUsers = async ()=> {
    setLoading(true)
    try{
      const response = await axios.get("https://testpsyedu.limsa.uz/users")      
      setUsers(response?.data?.data)
    }catch(error){
      console.log(error);
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=> {
    fetchUsers()
  },[])
  return (
    <section className='pt-10 bg-gray-100 flex flex-col py-4 px-8'>
      <h1 className='font-bold text-2xl py-1 pb-4'>Users</h1>
      <table>
        <thead>
          <tr className='bg-gray-300' >
            <th className='border border-gray-300 px-4 py-2 text-sm text-gray-800'>№</th>
            <th className='border border-gray-300 px-4 py-2 text-sm text-gray-800'>FirtName</th>
            <th className='border border-gray-300 px-4 py-2 text-sm text-gray-800'>LastName</th>
            <th className='border border-gray-300 px-4 py-2 text-sm text-gray-800'>Phone</th>
            <th className='border border-gray-300 px-4 py-2 text-sm text-gray-800'>SchoolName</th> 
            <th className='border border-gray-300 px-4 py-2 text-sm text-gray-800'>Address</th>
          </tr>
        </thead>
        <tbody>
          {
            loading ? <div className='loader'></div> :
            users && users.map((item, index)=>(
            <tr key={item.id}>
              <td className='border border-gray-300 px-4 py-2 text-sm text-gray-800'>{index+1}</td>
              <td className='border border-gray-300 px-4 py-2 text-sm text-gray-800'>{item?.firstName}</td>
              <td className='border border-gray-300 px-4 py-2 text-sm text-gray-800'>{item?.lastName}</td>
              <td className='border border-gray-300 px-4 py-2 text-sm text-gray-800'>{item?.phone}</td>
              <td className='border border-gray-300 px-4 py-2 text-sm text-gray-800'>{item?.schoolName}</td>
              <td className='border border-gray-300 px-4 py-2 text-sm text-gray-800'>{item?.region?.name}</td>
          </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  )
}

export default Users