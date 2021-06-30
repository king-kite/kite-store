import React from "react";
import { NavLink } from "react-router-dom";
import { MDBBtn, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";

const MiniCheckout = ({ totalAmount }) => (
  <div>
    <h5 className="mb-3">A total amount of</h5>

    <MDBListGroup className="text-muted" flush>
      <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-2 pb-0">
        Temporary amount
        <span>N{totalAmount}</span>
      </MDBListGroupItem>
      <MDBListGroupItem className="d-flex justify-content-between align-items-center px-2">
        Shipping
        <span>N5</span>
      </MDBListGroupItem>
      <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-2 mb-3">
        <div>
          <strong>The total amount of</strong>
          <strong>
            <p className="mb-0">(including VAT)</p>
          </strong>
        </div>
        <span>
          <strong>N{totalAmount + 5}</strong>
        </span>
      </MDBListGroupItem>
    </MDBListGroup>

    <NavLink to="/checkout">
      <MDBBtn type="button" block size="lg" color="primary">
        go to checkout
      </MDBBtn>
    </NavLink>
  </div>
);

export default MiniCheckout;
