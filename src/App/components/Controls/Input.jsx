import React from "react";
import { MDBInput } from "mdb-react-ui-kit";

const Input = ({ className, label, name, onChange, value, ...others }) => {
  return (
    <MDBInput
      className={className}
      onChange={onChange}
      label={label}
      id={name}
      name={name}
      value={value}
      {...others}
    />
  );
};

export default Input;
