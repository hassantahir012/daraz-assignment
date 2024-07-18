import { Icon } from "@iconify/react/dist/iconify.js";
import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { productPagePath } from "../../../constants";

function Products({ products = [] }) {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} xl={3} key={product.id}>
          <Link to={productPagePath} className="product-card--vHfY9">
            <div className="image-wrapper--ydch1">
              <img src={product.image} alt="" className="image--Smuib" />
            </div>
            <div className="description--H8JN9">
              <div className="title-wrapper--IaQ0m">{product.title}</div>
              <div className="rating-wrapper--caEhB">
                <div className="rating--ZI3Ol rating--pwPrV">
                  <span>
                    <Icon icon="fluent-emoji-flat:star" />
                  </span>
                  <span className="ratig-num--KNake rating--pwPrV">
                    {product.rating}
                  </span>
                  <span className="rating__review--ygkUy rating--pwPrV">
                    ({product.rating_count})
                  </span>
                </div>
                <div className="split--cTjJp"></div>
                <div>{product.items_sold} Sold</div>
              </div>
              <div className="voucher-wrapper--vCNzH"></div>
              <div>
                <div className="price-wrapper--S5vS_">
                  <div
                    className="current-price--Jklkc"
                    style={{ fontSize: "18px" }}
                  >
                    <span className="currency-pre--VooWJ">Rs.</span>
                    <span className="currency--GVKjl">
                      {product.current_price}
                    </span>
                  </div>
                  <div
                    className="original-price--lHYOH"
                    style={{ fontSize: "10px" }}
                  >
                    <del className="currency--GVKjl">
                      Rs. {product.origional_price}
                    </del>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
