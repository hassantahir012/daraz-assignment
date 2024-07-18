import { Icon } from "@iconify/react/dist/iconify.js";
import { Select } from "antd";
import React, { useEffect, useState } from "react";
import Products from "./Products";
import Filters from "./Filters";
import { Drawer, IconButton } from "@mui/material";
import Service from "../../../services/service";

function PageContent() {
  const [filter, setFilter] = useState({
    sortBy: "best_match",
    brand: [],
  });
  const [products, setProducts] = useState([]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const openFilters = () => {
    setFiltersOpen(true);
  };
  const closeFilters = () => {
    setFiltersOpen(false);
  };
  const getProducts = async () => {
    const result = await Service.getCategoryProducts();
    setProducts(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const handleSortByChange = (val) =>
    setFilter((prev) => ({ ...prev, sortBy: val }));

  const filterAndSortProducts = () => {
    let filteredProducts = [...products];
    if (filter.brand.length > 0) {
      filteredProducts = products.filter((product) =>
        filter.brand.includes(product.brand)
      );
    }
    let sortedProducts;
    switch (filter.sortBy) {
      case "top_sales":
        sortedProducts = [...filteredProducts].sort(
          (a, b) => b.items_sold - a.items_sold
        );
        break;
      case "newest_arrivals":
        sortedProducts = [...filteredProducts].sort(
          (a, b) => b.createdAt - a.createdAt
        );
        break;
      case "price_low_to_high":
        sortedProducts = [...filteredProducts].sort(
          (a, b) => a.current_price - b.current_price
        );
        break;
      default:
        sortedProducts = filteredProducts;
    }

    return sortedProducts;
  };
  const handleRemoveBrand = (brand) => {
    setFilter((prev) => ({
      ...prev,
      brand: prev.brand.filter((val) => val !== brand),
    }));
  };
  const handleClearAllBrands = () => {
    setFilter((prev) => ({ ...prev, brand: [] }));
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div style={{ width: "100%" }} className="d-flex">
        <div className="filters-div">
          <Filters filter={filter} setFilter={setFilter} />
        </div>
        <div className="category-products-div">
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
              <div className="col-12 col-md-7 d-flex sort-by-div">
                <div
                  style={{
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
                    defaultValue={filter.sortBy}
                    onChange={handleSortByChange}
                    options={[
                      { value: "best_match", label: "Best Match" },
                      { value: "top_sales", label: "Top Sales" },
                      { value: "newest_arrivals", label: "Newest Arrivals" },
                      {
                        value: "price_low_to_high",
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
              <div onClick={openFilters} className="filter-button">
                Filters
                <Icon style={{ marginLeft: "5px" }} icon="ion:filter" />
              </div>
            </div>
          </div>
          {filter.brand.length > 0 && (
            <div
              className="active-filters--YsSFd"
              data-spm="selectedFilter"
              data-spm-anchor-id=""
            >
              {filter.brand.map((filterBrand) => (
                <div data-show="true" className="ant-tag" key={filterBrand}>
                  <span className="ant-tag-text">Brand: {filterBrand}</span>
                  <Icon
                    icon="charm:cross"
                    className="brand-clear-icon ms-1"
                    color="black"
                    onClick={() => handleRemoveBrand(filterBrand)}
                  />
                </div>
              ))}
              <span
                className="active-filters__clear--ZRgT2"
                onClick={handleClearAllBrands}
              >
                Clear all
              </span>
            </div>
          )}

          <Products products={filterAndSortProducts()} />
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
          <Filters filter={filter} setFilter={setFilter} />
        </div>
      </Drawer>
    </>
  );
}

export default PageContent;
