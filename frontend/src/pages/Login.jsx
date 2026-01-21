import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {

  return (
    <div className="flex flex-col w-[90%] sm:max-w-124 m-auto mt-14 mb-105 gap-4 items-center justify-center">
          <div className="inline-flex items-center gap-2 mb-2 mt-20">
            <p className="text-3xl font-semibold">Login</p>
          </div>
          <form className="flex flex-col w-full gap-2 bg-gray-100 p-10 rounded-xl">
            <label className="text-lg font-medium">Email</label>
            <input className="w-full border-2 border-gray-100 rounded-xl p-4 bg-white" type="email" placeholder="Enter your email"/>
            <label className="text-lg font-medium">Password</label>
            <input className="w-full border-2 border-gray-100 rounded-xl p-4 bg-white" type="password" placeholder="Enter your password"/>
            <div className="w-full flex justify-between text-sm">
              <button className="cursor-pointer text-red-700 hover:underline">Forgot password?</button>
              <NavLink to="/register" className="font-medium cursor-pointer hover:underline">
                Register Now
              </NavLink>
            </div>
            <button className="bg-red-500 text-white font-bold text-lg rounded-xl p-4 mt-4 hover:bg-red-600 transition duration-300 cursor-pointer">Sign In</button>
          </form>
        </div>
  )
}

export default Login
