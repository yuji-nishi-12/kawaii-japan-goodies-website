import { createContext, useState } from 'react'
import { products } from '../assets/assets'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const StoreContext = createContext()

const StoreContextProvider = (props) => {

    const currency = "¥"
    const shippingFee = 750
    const [search, setSearch] = useState("")
    const [showSearch, setShowSearch] = useState(false)
    const [shoppingCartItems, setShoppingCartItems] = useState({})
    const navigate = useNavigate()

    // Function to add item to shopping cart
    const addToCart = async (itemId, size) => {
        if (!size) {
            console.log("No size selected")
            toast.error("Don't forget to select a size!") // Show error toast if size is not selected in item page
            return
        } else {
            toast.success("Item added to shopping cart!") // Show success toast when item is added to cart
        }

        let shoppingCartData = structuredClone(shoppingCartItems) // Deep clone shopping cart items to avoid direct state mutation

        // If item already exists in cart, increment quantity, else add new item with quantity 1
        if (shoppingCartData[itemId]) {
            if (shoppingCartData[itemId][size]) {
                    shoppingCartData[itemId][size] += 1
            } else {
                shoppingCartData[itemId][size] = 1
            }
        } else {
            shoppingCartData[itemId] = {}
            shoppingCartData[itemId][size] = 1
        }
        setShoppingCartItems(shoppingCartData)
    }

    // Function to get total count of items in shopping cart
    const getShoppingCartCount = () => {
        let total = 0
        for (const items in shoppingCartItems) {
            for (const item in shoppingCartItems[items]) {
               try {
                    if (shoppingCartItems[items][item]) {
                        total += shoppingCartItems[items][item]
                    }
               } catch (error) {
                    console.error("Error calculating shopping cart count:", error)
               }
            }
        }
        return total
    }

    // Function to update quantity of a specific item in shopping cart, increasing or decreasing based on user action
    const updateQuantity = async (itemId, size, quantity) => {
        let shoppingCartData = structuredClone(shoppingCartItems)
        shoppingCartData[itemId][size] = quantity
        setShoppingCartItems(shoppingCartData)
    }

    // Function to calculate total amount of items' price in shopping cart
    const getTotalAmount = () => {
        let total = 0
        
        for (const items in shoppingCartItems) {
            let itemInfo = products.find((product) => product._id === items)
            for (const item in shoppingCartItems[items]) {
                try {
                    if (shoppingCartItems[items][item] > 0) {
                        total += itemInfo.price * shoppingCartItems[items][item]
                    }
                } catch (error) {
                    console.error("Error calculating total amount:", error)
                }
            }
        }
        return total
    }

    const value = {
        products,
        currency,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        shoppingCartItems,
        getShoppingCartCount,
        addToCart,
        updateQuantity,
        navigate,
        shippingFee,
        getTotalAmount
    }

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider