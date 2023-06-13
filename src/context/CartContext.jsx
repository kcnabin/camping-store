import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext({})

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    if (cart.length < 1) {
      const ls = localStorage.getItem('camping-store-cart')
      if (ls) {
        setCart(JSON.parse(ls))
      }
    }
  }, [cart.length])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)

