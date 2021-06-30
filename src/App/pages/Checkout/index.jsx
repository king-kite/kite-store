import React from "react";
import CheckoutForm from "./CheckoutForm";
import MiniCart from "./MiniCart";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import "./Checkout.scss";

const Checkout = () => (
  <section className="text-center root">
    <h2 className="h1-responsive font-weight-bold text-center mb-3 pt-3">
      Checkout
    </h2>
    <p className="grey-text text-center w-responsive mx-auto mb-3">
      Fill out the form below to Checkout!
    </p>
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8">
          <MDBCard className="my-4 shadow-2-strong">
            <MDBCardBody>
              <CheckoutForm />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4">
          <MiniCart />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>
);

export default Checkout;
