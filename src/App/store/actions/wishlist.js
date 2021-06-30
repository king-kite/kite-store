import * as actionTypes from "./actionTypes";
import { Wishlist } from "../../../Store";

const wishlistError = (error) => {
  return {
    type: actionTypes.WISHLIST_ERROR,
    error,
  };
};

const addWishlistItem = (item) => {
  return {
    type: actionTypes.ADD_WISHLIST_ITEM,
    item,
  };
};

const removeWishlistItem = (item) => {
  return {
    type: actionTypes.REMOVE_WISHLIST_ITEM,
    item,
  };
};

export const getWishlist = () => {
  const wishlist = Wishlist.getWishlistItems();
  return {
    type: actionTypes.GET_WISHLIST_ITEMS,
    items: wishlist,
  };
};

export const addInWishlist = (item) => {
  let message = Wishlist.addWishlistItem(item.slug);
  if (message === "SUCCESS") return addWishlistItem(item);
  else
    return wishlistError(`${message} The Item was not added to the Wishlist!`);
};

export const removeInWishlist = (item) => {
  let message = Wishlist.removeWishlistItem(item.slug);
  if (message === "SUCCESS") return removeWishlistItem(item);
  else
    return wishlistError(
      `${message} This Item could not be removed from Wishlist!`
    );
};
