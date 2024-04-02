import React, { useState } from 'react'

function Search({ setUsers }) {

    const [formData, setFormData] = useState({ name: "", domain: "", gender: '', availabilty: '' });


    const handleForm = (e) => {
        e.preventDefault();
        if(formData.name=="" && formData.domain=="" && formData.gender=="" && formData.availabilty==""  ){
            alert("Add Atleast One Filter")
            return;
        }
        try {
           
            const getFilteredUsers = async () => {

                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/users/filter`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    redirect: "follow",
                    referrerPolicy: "no-referrer",
                    body: JSON.stringify(formData),
                });
                const data = await response.json();
                const users = data.data;

                setUsers(users)
            }
            getFilteredUsers();
        } catch (error) {

            console.log("something went wrong")
        }
    }




    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    return (
        <>
            
            <div className="flex justify-center mb-4 w-screen max-w-screen-md">

                <div className="flex flex-col">
                    <div className="rounded-xl border border-gray-200 bg-green-50 p-6 shadow-lg">
                        <form className="" onSubmit={handleForm}>
                            <div className="relative mb-10 w-full flex  items-center justify-between rounded-md">
                                <svg className="absolute left-2 block h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8" className=""></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
                                </svg>
                                <input type="text" name="name" onChange={handleChange} className="h-12 w-full cursor-text rounded-md  text-gray-900 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="SearchByName, Domain, Gender, Availability etc" value={formData.name} />
                            </div>

                            <div className="grid grid-cols-1  gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                <div className="flex flex-col">
                                    <label htmlFor="gender" className="text-sm font-medium text-gray-900">Gender</label>

                                    <select id="gender" onChange={handleChange} name="gender" className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-400">
                                        <option value={""}>Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="domain" className="text-sm font-medium text-gray-900">Domain</label>

                                    <select id="domain" onChange={handleChange} name="domain" className="mt-2 block w-full rounded-md border border-gray- px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-400">
                                        <option value={""}>Select</option>
                                        <option>IT</option>
                                        <option>Finance</option>
                                        <option>Sales</option>
                                        <option>Marketing</option>
                                        <option>UI Designing</option>
                                        <option>Management</option>
                                    </select>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="availabilty" className="text-sm font-medium text-gray-900" >Availability</label>

                                    <select id="availabilty" onChange={handleChange} name="availabilty" className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-400">
                                        <option value={""}>Select</option>
                                        <option>Available</option>
                                        <option>Not Available</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-6 grid w-full grid-cols-2 justify-center space-x-4 md:flex">
                                <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' onClick={handleForm}>Search</button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>


        </>
    )
}

export default Search
