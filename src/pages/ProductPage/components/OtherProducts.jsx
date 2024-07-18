import { Grid } from "@mui/material";
import React from "react";

function OtherProducts() {
  const products = [
    {
      image:
        "https://pk-live-21.slatic.net/kf/Sd51aacbd607e4f5b8899c9929d3feebe7.jpg_188x188.jpg_.webp",
      title: "Pack of 3 Panda Storage Box",
      price: "578",
    },
    {
      image:
        "https://pk-live-21.slatic.net/kf/Sd51aacbd607e4f5b8899c9929d3feebe7.jpg_188x188.jpg_.webp",
      title: "Pack of 3 Panda Storage Box",
      price: "578",
    },
    {
      image:
        "https://pk-live-21.slatic.net/kf/Sd51aacbd607e4f5b8899c9929d3feebe7.jpg_188x188.jpg_.webp",
      title: "Pack of 3 Panda Storage Box",
      price: "578",
    },
    {
      image:
        "https://pk-live-21.slatic.net/kf/Sd51aacbd607e4f5b8899c9929d3feebe7.jpg_188x188.jpg_.webp",
      title: "Pack of 3 Panda Storage Box",
      price: "578",
    },
    {
      image:
        "https://pk-live-21.slatic.net/kf/Sd51aacbd607e4f5b8899c9929d3feebe7.jpg_188x188.jpg_.webp",
      title: "Pack of 3 Panda Storage Box",
      price: "578",
    },
    {
      image:
        "https://pk-live-21.slatic.net/kf/Sd51aacbd607e4f5b8899c9929d3feebe7.jpg_188x188.jpg_.webp",
      title: "Pack of 3 Panda Storage Box",
      price: "578",
    },
    {
      image:
        "https://pk-live-21.slatic.net/kf/Sd51aacbd607e4f5b8899c9929d3feebe7.jpg_188x188.jpg_.webp",
      title: "Pack of 3 Panda Storage Box",
      price: "578",
    },
    {
      image:
        "https://pk-live-21.slatic.net/kf/Sd51aacbd607e4f5b8899c9929d3feebe7.jpg_188x188.jpg_.webp",
      title: "Pack of 3 Panda Storage Box",
      price: "578",
    },
  ];
  return (
    <div className="lazyload-wrapper ">
      <div
        className="pdp-recommend pdp-sponsored-products success"
        data-spm="recommend_2"
        data-spm-max-idx={64}
      >
        <div className="recommend-content">
          <h6 className="recommend-title">
            People Who Viewed This Item Also Viewed
          </h6>
          <Grid container>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={12} key={index}>
                <div className="recommend-product-item">
                  <div className="pdp-common-image product-image">
                    <div className="lazyload-wrapper">
                      <img src={product.image} alt="" className="image" />
                    </div>
                    <div className="product-info">
                      <h6 className="product-title">{product.title}</h6>
                      <div className="product-price">Rs. {product.price}</div>
                      <div className="product-rating-region">
                        <div className="product-rating">
                          <div className="container-star rating-star pdp-stars_size_xs">
                            <img
                              className="star"
                              src="//laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                            />
                            <img
                              className="star"
                              src="//laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                            />
                            <img
                              className="star"
                              src="//laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                            />
                            <img
                              className="star"
                              src="//laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                            />
                            <img
                              className="star"
                              src="//laz-img-cdn.alicdn.com/tfs/TB1xAX4Ah9YBuNjy0FfXXXIsVXa-30-30.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default OtherProducts;
