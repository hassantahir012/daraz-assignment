import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Service from "../../../services/service";
import { productPagePath } from "../../../constants";
function FlashSales() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [time, setTime] = useState(
    localStorage.getItem("time")
      ? JSON.parse(localStorage.getItem("time"))
      : { hours: 9, minutes: 59, seconds: 59 }
  );
  const decreaseSeconds = () => {
    setTime((prev) => ({
      ...prev,
      seconds: prev.seconds > 0 ? prev.seconds - 1 : 59,
      minutes:
        prev.seconds == 0
          ? prev.minutes > 0
            ? prev.minutes - 1
            : 59
          : prev.minutes,
      hours:
        prev.seconds == 0 && prev.minutes == 0
          ? prev.hours > 0
            ? prev.hours - 1
            : 9
          : prev.hours,
    }));
  };
  const getProducts = async () => {
    const result = await Service.getFlashSalesProducts();
    setProducts(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    const interval = setInterval(decreaseSeconds, 1020);
    getProducts();
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    localStorage.setItem("time", JSON.stringify(time));
  }, [time]);
  return (
    <div className="mb-4">
      <h3 className="flash-sales-heading mb-1">Flash Sale</h3>
      <div className="card-fs-content-header-parent">
        <div className="d-flex justify-content-between card-fs-content-header flex-wrap ps-4 pe-2">
          <div className="d-flex flex-wrap">
            <div className="fs-status-text">On Sale Now</div>
            <div className="d-flex">
              <div className="ms-5 fs-timer-text">Ending in</div>
              <div className="fs-timer-count">
                {time.hours.toString().padStart(2, "0")}
              </div>
              <div className="timer-colons">:</div>
              <div className="fs-timer-count">
                {time.minutes.toString().padStart(2, "0")}
              </div>
              <div className="timer-colons">:</div>
              <div className="fs-timer-count">
                {time.seconds.toString().padStart(2, "0")}
              </div>
            </div>
          </div>
          <div>
            <a href="" className="card-fs-content-button">
              SHOP MORE
            </a>
          </div>
        </div>
        <Grid container spacing={2} className="px-2 px-md-0">
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} lg={2} key={product.id}>
              <div
                className="custom-card"
                onClick={() => navigate(productPagePath)}
              >
                <div className="mb-1">
                  <img src={product.image} alt="" width="100%" />
                </div>
                <div className="card-desc">
                  <div className="card-title">{product.title}</div>
                  <div className="card-price">Rs.{product.current_price}</div>
                  <div className="origional-price-card">
                    <span className="origional-price">
                      Rs.{product.origional_price}
                    </span>
                    <span className="discount">
                      -{product.discount_percentage}%
                    </span>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default FlashSales;
