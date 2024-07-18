import React from "react";
import { Link } from "react-router-dom";
import { homePagePath } from "../../../constants";

function BreadCrumbs() {
  return (
    <div className="breadcrumb--R4_qD" data-spm="breadcrumb">
      <div className="ant-breadcrumb">
        <span>
          <span className="ant-breadcrumb-link">
            <Link to={homePagePath}>Home</Link>
          </span>
          <span className="ant-breadcrumb-separator">/</span>
        </span>
        <span>
          <span className="ant-breadcrumb-link">
            <span>Furniture &amp; Decor</span>
          </span>
          <span className="ant-breadcrumb-separator">/</span>
        </span>
        <span>
          <span className="ant-breadcrumb-link">
            <span>Storage &amp; Organisation</span>
          </span>
          <span className="ant-breadcrumb-separator">/</span>
        </span>
        <span>
          <span className="ant-breadcrumb-link">
            <span>Wardrobe Organisers</span>
          </span>
          <span className="ant-breadcrumb-separator">/</span>
        </span>
      </div>
    </div>
  );
}

export default BreadCrumbs;
