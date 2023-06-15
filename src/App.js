import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Layout from "./Layout";
import IndexPage from "./pages/index/IndexPage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import NotFound from "./pages/notFound/NotFound";
import AboutPage from "./pages/about/AboutPage";
import AdminCheck from "./adminPages/AdminCheck";
import AdminPage from "./adminPages/AdminPage";
import UserCheck from "./userPages/UserCheck";
import UserPage from "./userPages/UserPage";
import CreateCategory from "./adminPages/components/category/CreateCategory";
import CreateProducts from "./adminPages/components/products/CreateProducts";
import AllUsers from "./adminPages/components/users/AllUsers";
import AllProducts from "./adminPages/components/products/AllProductsLayout";
import CartPage from "./pages/cart/CartPage";
import CreateProductsForm from "./adminPages/components/products/CreateProductsForm";
import ProductInfo from "./pages/products/ProductInfo";
import ScrollToTop from "./components/ScrollToTop";
import ProductCategory from "./pages/productCategory/ProductCategory";
import CheckOutPage from "./userPages/checkout/CheckOutPage";

const App = () => {
  axios.defaults.baseURL = `http://localhost:3001/api`;

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:pId" element={<ProductInfo />} />
          <Route path="/category/:cId" element={<ProductCategory />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/checkout" element={<UserCheck />}>
          <Route path="" element={<Layout />}>
            <Route path="" element={<CheckOutPage />} />
          </Route>
        </Route>

        <Route path="/dashboard" element={<AdminCheck />}>
          <Route path="admin" element={<Layout />}>
            <Route path="" element={<AdminPage />} />
            <Route path="create-category" element={<CreateCategory />} />
            <Route path="create-products" element={<CreateProducts />} />
            <Route path="products" element={<AllProducts />} />
            <Route path="products/edit/:pId" element={<CreateProductsForm />} />
            <Route path="users" element={<AllUsers />} />
          </Route>
        </Route>

        <Route path="/dashboard" element={<UserCheck />}>
          <Route path="user" element={<Layout />}>
            <Route path="" element={<UserPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
