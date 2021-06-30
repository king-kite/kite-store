import React, { useState } from "react";
import { MDBValidation } from "mdb-react-ui-kit";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    handleChange,
    resetForm,
    setValues,
    values,
  };
};

export const Form = ({ children, ...others }) => {
  return <MDBValidation {...others}>{children}</MDBValidation>;
};

// const validate = (fieldValues = values) => {
//   let temp = { ...errors };
//   if ("firstName" in fieldValues)
//     temp.firstName = fieldValues.firstName ? "" : "First Name is Required*";
//   if ("lastName" in fieldValues)
//     temp.lastName = fieldValues.lastName ? "" : "Last Name is Required*";
//   if ("username" in fieldValues)
//     temp.username = fieldValues.username ? "" : "Username is Required*";
//   if ("email" in fieldValues)
//     temp.email = /$^|.+@.+..+/.test(fieldValues.email)
//       ? ""
//       : "Email is not valid*";
//   if ("address" in fieldValues)
//     temp.address = fieldValues.address ? "" : "Address is Required*";
//   if ("country" in fieldValues)
//     temp.country =
//       fieldValues.country.length !== 0 ? "" : "Country is Required*";
//   if ("state" in fieldValues)
//     temp.state = fieldValues.state.length !== 0 ? "" : "State is Required*";
//   if ("city" in fieldValues)
//     temp.city = fieldValues.city ? "" : "City is Required*";
//   if ("zip" in fieldValues)
//     temp.zip = fieldValues.zip ? "" : "Zip is Required*";
//   setErrors({ ...temp });
//
//   if (fieldValues === values)
//     return Object.values(temp).every((x) => x === "");
// };
