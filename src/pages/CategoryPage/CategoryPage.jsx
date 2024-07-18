import React from "react";
import "./style/style.css";
import BreadCrumbs from "./Components/BreadCrumbs";
import PageContent from "./Components/PageContent";
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
      <div className="homepage-body w-100">
        <div style={{ width: "89%", margin: "auto" }}>
          <CompanyLinks />
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
