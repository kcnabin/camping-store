import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Layout from "./Layout";
import LayoutTwo from "./LayoutTwo";
import ScrollToTop from "./components/ScrollToTop";

import IndexPage from "./pages/index/IndexPage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import NotFound from "./pages/notFound/NotFound";
import AboutPage from "./pages/about/AboutPage";
import ProductCategory from "./pages/productCategory/ProductCategory";
import CartPage from "./pages/cart/CartPage";
import ProductInfo from "./pages/products/ProductInfo";

import AdminCheck from "./adminPages/AdminCheck";
import AdminPage from "./adminPages/AdminPage";
import CreateCategory from "./adminPages/components/category/CreateCategory";
import CreateProducts from "./adminPages/components/products/CreateProducts";
import AllUsers from "./adminPages/components/users/AllUsers";
import AllProducts from "./adminPages/components/products/AllProductsLayout";
import OrdersDashboard from "./adminPages/components/orders/OrdersDashboard";

import UserCheck from "./userPages/UserCheck";
import CheckOutPage from "./userPages/checkout/CheckOutPage";
import OrdersPage from "./userPages/orders/OrdersPage";
import UserDashboard from "./userPages/UserDashboard";
import OrderDetailLayout from "./userPages/orders/OrderDetailLayout";

const App = () => {
  axios.defaults.baseURL = `http://localhost:3001/api`;

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:pId" element={<ProductInfo />} />
          <Route path="/category/:cId" element={<ProductCategory />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="" element={<LayoutTwo />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route path="/checkout" element={<UserCheck />}>
          <Route path="" element={<Layout />}>
            <Route path="" element={<CheckOutPage />} />
          </Route>
        </Route>

        <Route path="/dashboard" element={<AdminCheck />}>
          <Route path="admin" element={<LayoutTwo />}>
            <Route path="" element={<AdminPage />} />
            <Route path="create-category" element={<CreateCategory />} />
            <Route path="create-products" element={<CreateProducts />} />
            <Route path="products" element={<AllProducts />} />
            <Route path="products/edit/:pId" element={<CreateProducts />} />
            <Route path="customers" element={<AllUsers />} />
            <Route path="orders" element={<OrdersDashboard />} />
            <Route path="orders/:orderId" element={<OrdersDashboard />} />
          </Route>
        </Route>

        <Route path="/dashboard" element={<UserCheck />}>
          <Route path="user" element={<LayoutTwo />}>
            <Route path="" element={<UserDashboard />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="orders/:orderId" element={<OrderDetailLayout />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
