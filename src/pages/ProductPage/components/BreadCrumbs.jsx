import React from "react";

function BreadCrumbs() {
  return (
    <div
      className="breadcrumb_list breadcrumb_custom_cls"
      data-spm="breadcrumb"
      id="J_breadcrumb_list"
    >
      <ul className="breadcrumb" id="J_breadcrumb">
        <li className="breadcrumb_item">
          <span className="breadcrumb_item_text">
            <a
              className="breadcrumb_item_anchor"
              href="https://www.daraz.pk/furniture-decor/"
              title="Furniture & Decor"
            >
              <span>Furniture & Decor</span>
            </a>
            <div className="breadcrumb_right_arrow" />
          </span>
        </li>
        <li className="breadcrumb_item">
          <span className="breadcrumb_item_text">
            <a
              className="breadcrumb_item_anchor"
              href="https://www.daraz.pk/storage-organisation/"
              title="Storage & Organisation"
            >
              <span>Storage & Organisation</span>
            </a>
            <div className="breadcrumb_right_arrow" />
          </span>
        </li>
        <li className="breadcrumb_item">
          <span className="breadcrumb_item_text">
            <a
              className="breadcrumb_item_anchor"
              href="https://www.daraz.pk/bedroom-clothes-storage/"
              title="Wardrobe Organisers"
            >
              <span>Wardrobe Organisers</span>
            </a>
            <div className="breadcrumb_right_arrow" />
          </span>
        </li>
        <li className="breadcrumb_item">
          <span className="breadcrumb_item_text">
            <span className="breadcrumb_item_anchor breadcrumb_item_anchor_last">
              6 Grids Washable Wardrobe Clothes Organizer, Jeans Compartment
              Storage Box, Clothes Drawer Mesh Separation Box, Portable Foldable
              Closet
            </span>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default BreadCrumbs;
