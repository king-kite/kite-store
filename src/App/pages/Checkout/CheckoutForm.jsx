import React from "react";
import Controls from "../../components/Controls";
import { Form, useForm } from "../../hooks/useForm";
import { CheckoutInfo } from "../../../Store";
import { MDBBtn, MDBCol, MDBRow } from "mdb-react-ui-kit";

const CheckoutForm = () => {
  const countryOptions = [
    { id: "", value: "", title: "Select Country..." },
    { id: 1, value: 1, title: "USA" },
    { id: 2, value: 2, title: "England" },
    { id: 3, value: 3, title: "Canada" },
  ];

  const stateOptions = [
    { id: "", value: "", title: "Select State..." },
    { id: 1, value: 1, title: "California" },
    { id: 2, value: 2, title: "Washington" },
    { id: 3, value: 3, title: "Los Angeles" },
  ];

  const { handleChange, resetForm, values } = useForm(CheckoutInfo);

  const handleSubmit = (event) => {
    event.preventDefault();
    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <MDBRow>
        <MDBCol className="my-2" md="6">
          <Controls.Input
            onChange={handleChange}
            label="First Name"
            type="text"
            name="firstName"
            value={values.firstName}
            validation="First Name is required*"
            invalid
            required
          />
        </MDBCol>
        <MDBCol className="my-2" md="6">
          <Controls.Input
            onChange={handleChange}
            label="Last Name"
            type="text"
            name="lastName"
            value={values.lastName}
            validation="Last Name is required*"
            invalid
            required
          />
        </MDBCol>
      </MDBRow>
      <Controls.Input
        className="my-4"
        onChange={handleChange}
        label="Username"
        type="text"
        name="username"
        value={values.username}
        validation="Username is required*"
        invalid
        required
      />
      <div className="my-4">
        <Controls.Input
          onChange={handleChange}
          label="E-mail"
          type="email"
          name="email"
          value={values.email}
          validation="E-mail is required*"
          invalid
          required
        />
      </div>
      <div className="my-4">
        <Controls.Input
          onChange={handleChange}
          label="Address"
          type="text"
          name="address"
          validation="Address is required*"
          invalid
          value={values.address}
          required
        />
      </div>
      <MDBRow className="d-flex flex-column flex-lg-row align-items-center">
        <MDBCol md="12" lg="4">
          <Controls.Select
            onChange={handleChange}
            name="country"
            options={countryOptions}
            value={values.country}
            required={true}
          />
        </MDBCol>
        <MDBCol md="12" lg="4">
          <Controls.Select
            onChange={handleChange}
            name="state"
            options={stateOptions}
            value={values.state}
            required={true}
          />
        </MDBCol>
        <MDBCol md="12" lg="4">
          <Controls.Input
            onChange={handleChange}
            label="Zip"
            type="text"
            name="zip"
            value={values.zip}
            validation="Zip-code is required*"
            invalid
            required
          />
        </MDBCol>
      </MDBRow>
      <hr className="my-4" />
      <div className="d-flex flex-column justify-content-start align-items-start">
        <Controls.Checkbox
          onChange={handleChange}
          name="sameAddress"
          label="Shipping address is the same as my billing address"
          value={values.sameAddress}
        />
        <Controls.Checkbox
          onChange={handleChange}
          name="saveInfo"
          label="Save this information for next time"
          value={values.saveInfo}
        />
      </div>
      <hr className="mb-4" />
      <MDBBtn color="primary" block size="lg" type="submit">
        Continue to Checkout
      </MDBBtn>
    </Form>
  );
};

export default CheckoutForm;
