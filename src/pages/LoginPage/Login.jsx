import React, { useEffect, useState } from "react";
import "./style/style.css";
import CompanyLinks from "../../components/CompanyLinks";
import { Link, useLocation } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { loginPagePath, registerPagePath } from "../../constants";

function Login() {
  const { pathname } = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    if (pathname == registerPagePath) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  }, [pathname]);
  return (
    <div className="auth-container">
      <div className="auth-container-inner">
        <div className="login-title d-flex justify-content-between flex-wrap auth-title">
          <h3>
            {pathname == loginPagePath
              ? "Welcome to Daraz! Please login."
              : "Create your Daraz Account"}
          </h3>
          <div className="login-other">
            {pathname == loginPagePath ? (
              <span>
                New member? <Link to={registerPagePath}>Register</Link> here.
              </span>
            ) : (
              <span>
                Already member? <Link to={loginPagePath}>Login</Link> here.
              </span>
            )}
          </div>
        </div>
        <div>
          {pathname == loginPagePath && (
            <LoginForm
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          )}
          {pathname == registerPagePath && (
            <RegisterForm
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          )}
        </div>
      </div>
      <div className="homepage-body w-100">
        <div className="custom-container">
          <CompanyLinks />
        </div>
      </div>
    </div>
  );
}

export default Login;
