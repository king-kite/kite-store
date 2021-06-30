import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as cartActions from "../../store/actions/cart";
import * as wishlistActions from "../../store/actions/wishlist";
import Similars from "./Similars";
import { useFormInput } from "../../hooks";
import {
  MDBBadge,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBContainer,
  MDBTypography,
} from "mdb-react-ui-kit";

const ProductInfo = ({
  addToCart,
  addToWishlist,
  isAuthenticated,
  items,
  history,
  match: {
    params: { slug },
  },
}) => {
  const [product, setProduct] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const similars = items
    ?.filter((item) => item.category === product?.category)
    .slice(0, 3);

  const quantity = useFormInput(1);
  const rootRef = useRef();

  useEffect(() => {
    console.log(rootRef?.current.scrollHeight, rootRef?.current.scrollTop);
    // rootRef?.current.scrollHeight = 0;
    // rootRef?.current.scrollTop = 0;
    if (items) {
      let item = items?.filter((item) => item.slug === slug)[0];
      if (item) setProduct(item);
      else setRedirect(true);
    }
  }, [items, slug]);

  return redirect ? (
    <Redirect to="/" />
  ) : (
    <MDBContainer ref={rootRef}>
      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-capitalize text-center my-5">
          {product?.name}
        </h2>
        <MDBRow>
          <MDBCol md="6" lg="5">
            <img
              className="img-fluid"
              src={product?.image}
              alt={product?.name}
            />
          </MDBCol>
          <MDBCol md="6" lg="7">
            <MDBRow className="mb-3">
              <MDBCol xl="11" md="12" size="9">
                <MDBBadge className="ms-2 text-capitalize" color="secondary">
                  {product?.category}
                </MDBBadge>
                {product?.new && (
                  <MDBBadge className="ms-2" color="primary">
                    New
                  </MDBBadge>
                )}
                {product?.bestSeller && (
                  <MDBBadge className="ms-2" color="danger">
                    BestSeller
                  </MDBBadge>
                )}
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol xl="10" md="11" size="10">
                {product?.discountPrice && (
                  <MDBTypography tag="del" className="lead mb-0 mx-2">
                    N{product?.price}
                  </MDBTypography>
                )}
                {
                  <MDBTypography tag="span" className="lead mb-0 mx-2">
                    N
                    {product?.discountPrice
                      ? product?.discountPrice
                      : product?.price}
                  </MDBTypography>
                }
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Description</h5>
                <p className="grey-text">{product?.description}</p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol className="d-flex justify-content-lg-start">
                <MDBInput
                  {...quantity}
                  style={{ width: "4rem" }}
                  id="quantity"
                  type="number"
                />
                <MDBBtn
                  onClick={() =>
                    isAuthenticated
                      ? addToCart(product, quantity.value)
                      : history.push("/login")
                  }
                  tag="button"
                  type="submit"
                  style={{ backgroundColor: "#55acee", margin: "0 0.5rem" }}
                >
                  Add To Cart{" "}
                  <MDBIcon
                    className="me-2"
                    color="light"
                    fas
                    icon="shopping-cart"
                  />
                </MDBBtn>
                <MDBBtn
                  onClick={() =>
                    isAuthenticated
                      ? addToWishlist(product)
                      : history.push("/login")
                  }
                  tag="button"
                  type="submit"
                  style={{ backgroundColor: "#ffa900", margin: "0 0.5rem" }}
                >
                  Add To Wishlist{" "}
                  <MDBIcon className="me-2" color="light" fas icon="heart" />
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
      <hr className="my-4" />
      <section className="mb-5">
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md={6} className="text-center">
            <h4 className="my-4 h4">Additional information</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              suscipit modi sapiente illo soluta odit voluptates, quibusdam
              officia. Neque quibusdam quas a quis porro? Molestias illo neque
              eum in laborum.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="d-flex flex-column flex-md-row justify-content-center align-items-center">
          <Similars similars={similars} />
        </MDBRow>
      </section>
    </MDBContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    items: state.items.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, quantity) =>
      dispatch(cartActions.addInCart(item, quantity)),
    addToWishlist: (item) => dispatch(wishlistActions.addInWishlist(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
