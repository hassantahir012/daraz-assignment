import React from "react";
import { AppIcon } from "../assets";
import { useLocation } from "react-router-dom";

function CompanyLinks() {
  const { pathname } = useLocation();
  return (
    <section className="desktop-footer" style={{ lineHeight: 1.5 }}>
      <div style={{ padding: "22px 0 30px" }} className="footer-first">
        <div className="row">
          <div className="col-md-3 col-sm-4 col-xs-6">
            <h3
              className="footer-title footer-title-first mt-0"
              style={{ marginTop: pathname !== "/" ? 0 : "" }}
            >
              Customer Care
            </h3>
            <ul className="footer-list">
              <li className="footer-li">
                <a href="">Help Center</a>
              </li>
              <li className="footer-li">
                <a href="">How to Buy</a>
              </li>
              <li className="footer-li">
                <a href="">Corporate & Bulk Purchasing</a>
              </li>
              <li className="footer-li">
                <a href="">Returns & Refunds</a>
              </li>
              <li className="footer-li">
                <a href="">Daraz Shop</a>
              </li>
              <li className="footer-li">
                <a href="">Contact Us</a>
              </li>
              <li className="footer-li">
                <a href="">Purchase Protection</a>
              </li>
              <li className="footer-li">
                <a href="">Daraz Pick up Points</a>
              </li>
            </ul>
            <h3 className="footer-title">Make Money With Us</h3>
            <ul className="footer-list">
              <li className="footer-li">
                <a href="">Daraz University</a>
              </li>
              <li className="footer-li">
                <a href="">Sell on Daraz</a>
              </li>
              <li className="footer-li">
                <a href="">Join Daraz Affiliate Program</a>
              </li>
            </ul>
          </div>
          <div
            className="col-md-3 col-sm-4 col-xs-6"
            style={{ paddingLeft: "21px" }}
          >
            <h3
              className="footer-title footer-title-first mt-0"
              style={{ marginTop: pathname !== "/" ? 0 : "" }}
            >
              Daraz
            </h3>
            <ul className="footer-list">
              <li className="footer-li">
                <a href="">About Us</a>
              </li>
              <li className="footer-li">
                <a href="">Digital Payments</a>
              </li>
              <li className="footer-li">
                <a href="">Daraz Donates</a>
              </li>
              <li className="footer-li">
                <a href="">Daraz Blog</a>
              </li>
              <li className="footer-li">
                <a href="">Terms & Conditions</a>
              </li>
              <li className="footer-li">
                <a href="">Privacy Policy</a>
              </li>
              <li className="footer-li">
                <a href="">NTN Number : 4012118-6</a>
              </li>
              <li className="footer-li">
                <a href="">STRN Number : 1700401211818</a>
              </li>
              <li className="footer-li">
                <a href="">Online Shopping App</a>
              </li>
              <li className="footer-li">
                <a href="">Online Grocery Shopping</a>
              </li>
              <li className="footer-li">
                <a href="">Daraz Exclusive</a>
              </li>
            </ul>
          </div>
          <div
            className="col-md-3 col-sm-4 col-xs-6"
            style={{ paddingLeft: "31px" }}
          >
            <h3
              className="footer-title footer-title-first mt-0"
              style={{ marginTop: pathname !== "/" ? 0 : "" }}
            >
              Daraz International
            </h3>
            <div className="d-flex align-content-center flex-wrap">
              <a href="" className="footer-country">
                <span className="country-flag">
                  <span className="inner-country-flag pk-flag"></span>
                </span>
                <span className="country-name">Pakistan</span>
              </a>
              <a href="" className="footer-country">
                <span className="country-flag">
                  <span className="inner-country-flag bd-flag"></span>
                </span>
                <span className="country-name">Bangladesh</span>
              </a>
              <a href="" className="footer-country">
                <span className="country-flag">
                  <span className="inner-country-flag lk-flag"></span>
                </span>
                <span className="country-name">Srilanka</span>
              </a>
              <a href="" className="footer-country">
                <span className="country-flag">
                  <span className="inner-country-flag mm-flag"></span>
                </span>
                <span className="country-name">Mayanmar</span>
              </a>
              <a href="" className="footer-country">
                <span className="country-flag">
                  <span className="inner-country-flag np-flag"></span>
                </span>
                <span className="country-name">Nepal</span>
              </a>
            </div>
            <h3 className="footer-title">Payment Methods</h3>
            <div className="payment__card__wrapper">
              <span className="drz-icon-payment icon-yatra-exists-payment-1">
                <span className=" drz-footer-sprit-link drz-footer-sprit icon-yatra-payment-1"></span>
              </span>

              <span className="drz-icon-payment icon-yatra-exists-payment-7">
                <span className=" drz-footer-sprit-link drz-footer-sprit icon-yatra-payment-7"></span>
              </span>

              <span className="drz-icon-payment icon-yatra-exists-payment-8">
                <span className=" drz-footer-sprit-link drz-footer-sprit icon-yatra-payment-8"></span>
              </span>

              <span className="drz-icon-payment icon-yatra-exists-payment-11">
                <span className=" drz-footer-sprit-link drz-footer-sprit icon-yatra-payment-11"></span>
              </span>

              <span className="drz-icon-payment icon-yatra-exists-payment-5">
                <span className=" drz-footer-sprit-link drz-footer-sprit icon-yatra-payment-5"></span>
              </span>

              <span className="drz-icon-payment icon-yatra-exists-payment-12">
                <span className=" drz-footer-sprit-link drz-footer-sprit icon-yatra-payment-12"></span>
              </span>

              <span className="drz-icon-payment icon-yatra-exists-payment-6">
                <span className=" drz-footer-sprit-link drz-footer-sprit icon-yatra-payment-6"></span>
              </span>

              <span className="drz-icon-payment icon-yatra-exists-payment-20">
                <span className=" drz-footer-sprit-link drz-footer-sprit icon-yatra-payment-20"></span>
              </span>

              <span className="drz-icon-payment icon-yatra-exists-payment-13">
                <span className=" drz-footer-sprit-link drz-footer-sprit icon-yatra-payment-13"></span>
              </span>
            </div>
            <h3 className="footer-title">Verified by</h3>
            <div className="verified-by">
              <span className="icon-yatra-pci drz-footer-sprit-link"></span>
            </div>
          </div>
          <div
            className="col-md-3 col-sm-4 col-xs-6"
            style={{ paddingLeft: "40px" }}
          >
            <h3
              className="footer-title footer-title-first mt-0"
              style={{ marginTop: pathname !== "/" ? 0 : "" }}
            >
              Exclusive Deals and Offers!
            </h3>
            <div className="links-wrapper">
              <img
                className="qr"
                src="https://laz-img-cdn.alicdn.com/images/ims-web/TB18aqePBLoK1RjSZFuXXXn0XXa.png"
                alt=""
              />
              <div className="app-links">
                <div className="icon">
                  <a className="drz-footer-sprit-link app-link-1" href=""></a>
                </div>
                <div className="icon">
                  <a className="drz-footer-sprit-link app-link-2" href=""></a>
                </div>
                <div className="icon">
                  <a className="drz-footer-sprit-link app-link-3" href=""></a>
                </div>
              </div>
            </div>
            <div className="happy-shoping-wrapper">
              <div className="daraz-logo-wrapper">
                <span className="drz-footer-sprit-link icon-logo-lazada-footer"></span>
              </div>
              <div className="text-wrapper">
                <span className="drz-footer-sprit-download">
                  <span className="drz-footer-sprit-link icon-yatra-happy-shopping"></span>
                </span>
                <div className="text">Download App</div>
              </div>
            </div>
            <h3 className="footer-title follow-us-heading">Follow Us</h3>
            <div className="d-flex align-items-center">
              <a href="" className="follow-us-icon-link">
                <span className="logos--facebook"></span>
              </a>
              <a href="" className="follow-us-icon-link">
                <span className="logos--twitter"></span>
              </a>
              <a href="" className="follow-us-icon-link">
                <span className="skill-icons--instagram"></span>
              </a>
              <a href="" className="follow-us-icon-link">
                <span className="logos--youtube-icon"></span>
              </a>
              <a href="" className="follow-us-icon-link">
                <span className="mdi--web"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyLinks;
