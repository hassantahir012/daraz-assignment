import React, { useState } from "react";
import "./style/style.css";
import CompanyLinks from "../../components/CompanyLinks";
import BreadCrumbs from "./components/BreadCrumbs";
import ProductDetails from "./components/ProductDetails";
import { Grid } from "@mui/material";
import Ratings from "./components/Ratings";
import OtherProducts from "./components/OtherProducts";
import Specifications from "./components/Specifications";

function ProductPage() {
  const productImages = [
    "https://static-01.daraz.pk/p/f57b6e87e29208d111e4bd63e20e169f.jpg",
    "https://static-01.daraz.pk/p/c2654e652d98ad4c68f3c0962e5bfd18.jpg",
    "https://static-01.daraz.pk/p/4a08dd2ed93e387a63187e3661dc871c.jpg",
    "https://static-01.daraz.pk/p/0e2da6e72c58c3f6c785426cc6885a67.jpg",
  ];
  const [curretImage, setCurretImage] = useState(productImages[0]);
  const handleChangeCurrentImage = (image) => {
    setCurretImage(image);
  };
  return (
    <div style={{ backgroundColor: "#EFF0F5" }}>
      <div
        className="custom-container custom-container-body"
        style={{ paddingTop: "6.6%", paddingBottom: "20px" }}
      >
        <BreadCrumbs />
        <ProductDetails
          currentImage={curretImage}
          handleChangeCurrentImage={handleChangeCurrentImage}
          productImages={productImages}
        />
        <Grid container mt={1.25} spacing={1.25} marginTop={0}>
          <Grid item xs={12} xl={9.996}>
            <Ratings />
            <Specifications productImages={productImages} />
          </Grid>
          <Grid item xs={12} xl={2.004}>
            <OtherProducts />
          </Grid>
        </Grid>
      </div>
      <div className="homepage-body w-100">
        <div className="custom-container">
          <CompanyLinks />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
