import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Item from './pages/Item'
import ShoppingCart from './pages/ShoppingCart'
import Login from './pages/Login'
import Register from './pages/Register'
import Checkout from './pages/Checkout'
import MyOrders from './pages/MyOrders.jsx'
import NavigationBar from './components/NavigationBar'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
    {/* Call NavigationBar component */}
    <NavigationBar />

    {/* Call SearchBar component */}
    <SearchBar />

    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />

      {/* Define routes for the application */}
      <Routes>
        {/* Route to Home Page */}
        <Route path="/" element={<Home />} />

        {/* Route to Collection Page (All products) */}
        <Route path="/collection" element={<Collection />} />

        {/* Route to About Us Page - short description, mission, and values of the store */}
        <Route path="/about" element={<About />} />

        {/* Route to Contact Page - contact information: phone number, email, social media accounts */}
        <Route path="/contact" element={<Contact />} />

        {/* Route to Item Page - product details */}
        <Route path="/item/:itemId" element={<Item />} />

        {/* Route to Shopping Cart Page - all added items by the user */}
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        
        {/* Route to Login Page - user authentication */}
        <Route path="/login" element={<Login />} /> 

        {/* Route to Register Page - new user registration */}
        <Route path="/register" element={<Register />} />

        {/* Route to Checkout Page - finalizing and placing orders */}
        <Route path="/checkout" element={<Checkout />} />

        {/* Route to Orders Page - confirmation and summary of placed orders */}
        <Route path="/my-orders" element={<MyOrders />} />
      </Routes>

    </div>
    {/* Call Footer component */}
    <Footer />
    </>
  )
}

export default App
