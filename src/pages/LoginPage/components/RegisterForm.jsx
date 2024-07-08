import { Icon } from "@iconify/react/dist/iconify.js";
import { Grid } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../../firebase_config";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function RegisterForm({ showPassword, setShowPassword }) {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const [inputs, setInputs] = useState({
    email: "",
    whatsapp_verification_code: "",
    password: "",
    full_name: "",
    date_of_birth: "",
  });
  const [loading, setLoading] = useState(false);
  const checkWidth = () => {
    setWidth(window.innerWidth);
  };
  const handleInputsChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password || !inputs.full_name) return;
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        inputs.email,
        inputs.password
      );
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        whatsapp_verification_code: inputs.whatsapp_verification_code,
        date_of_birth: inputs.date_of_birth,
        full_name: inputs.full_name,
        createdAt: new Date().toISOString(),
      });
      navigate("/login");
    } catch (error) {
      console.log(error, " catched while creating a user");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, [width]);
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="mod-login">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6.34}>
            <div className="mod-input mod-login-input-loginName mod-input-loginName">
              <label htmlFor="">Email*</label>
              <input
                type="email"
                placeholder="Please enter your Email"
                data-meta="Field"
                defaultValue=""
                name="email"
                onChange={handleInputsChange}
              />
              <span></span>
            </div>
            {width < 768 && (
              <div className="mod-input mod-login-input-loginName mod-input-loginName">
                <label htmlFor="">Full Name*</label>
                <input
                  type="text"
                  placeholder="Enter your first and last name"
                  data-meta="Field"
                  defaultValue=""
                  name="full_name"
                  onChange={handleInputsChange}
                />
                <span></span>
              </div>
            )}
            <div className="mod-input mod-login-input-loginName mod-input-loginName">
              <label htmlFor="">Verification Code from whatsApp*</label>
              <input
                type="text"
                placeholder="Verification Code"
                data-meta="Field"
                defaultValue=""
                name="whatsapp_verification_code"
                onChange={handleInputsChange}
              />
              <span></span>
              <div
                className="mod-input-password-icon mod-login-forgot"
                style={{ color: "#999", marginTop: "2px" }}
              >
                <div>Send</div>
              </div>
            </div>
            <div className="mod-input mod-login-input-loginName mod-input-loginName">
              <label htmlFor="">Password*</label>
              <input
                type={!showPassword ? "password" : "text"}
                placeholder="Minimum 6 characters with a number and a letter"
                data-meta="Field"
                defaultValue=""
                name="password"
                onChange={handleInputsChange}
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
          </Grid>
          <Grid item xs={12} md={5.66}>
            <div
              className={"d-flex justify-content-center justify-content-md-end"}
            >
              <div style={{ width: "305px" }}>
                {width >= 768 && (
                  <div className="mod-input mod-login-input-loginName mod-input-loginName">
                    <label htmlFor="">Full Name*</label>
                    <input
                      type="text"
                      placeholder="Enter your first and last name"
                      data-meta="Field"
                      defaultValue=""
                      name="full_name"
                      onChange={handleInputsChange}
                    />
                    <span></span>
                  </div>
                )}
                <div className="mod-login-receive">
                  <input
                    type="checkbox"
                    style={{ marginTop: "-14px", marginRight: "9px" }}
                  />
                  <p className="m-0" style={{ lineHeight: "1.15" }}>
                    I'd like to receive exclusive offers and promotions via SMS
                  </p>
                </div>
                <div className="mod-login-btn">
                  <button
                    type="submit"
                    className="next-btn next-btn-primary next-btn-large"
                    disabled={loading}
                  >
                    {!loading ? "SIGN UP" : "SIGNING UP..."}
                  </button>
                </div>
                <div
                  className="mod-login-policy"
                  style={{ lineHeight: "1.15" }}
                >
                  <span>
                    By clicking “SIGN UP”, I agree to Daraz's{" "}
                    <a
                      href="https://www.daraz.pk/terms-conditions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.daraz.pk/privacy-agreement"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>
                  </span>
                </div>
                <div className="mod-login-third">
                  <div className="mod-third-party-login mod-login-third-btns">
                    <div className="mod-third-party-login-line">
                      <span style={{ color: "#999" }}>Or, sign up with</span>
                    </div>
                    <div className="mod-third-party-login-bd d-flex">
                      <button className="mod-button mod-third-party-login-btn mod-third-party-login-fb mb-0">
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
                      <button
                        className="mod-button mod-third-party-login-btn mod-third-party-login-google"
                        style={{ marginLeft: "2%" }}
                      >
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

export default RegisterForm;
