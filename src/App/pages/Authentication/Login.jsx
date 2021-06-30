import React from "react";
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
  username: "",
  password: "",
};

const Login = ({ isAuthenticated, signIn }) => {
  const { values, handleChange } = useForm(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(values.username, values.password);
  };

  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <MDBContainer className="login__form">
      <MDBRow>
        <MDBCol className="p-0">
          <MDBCard className="login__form__card">
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
                    label="Username or E-mail"
                    name="username"
                    type="text"
                    validation="Please enter Username or E-mail"
                    invalid
                    value={values.username}
                    required
                  />
                </div>
                <div className="form__input">
                  <Controls.Input
                    onChange={handleChange}
                    label="Enter Password"
                    name="password"
                    type="password"
                    validation="Password is required!"
                    invalid
                    value={values.password}
                    required
                  />
                </div>
                <MDBRow className="d-flex align-items-center mb-4">
                  <div className="text-center mb-3 col-md-12">
                    <MDBBtn type="submit" color="success" rounded>
                      Sign in
                    </MDBBtn>
                  </div>
                </MDBRow>
              </Form>
              <MDBCol className="form__footer" md="12">
                <p className="font-small white-text d-flex justify-content-center">
                  Don't Have an account?
                  <NavLink
                    to="/register"
                    className="form__footer__link green-text font-weight-bold mx-2"
                  >
                    Register
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
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (username, password) =>
      dispatch(actions.authLogin(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
