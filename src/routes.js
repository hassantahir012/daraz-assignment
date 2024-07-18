import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Login from "./pages/LoginPage/Login";
import ProductPage from "./pages/ProductPage/ProductPage";
import MainLayout from "./layouts/MainLayout";
import {
  categoryPagePath,
  homePagePath,
  loginPagePath,
  productPagePath,
  registerPagePath,
} from "./constants";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<PublicRoutes />}>
            <Route path={homePagePath} element={<HomePage />} />
            <Route path={loginPagePath} element={<Login />} />
            <Route path={registerPagePath} element={<Login />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path={categoryPagePath} element={<CategoryPage />} />
            <Route path={productPagePath} element={<ProductPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
