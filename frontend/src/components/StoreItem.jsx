import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { Link } from 'react-router-dom'

const StoreItem = ({ id, name, image, price }) => {

    const { currency } = useContext(StoreContext)

  return (
    // Individual store item component
    <Link className="text-gray-700 cursor-pointer" to={`/item/${id}`}>
        {/* Store item image */}
        <div className="overflow-hidden">
            <img className="hover:scale-120 transition ease-in-out" src={image[0]} alt={name} />
        </div>

        {/* Store item name and price */}
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-bold">{currency}{price}</p>
    </Link>
  )
}

export default StoreItem
