import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import TextContent from './TextContent'
import StoreItem from './StoreItem'

const LatestCollection = () => {

    const { products } = useContext(StoreContext)
    const [latestItems, setLatestItems] = useState([])

    useEffect(() => {
        setLatestItems(products.slice(0, 10))
    }, [])

  return (
    // Latest collection section on homepage
    <div className="my-10">
        {/* Latest collection title and description */}
      <div className="text-center py-8 text-3xl">
        <TextContent text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500" >
            Discover our latest collection of adorable and unique Japanese goodies, handpicked just for you! From cute stationery to charming accessories, find the perfect items to brighten your day.
        </p>
      </div>

        {/* Rendering latest collection items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6">
            {
                latestItems.map((item, i) => (
                    <StoreItem
                        key={i}
                        id={item._id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection
