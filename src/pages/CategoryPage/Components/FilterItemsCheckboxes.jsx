import React from "react";

function FilterItemsCheckboxes({ handleChange = () => {}, title }) {
  return (
    <label className="checkbox--tqPns ant-checkbox-wrapper">
      <span className="ant-checkbox">
        <input
          onChange={handleChange}
          value={title}
          type="checkbox"
          defaultValue="on"
        />
        <span className="ant-checkbox-inner" />
      </span>
      <span>{title}</span>
    </label>
  );
}

export default FilterItemsCheckboxes;
