import React from "react";
import MainPageCategories from "../../components/MainPageCategories";
import FlashSales from "../../components/FlashSales";
import JustForYou from "../../components/JustForYou";
import Banner from "../../components/Banner";
import CompanyLinks from "../../components/CompanyLinks";
import Footer from "../../components/Footer";
import MessageBox from "../../components/MessageBox";
function HomePage() {
  return (
    <div className="homepage-body">
      <div className="custom-container custom-container-body">
        <Banner />
        <MainPageCategories />
        <FlashSales />
        <JustForYou />
        <CompanyLinks />
      </div>
      <Footer />
      <MessageBox />
    </div>
  );
}

export default HomePage;
