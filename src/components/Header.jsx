import React, { useEffect, useState } from "react";
import { AppIcon, logo } from "../assets";
import { Menu, MenuItem, Stack } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  categoryPagePath,
  homePagePath,
  loginPagePath,
  productPagePath,
  registerPagePath,
} from "../constants";
import CategoryUnorderedList from "../pages/HomePage/components/CategoryUnorderedList";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authSlice";
import { Icon } from "@iconify/react/dist/iconify.js";

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [scroll, setScroll] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState();
  const { pathname } = useLocation();
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
      width > 1200 &&
      ((e.clientX >= 220 &&
        e.clientX <= 326 &&
        e.clientY >= 14 &&
        e.clientY <= 50 &&
        scroll >= 600) ||
        ((pathname == categoryPagePath || pathname == productPagePath) &&
          scroll < 600 &&
          e.clientX >= 212 &&
          e.clientX <= 312 &&
          e.clientY >= 37 &&
          e.clientY <= 90))
    ) {
      setDisplayCategories((prev) => ({ ...prev, cat1: true }));
    } else if (
      e.clientY < 14 ||
      ((pathname == categoryPagePath || pathname == productPagePath) &&
        scroll < 600 &&
        e.clientY < 90)
    ) {
      setDisplayCategories({ cat1: false, cat2: false, cat3: false });
    }
    if (e.clientX > 326 && !displayCategories.cat2) {
      setDisplayCategories({ cat1: false, cat2: false, cat3: false });
    }
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate(homePagePath);
    setAnchorEl();
  };
  const handleNavigate = (path) => {
    navigate(path);
    setAnchorEl();
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    window.addEventListener("mousemove", checkCursorPosition);
    return () => {
      window.removeEventListener("scroll", checkScroll);
      window.removeEventListener("mousemove", checkCursorPosition);
    };
  }, [scroll, displayCategories, width]);
  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);
  return (
    <>
      {displayCategories.cat1 && (
        <div
          className={`cat-1 ${
            pathname == categoryPagePath || pathname == productPagePath
              ? "cat-1-product-or-category-page"
              : ""
          }`}
        >
          <CategoryUnorderedList
            className="list-unstyled category-list mb-0 pt-2 w-100"
            onMouseEnter={() =>
              setDisplayCategories((prev) => ({ ...prev, cat2: true }))
            }
            onMouseLeave={(e) => {
              if (
                (pathname == categoryPagePath || pathname == productPagePath) &&
                scroll < 600
              ) {
                if (
                  (e.clientY <= 89 && (e.clientX <= 212 || e.clientX >= 316)) ||
                  e.clientX <= 80 ||
                  e.clientY >= 413
                ) {
                  setDisplayCategories({
                    cat1: false,
                    cat2: false,
                    cat3: false,
                  });
                } else if (e.clientY <= 89) {
                  setDisplayCategories((prev) => ({
                    ...prev,
                    cat2: false,
                    cat3: false,
                  }));
                }
              } else {
                if (e.clientX <= 80 || e.clientY >= 413) {
                  setDisplayCategories({
                    cat1: false,
                    cat2: false,
                    cat3: false,
                  });
                }
                if (e.clientY <= 89) {
                  setDisplayCategories((prev) => ({
                    ...prev,
                    cat2: false,
                    cat3: false,
                  }));
                }
                if (e.clientY <= 74) {
                  setDisplayCategories((prev) => ({
                    ...prev,
                    cat2: false,
                    cat3: false,
                  }));
                }
              }
            }}
          />
        </div>
      )}
      {displayCategories.cat2 && (
        <div
          className={`cat-1 cat-2 ${
            scroll < 600 &&
            (pathname == categoryPagePath || pathname == productPagePath)
              ? "cat-1-product-or-category-page"
              : ""
          }`}
        >
          <CategoryUnorderedList
            className="list-unstyled category-list mb-0 pt-2 cat-2-list"
            onMouseEnter={() =>
              setDisplayCategories((prev) => ({ ...prev, cat3: true }))
            }
            onMouseLeave={(e) => {
              if (e.clientX <= 322) {
                setDisplayCategories((prev) => ({ ...prev, cat3: false }));
              }
              if (e.clientY >= 413) {
                setDisplayCategories({ cat1: false, cat2: false, cat3: false });
              } else if (e.clientY <= 74) {
                setDisplayCategories((prev) => ({
                  ...prev,
                  cat2: false,
                  cat3: false,
                }));
              }
            }}
          />
        </div>
      )}
      {displayCategories.cat3 && (
        <div
          className={`d-flex cat-1 cat-3 ${
            scroll < 600 &&
            (pathname == categoryPagePath || pathname == productPagePath)
              ? "cat-1-product-or-category-page"
              : ""
          }`}
          onMouseLeave={(e) => {
            if (e.clientY >= 413 || e.clientX >= 1269) {
              setDisplayCategories({ cat1: false, cat2: false, cat3: false });
            }
          }}
        >
          <div className="pt-2 cat-3-container">
            <span className="subcat-name">Category Name</span>
            <Stack
              width={"100%"}
              direction={"row"}
              flexWrap={"wrap"}
              spacing={2}
              mt={2}
            >
              <div className="d-flex flex-column gap-2 justify-content-center align-items-center cat-3-items">
                <img
                  className="catCircleImg"
                  src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1wWuzGxYaK1RjSZFnXXa80pXa.jpg"
                />
                <span className="subcat-item-name">Casual Shirts</span>
              </div>
              <div className="d-flex flex-column gap-2 justify-content-center align-items-center cat-3-items">
                <img
                  className="catCircleImg"
                  src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1wWuzGxYaK1RjSZFnXXa80pXa.jpg"
                />
                <span className="subcat-item-name">Casual Shirts</span>
              </div>
              <div className="d-flex flex-column gap-2 justify-content-center align-items-center cat-3-items">
                <img
                  className="catCircleImg"
                  src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1wWuzGxYaK1RjSZFnXXa80pXa.jpg"
                />
                <span className="subcat-item-name">Casual Shirts</span>
              </div>
              <div className="d-flex flex-column gap-2 justify-content-center align-items-center cat-3-items">
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
          scroll > 90 && scroll < 600 && pathname == homePagePath
            ? " nav-scroll-1"
            : ""
        }${scroll >= 600 ? " nav-scroll-2" : ""}${
          width < 1200 ? " small-header d-flex align-items-center" : ""
        }${pathname !== homePagePath ? " position-fixed" : ""}`}
      >
        <div className="custom-container">
          {width >= 1200 && (
            <>
              {scroll < 600 && (
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex header-mini-links">
                    <a href="" className="header-mini-link">
                      Become a Seller
                    </a>
                    <a href="" className="header-mini-link">
                      Daraz Affiliate Program
                    </a>
                    <a href="" className="header-mini-link">
                      Help & Support
                    </a>
                    <a href="" className="header-mini-link">
                      Daraz Logistics Partner
                    </a>
                  </div>
                  <div className="app-button-header ps-1">
                    <div className="d-flex">
                      <img
                        src={AppIcon}
                        alt=""
                        width={20}
                        height={20}
                        className="app-button-header-icon"
                      />
                      <div className="app-button-header-text">
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
                <div className="header-logo-container">
                  <Link to={homePagePath}>
                    <img src={logo} alt="logo" className="header-logo" />
                  </Link>
                </div>
                <Stack
                  spacing={1}
                  direction={"row"}
                  alignItems={"center"}
                  width={"100%"}
                  sx={{
                    marginLeft:
                      pathname !== homePagePath || scroll >= 600
                        ? "0.5rem"
                        : "1.2rem",
                    marginTop: "2px",
                  }}
                >
                  {(scroll >= 600 || pathname !== homePagePath) && (
                    <div
                      className={`categories-button d-flex align-items-center ${
                        pathname == homePagePath
                          ? "category-btn-padding-home"
                          : "category-btn-padding"
                      }`}
                    >
                      Categories{" "}
                      {displayCategories.cat1 ? (
                        <span className="tabler--chevron-up"></span>
                      ) : (
                        <span className="tabler--chevron-down"></span>
                      )}
                    </div>
                  )}
                  <div
                    className={`position-relative ${
                      pathname !== homePagePath || scroll >= 600
                        ? "header-search-field-container"
                        : "header-search-field-container-home"
                    }`}
                  >
                    <input
                      placeholder={
                        pathname == loginPagePath ||
                        pathname == registerPagePath
                          ? ""
                          : "Search in Daraz"
                      }
                      className="header-input-field"
                      disabled={
                        pathname == loginPagePath ||
                        pathname == registerPagePath
                      }
                    />
                    {![loginPagePath, registerPagePath].includes(pathname) && (
                      <div className="search-icon-container">
                        <i className="fa-solid fa-magnifying-glass search-icon"></i>
                      </div>
                    )}
                  </div>
                  {!isAuthenticated && (
                    <>
                      <Link to={loginPagePath}>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          spacing={1}
                          className="categories-button login-btn"
                        >
                          <div>
                            <i className="fa-regular fa-user login-icon"></i>
                          </div>

                          <div className="login-btn-text">Login</div>
                        </Stack>
                      </Link>
                      <div className="auth-btns-divider">|</div>
                      <Link to={registerPagePath}>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          spacing={0}
                          className="categories-button sign-up-btn"
                        >
                          <span>Sign Up</span>
                        </Stack>
                      </Link>
                    </>
                  )}

                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={0.5}
                    className="categories-button lang-btn"
                  >
                    <span className="mdi--web-white"></span>
                    <div>EN</div>
                  </Stack>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    className="categories-button ms-0"
                  >
                    <span className="ep--shopping-cart"></span>
                  </Stack>
                  {isAuthenticated && (
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      spacing={0}
                      className="categories-button"
                      sx={{
                        fontWeight: 700,
                        fontSize: "12.5px",
                        marginLeft: 0,
                        minWidth: "69px",
                      }}
                      onClick={handleLogout}
                    >
                      <Icon
                        icon="material-symbols:logout-sharp"
                        className="custom-dots me-2 logout-icon"
                      />
                      <span>Logout</span>
                    </Stack>
                  )}
                </Stack>
              </Stack>
            </>
          )}
          {width < 1200 && (
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <div className="position-relative w-100">
                <input
                  placeholder="Search in Daraz"
                  className="header-input-field"
                />
                <div className="search-icon-container-small">
                  <i className="fa-solid fa-magnifying-glass search-icon"></i>
                </div>
              </div>
              <i
                className="fa-solid fa-bars nav-collapse-icon"
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
                  <MenuItem onClick={() => handleNavigate(homePagePath)}>
                    Home
                  </MenuItem>
                  {!isAuthenticated && (
                    <>
                      <MenuItem onClick={() => handleNavigate(loginPagePath)}>
                        Login
                      </MenuItem>
                      <MenuItem
                        onClick={() => handleNavigate(registerPagePath)}
                      >
                        Signup
                      </MenuItem>
                    </>
                  )}
                  {isAuthenticated && (
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  )}
                  <MenuItem>Cart</MenuItem>
                  <MenuItem onClick={() => handleNavigate(categoryPagePath)}>
                    Category
                  </MenuItem>
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
