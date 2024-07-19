import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import FilterItemsCheckboxes from "./FilterItemsCheckboxes";

function Filters({ filter, setFilter }) {
  const handleFilterChange = (type, e) => {
    setFilter((prev) => ({
      ...prev,
      [type]:
        e.target.checked === true
          ? [...prev[type], e.target.value]
          : [...prev[type].filter((val) => val !== e.target.value)],
    }));
  };
  const filterOptions = {
    brands: {
      handleChange: (e) => handleFilterChange("brand", e),
      options: [
        "Mishbeeka",
        "BASEIN",
        "Blingstar",
        "Techmanistan",
        "IKEA",
        "FastForward",
        "Premier Home",
        "OrcaEmporium",
      ],
    },
    location: {
      handleChange: () => {},
      options: ["Pakistan", "China", "India"],
    },
    num_of_pieces: {
      handleChange: () => {},
      options: ["1", "5", "10", "15", "20"],
    },
    lock_able: {
      handleChange: () => {},
      options: ["Yes", "No"],
    },
    waranty_type: {
      handleChange: () => {},
      options: [
        "No Warranty",
        "Seller Warranty",
        "Brand Warranty",
        "International Manufacturer Warranty",
        "Local seller Warranty",
        "Non-local warranty",
        "International Warranty",
      ],
    },
    storage_feature: {
      handleChange: () => {},
      options: [
        "Foldable",
        "Open Storage",
        "Waterproof",
        "Water Resistant",
        "Stackable",
        "Display Case",
        "Muli-compartment",
        "Cabinets",
      ],
    },
    material: {
      handleChange: () => {},
      options: [
        "Fabric and Plastic",
        "Fabric",
        "Nylon",
        "Cotton",
        "Polyester",
        "Cloth",
        "Canvas",
        "Stainless Steel",
      ],
    },
    warranty_period: {
      handleChange: () => {},
      options: [
        "1 Month",
        "2 Months",
        "3 Months",
        "6 Months",
        "1 Year",
        "Life Time Warranty",
      ],
    },
  };
  return (
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
              />
              <div>Free Delivery</div>
            </div>
            <div className="service-item--PR9FA">
              <img
                id="id-img"
                className="image--WOyuZ "
                src="https://img.alicdn.com/imgextra/i2/O1CN01NvKzwK1KPUkP16LWh_!!6000000001156-2-tps-38-40.png"
                loading="lazy"
              />
              <div>Hot Deals</div>
            </div>
            <div className="service-item--PR9FA">
              <img
                id="id-img"
                className="image--WOyuZ "
                src="https://img.alicdn.com/imgextra/i4/O1CN01pr1AG92A8sM4YKlmy_!!6000000008159-2-tps-72-72.png"
                loading="lazy"
              />
              <div>Best Price Guaranteed</div>
            </div>
            <div className="service-item--PR9FA">
              <img
                id="id-img"
                className="image--WOyuZ "
                src="https://img.alicdn.com/imgextra/i2/O1CN01vBOxeq1geXG9uGcUi_!!6000000004167-2-tps-48-48.png"
                loading="lazy"
              />
              <div>Authentic Brands</div>
            </div>
            <div className="service-item--PR9FA">
              <img
                id="id-img"
                className="image--WOyuZ "
                src="https://img.alicdn.com/imgextra/i1/O1CN01QrLjf51wWmP3NOEvW_!!6000000006316-2-tps-72-72.png"
                loading="lazy"
              />
              <div>Daraz Verified</div>
            </div>
            <div className="service-item--PR9FA">
              <img
                id="id-img"
                className="image--WOyuZ "
                src="https://img.alicdn.com/imgextra/i2/O1CN01sEvCqG1M7ICGGpTXv_!!6000000001387-2-tps-72-72.png"
                loading="lazy"
              />
              <div>Cash On Delivery</div>
            </div>
            <div className="service-item--PR9FA">
              <img
                id="id-img"
                className="image--WOyuZ "
                src="https://img.alicdn.com/imgextra/i1/O1CN01I2QA9820i0Zw6wayK_!!6000000006882-2-tps-72-72.png"
                loading="lazy"
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
              {filterOptions.brands.options.map((filterOption) => (
                <FilterItemsCheckboxes
                  handleChange={filterOptions.brands.handleChange}
                  title={filterOption}
                  key={filterOption}
                />
              ))}
            </div>
            <div className="expandable__more--KsqPe">
              <span className="expandable__icon--GHNA7">+</span>View More
            </div>
          </div>
        </div>
      </div>
      <div className="filter-panel--ghwYA">
        <div className="filter-panel__title--jEXYP">Color family</div>
        <div className="filter-panel__body--IT_3Q">
          <div>
            <div className="expandable__panel--NXssW expandable__collapse--P_U4l color-panel">
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
              </div>
            </div>
            <div className="expandable__more--KsqPe">
              <span className="expandable__icon--GHNA7">+</span>View More
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
            <div className="d-flex justify-content-between align-items-center w-70">
              <Icon icon="emojione:star" className="filter-star-icon" />
              <Icon icon="emojione:star" className="filter-star-icon" />
              <Icon icon="emojione:star" className="filter-star-icon" />
              <Icon icon="emojione:star" className="filter-star-icon" />
              <Icon icon="emojione:star" className="filter-star-icon" />
            </div>
            <span> </span>
          </div>
          <div className="rating--DQwV0 ">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center w-70">
                <Icon icon="emojione:star" className="filter-star-icon" />
                <Icon icon="emojione:star" className="filter-star-icon" />
                <Icon icon="emojione:star" className="filter-star-icon" />
                <Icon icon="emojione:star" className="filter-star-icon" />
                <Icon
                  icon="la:star-solid"
                  className="filter-star-icon filter-star-icon-color"
                />
              </div>{" "}
              <span className="rating-spans">and Up</span>
            </div>
          </div>
          <div className="rating--DQwV0 ">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center w-70">
                <Icon icon="emojione:star" className="filter-star-icon" />
                <Icon icon="emojione:star" className="filter-star-icon" />
                <Icon icon="emojione:star" className="filter-star-icon" />
                <Icon
                  icon="la:star-solid"
                  className="filter-star-icon filter-star-icon-color"
                />
                <Icon
                  icon="la:star-solid"
                  className="filter-star-icon filter-star-icon-color"
                />
              </div>
              <span className="rating-spans">and Up</span>
            </div>
          </div>
          <div className="rating--DQwV0 ">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center w-70">
                <Icon icon="emojione:star" className="filter-star-icon" />
                <Icon icon="emojione:star" className="filter-star-icon" />
                <Icon
                  icon="la:star-solid"
                  className="filter-star-icon filter-star-icon-color"
                />
                <Icon
                  icon="la:star-solid"
                  className="filter-star-icon filter-star-icon-color"
                />
                <Icon
                  icon="la:star-solid"
                  className="filter-star-icon filter-star-icon-color"
                />
              </div>
              <span className="rating-spans">and Up</span>
            </div>
          </div>
          <div className="rating--DQwV0 ">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center w-70">
                <Icon icon="emojione:star" className="filter-star-icon" />
                <Icon
                  icon="la:star-solid"
                  className="filter-star-icon filter-star-icon-color"
                />
                <Icon
                  icon="la:star-solid"
                  className="filter-star-icon filter-star-icon-color"
                />
                <Icon
                  icon="la:star-solid"
                  className="filter-star-icon filter-star-icon-color"
                />
                <Icon
                  icon="la:star-solid"
                  className="filter-star-icon filter-star-icon-color"
                />
              </div>
              <span className="rating-spans">and Up</span>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-panel--ghwYA">
        <div className="filter-panel__title--jEXYP">Location</div>
        <div className="filter-panel__body--IT_3Q">
          <div>
            <div className="expandable__panel--NXssW expandable__collapse--P_U4l">
              {filterOptions.location.options.map((filterOption) => (
                <FilterItemsCheckboxes
                  title={filterOption}
                  key={filterOption}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="filter-panel--ghwYA">
        <div className="filter-panel__title--jEXYP">Number of Pieces</div>
        <div className="filter-panel__body--IT_3Q">
          <div>
            <div className="expandable__panel--NXssW expandable__collapse--P_U4l">
              {filterOptions.num_of_pieces.options.map((filterOption) => (
                <FilterItemsCheckboxes
                  title={filterOption}
                  key={filterOption}
                />
              ))}
            </div>
            <div className="expandable__more--KsqPe">
              <span className="expandable__icon--GHNA7">+</span>View More
            </div>
          </div>
        </div>
      </div>
      <div className="filter-panel--ghwYA">
        <div className="filter-panel__title--jEXYP">Lockable</div>
        <div className="filter-panel__body--IT_3Q">
          <div>
            <div className="expandable__panel--NXssW expandable__collapse--P_U4l">
              {filterOptions.lock_able.options.map((filterOption) => (
                <FilterItemsCheckboxes
                  title={filterOption}
                  key={filterOption}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="filter-panel--ghwYA">
        <div className="filter-panel__title--jEXYP">Warranty Type</div>
        <div className="filter-panel__body--IT_3Q">
          <div>
            <div className="expandable__panel--NXssW expandable__collapse--P_U4l">
              {filterOptions.waranty_type.options.map((filterOption) => (
                <FilterItemsCheckboxes
                  title={filterOption}
                  key={filterOption}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="filter-panel--ghwYA">
        <div className="filter-panel__title--jEXYP">Storage Feature</div>
        <div className="filter-panel__body--IT_3Q">
          <div>
            <div className="expandable__panel--NXssW expandable__collapse--P_U4l">
              {filterOptions.storage_feature.options.map((filterOption) => (
                <FilterItemsCheckboxes
                  title={filterOption}
                  key={filterOption}
                />
              ))}
            </div>
            <div className="expandable__more--KsqPe">
              <span className="expandable__icon--GHNA7">+</span>View More
            </div>
          </div>
        </div>
      </div>
      <div className="filter-panel--ghwYA">
        <div className="filter-panel__title--jEXYP">Material</div>
        <div className="filter-panel__body--IT_3Q">
          <div>
            <div className="expandable__panel--NXssW expandable__collapse--P_U4l">
              {filterOptions.material.options.map((filterOption) => (
                <FilterItemsCheckboxes
                  title={filterOption}
                  key={filterOption}
                />
              ))}
            </div>
            <div className="expandable__more--KsqPe">
              <span className="expandable__icon--GHNA7">+</span>View More
            </div>
          </div>
        </div>
      </div>
      <div className="filter-panel--ghwYA">
        <div className="filter-panel__title--jEXYP">Warranty Period</div>
        <div className="filter-panel__body--IT_3Q">
          <div>
            <div className="expandable__panel--NXssW expandable__collapse--P_U4l">
              {filterOptions.warranty_period.options.map((filterOption) => (
                <FilterItemsCheckboxes
                  title={filterOption}
                  key={filterOption}
                />
              ))}
            </div>
            <div className="expandable__more--KsqPe">
              <span className="expandable__icon--GHNA7">+</span>View More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
