import * as actionTypes from "./actionTypes";
import { SignIn, SignUp } from "../../../Store";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

const saveToken = (token, dispatch) => {
  const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
  localStorage.setItem("token", token);
  localStorage.setItem("expirationDate", expirationDate);
  dispatch(authSuccess(token));
  dispatch(checkAuthTimeout(3600));
};

export const authLogin = (username, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const token = SignIn(username, password);
    if (token) saveToken(token, dispatch);
    else {
      const errorMessage = {
        message1: "Username or Password is Incorrect!",
        message2: "Note: Password is CaSe SeNsItIvE!",
      };
      dispatch(authFail(errorMessage));
    }
  };
};

export const authSignup = (values) => {
  return (dispatch) => {
    dispatch(authStart());
    const token = SignUp(values);
    if (token) saveToken(token, dispatch);
    else {
      const errorMessage = {
        message: "Invalid Parameters",
      };
      dispatch(authFail(errorMessage));
    }
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
