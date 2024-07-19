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
      <div className="d-flex w-100">
        <div className="filters-div">
          <Filters filter={filter} setFilter={setFilter} />
        </div>
        <div className="category-products-div">
          <div className="category-products-div-container">
            <div className="row">
              <div className="col-12 col-md-5">
                <div>
                  <div className="items-count-container">
                    <span>18,172 items found for </span>
                    <span className="items-count-container-name">
                      "Wardrobe Organisers"
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-7 d-flex sort-by-div">
                <div className="sort-by">Sort By:</div>
                <div className="sort-by-select-container">
                  <Select
                    className="sort-by-select"
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
                <div className="view-container">View:</div>
                <div className="view-icons-container">
                  <Icon
                    icon="material-symbols:grid-view"
                    className="grid-view-icon"
                  />
                </div>
                <div>
                  <Icon
                    icon="material-symbols:view-list-sharp"
                    className="list-view-icon"
                  />
                </div>
              </div>
            </div>

            <div
              className="compaign-tag--Llngs gap-2"
              data-spm="promotionFilter"
            >
              <div className="tag-box--Tuf_m">
                <span>Show </span>
                <span>7.7</span>
                <span> products only</span>
              </div>
              <div onClick={openFilters} className="filter-button">
                Filters
                <Icon className="filter-icon" icon="ion:filter" />
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
        <div className="position-relative">
          <IconButton className="filter-close-icon" onClick={closeFilters}>
            <Icon icon="mdi:close" />
          </IconButton>
          <Filters filter={filter} setFilter={setFilter} />
        </div>
      </Drawer>
    </>
  );
}

export default PageContent;
