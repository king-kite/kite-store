import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBCollapse,
  MDBBadge,
  MDBSpinner,
} from "mdb-react-ui-kit";

const Header = ({ cartLength, isAuthenticated, wishLength }) => {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <MDBNavbar expand="lg" dark bgColor="dark" sticky>
      <MDBContainer>
        <NavLink to="/">
          <MDBNavbarBrand className="pt-3" tag="h3">
            Kite Store
          </MDBNavbarBrand>
        </NavLink>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavNoTogglerSecond}>
          <MDBNavbarNav left className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <NavLink to="/">
                <MDBNavbarLink tag="span" active aria-current="page">
                  Home
                </MDBNavbarLink>
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink to="/products">
                <MDBNavbarLink tag="span">Products</MDBNavbarLink>
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink to="/orders">
                <MDBNavbarLink tag="span">Orders</MDBNavbarLink>
              </NavLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            {isAuthenticated ? (
              <>
                <NavLink to="/cart">
                  <MDBNavbarLink tag="span">
                    <span className="mx-2">
                      <MDBIcon fas icon="shopping-cart"></MDBIcon>
                    </span>
                    Cart
                    <MDBBadge className="mx-2" pill color="danger">
                      {cartLength !== null ? (
                        cartLength
                      ) : (
                        <MDBSpinner size="sm" />
                      )}
                    </MDBBadge>
                  </MDBNavbarLink>
                </NavLink>
                <NavLink to="/wishlist">
                  <MDBNavbarLink tag="span">
                    <span className="mx-2">
                      <MDBIcon fas icon="heart"></MDBIcon>
                    </span>
                    Wishlist
                    <MDBBadge className="mx-2" pill color="secondary">
                      {wishLength !== null ? (
                        wishLength
                      ) : (
                        <MDBSpinner size="sm" />
                      )}
                    </MDBBadge>
                  </MDBNavbarLink>
                </NavLink>
                <NavLink to="/account">
                  <MDBNavbarLink tag="span">
                    <span className="mx-2">
                      <MDBIcon fas icon="user"></MDBIcon>
                    </span>
                    Account
                  </MDBNavbarLink>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login">
                  <MDBNavbarLink tag="span">
                    <span className="mx-2">
                      <MDBIcon fas icon="edit"></MDBIcon>
                    </span>
                    Login
                  </MDBNavbarLink>
                </NavLink>
                <NavLink to="/register">
                  <MDBNavbarLink tag="span">
                    <span className="mx-2">
                      <MDBIcon fas icon="user"></MDBIcon>
                    </span>
                    Register
                  </MDBNavbarLink>
                </NavLink>
              </>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

const mapStateToProps = (state) => {
  return {
    cartLength: state.cart.cartLength,
    isAuthenticated: state.auth.isAuthenticated,
    wishLength: state.wishlist.wishlistLength,
  };
};

export default connect(mapStateToProps)(Header);
