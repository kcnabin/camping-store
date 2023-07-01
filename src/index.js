import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import { CartContextProvider } from "./context/CartContext";
import { SearchContextProvider } from "./context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <SearchContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartContextProvider>
      </SearchContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
