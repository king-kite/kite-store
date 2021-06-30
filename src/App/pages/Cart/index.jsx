import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import CartTable from "./CartTable";
import MiniCheckout from "./MiniCheckout";
import * as cartActions from "../../store/actions/cart";
import * as wishlistActions from "../../store/actions/wishlist";
import { MDBContainer, MDBCol, MDBRow, MDBSpinner } from "mdb-react-ui-kit";

const Cart = ({
  addToCart,
  addToWishlist,
  cart,
  isAuthenticated,
  removeFromCart,
  removeSingleFromCart,
  totalAmount,
}) => {
  return isAuthenticated ? (
    <section className="text-center root">
      <h2 className="h1-responsive font-weight-bold text-center mb-3 pt-3">
        Cart ({cart?.length} Items)
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-3">
        Check out the Products in your Cart!
      </p>
      <MDBContainer>
        {cart ? (
          <MDBRow className="mt-4">
            <MDBCol lg="8">
              <CartTable
                addToCart={addToCart}
                addToWishlist={addToWishlist}
                cart={cart}
                removeFromCart={removeFromCart}
                removeSingleFromCart={removeSingleFromCart}
              />
            </MDBCol>
            <MDBCol lg="4">
              <MiniCheckout totalAmount={totalAmount} />
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
  ) : (
    <Redirect to="/login" />
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.items,
    isAuthenticated: state.auth.isAuthenticated,
    totalAmount: state.cart.totalAmount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, quantity) =>
      dispatch(cartActions.addInCart(item, quantity)),
    addToWishlist: (item) => dispatch(wishlistActions.addInWishlist(item)),
    removeFromCart: (item) => dispatch(cartActions.removeInCart(item)),
    removeSingleFromCart: (item) =>
      dispatch(cartActions.removeSingleInCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
