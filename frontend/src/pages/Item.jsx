import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'

const Item = () => {

  const { itemId } = useParams() // Get itemId from URL parameters
  const { products, currency } = useContext(StoreContext)
  const [itemData, setItemData] = useState(false)
  const [image, setImage] = useState("")
  const [size, setSize] = useState("")

  // Fetch item data based on itemId from URL parameters
  const fetchItemData = () => {
    products.map((item) => {
      if (item._id === itemId) {
        setItemData(item)
        setImage(item.image[0])
        return null
      }
    })
  }

  useEffect(() => {
    fetchItemData()
  }, [itemId, products])

  return itemData ? (
    <div className="border-t-2 pt-25 transition-opacity ease-in duration-500 opacity-100">
      {/* Item details container */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Item image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          {/* Series of images apart from the main image - left side */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              itemData.image.map((item, i) => (
                <img className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" onClick={() => setImage(item)} key={i} src={item} alt="" />
              ))
            }
          </div>
          {/* Main item image - right side */}
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Item information - right side of main image */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">
            {itemData.name}
          </h1>
          <p className="mt-5 text-3xl font-bold">{currency}{itemData.price}</p>
          <p className="mt-5 text-gray-600 md:w-4/5">{itemData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size (if applicable)</p>
            <div className="flex gap-2">
              {
                itemData.sizes.map((item, i) => (
                  <button className={`border-2 py-2 px-4 bg-black text-white ${item === size ? "border-red-500" : ""}`} onClick={() => setSize(item)} key={i}>{item}</button>
                ))
              }
            </div>
          </div>

          {/* Message box for customer's request. Future implementation: add the request to the database */}
          <div className="flex flex-col bg-gray-100 px-5 py-4 rounded-lg">
            <p className="font-semibold text-lg mb-2">Customer's request</p>
            <textarea className="bg-white border p-2 w-full h-20 max-h-50" placeholder="Enter any special requests or messages here..."></textarea>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-red-500 text-white mt-5 px-8 py-3 text-sm active:bg-red-300">ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Japanese authentic product.</p>
              <p>Handled with care and attention to detail.</p>
          </div>
        </div>

      </div>
    </div>
  ) : <div className="opacity-0"></div> // Placeholder while loading item data or no item found
}

export default Item
