import React from 'react'

export default function Card({user}) {
    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-85 m-2 ">
    <div className="flex justify-center items-center overflow-hidden text-gray-700 bg-green-50  bg-clip-border rounded-xl h-80">
      <img src={user.avatar} alt="profile-picture"/>
    </div>
    <div className="p-6 text-center">
      <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {`${user.first_name} ${user.last_name}`}
      </h4>
      <p
        className="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
        Domain: {user.domain}
      </p>
      <p
        className="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
        Available: {user.available?'Yes' : 'No'}
      </p>
    </div>
    <div className="flex justify-center p-6 pt-2 gap-7">
        <p
        className="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
        Email : {user.email}
      </p>

      {/* <a href="#instagram"
        className="block font-sans text-xl antialiased font-normal leading-relaxed  bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"><i
          className="fab fa-instagram" aria-hidden="true">
        </i>
      </a> */}
    </div>
  </div>
    )
}
