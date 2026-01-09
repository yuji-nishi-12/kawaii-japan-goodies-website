import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useLocation } from 'react-router-dom'
import { icons } from '../assets/assets'

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(StoreContext)
    const [visibility, setVisibility] = useState(false)
    const location = useLocation()

    // Show search bar on home, collection, about, and contact pages only
    useEffect(() => {
        if (location.pathname === "/" ||location.pathname.includes("collection") || location.pathname.includes("about") || location.pathname.includes("contact")) {
            setVisibility(true)
        } else {
            setVisibility(false)
        }
    },[location])

// Render search bar only on home and collection pages when showSearch is true
  return showSearch && visibility ? (
    <div className="bg-gray-100 text-center">
        <div className="inline-flex items-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 bg-white">
            <input className="flex-1 outline-none bg-inherit text-sm" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search items..." />
            <img className="w-7" src={icons.search_icon} alt="" />
        </div>
        <img className="inline w-8 cursor-pointer" onClick={() => setShowSearch(false)} src={icons.close_icon} alt="" />
      
    </div>
  ) : null
}

export default SearchBar
