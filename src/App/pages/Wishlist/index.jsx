import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as cartActions from "../../store/actions/cart";
import * as wishlistActions from "../../store/actions/wishlist";
import {
  MDBBtn,
  MDBContainer,
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardLink,
  MDBSpinner,
} from "mdb-react-ui-kit";

const Wishlist = ({ addToCart, wishlist, removeFromWishlist }) => {
  const moveToCart = (item) => {
    addToCart(item, 1);
    removeFromWishlist(item);
  };

  return (
    <section className="text-center root">
      <h2 className="h1-responsive font-weight-bold text-center mb-3 pt-3">
        Wishlist ({wishlist?.length} Items)
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-3">
        Check out the Products in your Wishlist!
      </p>
      <MDBContainer>
        {wishlist ? (
          <MDBRow className="mt-4">
            <MDBCol>
              <MDBCard className="wish-list mb-3">
                <MDBCardBody className="p-2">
                  {wishlist?.length === 0 ? (
                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                      <h3 className="my-2">
                        There is no Item in your Wishlist
                      </h3>
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
                    wishlist?.map((item) => (
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
                                    {item.discountPrice
                                      ? item.discountPrice
                                      : item.price}
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
                                    <p className="mb-0">
                                      <span>
                                        <strong>
                                          N
                                          {item.discountPrice
                                            ? item.discountPrice
                                            : item.price}
                                        </strong>
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between align-items-end">
                                <div>
                                  <MDBCardLink
                                    onClick={() => removeFromWishlist(item)}
                                    type="button"
                                    className="small text-muted text-uppercase mr-3"
                                  >
                                    <MDBIcon
                                      color="dark"
                                      icon="trash-alt mr-1"
                                    />{" "}
                                    Remove item
                                  </MDBCardLink>
                                  <MDBCardLink
                                    onClick={() => moveToCart(item)}
                                    type="button"
                                    className="small text-muted text-uppercase"
                                  >
                                    <MDBIcon color="dark" icon="heart mr-1" />{" "}
                                    Move to Cart
                                  </MDBCardLink>
                                </div>
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
            </MDBCol>
          </MDBRow>
        ) : (
          <div className="d-flex justify-content-center align-items-center my-5 py-5">
            <MDBSpinner grow size="lg">
              <span className="visually-hidden">Loading...</span>
            </MDBSpinner>
          </div>
        )}
      </MDBContainer>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, quantity) =>
      dispatch(cartActions.addInCart(item, quantity)),
    removeFromWishlist: (item) =>
      dispatch(wishlistActions.removeInWishlist(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
