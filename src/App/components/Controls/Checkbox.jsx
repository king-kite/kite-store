import React from "react";
import { MDBCheckbox } from "mdb-react-ui-kit";

const Checkbox = ({ label, name, onChange, value, ...others }) => {
  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MDBCheckbox
      onChange={(event) =>
        onChange(convertToDefEventPara(name, event.target.checked))
      }
      name={name}
      checked={value}
      id={name}
      label={label}
      {...others}
    />
  );
};

export default Checkbox;
