import React, { useEffect, useState } from "react";
import { AppIcon, logo } from "../assets";
import { Menu, MenuItem, Stack } from "@mui/material";

function Header() {
  const [scroll, setScroll] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [anchorEl, setAnchorEl] = useState();
  const [displayCategories, setDisplayCategories] = useState({
    cat1: false,
    cat2: false,
    cat3: false,
  });
  const checkScroll = () => {
    setScroll(window.scrollY);
    if (window.scrollY < 600) {
      setDisplayCategories({
        cat1: false,
        cat2: false,
        cat3: false,
      });
    }
  };
  const checkWidth = () => {
    setWidth(window.innerWidth);
  };
  const checkCursorPosition = (e) => {
    if (
      e.clientX >= 220 &&
      e.clientX <= 326 &&
      e.clientY >= 14 &&
      e.clientY <= 50 &&
      scroll >= 600
    ) {
      setDisplayCategories((prev) => ({ ...prev, cat1: true }));
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkWidth);
    window.addEventListener("mousemove", checkCursorPosition);
    return () => {
      window.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkWidth);
      window.removeEventListener("mousemove", checkCursorPosition);
    };
  }, [scroll]);
  return (
    <>
      {displayCategories.cat1 && (
        <div
          id="main-categories"
          style={{
            width: "18%",
            backgroundColor: "#fff",
            position: "fixed",
            zIndex: "2",
            top: "75px",
            left: "6%",
            borderBottomLeftRadius: "8px",
          }}
        >
          <ul
            className="list-unstyled category-list mb-0 pt-2"
            style={{
              paddingBottom: "6px",
              width: "100%",
            }}
            onMouseEnter={() =>
              setDisplayCategories((prev) => ({ ...prev, cat2: true }))
            }
            onMouseLeave={(e) => {
              if (e.clientX <= 80 || e.clientY >= 413) {
                setDisplayCategories({ cat1: false, cat2: false, cat3: false });
              }
            }}
          >
            <li>
              <span className="category-icon">
                <i className="fa-solid fa-basket-shopping"></i>
              </span>
              <span>Groceries & Pets</span>
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
              <span>Men's Fashion</span>
            </li>
            <li>
              <span className="category-icon">
                <i className="fa-solid fa-shirt"></i>
              </span>
              <span>Women's Fashion</span>
            </li>
            <li>
              <span className="category-icon">
                <i className="fa-solid fa-children"></i>
              </span>
              <span>Mother & Baby</span>
            </li>
            <li>
              <span className="category-icon">
                <i className="fa-solid fa-couch"></i>
              </span>
              <span>Home & Lifestyle</span>
            </li>
            <li>
              <span className="category-icon">
                <i className="fa-solid fa-laptop"></i>
              </span>
              <span>Electronic Devices</span>
            </li>
            <li>
              <span className="category-icon">
                <i className="fa-solid fa-computer-mouse"></i>
              </span>
              <span>Electronic Accessories</span>
            </li>
            <li>
              <span className="category-icon">
                <i className="fa-solid fa-tv"></i>
              </span>
              <span>TV & Home Appliances</span>
            </li>
            <li>
              <span className="category-icon">
                <i className="fa-solid fa-basketball"></i>
              </span>
              <span>Sports & Outdoor</span>
            </li>
            <li>
              <span className="category-icon">
                <i className="fa-solid fa-briefcase"></i>
              </span>
              <span>Watches, Bags & Jewellery</span>
            </li>
            <li>
              <span className="category-icon">
                <i className="fa-solid fa-car-side"></i>
              </span>
              <span>Automotive & Motorbike</span>
            </li>
          </ul>
        </div>
      )}
      {displayCategories.cat2 && (
        <div
          id="sub-categories"
          style={{
            width: "18%",
            backgroundColor: "#fff",
            position: "fixed",
            zIndex: "2",
            top: "75px",
            left: "24%",
          }}
        >
          <ul
            className="list-unstyled category-list mb-0 pt-2"
            style={{
              paddingBottom: "6px",
              width: "100%",
              minHeight: "338px",
            }}
            onMouseEnter={() =>
              setDisplayCategories((prev) => ({ ...prev, cat3: true }))
            }
            onMouseLeave={(e) => {
              if (e.clientX <= 322) {
                setDisplayCategories((prev) => ({ ...prev, cat3: false }));
              }
              if (e.clientY >= 413) {
                setDisplayCategories({ cat1: false, cat2: false, cat3: false });
              }
            }}
          >
            <li>
              <span className="category-icon">
                <i className="fa-solid fa-basket-shopping"></i>
              </span>
              <span>Groceries & Pets</span>
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
              <span>Men's Fashion</span>
            </li>
            <li>
              <span className="category-icon">
                <i className="fa-solid fa-shirt"></i>
              </span>
              <span>Women's Fashion</span>
            </li>
            <li>
              <span className="category-icon">
                <i className="fa-solid fa-children"></i>
              </span>
              <span>Mother & Baby</span>
            </li>
            <li>
              <span className="category-icon">
                <i className="fa-solid fa-couch"></i>
              </span>
              <span>Home & Lifestyle</span>
            </li>
            <li>
              <span className="category-icon">
                <i className="fa-solid fa-laptop"></i>
              </span>
              <span>Electronic Devices</span>
            </li>
            <li>
              <span className="category-icon">
                <i className="fa-solid fa-computer-mouse"></i>
              </span>
              <span>Electronic Accessories</span>
            </li>
            <li>
              <span className="category-icon">
                <i className="fa-solid fa-tv"></i>
              </span>
              <span>TV & Home Appliances</span>
            </li>
            <li>
              <span className="category-icon">
                <i className="fa-solid fa-basketball"></i>
              </span>
              <span>Sports & Outdoor</span>
            </li>
            <li>
              <span className="category-icon">
                <i className="fa-solid fa-briefcase"></i>
              </span>
              <span>Watches, Bags & Jewellery</span>
            </li>
            <li>
              <span className="category-icon">
                <i className="fa-solid fa-car-side"></i>
              </span>
              <span>Automotive & Motorbike</span>
            </li>
          </ul>
        </div>
      )}
      {displayCategories.cat3 && (
        <div
          id="category-items"
          style={{
            width: "52%",
            backgroundColor: "#fff",
            position: "fixed",
            zIndex: "2",
            top: "75px",
            left: "42%",
            borderBottomRightRadius: "8px",
          }}
          className="d-flex"
          onMouseLeave={(e) => {
            if (e.clientY >= 413 || e.clientX >= 1269) {
              setDisplayCategories({ cat1: false, cat2: false, cat3: false });
            }
          }}
        >
          <div
            style={{ minHeight: "338px", paddingBottom: "6px" }}
            className="pt-2"
          >
            <span className="subcat-name">Category Name</span>
            <Stack
              width={"100%"}
              direction={"row"}
              flexWrap={"wrap"}
              spacing={2}
              mt={2}
            >
              <div
                style={{ width: "138px" }}
                className="d-flex flex-column gap-2 justify-content-center align-items-center"
              >
                <img
                  className="catCircleImg"
                  src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1wWuzGxYaK1RjSZFnXXa80pXa.jpg"
                />
                <span className="subcat-item-name">Casual Shirts</span>
              </div>
              <div
                style={{ width: "138px" }}
                className="d-flex flex-column gap-2 justify-content-center align-items-center"
              >
                <img
                  className="catCircleImg"
                  src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1wWuzGxYaK1RjSZFnXXa80pXa.jpg"
                />
                <span className="subcat-item-name">Casual Shirts</span>
              </div>
              <div
                style={{ width: "138px" }}
                className="d-flex flex-column gap-2 justify-content-center align-items-center"
              >
                <img
                  className="catCircleImg"
                  src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1wWuzGxYaK1RjSZFnXXa80pXa.jpg"
                />
                <span className="subcat-item-name">Casual Shirts</span>
              </div>
              <div
                style={{ width: "138px" }}
                className="d-flex flex-column gap-2 justify-content-center align-items-center"
              >
                <img
                  className="catCircleImg"
                  src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1wWuzGxYaK1RjSZFnXXa80pXa.jpg"
                />
                <span className="subcat-item-name">Casual Shirts</span>
              </div>
            </Stack>
          </div>
        </div>
      )}
      <div
        className={`header${
          scroll > 90 && scroll < 600 ? " nav-scroll-1" : ""
        }${scroll >= 600 ? " nav-scroll-2" : ""}${
          width < 768 ? " small-header d-flex align-items-center" : ""
        }`}
      >
        <div className="custom-container">
          {width >= 768 && (
            <>
              {scroll < 600 && (
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex gap-4">
                    <a href="" style={{ marginTop: "-5px" }}>
                      Become a Seller
                    </a>
                    <a href="" style={{ marginTop: "-5px" }}>
                      Daraz Affiliate Program
                    </a>
                    <a href="" style={{ marginTop: "-5px" }}>
                      Help & Support
                    </a>
                    <a href="" style={{ marginTop: "-5px" }}>
                      Daraz Logistics Partner
                    </a>
                  </div>
                  <div
                    className="app-button-header ps-1"
                    style={{
                      paddingBottom: "0.25em",
                      paddingTop: "0.3em",
                      paddingRight: "0.48rem",
                    }}
                  >
                    <div className="d-flex">
                      <img
                        src={AppIcon}
                        alt=""
                        width={20}
                        height={20}
                        style={{ marginRight: "5px" }}
                      />
                      <div
                        style={{
                          marginBottom: "0.05em",
                          marginTop: "0.1em",
                          paddingLeft: "0.2em",
                        }}
                      >
                        Save More on App
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <Stack
                // spacing={2}
                direction={"row"}
                className={`w-100${scroll >= 600 ? " mt-2" : ""}`}
              >
                <div style={{ width: "140px" }}>
                  <img
                    src={logo}
                    alt="logo"
                    style={{ width: "120px", height: "48px" }}
                  />
                </div>
                <Stack
                  spacing={1}
                  direction={"row"}
                  alignItems={"center"}
                  // justifyContent={"space-between"}
                  width={"100%"}
                >
                  {scroll >= 600 && (
                    <div className="categories-button d-flex align-items-center">
                      Categories <span class="tabler--chevron-down"></span>
                    </div>
                  )}
                  <div style={{ position: "relative", width: "70%" }}>
                    <input
                      placeholder="Search in Daraz"
                      style={{
                        border: "none",
                        outline: "none",
                        height: "38px",
                        width: "100%",
                        // marginLeft: "5%",
                        // marginRight: "5%",
                        borderRadius: "12px",
                        paddingLeft: "20px",
                        fontSize: "14px",
                        color: "#212121",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 4,
                        right: 10,
                        backgroundColor: "#FFE1D2",
                        height: "30px",
                        width: "52px",
                        borderRadius: "10px",
                        paddingLeft: "18px",
                        paddingTop: "8px",
                      }}
                    >
                      <i
                        className="fa-solid fa-magnifying-glass"
                        style={{
                          color: "#f85606",
                          fontSize: "15px",
                        }}
                      ></i>
                    </div>
                  </div>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    className="categories-button "
                    style={{ fontWeight: 700, fontSize: "12.5px" }}
                  >
                    <div>
                      <i className="fa-regular fa-user"></i>
                    </div>
                    <div>Login</div>
                  </Stack>
                  <div>|</div>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    className="categories-button"
                    style={{ fontWeight: 700, fontSize: "12.5px" }}
                  >
                    <span>SignUp</span>
                  </Stack>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={0.5}
                    className="categories-button "
                    style={{
                      fontWeight: 500,
                      fontSize: "14px",
                      height: "38px",
                    }}
                  >
                    <span className="mdi--web-white"></span>
                    <div>EN</div>
                  </Stack>
                  {/* <ul className="lang-container">
                  <span className="holder">
                    <li className="lan-icon lang-text">en</li>
                  </span>
                </ul> */}
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    className="categories-button "
                    style={{
                      fontWeight: 500,
                      fontSize: "20px",
                      height: "38px",
                    }}
                  >
                    <span className="ep--shopping-cart"></span>
                  </Stack>
                </Stack>
              </Stack>
            </>
          )}
          {width < 768 && (
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <div style={{ position: "relative", width: "100%" }}>
                <input
                  placeholder="Search in Daraz"
                  style={{
                    border: "none",
                    outline: "none",
                    height: "38px",
                    width: "100%",
                    // marginLeft: "5%",
                    // marginRight: "5%",
                    borderRadius: "12px",
                    paddingLeft: "20px",
                    fontSize: "14px",
                    color: "#212121",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 4,
                    right: 10,
                    backgroundColor: "#FFE1D2",
                    height: "30px",
                    width: "52px",
                    borderRadius: "10px",
                    paddingLeft: "18px",
                    paddingTop: "8px",
                  }}
                >
                  <i
                    className="fa-solid fa-magnifying-glass"
                    style={{
                      color: "#f85606",
                      fontSize: "15px",
                    }}
                  ></i>
                </div>
              </div>
              <i
                className="fa-solid fa-bars"
                style={{ fontSize: "20px", cursor: "pointer" }}
                onClick={(e) => setAnchorEl(e.currentTarget)}
              ></i>
              <Menu
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl()}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                disableScrollLock={true}
              >
                <Stack spacing={2} width="100vw">
                  <MenuItem>Login</MenuItem>
                  <MenuItem>Signup</MenuItem>
                  <MenuItem>EN</MenuItem>
                  <MenuItem>Cart</MenuItem>
                  <MenuItem>Categories</MenuItem>
                </Stack>
              </Menu>
            </Stack>
          )}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Header;
