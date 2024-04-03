import React, { useEffect, useState } from 'react'
import Card from './Card'
import {useDispatch, useSelector} from "react-redux";
import { setUsers, userSelector } from '../features/user/userSlice';



export default function UserList({}) {

  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const users = useSelector(userSelector);

  useEffect(()=>{

    async function getUsers() {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/users/?page=${page}`);
      const data = await response.json();
      const users = data.data;
      dispatch(setUsers(users));
    }

      getUsers();

  },[page]);

  

  
  return (
    <>
    
    <div className=" flex flex-row justify-center ">

                    <div className="grid mb-8 border rounded-lg shadow-sm dark:border-gray-700 md:grid-cols-4 sm:grid-cols-2  bg-white dark:bg-gray-800">
                    {users?users.length==0?<h1 className='text-center text-gray-900 p-3 bg-green-50'>Loading...</h1> :users.map((user)=>
                        <div key={user._id}>

                            <Card user={user}/>
                        </div>
                    ):<><h1 className='text-gray-900  text-center text-2xl font-semibold p-3'>No User Found</h1></>}
                    </div>
                    </div>
                    <div className="flex justify-around items-center text-gray-800 mt-5 mb-5">
      <div className=" bg-blue-50 flex justify-center items-center p-3 cursor-pointer" onClick={()=>{setPage(page-1)}}>
      <img src="https://cdn-icons-png.flaticon.com/128/1634/1634157.png" alt="next" className='w-[20px] h-[20px]'/>
      <span>Prev Page</span>
      </div>
      <div className="bg-blue-50 flex justify-center items-center p-3 cursor-pointer" onClick={()=>{setPage(page+1)}}>
      <img src="https://cdn-icons-png.flaticon.com/128/9692/9692032.png" alt="prev" className='w-[20px] h-[20px]'/>
      <span>Next Page</span>
      </div>
    </div>
  </>
  )
}