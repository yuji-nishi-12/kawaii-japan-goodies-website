import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import TextContent from '../components/TextContent'

// Future implementation: will fix this page a lot more
const MyOrders = () => {

  const { products, currency } = useContext(StoreContext)

  return (
    <div className="border-t pt-16">
      
      <div className="text-2xl">
        <TextContent text1={"YOUR"} text2={"ORDERS"}/>
      </div>

      <div>
        {
          products.slice(1, 4).map((item, i) => (
            <div key={i} className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-6 text-sm">
                <img className="w-20 sm:w-25" src={item.image} alt="" />
                <div>
                  <p className="sm:text-base font-medium">{item.name}</p>
                  <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                    <p className="text-lg font-bold">{currency}{item.price}</p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p className="mt-2">Date: <span className="text-gray-700">January 11, 2026</span></p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <p className="text-sm md:text-base">Ready to ship</p>
                </div>
                <button className="border px-4 py-2 text-sm font-medium rounded-sm">Track Order</button>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default MyOrders
