import React from "react";
import { NavLink } from "react-router-dom";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter className="bg-dark text-white text-center text-lg-left">
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="6" md="12" className="mb-4 mb-md-0 text-lg-left">
            <h5 className="text-uppercase">Kite Store</h5>

            <p>
              Kite Store has a variety of products just for you. We are
              available anytime and anywhere.
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Features</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <NavLink to="/products" className="text-white">
                  Products
                </NavLink>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 4
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Shortcuts</h5>

            <ul className="list-unstyled">
              <li>
                <NavLink to="/cart" className="text-white">
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/wishlist" className="text-white">
                  Wish-List
                </NavLink>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Link 4
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; 2021 Copyright:{" "}
        <a className="text-white" href="kitewebdevelopers@gmail.com">
          KiteWebDevelopers
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
