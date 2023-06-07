import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: "",
    user: {
      name: "",
      isAdmin: "",
    },
  });

  useEffect(() => {
    if (!auth?.token) {
      const ls = localStorage.getItem("camping-store-user");
      if (ls) {
        setAuth(JSON.parse(ls));
      }
    }
  }, [auth?.token]);
  return (
    <UserContext.Provider value={{ auth, setAuth }}>
      {children}
    </UserContext.Provider>
  );
};

// custom hook to get user context
export const useAuth = () => useContext(UserContext);
