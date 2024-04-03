import React, { useState } from 'react'
import UserList from '../components/UserList'
import Search from '../components/Search'

function Users() {
    const [toggle , setToggle] = useState(false);
  return (
    <>
        <div className='flex flex-col'>
        <div className="flex p-6  justify-between items-start">

                <div className="flex text-center text-gray-900 ml-5">
                    <h1 className='text-3xl font-semibold'>Users List</h1>
                </div>
          <button onClick={()=>{setToggle(!toggle)}} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Filter</button>
        </div>

        <div className="flex justify-center">
        {toggle?<Search/> : null}
        </div>
            

        <UserList />
        </div>
    </>
  )
}

export default Users
