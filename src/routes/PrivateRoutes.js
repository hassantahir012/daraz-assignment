import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { loginPagePath } from "../constants";
import { useSelector } from "react-redux";

function PrivateRoutes() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to={loginPagePath} />;
  }
  return <Outlet />;
}

export default PrivateRoutes;
