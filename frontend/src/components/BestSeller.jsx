import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import TextContent from './TextContent'
import StoreItem from './StoreItem'

const BestSeller = () => {

    const { products } = useContext(StoreContext)
    const [bestItems, setBestItems] = useState([])

    useEffect(() => {
        const bestSellers = products.filter((item) => (item.bestseller))
        // Get top 5 best sellers
        // Future enhancement: sort by sales volume or just randomly pick 5 best sellers
        setBestItems(bestSellers.slice(0, 5))
    }, [])

  return (
    <div className="my-10">
        {/* Best Seller title and description */}
        <div className="text-center text-3xl py-8">
            <TextContent text1={"BEST"} text2={"SELLER"} />
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500">
                Check out our best-selling products that our customers love the most! From cute collectibles to trendy accessories, these items are flying off the shelves. Don't miss out on the chance to own these popular Japan goodies!
            </p>
        </div>

        {/* Rendering best seller items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6">
            {
                bestItems.map((item, i) => (
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

export default BestSeller
