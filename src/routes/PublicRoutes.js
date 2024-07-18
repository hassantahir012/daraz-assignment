import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { homePagePath, loginPagePath, registerPagePath } from "../constants";
import { useSelector } from "react-redux";

function PublicRoutes() {
  const { pathname } = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (
    (pathname === loginPagePath || pathname === registerPagePath) &&
    isAuthenticated
  ) {
    return <Navigate to={homePagePath} />;
  }
  return <Outlet />;
}

export default PublicRoutes;
