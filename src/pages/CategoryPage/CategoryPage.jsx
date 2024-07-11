import React from "react";
import "./style/style.css";
import BreadCrumbs from "./Components/BreadCrumbs";
import PageContent from "./Components/PageContent";
import MessageBox from "../../components/MessageBox";
import CompanyLinks from "../../components/CompanyLinks";

function CategoryPage() {
  return (
    <>
      <div
        className="custom-container custom-container-body"
        style={{ width: "89%" }}
      >
        <BreadCrumbs />
        <PageContent />
      </div>
      <MessageBox />
      <div style={{ backgroundColor: "#F5F5F5" }} className="w-100">
        <div style={{ width: "89%", margin: "auto" }}>
          <CompanyLinks />
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
