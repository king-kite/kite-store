import React from "react";
import {
  MDBInputGroup,
  MDBInputGroupText,
  MDBInputGroupElement,
} from "mdb-react-ui-kit";

const InputGroup = ({
  className,
  onChange,
  name,
  groupText,
  value,
  ...others
}) => {
  return (
    <MDBInputGroup className={className} noWrap>
      <MDBInputGroupText>{groupText}</MDBInputGroupText>
      <MDBInputGroupElement
        onChange={onChange}
        id={name}
        name={name}
        value={value}
        {...others}
      />
    </MDBInputGroup>
  );
};

export default InputGroup;
