import { Icon } from "@iconify/react/dist/iconify.js";
import { Select } from "antd";
import React, { useEffect, useState } from "react";
import Products from "./Products";

function PageContent() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, []);
  return (
    <>
      <div style={{ width: "100%" }} className="d-flex">
        {width >= 768 && (
          <div
            style={{
              width: "20.833333%",
            }}
          >
            <div className="filter-list--Ycia_" data-spm="filter">
              <div className="filter-title--YJ0u2">Filters</div>
              <div className="filter-panel--ghwYA">
                <div className="filter-panel__title--jEXYP">
                  Promotion &amp; Services
                </div>
                <div className="filter-panel__body--IT_3Q">
                  <div className="service-wrap--hd8d6">
                    <div className="service-item--PR9FA">
                      <img
                        id="id-img"
                        className="image--WOyuZ "
                        src="https://img.alicdn.com/imgextra/i4/O1CN01Tp04IC1x3IWhZt8RK_!!6000000006387-2-tps-72-72.png"
                        loading="lazy"
                        style={{ width: 20, height: 20, marginRight: 4 }}
                      />
                      <div>Free Delivery</div>
                    </div>
                    <div className="service-item--PR9FA">
                      <img
                        id="id-img"
                        className="image--WOyuZ "
                        src="https://img.alicdn.com/imgextra/i2/O1CN01NvKzwK1KPUkP16LWh_!!6000000001156-2-tps-38-40.png"
                        loading="lazy"
                        style={{ width: 20, height: 20, marginRight: 4 }}
                      />
                      <div>Hot Deals</div>
                    </div>
                    <div className="service-item--PR9FA">
                      <img
                        id="id-img"
                        className="image--WOyuZ "
                        src="https://img.alicdn.com/imgextra/i4/O1CN01pr1AG92A8sM4YKlmy_!!6000000008159-2-tps-72-72.png"
                        loading="lazy"
                        style={{ width: 20, height: 20, marginRight: 4 }}
                      />
                      <div>Best Price Guaranteed</div>
                    </div>
                    <div className="service-item--PR9FA">
                      <img
                        id="id-img"
                        className="image--WOyuZ "
                        src="https://img.alicdn.com/imgextra/i2/O1CN01vBOxeq1geXG9uGcUi_!!6000000004167-2-tps-48-48.png"
                        loading="lazy"
                        style={{ width: 20, height: 20, marginRight: 4 }}
                      />
                      <div>Authentic Brands</div>
                    </div>
                    <div className="service-item--PR9FA">
                      <img
                        id="id-img"
                        className="image--WOyuZ "
                        src="https://img.alicdn.com/imgextra/i1/O1CN01QrLjf51wWmP3NOEvW_!!6000000006316-2-tps-72-72.png"
                        loading="lazy"
                        style={{ width: 20, height: 20, marginRight: 4 }}
                      />
                      <div>Daraz Verified</div>
                    </div>
                    <div className="service-item--PR9FA">
                      <img
                        id="id-img"
                        className="image--WOyuZ "
                        src="https://img.alicdn.com/imgextra/i2/O1CN01sEvCqG1M7ICGGpTXv_!!6000000001387-2-tps-72-72.png"
                        loading="lazy"
                        style={{ width: 20, height: 20, marginRight: 4 }}
                      />
                      <div>Cash On Delivery</div>
                    </div>
                    <div className="service-item--PR9FA">
                      <img
                        id="id-img"
                        className="image--WOyuZ "
                        src="https://img.alicdn.com/imgextra/i1/O1CN01I2QA9820i0Zw6wayK_!!6000000006882-2-tps-72-72.png"
                        loading="lazy"
                        style={{ width: 20, height: 20, marginRight: 4 }}
                      />
                      <div>Installment</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-panel--ghwYA">
                <div className="filter-panel__title--jEXYP">Category</div>
                <div className="filter-panel__body--IT_3Q">
                  <div>
                    <div className="expandable__panel--NXssW expandable__collapse--P_U4l">
                      <div className="category-list--wreqj">
                        <div className="category-list__item--RCyN7 category-list__item_active--cDP2i">
                          Wardrobe Organisers
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-panel--ghwYA">
                <div className="filter-panel__title--jEXYP">Brand</div>
                <div className="filter-panel__body--IT_3Q">
                  <div>
                    <div className="expandable__panel--NXssW expandable__collapse--P_U4l">
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d1"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Mishbeeka</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d2"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>BASEIN</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d3"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Blingstar</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d4"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Techmanistan</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d5"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>IKEA</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d6"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>FastForward</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d7"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Premier Home</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d8"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>OrcaEmporium</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d9"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Easy Home Online Service</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d10"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>SEYALS ENTERPRISES</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d11"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Dherig-Tech</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d12"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Aly &amp; Sam Creations</span>
                      </label>
                    </div>
                    <div className="expandable__more--KsqPe">
                      <span className="expandable__icon--GHNA7">+</span>View
                      More
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-panel--ghwYA">
                <div className="filter-panel__title--jEXYP">Color family</div>
                <div className="filter-panel__body--IT_3Q">
                  <div>
                    <div
                      className="expandable__panel--NXssW expandable__collapse--P_U4l"
                      style={{ maxHeight: 90 }}
                    >
                      <div className="color-wrap--SZgxS">
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(255, 255, 255)" }}
                          />
                          <span>Multicolor</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(128, 128, 128)" }}
                          />
                          <span>Grey</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(0, 0, 0)" }}
                          />
                          <span>Black</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(255, 255, 255)" }}
                          />
                          <span>White</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(0, 0, 255)" }}
                          />
                          <span>Blue</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(255, 192, 203)" }}
                          />
                          <span>Pink</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(0, 128, 0)" }}
                          />
                          <span>Green</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(150, 75, 0)" }}
                          />
                          <span>Brown</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(245, 245, 220)" }}
                          />
                          <span>Beige</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(255, 0, 0)" }}
                          />
                          <span>Red</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span>Multicolour</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(255, 255, 0)" }}
                          />
                          <span>Yellow</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(128, 0, 128)" }}
                          />
                          <span>Purple</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(255, 165, 0)" }}
                          />
                          <span>Orange</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(192, 192, 192)" }}
                          />
                          <span>Silver</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(255, 255, 255)" }}
                          />
                          <span>Clear</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(0, 0, 128)" }}
                          />
                          <span>Navy Blue</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(255, 255, 255)" }}
                          />
                          <span>Multi</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(111, 78, 55)" }}
                          />
                          <span>Coffee</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(255, 3, 75)" }}
                          />
                          <span>Rose Red</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(240, 230, 140)" }}
                          />
                          <span>Khaki</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(211, 211, 211)" }}
                          />
                          <span>Light Grey</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(173, 216, 230)" }}
                          />
                          <span>Light blue</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(169, 169, 169)" }}
                          />
                          <span>Deep Gray</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(128, 0, 0)" }}
                          />
                          <span>Maroon</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(0, 0, 139)" }}
                          />
                          <span>Dark blue</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(255, 215, 0)" }}
                          />
                          <span>Golden</span>
                        </div>
                        <div className="color-item--kU0Yn">
                          <span
                            className="color-icon--i2VGA"
                            style={{ background: "rgb(251, 206, 177)" }}
                          />
                          <span>Apricot</span>
                        </div>
                      </div>
                    </div>
                    <div className="expandable__more--KsqPe">
                      <span className="expandable__icon--GHNA7">+</span>View
                      More
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-panel--ghwYA">
                <div className="filter-panel__title--jEXYP">Price</div>
                <div className="filter-panel__body--IT_3Q">
                  <div className="filter-price__row--jMikT">
                    <input
                      type="number"
                      min={0}
                      className="filter-price__input--InSAj"
                      placeholder="Min"
                      defaultValue=""
                      pattern="[0-9]*"
                    />
                    <div className="filter-price__spliter--W_jRY">-</div>
                    <input
                      type="number"
                      min={0}
                      className="filter-price__input--InSAj"
                      placeholder="Max"
                      defaultValue=""
                      pattern="[0-9]*"
                    />
                    <button
                      type="button"
                      className="ant-btn filter-price__btn--F4CmC ant-btn-primary"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
              <div className="filter-panel--ghwYA">
                <div className="filter-panel__title--jEXYP">Rating</div>
                <div className="filter-panel__body--IT_3Q">
                  <div className="rating--DQwV0 ">
                    <div
                      className="d-flex justify-content-between align-items-center"
                      style={{ width: "70%" }}
                    >
                      <Icon
                        icon="emojione:star"
                        style={{ height: 26, width: 26 }}
                      />
                      <Icon
                        icon="emojione:star"
                        style={{ height: 26, width: 26 }}
                      />
                      <Icon
                        icon="emojione:star"
                        style={{ height: 26, width: 26 }}
                      />
                      <Icon
                        icon="emojione:star"
                        style={{ height: 26, width: 26 }}
                      />
                      <Icon
                        icon="emojione:star"
                        style={{ height: 26, width: 26 }}
                      />
                    </div>
                    <span> </span>
                  </div>
                  <div className="rating--DQwV0 ">
                    <div className="d-flex justify-content-between align-items-center">
                      <div
                        style={{ width: "70%" }}
                        className="d-flex justify-content-between align-items-center"
                      >
                        <Icon
                          icon="emojione:star"
                          style={{ height: 26, width: 26 }}
                        />
                        <Icon
                          icon="emojione:star"
                          style={{ height: 26, width: 26 }}
                        />
                        <Icon
                          icon="emojione:star"
                          style={{ height: 26, width: 26 }}
                        />
                        <Icon
                          icon="emojione:star"
                          style={{ height: 26, width: 26 }}
                        />
                        <Icon
                          icon="la:star-solid"
                          style={{ color: "#bcbcbc", height: 26, width: 26 }}
                        />
                      </div>{" "}
                      <span
                        style={{
                          color: "rgba(0,0,0,0.7)",
                          fontSize: "12px",
                          width: "23.5%",
                        }}
                      >
                        and Up
                      </span>
                    </div>
                  </div>
                  <div className="rating--DQwV0 ">
                    <div className="d-flex justify-content-between align-items-center">
                      <div
                        style={{ width: "70%" }}
                        className="d-flex justify-content-between align-items-center"
                      >
                        <Icon
                          icon="emojione:star"
                          style={{ height: 26, width: 26 }}
                        />
                        <Icon
                          icon="emojione:star"
                          style={{ height: 26, width: 26 }}
                        />
                        <Icon
                          icon="emojione:star"
                          style={{ height: 26, width: 26 }}
                        />
                        <Icon
                          icon="la:star-solid"
                          style={{ color: "#bcbcbc", height: 26, width: 26 }}
                        />
                        <Icon
                          icon="la:star-solid"
                          style={{ color: "#bcbcbc", height: 26, width: 26 }}
                        />
                      </div>
                      <span
                        style={{
                          color: "rgba(0,0,0,0.7)",
                          fontSize: "12px",
                          width: "23.5%",
                        }}
                      >
                        and Up
                      </span>
                    </div>
                  </div>
                  <div className="rating--DQwV0 ">
                    <div className="d-flex justify-content-between align-items-center">
                      <div
                        style={{ width: "70%" }}
                        className="d-flex justify-content-between align-items-center"
                      >
                        <Icon
                          icon="emojione:star"
                          style={{ height: 26, width: 26 }}
                        />
                        <Icon
                          icon="emojione:star"
                          style={{ height: 26, width: 26 }}
                        />
                        <Icon
                          icon="la:star-solid"
                          style={{ color: "#bcbcbc", height: 26, width: 26 }}
                        />
                        <Icon
                          icon="la:star-solid"
                          style={{ color: "#bcbcbc", height: 26, width: 26 }}
                        />
                        <Icon
                          icon="la:star-solid"
                          style={{ color: "#bcbcbc", height: 26, width: 26 }}
                        />
                      </div>
                      <span
                        style={{
                          color: "rgba(0,0,0,0.7)",
                          fontSize: "12px",
                          width: "23.5%",
                        }}
                      >
                        and Up
                      </span>
                    </div>
                  </div>
                  <div className="rating--DQwV0 ">
                    <div className="d-flex justify-content-between align-items-center">
                      <div
                        style={{ width: "70%" }}
                        className="d-flex justify-content-between align-items-center"
                      >
                        <Icon
                          icon="emojione:star"
                          style={{ height: 26, width: 26 }}
                        />
                        <Icon
                          icon="la:star-solid"
                          style={{ color: "#bcbcbc", height: 26, width: 26 }}
                        />
                        <Icon
                          icon="la:star-solid"
                          style={{ color: "#bcbcbc", height: 26, width: 26 }}
                        />
                        <Icon
                          icon="la:star-solid"
                          style={{ color: "#bcbcbc", height: 26, width: 26 }}
                        />
                        <Icon
                          icon="la:star-solid"
                          style={{ color: "#bcbcbc", height: 26, width: 26 }}
                        />
                      </div>
                      <span
                        style={{
                          color: "rgba(0,0,0,0.7)",
                          fontSize: "12px",
                          width: "23.5%",
                        }}
                      >
                        and Up
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-panel--ghwYA">
                <div className="filter-panel__title--jEXYP">Location</div>
                <div className="filter-panel__body--IT_3Q">
                  <div>
                    <div className="expandable__panel--NXssW expandable__collapse--P_U4l">
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d1"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Pakistan</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d2"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>China</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d3"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>India</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-panel--ghwYA">
                <div className="filter-panel__title--jEXYP">
                  Number of Pieces
                </div>
                <div className="filter-panel__body--IT_3Q">
                  <div>
                    <div className="expandable__panel--NXssW expandable__collapse--P_U4l">
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d1"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>6</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d2"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>1</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d3"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>10</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d4"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>3</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d5"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>2</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d6"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>4</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d7"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>5</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d8"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>8</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d9"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>7</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d10"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>9</span>
                      </label>
                    </div>
                    <div className="expandable__more--KsqPe">
                      <span className="expandable__icon--GHNA7">+</span>View
                      More
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-panel--ghwYA">
                <div className="filter-panel__title--jEXYP">Lockable</div>
                <div className="filter-panel__body--IT_3Q">
                  <div>
                    <div className="expandable__panel--NXssW expandable__collapse--P_U4l">
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d1"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Yes</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d2"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-panel--ghwYA">
                <div className="filter-panel__title--jEXYP">Warranty Type</div>
                <div className="filter-panel__body--IT_3Q">
                  <div>
                    <div className="expandable__panel--NXssW expandable__collapse--P_U4l">
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d1"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>No Warranty</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d2"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Seller Warranty</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d3"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Brand Warranty</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d4"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>International Manufacturer Warranty</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d5"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Local seller warranty</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d6"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Non-local warranty</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d7"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>International Warranty</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-panel--ghwYA">
                <div className="filter-panel__title--jEXYP">
                  Storage Feature
                </div>
                <div className="filter-panel__body--IT_3Q">
                  <div>
                    <div className="expandable__panel--NXssW expandable__collapse--P_U4l">
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d1"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Foldable</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d2"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Open Storage</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d3"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Waterproof</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d4"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Water Resistant</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d5"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Stackable</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d6"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Display Case</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d7"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Multi-compartment</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d8"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Cabinets</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d9"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Locking</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d10"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Includes Lid</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d11"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Stainless Steel</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d12"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Mobile</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d13"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Wine Bottle Storage</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d14"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Wine Glass Storage</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d15"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Silverware Storage</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d16"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Suction</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d17"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Fireproof</span>
                      </label>
                    </div>
                    <div className="expandable__more--KsqPe">
                      <span className="expandable__icon--GHNA7">+</span>View
                      More
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-panel--ghwYA">
                <div className="filter-panel__title--jEXYP">Material</div>
                <div className="filter-panel__body--IT_3Q">
                  <div>
                    <div className="expandable__panel--NXssW expandable__collapse--P_U4l">
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d1"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Fabric and Plastic</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d2"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Fabric</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d3"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Nylon</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d4"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Cotton</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d5"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Polyester</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d6"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Cloth</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d7"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Canvas</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d8"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Stainless Steel</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d9"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Other</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d10"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Microfiber Polyester</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d11"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Cotton linen</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d12"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Wood</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d13"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Sheet Metal</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d14"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Polyurethane</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d15"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>ABS</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d16"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Polyvinyl Chloride (PVC)</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d17"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Chipboard</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d18"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Polypropylene (PP)</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d19"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Acrylic</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d20"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Bamboo</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d21"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Metalix Leather</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d22"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Iron</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d23"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>MDF</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d24"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Serene Fabric (SR)</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d25"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Linen</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d26"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>PVC Tarpaulin</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d27"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>100% cotton</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d28"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Rayon + Polyeaster</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d29"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>EVA</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d30"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Stone</span>
                      </label>
                    </div>
                    <div className="expandable__more--KsqPe">
                      <span className="expandable__icon--GHNA7">+</span>View
                      More
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-panel--ghwYA">
                <div className="filter-panel__title--jEXYP">
                  Warranty Period
                </div>
                <div className="filter-panel__body--IT_3Q">
                  <div>
                    <div className="expandable__panel--NXssW expandable__collapse--P_U4l">
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d1"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>1 Month</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d2"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>26</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d3"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>42</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d4"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>28</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d5"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>7</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d6"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>3 Months</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d7"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>40</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d8"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>2 Months</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d9"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>Life Time Warranty</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d10"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>1</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d11"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>6 Months</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d12"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>1 Year</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d13"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>14</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d14"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>11 Months</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d15"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>2 Years</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d16"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>4 Months</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d17"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>5 Months</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d18"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>10 Years</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d19"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>3</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d20"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>13</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d21"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>112</span>
                      </label>
                      <label className="checkbox--tqPns ant-checkbox-wrapper">
                        <span className="ant-checkbox">
                          <input
                            type="checkbox"
                            className="ant-checkbox-input"
                            data-spm-click="gostr=/lzdse.result.filter;locaid=d22"
                            defaultValue="on"
                          />
                          <span className="ant-checkbox-inner" />
                        </span>
                        <span>8 Months</span>
                      </label>
                    </div>
                    <div className="expandable__more--KsqPe">
                      <span className="expandable__icon--GHNA7">+</span>View
                      More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          style={{
            width: width >= 768 ? "79.16666%" : "100%",
            paddingLeft: "20px",
          }}
        >
          <div
            style={{
              paddingBottom: "15px",
              paddingTop: "24px",
              fontSize: "14px",
              lineHeight: "40px",
              borderBottom: "1px solid #ececec",
            }}
          >
            <div className="row">
              <div className="col-12 col-lg-5">
                <div>
                  <div
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      color: "#000000d9",
                    }}
                  >
                    <span>18,172 items found for </span>
                    <span style={{ color: "rgb(248, 86, 6)" }}>
                      "Wardrobe Organisers"
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`col-12 col-lg-7 d-flex ${
                  width >= 992 ? "justify-content-end" : "justify-content-start"
                }`}
              >
                <div
                  style={{
                    //   fontSize: "14px",
                    //   lineHeight: "40px",
                    color: "#000000a6",
                    marginRight: "10px",
                  }}
                >
                  Sort By:
                </div>
                <div
                  style={{
                    width: "200px",
                  }}
                >
                  <Select
                    style={{
                      borderRadius: "20px",
                      width: "100%",
                      height: "100%",
                    }}
                    defaultValue={"best_match"}
                    options={[
                      { value: "best_match", label: "Best Match" },
                      { value: "top_sales", label: "Top Sales" },
                      { value: "newest_arrivals", label: "Newest Arrivals" },
                      {
                        value: "price_low_tohigh",
                        label: "Price Low to High",
                      },
                    ]}
                  />
                </div>
                <div
                  style={{
                    color: "#000000a6",
                    marginLeft: "25px",
                    marginRight: "5px",
                  }}
                >
                  View:
                </div>
                <div style={{ marginRight: "10px" }}>
                  <Icon
                    icon="material-symbols:grid-view"
                    style={{ color: "#183545", height: 24, width: 24 }}
                  />
                </div>
                <div>
                  <Icon
                    icon="material-symbols:view-list-sharp"
                    style={{ color: "#bcbcbc", height: 24, width: 24 }}
                  />
                </div>
              </div>
            </div>

            <div className="compaign-tag--Llngs" data-spm="promotionFilter">
              <div
                className="tag-box--Tuf_m"
                style={{
                  border: "1px solid rgb(254, 221, 205)",
                  background: "rgb(255, 241, 234)",
                }}
              >
                <span
                  style={{
                    color: "rgb(248, 87, 5)",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  Show{" "}
                </span>
                <span
                  style={{
                    color: "rgb(248, 87, 5)",
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  7.7
                </span>
                <span
                  style={{
                    color: "rgb(248, 87, 5)",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  {" "}
                  products only
                </span>
              </div>
            </div>
          </div>
          <Products />
        </div>
      </div>
    </>
  );
}

export default PageContent;
