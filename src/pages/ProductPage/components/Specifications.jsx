import { Stack } from "@mui/material";
import React, { useState } from "react";

function Specifications() {
  const [viewMore, setViewMore] = useState(false);
  return (
    <div
      id="block-pJYzWPb3ErH"
      className="pdp-block fixed-width-full block-margin-top background-2"
    >
      <div id="module_product_detail" className="pdp-block module">
        <h2
          className="pdp-mod-section-title outer-title"
          data-spm-anchor-id="a2a0e.pdp.0.i0.62b6748egcm1JZ"
        >
          Product details of 6 Grids Washable Wardrobe Clothes Organizer, Jeans
          Compartment Storage Box, Clothes Drawer Mesh Separation Box, Portable
          Foldable Closet (GREY)
        </h2>
        <div className="pdp-product-detail" data-spm="product_detail">
          <div
            className={`pdp-product-desc ${!viewMore && "height-limit"}`}
            data-spm-anchor-id="a2a0e.pdp.product_detail.i2.62b6748egcm1JZ"
          >
            <div className="html-content pdp-product-highlights">
              <ul className="">
                <li className="">
                  Strong Practicality: The storage box has 2 designs, Suitable
                  for jeans, leggings, T-shirts, which can meet all your storage
                  needs and can solve most of the daily clothes storage
                  problems. It can be folded to save space when not in use, 2/5
                  Pcs Jeans Compartment Storage Box
                </li>
                <li className="">
                  Quality Material: Made of mesh nylon with fine workmanship,
                  soft seams, and durability. It is not easy to deform and will
                  not collapse after use.
                </li>
                <li className="">
                  Portable Foldable Closet: The mesh ventilation design is
                  hygienic and clean, effectively reducing the odor of clothes
                  and keeping the clothes fresh. Thickened oxford cloth edging,
                  strong and not deformed, can be washed in a washing machine.
                </li>
              </ul>
            </div>
            <div className="html-content detail-content">
              <p>
                <img src="https://ae01.alicdn.com/kf/HTB1DojbKkzoK1RjSZFlq6yi4VXal.jpg" />
              </p>
              <Stack spacing={1.75}>
                <p>
                  <img
                    src="https://static-01.daraz.pk/p/f57b6e87e29208d111e4bd63e20e169f.jpg"
                    data-spm-anchor-id="a2a0e.pdp.product_detail.i1.62b6748egcm1JZ"
                  />
                </p>
                <p>
                  <img src="https://static-01.daraz.pk/p/c2654e652d98ad4c68f3c0962e5bfd18.jpg" />
                </p>
                <p>
                  <img src="https://static-01.daraz.pk/p/4a08dd2ed93e387a63187e3661dc871c.jpg" />
                </p>
                <p>
                  <img src="https://static-01.daraz.pk/p/0e2da6e72c58c3f6c785426cc6885a67.jpg" />
                </p>
                <p>
                  <img src="https://static-01.daraz.pk/p/1a5722ace58b68e9c28f4faa7969ec52.jpg" />
                </p>
                <p>
                  <img src="https://static-01.daraz.pk/p/0004f702c5b26c14eaea07c0e8dcb862.jpg" />
                </p>
                <p>
                  <img src="https://static-01.daraz.pk/p/21a1c5924ffa9a10be961a06f45ddfeb.jpg" />
                </p>
                <p>
                  <img
                    src="https://static-01.daraz.pk/p/c13da213dbe0a5ba2a06170f805d5bd6.jpg"
                    data-spm-anchor-id="a1zawk.page_product_publish.0.i16.39df7709TVfvSR"
                  />
                  <span style={{ fontSize: 14 }} />
                </p>
              </Stack>
              <div />
            </div>
            <div className="pdp-mod-specification">
              <h2 className="pdp-mod-section-title ">
                Specifications of 6 Grids Washable Wardrobe Clothes Organizer,
                Jeans Compartment Storage Box, Clothes Drawer Mesh Separation
                Box, Portable Foldable Closet (GREY)
              </h2>
              <div className="pdp-general-features">
                <ul className="specification-keys">
                  <li className="key-li">
                    <span className="key-title"> Brand</span>
                    <div className="html-content key-value">No Brand</div>
                  </li>
                  <li className="key-li">
                    <span className="key-title"> SKU</span>
                    <div className="html-content key-value">
                      429495072_PK-2400665645
                    </div>
                  </li>
                  <li className="key-li">
                    <span className="key-title"> Number of Pieces</span>
                    <div className="html-content key-value">1</div>
                  </li>
                  <li className="key-li">
                    <span className="key-title"> Lockable</span>
                    <div className="html-content key-value">Not Specified</div>
                  </li>
                </ul>
              </div>
              <div className="box-content">
                <span className="key-title">What’s in the box</span>
                <div className="html-content box-content-html">
                  1x 6 Grids Washable Wardrobe Clothes Organizer, Jeans
                  Compartment Storage Box, Clothes Drawer Mesh Separation Box,
                  Portable Foldable Closet (GREY)
                </div>
              </div>
            </div>
          </div>
          <div
            className="expand-button"
            data-spm-anchor-id="a2a0e.pdp.product_detail.i3.62b6748egcm1JZ"
          >
            <button
              className="pdp-view-more-btn pdp-button pdp-button_type_text pdp-button_theme_white pdp-button_size_m"
              data-spm-anchor-id="a2a0e.pdp.product_detail.i0.62b6748egcm1JZ"
              onClick={() => setViewMore((prev) => !prev)}
            >
              VIEW {viewMore ? "LESS" : "MORE"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specifications;
