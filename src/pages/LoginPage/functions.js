export const validateEmail = (e, setErrors, handleChange) => {
  if (e.target.value === "") {
    setErrors((prev) => ({
      ...prev,
      email_error: true,
      email_error_message: "You can't leave this empty.",
    }));
  } else if (e.target.value.length < 6 || e.target.value.length > 60) {
    setErrors((prev) => ({
      ...prev,
      email_error: true,
      email_error_message: "The length of the Email should be 6-60 characters.",
    }));
  } else {
    setErrors((prev) => ({
      ...prev,
      email_error: false,
      email_error_message: "",
    }));
  }
  handleChange(e);
};
export const validatePasswordForLogin = (e, setErrors, handleChange) => {
  {
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
    handleChange(e);
  }
};
export const validatePasswordForRegister = (e, setErrors, handleChange) => {
  if (e.target.value === "") {
    setErrors((prev) => ({
      ...prev,
      password_error: true,
      password_error_message: "You can't leave this empty.",
    }));
  } else if (e.target.value.length < 6 || e.target.value.length > 60) {
    setErrors((prev) => ({
      ...prev,
      password_error: true,
      password_error_message:
        "The length of Password should be 6-50 characters.",
    }));
  } else if (
    !(/[a-zA-Z]/.test(e.target.value) && /[0-9]/.test(e.target.value))
  ) {
    setErrors((prev) => ({
      ...prev,
      password_error: true,
      password_error_message:
        "Password should contain alphabetic and numeric characters.",
    }));
  } else {
    setErrors((prev) => ({
      ...prev,
      password_error: false,
      password_error_message: "",
    }));
  }
  handleChange(e);
};
export const validateWhatsappVerificationCode = (
  e,
  setErrors,
  handleChange
) => {
  if (/^[0-9]+$/.test(e.target.value) || e.target.value === "") {
    if (e.target.value === "") {
      setErrors((prev) => ({
        ...prev,
        whatsapp_verification_code_error: true,
        whatsapp_verification_code_error_message: "You can't leave this empty.",
      }));
    } else if (e.target.value.length !== 6) {
      setErrors((prev) => ({
        ...prev,
        whatsapp_verification_code_error: true,
        whatsapp_verification_code_error_message: "Please enter 6 digits",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        whatsapp_verification_code_error: false,
        whatsapp_verification_code_error_message: "",
      }));
    }
    handleChange(e);
  }
};
export const validateFullName = (e, setErrors, handleChange) => {
  if (e.target.value === "") {
    setErrors((prev) => ({
      ...prev,
      full_name_error: true,
      full_name_error_message: "You can't leave this empty.",
    }));
  } else if (e.target.value.length < 2 || e.target.value.length > 50) {
    setErrors((prev) => ({
      ...prev,
      full_name_error: true,
      full_name_error_message: "The name length should be 2 - 50 characters.",
    }));
  } else {
    setErrors((prev) => ({
      ...prev,
      full_name_error: false,
      full_name_error_message: "",
    }));
  }
  handleChange(e);
};
