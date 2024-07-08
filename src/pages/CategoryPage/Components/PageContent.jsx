import { Icon } from "@iconify/react/dist/iconify.js";
import { Select } from "antd";
import React, { useEffect, useState } from "react";
import Products from "./Products";
import Filters from "./Filters";
import { Drawer, IconButton } from "@mui/material";

function PageContent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const openFilters = () => {
    setFiltersOpen(true);
  };
  const closeFilters = () => {
    setFiltersOpen(false);
  };
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, []);
  return (
    <>
      <div style={{ width: "100%" }} className="d-flex">
        {width >= 992 && (
          <div
            style={{
              width: "20.833333%",
            }}
          >
            <Filters />
          </div>
        )}
        <div
          style={{
            width: width >= 992 ? "79.16666%" : "100%",
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
              <div className="col-12 col-md-5">
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
                className={`col-12 col-md-7 d-flex ${
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

            <div
              className="compaign-tag--Llngs gap-2"
              data-spm="promotionFilter"
            >
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
              {width < 992 && (
                <div onClick={openFilters} className="filter-button">
                  Filters
                  <Icon style={{ marginLeft: "5px" }} icon="ion:filter" />
                </div>
              )}
            </div>
          </div>
          <Products />
        </div>
      </div>
      <Drawer
        open={filtersOpen}
        onClose={closeFilters}
        PaperProps={{
          sx: {
            border: "none",
            width: { xs: 1, sm: 440, md: 500 },
            p: 2,
          },
        }}
        sx={{ p: 2 }}
      >
        <div style={{ position: "relative" }}>
          <IconButton
            sx={{ position: "absolute", right: 5, top: 14 }}
            onClick={closeFilters}
          >
            <Icon icon="mdi:close" />
          </IconButton>
          <Filters />
        </div>
      </Drawer>
    </>
  );
}

export default PageContent;
