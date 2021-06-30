import * as actionTypes from "./actionTypes";
import { Cart } from "../../../Store";

const cartError = (error) => {
  return {
    type: actionTypes.CART_ERROR,
    error,
  };
};

const addCartItem = (item, quantity) => {
  return {
    type: actionTypes.ADD_CART_ITEM,
    item,
    quantity,
  };
};

const removeCartItem = (item) => {
  return {
    type: actionTypes.REMOVE_CART_ITEM,
    item,
  };
};

const removeSingleCartItem = (item) => {
  return {
    type: actionTypes.REMOVE_SINGLE_CART_ITEM,
    item,
  };
};

export const getCart = () => {
  const cart = Cart.getCartItems();
  return {
    type: actionTypes.GET_CART_ITEMS,
    items: cart,
  };
};

export const addInCart = (item, quantity) => {
  let message = Cart.addCartItem(item.slug, parseInt(quantity));
  if (message === "SUCCESS") return addCartItem(item, quantity);
  else return cartError(`${message} The Item was not added to the Cart!`);
};

export const removeSingleInCart = (item) => {
  let message = Cart.removeSingleCartItem(item.slug);
  if (message === "SUCCESS") return removeSingleCartItem(item);
  else return cartError("This Item could not be updated!");
};

export const removeInCart = (item) => {
  let message = Cart.removeCartItem(item.slug);
  if (message === "SUCCESS") return removeCartItem(item);
  else return cartError(`${message} This Item could not be removed from Cart!`);
};
