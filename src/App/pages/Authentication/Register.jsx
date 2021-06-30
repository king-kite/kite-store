import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as actions from "../../store/actions/auth";
import { Form, useForm } from "../../hooks/useForm";
import Controls from "../../components/Controls";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
} from "mdb-react-ui-kit";
import "./Authenticate.scss";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password1: "",
  password2: "",
  conditions: false,
};

const Register = ({ signUp, token }) => {
  const { values, handleChange } = useForm(initialValues);
  const [pass2Val, setpass2Val] = useState("Confirm Password is required!");
  const [myToken, setMyToken] = useState(null);

  useEffect(() => {}, [token, myToken]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.password1 !== values.password2)
      return setpass2Val("Password does not match!");
    signUp(values);
    if (token !== null && token !== undefined) return setMyToken(token);
  };

  return myToken ? (
    <Redirect to="/login" />
  ) : (
    <MDBContainer className="login__form">
      <MDBRow>
        <MDBCol className="p-0">
          <MDBCard style={{ height: "100%" }} className="login__form__card">
            <div>
              <div className="header">
                <h3 className="header__title">
                  SIGN
                  <a href="#!" className="header__link">
                    IN
                  </a>
                </h3>
              </div>
              <Form onSubmit={handleSubmit} className="form">
                <div className="form__input">
                  <Controls.Input
                    onChange={handleChange}
                    label="First Name"
                    name="firstName"
                    type="text"
                    validation="First Name is required*"
                    invalid
                    value={values.firstName}
                    required
                  />
                </div>
                <div className="form__input">
                  <Controls.Input
                    onChange={handleChange}
                    label="Last Name"
                    name="lastName"
                    type="text"
                    validation="Last Name is required*"
                    invalid
                    value={values.lastName}
                    required
                  />
                </div>
                <div className="form__input">
                  <Controls.Input
                    onChange={handleChange}
                    label="E-mail"
                    name="email"
                    type="email"
                    validation="E-mail is required*"
                    invalid
                    value={values.email}
                    required
                  />
                </div>
                <div className="form__input">
                  <Controls.Input
                    onChange={handleChange}
                    label="Username"
                    name="username"
                    type="text"
                    value={values.username}
                  />
                </div>
                <div className="form__input">
                  <Controls.Input
                    onChange={handleChange}
                    label="Enter Password"
                    name="password1"
                    type="password"
                    validation="Password is required!"
                    invalid
                    value={values.password1}
                    required
                  />
                </div>
                <div className="form__input">
                  <Controls.Input
                    onChange={handleChange}
                    label="Confirm Password"
                    name="password2"
                    type="password"
                    validation={pass2Val}
                    invalid
                    value={values.password2}
                    required
                  />
                </div>
                <div className="md-form pb-3">
                  <Controls.Checkbox
                    onChange={handleChange}
                    className="form__checkbox"
                    label={
                      <>
                        <span className="form__checkbox__text">Accept the</span>
                        &nbsp;
                        <a href="#!" className="form__checkbox__link">
                          Terms and Conditions
                        </a>
                      </>
                    }
                    validation="This Field is required*"
                    invalid
                    name="conditions"
                    required
                    value={values.conditions}
                  />
                </div>
                <MDBRow className="d-flex align-items-center mb-4">
                  <div className="text-center mb-3 col-md-12">
                    <MDBBtn type="submit" color="success" rounded>
                      Sign up
                    </MDBBtn>
                  </div>
                </MDBRow>
              </Form>
              <MDBCol className="form__footer" md="12">
                <p className="font-small white-text d-flex justify-content-center">
                  Already Have an account?
                  <NavLink
                    to="/login"
                    className="form__footer__link green-text font-weight-bold mx-2"
                  >
                    Login
                  </NavLink>
                </p>
              </MDBCol>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (values) => dispatch(actions.authSignup(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
