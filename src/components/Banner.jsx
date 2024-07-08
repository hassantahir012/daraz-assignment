import React from "react";
import Slider from "@ant-design/react-slick";
import { BelowBanner, five, four, one, six, three, two } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Stack } from "@mui/material";

const Banner = () => {
  const features = [
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/55c642f0-250b-4515-9c8a-42cce3327098.png",
      title: "Safe Payments",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/1b7e5ccb-89fc-4383-bc27-4586e82195be.png",
      title: "Nationwide Delivery",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/f2a7f550-3a25-478d-9879-e6aa419c7ebf.png",
      title: "Free & Easy Returns",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/05352646-9b19-4283-a7b1-dcb16736663e.png",
      title: "Best Price Guaranteed",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/781b5194-65f0-4ae5-b7a6-003bc717054f.png",
      title: "100% Authentic Products",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/8faa565d-b52d-4e05-90e4-38466e764e84.png",
      title: "Daraz Verified",
    },
  ];
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
    );
  };

  let settings = {
    className: "banner-slider",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    dotsClass: "slick-dots custom-dots",
    slidesToScroll: 1,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
  };

  return (
    <div>
      <section className="container-wrapper">
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} md={2.53}>
            <div className="custom-shadow-card">
              <ul
                className="list-unstyled category-list mb-0 pt-2"
                style={{ paddingBottom: "6px" }}
              >
                <li>
                  <span className="category-icon">
                    <i className="fa-solid fa-basket-shopping"></i>
                  </span>
                  <span className="banner-category-title">
                    Groceries & Pets
                  </span>
                </li>
                <li>
                  <span className="category-icon">
                    <i className="fa-solid fa-notes-medical"></i>
                  </span>
                  <span>Health & Beauty</span>
                </li>
                <li>
                  <span className="category-icon">
                    <i className="fa-solid fa-shirt"></i>
                  </span>
                  <span className="banner-category-title">Men's Fashion</span>
                </li>
                <li>
                  <span className="category-icon">
                    <i className="fa-solid fa-shirt"></i>
                  </span>
                  <span className="banner-category-title">Women's Fashion</span>
                </li>
                <li>
                  <span className="category-icon">
                    <i className="fa-solid fa-children"></i>
                  </span>
                  <span className="banner-category-title">Mother & Baby</span>
                </li>
                <li>
                  <span className="category-icon">
                    <i className="fa-solid fa-couch"></i>
                  </span>
                  <span className="banner-category-title">
                    Home & Lifestyle
                  </span>
                </li>
                <li>
                  <span className="category-icon">
                    <i className="fa-solid fa-laptop"></i>
                  </span>
                  <span className="banner-category-title">
                    Electronic Devices
                  </span>
                </li>
                <li>
                  <span className="category-icon">
                    <i className="fa-solid fa-computer-mouse"></i>
                  </span>
                  <span className="banner-category-title">
                    Electronic Accessories
                  </span>
                </li>
                <li>
                  <span className="category-icon">
                    <i className="fa-solid fa-tv"></i>
                  </span>
                  <span className="banner-category-title">
                    TV & Home Appliances
                  </span>
                </li>
                <li>
                  <span className="category-icon">
                    <i className="fa-solid fa-basketball"></i>
                  </span>
                  <span className="banner-category-title">
                    Sports & Outdoor
                  </span>
                </li>
                <li>
                  <span className="category-icon">
                    <i className="fa-solid fa-briefcase"></i>
                  </span>
                  <span className="banner-category-title">
                    Watches, Bags & Jewellery
                  </span>
                </li>
                <li>
                  <span className="category-icon">
                    <i className="fa-solid fa-car-side"></i>
                  </span>
                  <span className="banner-category-title">
                    Automotive & Motorbike
                  </span>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={9.47}>
            <Slider {...settings}>
              <div>
                <img src={one} alt="img" height={344} />
              </div>
              <div>
                <img src={two} alt="img" height={344} />
              </div>
              <div>
                <img src={three} alt="img" height={344} />
              </div>
              <div>
                <img src={four} alt="img" height={344} />
              </div>
              <div>
                <img src={five} alt="img" height={344} />
              </div>
              <div>
                <img src={six} alt="img" height={344} />
              </div>
            </Slider>
          </Grid>
        </Grid>
        <Stack
          className="features-container"
          direction={"row"}
          spacing={1}
          alignItems={"center"}
          flexWrap={"wrap"}
          sx={{
            justifyContent: {
              xs: "flex-start",
              xl: "space-between",
            },
          }}
        >
          {features.map((feature, index) => (
            <>
              <div className="d-flex align-items-center">
                <img
                  src={feature.image}
                  width={24}
                  height={24}
                  style={{ marginRight: "5px" }}
                />
                <a href="">{feature.title}</a>
              </div>
              {index < features.length - 1 && (
                <div style={{ fontSize: "13px", color: "rgba(0, 0, 0, .2)" }}>
                  |
                </div>
              )}
              {index === features.length - 1 && (
                <div style={{ fontSize: "13px" }}>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              )}
            </>
          ))}
        </Stack>
        <div className="d-flex justify-content-center">
          <img src={BelowBanner} style={{ maxWidth: "100%" }} />
        </div>
      </section>
      {/* <div className="feature-container"></div> */}
    </div>
  );
};

export default Banner;
