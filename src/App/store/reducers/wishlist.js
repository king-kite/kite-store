import * as actionTypes from "../actions/actionTypes";
import { updateState } from "../utility";

const initialState = {
  items: null,
  error: null,
  success: null,
  loading: false,
  wishlistLength: 0,
  totalAmount: 0,
};

const wishlistItem = (item) => {
  return {
    id: item.id,
    slug: item.slug,
    name: item.name,
    image: item.image,
    description: item.description,
    price: item.discountPrice ? item.discountPrice : item.price,
  };
};

const wishlistError = (state, action) => {
  const { error } = action;
  return updateState(state, { error });
};

const getWishlistItems = (state, action) => {
  const { items } = action;
  return updateState(state, {
    items,
    loading: false,
    error: null,
    wishlistLength: items?.length || 0,
  });
};

const addWishlistItem = (state, action) => {
  const { item } = action;
  const { items } = state;
  const product = items?.filter((p) => p.slug === item.slug)[0];
  const index = items?.indexOf(product);
  const newItems = items ? [...items] : [];
  let success = "This Item was successfully added to the Wishlist";
  if (index > -1) {
    action.error = "This Item is already in your Wishlist!";
    return wishlistError(state, action);
  } else newItems.push(wishlistItem(item));
  return updateState(state, {
    items: newItems,
    success,
    error: null,
    loading: false,
    wishlistLength: newItems?.length,
  });
};

const removeWishlistItem = (state, action) => {
  const { items } = state;
  const { item } = action;
  const newItems = items.filter((product) => item.slug !== product.slug);
  let success = "This Item was successfully removed from the Wishlist!";
  return updateState(state, {
    items: newItems,
    loading: false,
    error: null,
    success,
    wishlistLength: newItems?.length,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_WISHLIST_ITEMS:
      return getWishlistItems(state, action);
    case actionTypes.WISHLIST_ERROR:
      return wishlistError(state, action);
    case actionTypes.ADD_WISHLIST_ITEM:
      return addWishlistItem(state, action);
    case actionTypes.REMOVE_WISHLIST_ITEM:
      return removeWishlistItem(state, action);
    default:
      return state;
  }
};

export default reducer;
