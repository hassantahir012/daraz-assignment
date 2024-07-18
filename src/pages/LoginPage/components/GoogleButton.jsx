import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

function GoogleButton({ customClass = "" }) {
  return (
    <button
      className={
        "mod-button mod-third-party-login-btn mod-third-party-login-google" +
        " " +
        customClass
      }
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
  );
}

export default GoogleButton;
