import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import TextContent from '../components/TextContent'
import { icons } from '../assets/assets'
import ShoppingCartTotal from '../components/ShoppingCartTotal'

const ShoppingCart = () => {

  const { products, currency, shoppingCartItems, updateQuantity, navigate } = useContext(StoreContext)
  const [shoppingCartData, setShoppingCartData] = useState([])

  // Update shopping cart data whenever shoppingCartItems changes
  useEffect(() => {
    const tempData = []

    for (const items in shoppingCartItems) {
      for (const item in shoppingCartItems[items]) {
        if (shoppingCartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: shoppingCartItems[items][item]
          })
        }
      }
    }
    setShoppingCartData(tempData)
  }, [shoppingCartItems])

  return (
    <div className="border-t pt-14">
      
      <div className="text-2xl mb-3">
        <TextContent text1={"YOUR"} text2={"SHOPPING CART"} />
      </div>

      <div>
        {
          shoppingCartData.map((item, i) => { // Iterate through shopping cart items
            const itemData = products.find((product) => product._id === item._id)

            return (
              // Single item row in shopping cart
              <div key={i} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_1fr_0.5fr] sm:grid-cols-[4fr_3fr_0.5fr] items-center gap-4">
                {/* Shopping cart item i container */}
                <div className="flex items-start gap-6">
                  {/* Item i image - left side, first in the flex */}
                  <img className="w-16 sm:w-25" src={itemData.image[0]} alt="" />
                  <div>
                    {/* Item i details - left side, second in the flex */}
                    <p className="text-xs sm:text-lg font-semibold">{itemData.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p className="font-bold">{currency}{itemData.price}</p>
                      <p className="px-2 sm:px-3 sm:py-1 border bg-black text-white">{item.size}</p>
                    </div>
                  </div>
                </div>
                {/* Quantity selector for item i - middle */}
                <input className="border max-w-10 sm:max-w-15 px-1 sm:px-2 py-1" onChange={(e) => e.target.value === "" || e.target.value === "0" ? null : updateQuantity(item._id, item.size, Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} />
                {/* Delete button for item i - right side. Future implementation: change bin color to black */}
                <img className="w-12 mr-4 sm:w-12 cursor-pointer" onClick={() => updateQuantity(item._id, item.size, 0)} src={icons.trash_bin_icon} alt="" />
              </div>
            )
          })
        }
      </div>

      {/* Checkout container */}
      <div className="flex justify-end my-20">
        {/* Display subtotal, shipping fee, and total amount */}
        <div className="w-full sm:w-[450px]">
          <ShoppingCartTotal />
          {/* Proceed to checkout button */}
          <div className="w-full text-end">
            <button className="bg-red-500 text-white text-md my-8 px-8 py-3" onClick={() => navigate("/checkout")} >Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
