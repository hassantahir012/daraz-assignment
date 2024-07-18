import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

function FacebookButton({ customClass }) {
  return (
    <button
      className={
        "mod-button mod-third-party-login-btn mod-third-party-login-fb" +
        " " +
        customClass
      }
    >
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
  );
}

export default FacebookButton;
