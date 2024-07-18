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
import CategoryUnorderedList from "./CategoryUnorderedList";
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
      (e.clientX >= 220 &&
        e.clientX <= 326 &&
        e.clientY >= 14 &&
        e.clientY <= 50 &&
        scroll >= 600) ||
      ((pathname == categoryPagePath || pathname == productPagePath) &&
        scroll < 600 &&
        e.clientX >= 212 &&
        e.clientX <= 312 &&
        e.clientY >= 37 &&
        e.clientY <= 90)
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
  }, [scroll, displayCategories]);
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
          id="main-categories"
          style={{
            width: "18%",
            backgroundColor: "#fff",
            position: "fixed",
            zIndex: "2",
            top:
              scroll < 600 &&
              (pathname == categoryPagePath || pathname == productPagePath)
                ? "90px"
                : "75px",
            left: "6%",
            borderBottomLeftRadius: "8px",
          }}
        >
          <CategoryUnorderedList
            className="list-unstyled category-list mb-0 pt-2"
            style={{
              paddingBottom: "6px",
              width: "100%",
            }}
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
          id="sub-categories"
          style={{
            width: "18%",
            backgroundColor: "#fff",
            position: "fixed",
            zIndex: "2",
            top:
              scroll < 600 &&
              (pathname == categoryPagePath || pathname == productPagePath)
                ? "90px"
                : "75px",
            left: "24%",
          }}
        >
          <CategoryUnorderedList
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
          id="category-items"
          style={{
            width: "52%",
            backgroundColor: "#fff",
            position: "fixed",
            zIndex: "2",
            top:
              scroll < 600 &&
              (pathname == categoryPagePath || pathname == productPagePath)
                ? "90px"
                : "75px",
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
          scroll > 90 && scroll < 600 && pathname == homePagePath
            ? " nav-scroll-1"
            : ""
        }${scroll >= 600 ? " nav-scroll-2" : ""}${
          width < 1200 ? " small-header d-flex align-items-center" : ""
        }`}
        style={{ position: pathname !== homePagePath && "fixed" }}
      >
        <div className="custom-container">
          {width >= 1200 && (
            <>
              {scroll < 600 && (
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex" style={{ gap: "1.55rem" }}>
                    <a href="" style={{ marginTop: "-2px" }}>
                      Become a Seller
                    </a>
                    <a href="" style={{ marginTop: "-2px" }}>
                      Daraz Affiliate Program
                    </a>
                    <a href="" style={{ marginTop: "-2px" }}>
                      Help & Support
                    </a>
                    <a href="" style={{ marginTop: "-2px" }}>
                      Daraz Logistics Partner
                    </a>
                  </div>
                  <div
                    className="app-button-header ps-1"
                    style={{
                      paddingBottom: "0.4em",
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
                          marginTop: "0.29em",
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
                  <Link to={homePagePath}>
                    <img
                      src={logo}
                      alt="logo"
                      style={{ width: "120px", height: "48px" }}
                    />
                  </Link>
                </div>
                <Stack
                  spacing={1}
                  direction={"row"}
                  alignItems={"center"}
                  width={"100%"}
                  sx={{
                    // marginLeft: "0.5rem",
                    marginLeft:
                      pathname !== homePagePath || scroll >= 600
                        ? "0.5rem"
                        : "1.2rem",
                    marginTop: "2px",
                  }}
                >
                  {(scroll >= 600 || pathname !== homePagePath) && (
                    <div
                      className="categories-button d-flex align-items-center"
                      style={{
                        padding:
                          pathname == homePagePath
                            ? "9px 12px 8px 9px"
                            : "7px 7px 8px 14px",
                      }}
                    >
                      Categories{" "}
                      {displayCategories.cat1 ? (
                        <span
                          className="tabler--chevron-up"
                          style={{
                            marginLeft:
                              pathname == homePagePath ? "4px" : "4px",
                          }}
                        ></span>
                      ) : (
                        <span
                          className="tabler--chevron-down"
                          style={{
                            marginLeft:
                              pathname == homePagePath ? "4px" : "4px",
                          }}
                        ></span>
                      )}
                    </div>
                  )}
                  <div
                    style={{
                      position: "relative",
                      minWidth:
                        pathname !== homePagePath || scroll >= 600
                          ? "61.4%"
                          : "71.4%",
                    }}
                  >
                    <input
                      placeholder={
                        pathname == loginPagePath ||
                        pathname == registerPagePath
                          ? ""
                          : "Search in Daraz"
                      }
                      style={{
                        border: "none",
                        outline: "none",
                        height: "38px",
                        width: "100%",
                        borderRadius: "12px",
                        paddingLeft: "20px",
                        fontSize: "14px",
                        color: "#212121",
                      }}
                      disabled={
                        pathname == loginPagePath ||
                        pathname == registerPagePath
                      }
                    />
                    {![loginPagePath, registerPagePath].includes(pathname) && (
                      <div
                        style={{
                          position: "absolute",
                          top: 5,
                          right: 6,
                          backgroundColor: "#FFE1D2",
                          height: "28px",
                          width: "50px",
                          borderRadius: "8px",
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
                    )}
                  </div>
                  {!isAuthenticated && (
                    <>
                      <Link to={loginPagePath}>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          spacing={1}
                          className="categories-button"
                          style={{ fontWeight: 700, fontSize: "12.5px" }}
                        >
                          <div>
                            <i
                              className="fa-regular fa-user"
                              style={{ fontSize: "18px" }}
                            ></i>
                          </div>

                          <div style={{ marginLeft: "12px" }}>Login</div>
                        </Stack>
                      </Link>
                      <div style={{ marginLeft: "4px" }}>|</div>
                      <Link to={registerPagePath}>
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
                    className="categories-button "
                    style={{
                      fontWeight: 500,
                      fontSize: "14px",
                      height: "38px",
                      marginLeft: "3px",
                    }}
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
                        className="custom-dots me-2"
                        style={{ width: "1.5rem", height: "1.5rem" }}
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
              <div style={{ position: "relative", width: "100%" }}>
                <input
                  placeholder="Search in Daraz"
                  style={{
                    border: "none",
                    outline: "none",
                    height: "38px",
                    width: "100%",
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
                  <MenuItem onClick={() => handleNavigate(homePagePath)}>
                    Home
                  </MenuItem>
                  <MenuItem onClick={() => handleNavigate(loginPagePath)}>
                    Login
                  </MenuItem>
                  <MenuItem onClick={() => handleNavigate(registerPagePath)}>
                    Signup
                  </MenuItem>
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
