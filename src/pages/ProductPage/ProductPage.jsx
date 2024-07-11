import React from "react";
import "./style/style.css";
import Header from "../../components/Header";
import MessageBox from "../../components/MessageBox";
import CompanyLinks from "../../components/CompanyLinks";
import BreadCrumbs from "./components/BreadCrumbs";
import ProductDetails from "./components/ProductDetails";
import { Grid } from "@mui/material";
import Ratings from "./components/Ratings";
import OtherProducts from "./components/OtherProducts";
import Specifications from "./components/Specifications";

function ProductPage() {
  return (
    <div style={{ backgroundColor: "#EFF0F5" }}>
      <div
        className="custom-container custom-container-body"
        style={{ paddingTop: "6.6%", paddingBottom: "20px" }}
      >
        <BreadCrumbs />
        <ProductDetails />
        <Grid container mt={1.25} spacing={1.25} marginTop={0}>
          <Grid item xs={12} xl={9.996}>
            <Ratings />
            <Specifications />
          </Grid>
          <Grid item xs={12} xl={2.004}>
            <OtherProducts />
          </Grid>
        </Grid>
      </div>
      <div style={{ backgroundColor: "#F5F5F5" }} className="w-100">
        <div style={{ width: "88%", margin: "auto" }}>
          <CompanyLinks />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
