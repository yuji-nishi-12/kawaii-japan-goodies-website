import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import TextContent from './TextContent'
import StoreItem from './StoreItem'

const RelatedItems = ({ category, subCategory }) => {

    const { products } = useContext(StoreContext)
    const [relatedItems, setRelatedItems] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            let itemsCopy = products.slice()

            itemsCopy = itemsCopy.filter((item) => category === item.category)
            itemsCopy = itemsCopy.filter((item) => subCategory === item.subCategory)

            setRelatedItems(itemsCopy.slice(0, 5))
        }
    }, [products])

  return (
    <div className="my-24">
        {/* Related Items title, below item content */}
      <div className="text-center text-3xl py-2">
        <TextContent text1={"RELATED"} text2={"ITEMS"} />
      </div>

        {/* Rendering related items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6">
        {
            // Future implementation: if item._id matches current item, exclude from related items
            relatedItems.map((item, i) => (
                <StoreItem key={i}
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

export default RelatedItems
