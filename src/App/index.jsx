import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as authActions from "./store/actions/auth";
import * as cartActions from "./store/actions/cart";
import * as itemActions from "./store/actions/items";
import * as wishlistActions from "./store/actions/wishlist";
import Layout from "./Layout";
import {
  Cart,
  Checkout,
  Home,
  Login,
  ProductInfo,
  Products,
  Register,
  Wishlist,
} from "./pages";

const App = ({
  isAuthenticated,
  getCart,
  getItems,
  getWishlist,
  tryAutoSignIn,
}) => {
  useEffect(() => {
    setTimeout(() => {
      tryAutoSignIn();
      getItems();
      if (isAuthenticated) {
        getCart();
        getWishlist();
      }
    }, 3000);
  }, [isAuthenticated, getCart, getItems, getWishlist, tryAutoSignIn]);

  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" component={Login} />
          <Route path="/product/:slug" component={ProductInfo} />
          <Route path="/products" component={Products} />
          <Route path="/register" component={Register} />
          <Route path="/wishlist" component={Wishlist} />
          <Route exact path="/" component={Home} />
        </Layout>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tryAutoSignIn: () => dispatch(authActions.authCheckState()),
    getCart: () => dispatch(cartActions.getCart()),
    getItems: () => dispatch(itemActions.getItems()),
    getWishlist: () => dispatch(wishlistActions.getWishlist()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
