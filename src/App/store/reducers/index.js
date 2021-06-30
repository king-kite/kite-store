import { combineReducers } from "redux";
import auth from "./auth";
import cart from "./cart";
import items from "./items";
import wishlist from "./wishlist";

export default combineReducers({
  auth,
  cart,
  items,
  wishlist,
});
