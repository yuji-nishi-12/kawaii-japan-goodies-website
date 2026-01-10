import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { icons } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'

const NavigationBar = () => {

  const [visibility, setVisibility] = useState(false)
  const { setShowSearch, getShoppingCartCount } = useContext(StoreContext)

  return (
    // Placeholder for Navigation Bar component
    <div className="flex items-center justify-between px-7 py-2 font-semibold bg-red-500 fixed w-full z-50">
      {/* Kawaii Japan Goodies logo left side of navigation bar */}
      <Link to="/"><img src={icons.kawaii_logo} className="w-24" alt="Kawaii Japan Goodies Logo" /></Link>

      {/* Navigation bar items or links, middle of the navigation bar */}
      <ul className="hidden sm:flex gap-5 text-sm text-white">

        <NavLink to="/" className="flex flex-col items-center gap-1 cursor-pointer">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1 cursor-pointer">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1 cursor-pointer">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1 cursor-pointer">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
      </ul>

      {/* Search icon right side of the navigation bar. Upon clicking, show search bar */}
      <div className="flex items-center gap-5">
        <img className="w-10 cursor-pointer" onClick={() => setShowSearch(true)} src={icons.search_icon} alt="" />

        {/* Profile icon right side of the navigation bar. Upon clicking, navigate to login page */}
        <div className="group relative">
          <Link to="/login">
            <img className="w-10 cursor-pointer" src={icons.profile_icon} alt="" />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-5 px-3 bg-slate-100 text-black rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        {/* Shopping cart icon right side of the navigation bar. Upon clicking, navigate to shopping cart page */}
        <Link to="/shopping-cart" className="relative">
          <img className="w-10 min-w-5" src={icons.shopping_cart_icon} alt="" />
          {/* Counter indicator for shopping cart items */}
          <p className="absolute right-[-4px] bottom-[20px] w-4 text-center leading-4 bg-yellow-400 text-black rounded-full text-[10px]">{getShoppingCartCount()}</p>
        </Link>

        {/* Menu icon for small screens */}
        <img className="w-5 cursor-pointer sm:hidden" onClick={() => setVisibility(true)} src={icons.menu_icon} alt="" />
      </div>

      {/* Mobile menu or menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visibility ? "w-full" : "w-0"}`}>
        <div className="flex flex-col text-gray-600"> 
          <div className="flex items-center gap-1 p-3 cursor-pointer">
            <img className="h-5 rotate-180" src={icons.dropdown_icon} alt="" onClick={() => setVisibility(false)} />
            <p onClick={() => setVisibility(false)}>Back</p>
          </div>
          <NavLink className="py-2 pl-6 border" to="/" onClick={() => setVisibility(false)}>
            HOME
          </NavLink>
          <NavLink className="py-2 pl-6 border" to="/collection" onClick={() => setVisibility(false)}>
            COLLECTION
          </NavLink>
          <NavLink className="py-2 pl-6 border" to="/about" onClick={() => setVisibility(false)}>
            ABOUT
          </NavLink>
          <NavLink className="py-2 pl-6 border" to="/contact" onClick={() => setVisibility(false)}>
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
