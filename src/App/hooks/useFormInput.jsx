import React from "react";

const useFormInput = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useFormInput;
