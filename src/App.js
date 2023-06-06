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

const App = () => {
  axios.defaults.baseURL = `http://localhost:3001/api`;

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/dashboard" element={<AdminCheck />}>
          <Route path="admin" element={<Layout />}>
            <Route path="" element={<AdminPage />} />
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
