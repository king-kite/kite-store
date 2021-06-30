import React, { useState } from "react";
import { connect } from "react-redux";
import useFormInput from "../../hooks/useFormInput";
import {
  MDBBadge,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBInputGroup,
  MDBInputGroupElement,
  MDBListGroup,
  MDBListGroupItem,
  MDBTypography,
} from "mdb-react-ui-kit";

const MiniCart = ({ cart, totalAmount }) => {
  const promoCode = useFormInput("");
  const [promoValue, setPromoValue] = useState(null);

  const handlePromoCode = ({ target: { value } }) => {
    return promoCode.value === "FIRST CODE"
      ? setPromoValue(100)
      : setPromoValue(null);
  };

  return (
    <>
      <MDBCard className="my-4 shadow-2-strong">
        <MDBCardHeader className="d-flex justify-content-between align-items-start">
          <MDBTypography className="text-muted" variant="h4">
            Your Cart
          </MDBTypography>
          <MDBBadge className="ms-2" pill color="secondary">
            <MDBTypography tag="span" className="cart-no">
              {cart?.length || 0}
            </MDBTypography>
          </MDBBadge>
        </MDBCardHeader>
        <MDBCardBody className="m-0 p-0">
          <MDBListGroup tag="div">
            {cart ? (
              cart.map((item) => (
                <MDBListGroupItem
                  key={item.slug}
                  className="py-1 px-2 square border"
                  tag="a"
                  href={`/product/${item.slug}`}
                  action
                >
                  <div className="d-flex w-100 justify-content-between align-items-center p-2">
                    <h6 className="mb-1 text-capitalize">
                      {item.name} X {item.quantity}
                    </h6>
                    <span className="text-muted">
                      N{item.price * item.quantity}
                    </span>
                  </div>
                  <div className="d-flex justify-content-start">
                    <small className="text-muted px-2">
                      {item.description}
                    </small>
                  </div>
                </MDBListGroupItem>
              ))
            ) : (
              <MDBListGroupItem
                className="py-1 px-2 square border"
                tag="a"
                href="#"
                action
              >
                <div className="d-flex w-100 justify-content-cneter align-items-center p-2">
                  <h6 className="mb-1 text-capitalize">
                    There is no item in your Cart!
                  </h6>
                </div>
              </MDBListGroupItem>
            )}
            <MDBListGroupItem
              className="py-1 px-2 square border"
              tag="a"
              href="#"
              action
            >
              <div className="d-flex w-100 justify-content-between align-items-center p-2">
                <h6 className="mb-1">Shipping</h6>
                <span className="text-muted">N5</span>
              </div>
              <div className="d-flex justify-content-start">
                <small className="text-muted px-2">Gratis Shipping</small>
              </div>
            </MDBListGroupItem>
            <MDBListGroupItem
              className="py-1 px-2 square border"
              tag="a"
              href="#"
              action
            >
              <div className="d-flex w-100 lead justify-content-between align-items-center p-2">
                <h6 className="mb-1 text-success">Promo Code</h6>
                <span className="text-success">-N{promoValue || 0}</span>
              </div>
              <div className="d-flex justify-content-start">
                <h6 className="text-success px-2">
                  {promoCode.value || "EXAMPLECODE"}
                </h6>
              </div>
            </MDBListGroupItem>
            <MDBListGroupItem
              className="py-1 px-2 square border"
              tag="a"
              href="#"
              action
            >
              <div className="d-flex w-100 justify-content-between align-items-center p-2">
                <h6 className="mb-1">Total (USD)</h6>
                <span className="text-muted">
                  N{totalAmount + 5 - (promoValue || 0)}
                </span>
              </div>
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBCardBody>
      </MDBCard>
      <MDBCard className="my-2">
        <MDBCardBody className="p-2">
          <MDBInputGroup className="">
            <MDBInputGroupElement
              {...promoCode}
              disabled={promoValue && promoValue !== "" ? true : false}
              placeholder="PROMO CODE"
              type="text"
            />
            <MDBBtn
              onClick={handlePromoCode}
              color="secondary"
              disabled={promoValue && promoValue !== "" ? true : false}
            >
              REDEEM
            </MDBBtn>
          </MDBInputGroup>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.items,
    totalAmount: state.cart.totalAmount,
  };
};

export default connect(mapStateToProps)(MiniCart);
