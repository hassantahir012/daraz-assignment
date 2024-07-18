import { Icon } from "@iconify/react/dist/iconify.js";
import { Grid } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../../firebase_config";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { loginPagePath } from "../../../constants";
import FacebookButton from "./FacebookButton";
import GoogleButton from "./GoogleButton";
import {
  validateEmail,
  validateFullName,
  validatePasswordForRegister,
  validateWhatsappVerificationCode,
} from "../functions";

function RegisterForm({ showPassword, setShowPassword }) {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    whatsapp_verification_code: "",
    password: "",
    full_name: "",
    date_of_birth: "",
  });
  const [errors, setErrors] = useState({
    email_error: false,
    email_error_message: "",
    password_error: false,
    password_error_message: "",
    full_name_error: false,
    full_name_error_message: "",
    whatsapp_verification_code_error: false,
    whatsapp_verification_code_error_message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleInputsChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      errors.email_error ||
      errors.full_name_error ||
      errors.password_error ||
      errors.whatsapp_verification_code_error
    )
      return;
    let err = false;
    if (!inputs.email) {
      setErrors((prev) => ({
        ...prev,
        email_error: true,
        email_error_message: "You can't leave this empty.",
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
    if (!inputs.whatsapp_verification_code) {
      setErrors((prev) => ({
        ...prev,
        whatsapp_verification_code_error: true,
        whatsapp_verification_code_error_message: "You can't leave this empty.",
      }));
      err = true;
    }
    if (!inputs.full_name) {
      setErrors((prev) => ({
        ...prev,
        full_name_error: true,
        full_name_error_message: "You can't leave this empty.",
      }));
      err = true;
    }
    if (err) return;
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
      enqueueSnackbar("Registration Successfull", { variant: "success" });
      navigate(loginPagePath);
    } catch (error) {
      enqueueSnackbar(error.customData._tokenResponse.error.message, {
        variant: "error",
      });
      console.log({ ...error }, " catched while creating a user");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="mod-login mod-login-register mb-0">
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
                value={inputs.email}
                onChange={(e) => {
                  validateEmail(e, setErrors, handleInputsChange);
                }}
                className={errors.email_error ? "error-input-field" : ""}
              />
              <span className={errors.email_error ? "visible" : ""}>
                {errors.email_error_message}
              </span>
            </div>
            <div className="mod-input mod-login-input-loginName mod-input-loginName mod-input-loginName-1">
              <label htmlFor="">Full name*</label>
              <input
                type="text"
                placeholder="Enter your first and last name"
                data-meta="Field"
                defaultValue=""
                name="full_name"
                value={inputs.full_name}
                onChange={(e) => {
                  validateFullName(e, setErrors, handleInputsChange);
                }}
                className={errors.full_name_error ? "error-input-field" : ""}
              />
              <span className={errors.full_name_error ? "visible" : ""}>
                {errors.full_name_error_message}
              </span>
            </div>
            <div className="mod-input mod-login-input-loginName mod-input-loginName">
              <label htmlFor="">Verification Code from whatsApp*</label>
              <input
                type="text"
                placeholder="Verification Code"
                data-meta="Field"
                defaultValue=""
                name="whatsapp_verification_code"
                value={inputs.whatsapp_verification_code}
                onChange={(e) => {
                  validateWhatsappVerificationCode(
                    e,
                    setErrors,
                    handleInputsChange
                  );
                }}
                className={
                  errors.whatsapp_verification_code_error
                    ? "error-input-field"
                    : ""
                }
              />
              <span
                className={
                  errors.whatsapp_verification_code_error ? "visible" : ""
                }
              >
                {errors.whatsapp_verification_code_error_message}
              </span>
              <div className="mod-input-password-icon mod-login-forgot color-999 mt-2px">
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
                value={inputs.password}
                onChange={(e) => {
                  validatePasswordForRegister(e, setErrors, handleInputsChange);
                }}
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
            <div className="mod-input mod-login-input-loginName mod-input-loginName">
              <div className="d-flex gap-2">
                <div>
                  <label htmlFor="">Birthday</label>
                  <select className="select-input birthday-month">
                    <option value="" hidden selected>
                      Month
                    </option>
                    <option value="01">January</option>
                    <option value="02">Febraury</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                  <select className="select-input birthday-day">
                    <option value="" hidden selected>
                      Day
                    </option>
                    {[...Array(31).keys()].map((index) => (
                      <option
                        value={String(index + 1).padStart(2, "0")}
                        key={index}
                      >
                        {index + 1}
                      </option>
                    ))}
                  </select>
                  <select className="select-input birthday-year">
                    <option value="" hidden selected>
                      Year
                    </option>
                    {[...Array(35).keys()].map((index) => (
                      <option value={String(index + 1990)} key={index}>
                        {index + 1990}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="">Gender</label>
                  <select className="select-input gender-select">
                    <option value="" hidden selected>
                      Select
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={5.66}>
            <div
              className={"d-flex justify-content-center justify-content-md-end"}
            >
              <div className="auth-form">
                <div className="mod-input mod-login-input-loginName mod-input-loginName mod-input-loginName-2">
                  <label htmlFor="">Full name*</label>
                  <input
                    type="text"
                    placeholder="Enter your first and last name"
                    data-meta="Field"
                    defaultValue=""
                    name="full_name"
                    value={inputs.full_name}
                    onChange={(e) => {
                      validateFullName(e, setErrors, handleInputsChange);
                    }}
                    className={
                      errors.full_name_error ? "error-input-field" : ""
                    }
                  />
                  <span className={errors.full_name_error ? "visible" : ""}>
                    {errors.full_name_error_message}
                  </span>
                </div>
                <div className="mod-login-receive">
                  <input type="checkbox" className="register-checkbox" />
                  <p className="register-checkbox m-0">
                    I'd like to receive exclusive offers and promotions via SMS
                  </p>
                </div>
                <div className="mod-login-btn">
                  <button
                    type="submit"
                    className="next-btn next-btn-primary next-btn-large"
                    disabled={loading}
                  >
                    {!loading ? "SIGN UP" : "Please Wait..."}
                  </button>
                </div>
                <div className="mod-login-policy">
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
                      <span className="color-999">Or, sign up with</span>
                    </div>
                    <div className="mod-third-party-login-bd d-flex">
                      <FacebookButton customClass="mb-0" />
                      <GoogleButton customClass="register-fb-btn" />
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
