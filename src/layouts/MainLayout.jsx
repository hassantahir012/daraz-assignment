import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import MessageBox from "../components/MessageBox";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <MessageBox />
    </>
  );
}

export default MainLayout;
