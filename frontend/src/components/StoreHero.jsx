import React from 'react'
import { icons } from '../assets/assets'

const StoreHero = () => {
  return (
    <div className="flex flex-col sm:flex-row border-l border-r border-b border-red-500">
      {/* Left side - Hero image */}
      <img className="w-full sm:w-1/2" src={icons.hero_img} alt="" />

      {/* Right side - label contents */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
            <div className="flex items-center gap-3">
                <p className="font-medium text-sm md:text-base">SHOP NOW AT</p>
                <p className="w-10 md:w-15 h-[2px] bg-[#414141]"></p>
            </div>
            <h1 className="prata-regular text-3xl sm:py-3 lg:text-4xl leading-relaxed">
                KAWAII JAPANESE GOODIES
            </h1>

        </div>
      </div>
    </div>
  )
}

export default StoreHero
