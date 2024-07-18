import { Icon } from "@iconify/react/dist/iconify.js";
import { Grid } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase_config";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { homePagePath } from "../../../constants";
import FacebookButton from "./FacebookButton";
import GoogleButton from "./GoogleButton";
import { validateEmail, validatePasswordForLogin } from "../functions";
import { login } from "../../../slices/authSlice";
import { useDispatch } from "react-redux";

function LoginForm({ showPassword, setShowPassword }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email_error: false,
    email_error_message: "",
    password_error: false,
    password_error_message: "",
  });
  const handleChangeInputs = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.email_error || errors.password_error) return;
    let err = false;
    if (!inputs.email) {
      setErrors((prev) => ({
        ...prev,
        email_error: true,
        email_error_message: "You can't leave this empty.",
      }));
      err = true;
    } else if (inputs.email.length < 6 || inputs.email.length > 60) {
      setErrors((prev) => ({
        ...prev,
        email_error: true,
        email_error_message:
          "The length of the Email should be 6-60 characters.",
      }));
      err = true;
    }
    if (!inputs.password) {
      setErrors((prev) => ({
        ...prev,
        password_error: true,
        password_error_message: "You can't leave this empty.",
      }));
      err = true;
    }
    if (err) return;
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        inputs.email,
        inputs.password
      );
      dispatch(login());
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", result.user.accessToken);
      enqueueSnackbar("Login Successfull", { variant: "success" });
      navigate(homePagePath);
    } catch (error) {
      enqueueSnackbar(error.code, { variant: "error" });
      console.log({ ...error }, " catched while loging in");
    } finally {
      setLoading();
    }
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="mod-login">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6.34}>
            <div className="mod-input mod-login-input-loginName mod-input-loginName">
              <label htmlFor="">Email*</label>
              <input
                type="text"
                placeholder="Please enter your Email"
                data-meta="Field"
                defaultValue=""
                name="email"
                value={inputs.email}
                onChange={(e) => {
                  validateEmail(e, setErrors, handleChangeInputs);
                }}
                className={errors.email_error ? "error-input-field" : ""}
              />
              <span className={errors.email_error ? "visible" : ""}>
                {errors.email_error_message}
              </span>
            </div>
            <div className="mod-input mod-login-input-loginName mod-input-loginName">
              <label htmlFor="">Password*</label>
              <input
                type={!showPassword ? "password" : "text"}
                placeholder="Please enter your password"
                data-meta="Field"
                defaultValue=""
                name="password"
                value={inputs.password}
                onChange={(e) =>
                  validatePasswordForLogin(e, setErrors, handleChangeInputs)
                }
                className={errors.password_error ? "error-input-field" : ""}
              />
              <span className={errors.password_error ? "visible" : ""}>
                {errors.password_error_message}
              </span>
              <div className="mod-input-password-icon">
                {!showPassword && (
                  <Icon
                    icon="tabler:eye-closed"
                    className="color-b8b8b8"
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                )}
                {showPassword && (
                  <Icon
                    icon="radix-icons:eye-open"
                    className="color-b8b8b8"
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                )}
              </div>
            </div>
            <div className="mod-login-forgot">
              <a href={homePagePath}>Reset Your Password</a>
            </div>
          </Grid>
          <Grid item xs={12} md={5.66}>
            <div
              className={"d-flex justify-content-center justify-content-md-end"}
            >
              <div className="auth-form">
                <div className="mod-login-btn">
                  <button
                    type="submit"
                    className="next-btn next-btn-primary next-btn-large"
                    disabled={loading}
                  >
                    {!loading ? "LOGIN" : "Please Wait..."}
                  </button>
                </div>
                <div className="mod-login-third">
                  <div className="mod-third-party-login mod-login-third-btns">
                    <div className="mod-third-party-login-line">
                      <span className="color-999">Or, login with</span>
                    </div>
                    <div className="mod-third-party-login-bd">
                      <FacebookButton />
                      <GoogleButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </form>
  );
}

export default LoginForm;
