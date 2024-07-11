import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Login from "./pages/LoginPage/Login";
import ProductPage from "./pages/ProductPage/ProductPage";
import MainLayout from "./layouts/MainLayout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
