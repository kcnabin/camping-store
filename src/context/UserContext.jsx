import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    if (!value) {
      const ls = localStorage.getItem('camping-store-user')
      if (ls) {
        setValue(JSON.parse(ls))
      }
    }
  }, [value])

  return (
    <UserContext.Provider value={{ value, setValue }}>
      {children}
    </UserContext.Provider>
  )
}

// custom hook to get user context
export const useAuth = () => useContext(UserContext)