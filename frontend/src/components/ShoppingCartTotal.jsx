import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import TextContent from './TextContent'

const ShoppingCartTotal = () => {

    const { currency, shippingFee, getTotalAmount } = useContext(StoreContext)

  return (
    <div className="w-full">
      <div className="text-2xl">
        <TextContent text1={"SHOPPING CART"} text2={"TOTAL"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{currency}{getTotalAmount()}</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>{currency}{shippingFee}</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>{currency} {getTotalAmount() === 0 ? 0 : getTotalAmount() + shippingFee}</b>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartTotal
