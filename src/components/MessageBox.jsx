import React from "react";

function MessageBox() {
  return (
    <div tabIndex={0} className="im-app im-app--mod-minimize closed">
      <button className="im-app__cont-minimize">
        <div className="button-mod-box">
          <div className="im-app__minimize-icon">
            <svg width={22} height={19} fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 2a2 2 0 012-2h18a2 2 0 012 2v10a2 2 0 01-2 2H5.704a1 1 0 00-.753.341l-3.198 3.656C1.145 18.692 0 18.262 0 17.34V2zm5.5 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                fill="#000"
                fillOpacity="0.5"
              />
            </svg>
          </div>
          <div className="im-app__minimize-title" style={{ marginTop: "4px" }}>
            Messages
          </div>
        </div>
      </button>
    </div>
  );
}

export default MessageBox;
