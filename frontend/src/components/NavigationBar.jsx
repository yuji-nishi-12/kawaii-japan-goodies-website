import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { icons } from '../assets/assets'

const NavigationBar = () => {
  return (
    // Placeholder for Navigation Bar component
    <div className="flex items-center justify-between px-7 py-2 font-semibold bg-red-500">
      {/* Kawaii Japan Goodies logo left side of navigation bar */}
      <Link to="/"><img src={icons.kawaii_logo} className="w-24" alt="Kawaii Japan Goodies Logo" /></Link>

      {/* Navigation bar items or links, middle of the navigation bar */}
      <ul className="hidden sm:flex gap-5 text-sm text-white">

        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img className="w-10 cursor-pointer" src={icons.search_icon} alt="" />

        <div>

        </div>
      </div>
    </div>
  )
}

export default NavigationBar
