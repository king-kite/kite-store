import React from "react";

const Select = ({ className, name, onChange, options, value, ...others }) => {
  return (
    <select
      className={`checkout-select + ${className}`}
      onChange={onChange}
      name={name}
      value={value}
      {...others}
    >
      {options.map((op) => (
        <option key={op.id} value={op.value}>
          {op.title}
        </option>
      ))}
    </select>
  );
};

export default Select;
