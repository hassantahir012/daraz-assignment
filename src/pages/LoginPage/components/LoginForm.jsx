import { Icon } from "@iconify/react/dist/iconify.js";
import { Grid } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase_config";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

function LoginForm({ showPassword, setShowPassword }) {
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
      await signInWithEmailAndPassword(auth, inputs.email, inputs.password);
      enqueueSnackbar("Login Successfull", { variant: "success" });
      navigate("/");
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
      console.log(error, " catched while loging in");
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
                onChange={(e) => {
                  if (e.target.value === "") {
                    setErrors((prev) => ({
                      ...prev,
                      email_error: true,
                      email_error_message: "You can't leave this empty.",
                    }));
                  } else if (
                    e.target.value.length < 6 ||
                    e.target.value.length > 60
                  ) {
                    setErrors((prev) => ({
                      ...prev,
                      email_error: true,
                      email_error_message:
                        "The length of the Email should be 6-60 characters.",
                    }));
                  } else {
                    setErrors((prev) => ({
                      ...prev,
                      email_error: false,
                      email_error_message: "",
                    }));
                  }
                  handleChangeInputs(e);
                }}
                style={{
                  border: errors.email_error ? "1px solid #f44336" : "",
                }}
              />
              <span style={{ visibility: errors.email_error ? "visible" : "" }}>
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
                onChange={(e) => {
                  if (e.target.value === "") {
                    setErrors((prev) => ({
                      ...prev,
                      password_error: true,
                      password_error_message: "You can't leave this empty.",
                    }));
                  } else {
                    setErrors((prev) => ({
                      ...prev,
                      password_error: false,
                      password_error_message: "",
                    }));
                  }
                  handleChangeInputs(e);
                }}
                style={{
                  border: errors.password_error ? "1px solid #f44336" : "",
                }}
              />
              <span
                style={{ visibility: errors.password_error ? "visible" : "" }}
              >
                {errors.password_error_message}
              </span>
              <div className="mod-input-password-icon">
                {!showPassword && (
                  <Icon
                    icon="tabler:eye-closed"
                    style={{ color: "#b8b8b8" }}
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                )}
                {showPassword && (
                  <Icon
                    icon="radix-icons:eye-open"
                    style={{ color: "#b8b8b8" }}
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                )}
              </div>
            </div>
            <div className="mod-login-forgot">
              <a href="/">Reset Your Password</a>
            </div>
          </Grid>
          <Grid item xs={12} md={5.66}>
            <div
              className={"d-flex justify-content-center justify-content-md-end"}
            >
              <div style={{ width: "305px" }}>
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
                      <span style={{ color: "#999" }}>Or, login with</span>
                    </div>
                    <div className="mod-third-party-login-bd">
                      <button className="mod-button mod-third-party-login-btn mod-third-party-login-fb">
                        <Icon
                          icon="uim:facebook-f"
                          style={{
                            color: "white",
                            height: "1.2rem",
                            width: "1.2rem",
                            marginRight: "14px",
                            marginTop: "-5px",
                          }}
                        />{" "}
                        Facebook
                      </button>
                      <button className="mod-button mod-third-party-login-btn mod-third-party-login-google">
                        <Icon
                          icon="jam:google-plus"
                          style={{
                            color: "white",
                            height: "2rem",
                            width: "2rem",
                            marginRight: "14px",
                            marginTop: "-5px",
                          }}
                        />{" "}
                        Google
                      </button>
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
