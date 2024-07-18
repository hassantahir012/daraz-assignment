import { Grid, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Service from "../services/service";
import { productPagePath } from "../constants";
function JustForYou() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const result = await Service.getJustForYouProducts();
    setProducts(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div className="heading-header">
        <div className="heading" style={{ marginBottom: "-17px" }}>
          Just For You
        </div>
        <Grid container columnSpacing={1} rowSpacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} lg={2} key={product.id}>
              <div
                className="custom-card p-0"
                onClick={() => navigate(productPagePath)}
              >
                <div>
                  <img src={product.image} width="100%" />
                </div>
                <div style={{ padding: "4px 8px 12px" }}>
                  <div style={{ height: "12px" }}>
                    {product.is_daraz_mall && (
                      <img
                        src="https://img.alicdn.com/imgextra/i2/O1CN01m9OC6a1UK86X51Dcq_!!6000000002498-2-tps-108-54.png"
                        height={"12px"}
                        style={{
                          minWidth: "12px",
                          marginTop: "-26px",
                        }}
                      />
                    )}
                  </div>
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
                  <div className="card-footer d-flex align-items-center">
                    <Rating
                      readOnly
                      size="small"
                      value={product.rating}
                      precision={0.1}
                      sx={{
                        color: "#FFCF00",
                        fontSize: "0.9rem",
                      }}
                    />
                    <div className="rating-count">({product.rating_count})</div>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        <div
          className="d-flex justify-content-center"
          style={{
            marginTop: "20px",
            paddingTop: "20px",
            paddingBottom: "9px",
          }}
        >
          <a href="" className="load-more-button">
            LOAD MORE
          </a>
        </div>
      </div>
    </div>
  );
}

export default JustForYou;
