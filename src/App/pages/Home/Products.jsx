import React from "react";
import { connect } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import * as cartActions from "../../store/actions/cart";
import * as wishlistActions from "../../store/actions/wishlist";
import createRating from "../../components/createRating";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBSpinner,
  MDBTooltip,
} from "mdb-react-ui-kit";
import "./Products.scss";

const Products = ({ addToCart, addToWishlist, items, isAuthenticated }) => {
  const products = items?.slice(0, 4);
  const history = useHistory();

  return (
    <section className="text-center my-2">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our bestsellers
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Check out our Best Sellers
      </p>
      <MDBContainer>
        <MDBRow>
          {products ? (
            products.map((item) => (
              <MDBCol key={item.slug} lg="3" md="6" className="mb-lg-0 mb-4">
                <MDBCard>
                  <MDBCardImage
                    src={item.image}
                    position="top"
                    alt={item.name}
                    overlay="white-slight"
                  />
                  <MDBCardBody className="text-center">
                    <NavLink to={`/product/${item.slug}`} className="grey-text">
                      <h5>{item.category}</h5>
                    </NavLink>
                    <MDBCardTitle>
                      <strong>
                        <NavLink to={`/product/${item.slug}`}>
                          {item.name}
                        </NavLink>
                      </strong>
                    </MDBCardTitle>
                    <ul className="rating list-unstyled d-flex justify-content-around">
                      {createRating(item.stars)}
                    </ul>
                    <MDBCardText>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor
                      sit.
                    </MDBCardText>
                    <MDBCardFooter className="px-1 d-flex justify-content-between">
                      <span className="font-weight-bold">
                        <strong>
                          N
                          {item.discountPrice ? item.discountPrice : item.price}
                        </strong>
                      </span>
                      <span className="action__buttons">
                        <MDBTooltip
                          tag="span"
                          title="Add to Cart!"
                          placement="top"
                        >
                          <i
                            onClick={() =>
                              isAuthenticated
                                ? addToCart(item, 1)
                                : history.push("/login")
                            }
                            className="grey-text fa fa-shopping-cart mx-2"
                          />
                        </MDBTooltip>
                        <MDBTooltip tag="span" title="Share!" placement="top">
                          <i className="grey-text fa fa-share-alt mx-2" />
                        </MDBTooltip>
                        <MDBTooltip
                          tag="span"
                          title="Add To Wishlist!"
                          placement="top"
                        >
                          <i
                            onClick={() =>
                              isAuthenticated
                                ? addToWishlist(item)
                                : history.push("/login")
                            }
                            className="grey-text fa fa-heart mx-2"
                          />
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))
          ) : (
            <div className="d-flex justify-content-center align-items-center my-5">
              <MDBSpinner grow size="lg">
                <span className="visually-hidden">Loading...</span>
              </MDBSpinner>
            </div>
          )}
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items.items,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, quantity) =>
      dispatch(cartActions.addInCart(item, quantity)),
    addToWishlist: (item) => dispatch(wishlistActions.addInWishlist(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
