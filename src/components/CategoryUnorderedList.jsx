import React from "react";

function CategoryUnorderedList(props) {
  return (
    <ul {...props}>
      <li>
        <span className="category-icon">
          <i className="fa-solid fa-basket-shopping"></i>
        </span>
        <span className="banner-category-title">Groceries & Pets</span>
      </li>
      <li>
        <span className="category-icon">
          <i className="fa-solid fa-notes-medical"></i>
        </span>
        <span className="banner-category-title">Health & Beauty</span>
      </li>
      <li>
        <span className="category-icon">
          <i className="fa-solid fa-shirt"></i>
        </span>
        <span className="banner-category-title">Men's Fashion</span>
      </li>
      <li>
        <span className="category-icon">
          <i className="fa-solid fa-shirt"></i>
        </span>
        <span className="banner-category-title">Women's Fashion</span>
      </li>
      <li>
        <span className="category-icon">
          <i className="fa-solid fa-children"></i>
        </span>
        <span className="banner-category-title">Mother & Baby</span>
      </li>
      <li>
        <span className="category-icon">
          <i className="fa-solid fa-couch"></i>
        </span>
        <span className="banner-category-title">Home & Lifestyle</span>
      </li>
      <li>
        <span className="category-icon">
          <i className="fa-solid fa-laptop"></i>
        </span>
        <span className="banner-category-title">Electronic Devices</span>
      </li>
      <li>
        <span className="category-icon">
          <i className="fa-solid fa-computer-mouse"></i>
        </span>
        <span className="banner-category-title">Electronic Accessories</span>
      </li>
      <li>
        <span className="category-icon">
          <i className="fa-solid fa-tv"></i>
        </span>
        <span className="banner-category-title">TV & Home Appliances</span>
      </li>
      <li>
        <span className="category-icon">
          <i className="fa-solid fa-basketball"></i>
        </span>
        <span className="banner-category-title">Sports & Outdoor</span>
      </li>
      <li>
        <span className="category-icon">
          <i className="fa-solid fa-briefcase"></i>
        </span>
        <span className="banner-category-title">Watches, Bags & Jewellery</span>
      </li>
      <li>
        <span className="category-icon">
          <i className="fa-solid fa-car-side"></i>
        </span>
        <span className="banner-category-title">Automotive & Motorbike</span>
      </li>
    </ul>
  );
}

export default CategoryUnorderedList;
