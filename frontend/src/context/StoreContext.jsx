import { createContext, useState } from 'react'
import { products } from '../assets/assets'

export const StoreContext = createContext()

const StoreContextProvider = (props) => {

    const currency = "¥"
    const [search, setSearch] = useState("")
    const [showSearch, setShowSearch] = useState(false)
    const [shoppingCartItems, setShoppingCartItems] = useState({})

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

    const value = {
        products,
        currency,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        shoppingCartItems,
        getShoppingCartCount
    }

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider