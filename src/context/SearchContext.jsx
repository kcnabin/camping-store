import { createContext, useContext, useEffect, useState } from "react";

export const SearchContext = createContext({})

export const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    const ls = localStorage.getItem('camping-store-search')

    if (ls) {
      // ls is already a string
      setSearch(ls)
    }
  }, [])

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

// custom hook for search context
export const useSearch = () => useContext(SearchContext)