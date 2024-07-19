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
      <Icon icon="uim:facebook-f" className="facebook-icon" /> Facebook
    </button>
  );
}

export default FacebookButton;
