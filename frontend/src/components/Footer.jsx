import React from 'react'
import { icons } from '../assets/assets'

const Footer = () => {
  return (
    // Placeholder for Footer component
    <div>
        {/* Upper Footer section */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left side Footer - logo and welcome description */}
        <div>
            <img className="mb-5 w-32" src={icons.kawaii_logo} alt="" />
            <p className="w-full md:w-2/3 text-gray-500">
                Welcome to Kawaii Japan Goodies, your number one source for all things cute and
                Japanese! We're dedicated to giving you the very best of Japanese products, with a
                focus on quality, customer service, and uniqueness.
            </p>
        </div>

        {/* Right side Footer - contact information */}
        <div>
            <p className="text-xl font-medium mb-5">FOLLOW US</p>
            <ul className="flex flex-col gap-3 text-gray-500">
                <li>facebook.com/kawaiijapangoodies2022</li>
                <li>instagram.com/kawaii.japangoodies</li>
                <li>tiktok.com/@kawaiijapangoodies</li>
            </ul>
        </div>
      </div>

        {/* Lower Footer section */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2026@ kawaiijapangoodies.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
