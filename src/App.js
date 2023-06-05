import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import IndexPage from "./pages/index/IndexPage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import NotFound from "./pages/notFound/NotFound";
import AboutPage from "./pages/about/AboutPage";

const App = () => {
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
      </Routes>
    </>
  );
};

export default App;
