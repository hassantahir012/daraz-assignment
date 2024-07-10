import { Icon } from "@iconify/react/dist/iconify.js";
import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Products() {
  const products = [
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
    {
      title: "Multipurpose Cabinet Drawers (4 Drawers)",
      image:
        "https://static-01.daraz.pk/p/4b5fd78c132776bd222bdae74280c2ba.jpg_300x0q75.webp",
      rating: "4.7/5",
      rating_count: "43",
      total_sold: "196",
      current_price: "6,562",
      origional_price: "7,121",
    },
  ];
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Link to="/product" className="product-card--vHfY9">
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
                <div>{product.total_sold} Sold</div>
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
