import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import TextContent from '../components/TextContent'
import ShoppingCartTotal from '../components/ShoppingCartTotal'

const Checkout = () => {

  const [method, setMethod] = useState("credit-card")
  const { navigate } = useContext(StoreContext)

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left side - delivery information: name, email, address, phone number */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <TextContent text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name"/>
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name"/>
        </div>
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email"/>
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street address"/>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City"/>
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State/Province"/>
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Postal code"/>
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country"/>
        </div>
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Phone number"/>
      </div>

      {/* Right side - payment method */}
      <div className="mt-8">
        <div className="mt-8 min-w80">
          <ShoppingCartTotal />
        </div>

        <div className="mt-12">
          <TextContent text1={"PAYMENT"} text2={"METHOD"} />
          {/* Future implementation :payment method options will go here */}
          <div>

          </div>

          <div className="w-full text-end mt-8">
            <button className="bg-red-500 text-white px-16 py-3 text-sm" onClick={() => navigate("/my-orders")}>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
