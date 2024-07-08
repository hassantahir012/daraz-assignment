import { Icon } from "@iconify/react/dist/iconify.js";
import { Grid } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase_config";
import { useNavigate } from "react-router-dom";

function LoginForm({ showPassword, setShowPassword }) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChangeInputs = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password) return;
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, inputs.email, inputs.password);
      navigate("/");
    } catch (error) {
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
                onChange={handleChangeInputs}
              />
              <span></span>
            </div>
            <div className="mod-input mod-login-input-loginName mod-input-loginName">
              <label htmlFor="">Password*</label>
              <input
                type={!showPassword ? "password" : "text"}
                placeholder="Please enter your password"
                data-meta="Field"
                defaultValue=""
                name="password"
                onChange={handleChangeInputs}
              />
              <span></span>
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
