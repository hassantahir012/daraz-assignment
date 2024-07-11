import React, { useEffect, useState } from "react";
import "./style/style.css";
import Header from "../../components/Header";
import CompanyLinks from "../../components/CompanyLinks";
import MessageBox from "../../components/MessageBox";
import { Link, useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function Login() {
  const { pathname } = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    if (pathname == "/register") {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  }, [pathname]);
  return (
    <div style={{ backgroundColor: "#EFF0F5" }}>
      <div
        // className="custom-container-body"
        style={{
          maxWidth: "810px",
          margin: "auto",
          paddingTop: "6.7%",
          backgroundColor: "#EFF0F5",
        }}
      >
        <div
          className="login-title d-flex justify-content-between flex-wrap"
          style={{
            margin: "50px 0 15px",
            height: "26px",
            lineHeight: "26px",
          }}
        >
          <h3>
            {pathname == "/login"
              ? "Welcome to Daraz! Please login."
              : "Create your Daraz Account"}
          </h3>
          <div className="login-other">
            {pathname == "/login" ? (
              <span>
                New member? <Link to="/register">Register</Link> here.
              </span>
            ) : (
              <span>
                Already member? <Link to="/login">Login</Link> here.
              </span>
            )}
          </div>
        </div>
        <div>
          {pathname == "/login" && (
            <LoginForm
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          )}
          {pathname == "/register" && (
            <RegisterForm
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          )}
        </div>
      </div>
      <MessageBox />
      <div style={{ backgroundColor: "#F5F5F5" }} className="w-100">
        <div style={{ width: "88%", margin: "auto" }}>
          <CompanyLinks />
        </div>
      </div>
    </div>
  );
}

export default Login;
