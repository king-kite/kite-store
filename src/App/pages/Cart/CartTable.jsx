import React from "react";
import { NavLink } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardLink,
  MDBCardImage,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const CartTable = ({
  addToCart,
  addToWishlist,
  cart,
  removeFromCart,
  removeSingleFromCart,
}) => {
  const moveToWishList = (item) => {
    addToWishlist(item);
    removeFromCart(item);
  };

  return (
    <MDBCard className="wish-list mb-3">
      <MDBCardBody className="p-2">
        {cart?.length === 0 ? (
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <h3 className="my-2">There is no Item in your Cart</h3>
            <NavLink to="/products">
              <MDBBtn
                className="my-3"
                type="button"
                block
                size="md"
                color="primary"
              >
                Checkout some of our Products!
              </MDBBtn>
            </NavLink>
          </div>
        ) : (
          cart?.map((item) => (
            <div key={item.slug}>
              <MDBRow>
                <MDBCol md="5" lg="3" xl="3">
                  <MDBCardImage
                    src={item.image}
                    position="center"
                    alt={item.name}
                    overlay="white-slight"
                    fluid
                  />
                </MDBCol>
                <MDBCol md="7" lg="9" xl="9">
                  <div className="square border-1 px-1 py-3">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-column justify-content-start">
                        <h5 className="text-left text-capitalize">
                          {item.name}
                        </h5>
                        <span className="d-block mb-2 text-muted mr-auto text-uppercase">
                          Price - N
                          {item.discountPrice ? item.discountPrice : item.price}
                        </span>
                        <span className="d-block mb-2 text-muted mr-auto text-uppercase">
                          Shirt - blue
                        </span>
                        <span className="d-block mb-2 text-muted mr-auto text-uppercase">
                          Color: blue
                        </span>
                        <span className="d-block mb-2 text-muted mr-auto text-uppercase">
                          Size: M
                        </span>
                      </div>
                      <div>
                        <div className="d-flex flex-between mb-0">
                          <MDBBtn
                            onClick={() => {
                              return parseInt(item.quantity) <= 1
                                ? removeFromCart(item)
                                : removeSingleFromCart(item);
                            }}
                            className="bg-light mx-1"
                          >
                            <MDBIcon
                              className="ms-1"
                              color="dark"
                              icon="minus-circle"
                            />
                          </MDBBtn>
                          <MDBInput
                            style={{ width: "4rem" }}
                            disabled
                            className="quantity"
                            min="0"
                            name="quantity"
                            value={item.quantity}
                            type="number"
                          />
                          <MDBBtn
                            onClick={() => addToCart(item, 1)}
                            className="bg-light mx-1"
                          >
                            <MDBIcon
                              className="ms-1"
                              color="dark"
                              icon="plus-circle"
                            />
                          </MDBBtn>
                        </div>
                        <small
                          id="passwordHelpBlock"
                          className="form-text text-muted text-center"
                        >
                          (Note, 1 piece)
                        </small>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-end">
                      <div>
                        <MDBCardLink
                          onClick={() => removeFromCart(item)}
                          type="button"
                          className="small text-muted text-uppercase mr-3"
                        >
                          <MDBIcon color="dark" icon="trash-alt mr-1" /> Remove
                          item
                        </MDBCardLink>
                        <MDBCardLink
                          onClick={() => moveToWishList(item)}
                          type="button"
                          className="small text-muted text-uppercase"
                        >
                          <MDBIcon color="dark" icon="heart mr-1" /> Move to
                          wish list
                        </MDBCardLink>
                      </div>
                      <p className="mb-0">
                        <span>
                          <strong>
                            N
                            {(item.discountPrice
                              ? item.discountPrice
                              : item.price) * item.quantity}
                          </strong>
                        </span>
                      </p>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
              <hr />
            </div>
          ))
        )}
      </MDBCardBody>
    </MDBCard>
  );
};

export default CartTable;
