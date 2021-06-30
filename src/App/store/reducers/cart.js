import * as actionTypes from "../actions/actionTypes";
import { updateState } from "../utility";

const initialState = {
  items: null,
  error: null,
  success: null,
  loading: false,
  cartLength: 0,
  totalAmount: 0,
};

const getTotalAmount = (items) => {
  let totalAmount = 0;
  items.forEach((item) => {
    totalAmount += item.price * item.quantity;
  });
  return totalAmount;
};

const cartItem = (item) => {
  return {
    id: item.id,
    slug: item.slug,
    name: item.name,
    image: item.image,
    description: item.description,
    quantity: item.quantity,
    price: item.discountPrice ? item.discountPrice : item.price,
  };
};

const cartError = (state, action) => {
  const { error } = action;
  return updateState(state, { error });
};

const getCartItems = (state, action) => {
  const { items } = action;
  return updateState(state, {
    items,
    loading: false,
    error: null,
    cartLength: items.length || 0,
    totalAmount: getTotalAmount(items),
  });
};

const addCartItem = (state, action) => {
  const { item, quantity } = action;
  let quan = parseInt(quantity) || 1;
  const { items } = state;
  const product = items.filter((p) => p.slug === item.slug)[0];
  const index = items.indexOf(product);
  const newItems = [...items];
  let success = "This Item was successfully added to the Cart";
  if (index > -1) {
    newItems[index].quantity = parseInt(newItems[index].quantity) + quan;
    success = "This Item quantity was updated";
  } else {
    item.quantity = quan;
    newItems.push(cartItem(item));
  }
  return updateState(state, {
    items: newItems,
    success,
    error: null,
    loading: false,
    cartLength: newItems.length,
    totalAmount: getTotalAmount(newItems),
  });
};

const removeCartItem = (state, action) => {
  const { items } = state;
  const { item } = action;
  const newItems = items.filter((product) => item.slug !== product.slug);
  let success = "This Item was successfully removed from the Cart!";
  return updateState(state, {
    items: newItems,
    loading: false,
    error: null,
    success,
    cartLength: newItems.length,
    totalAmount: getTotalAmount(newItems),
  });
};

const removeSingleCartItem = (state, action) => {
  const { item } = action;
  const { items } = state;
  const product = items.filter((p) => p.slug === item.slug)[0];
  const index = items.indexOf(product);
  const newItems = [...items];
  let success = "This Item quantity was updated";
  if (index > -1) {
    if (parseInt(newItems[index].quantity) === 1)
      return removeCartItem(state, action);
    else newItems[index].quantity = parseInt(newItems[index].quantity) - 1;
    return updateState(state, {
      items: newItems,
      success,
      error: null,
      loading: false,
      cartLength: newItems.length,
      totalAmount: getTotalAmount(newItems),
    });
  }
  return state;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CART_ITEMS:
      return getCartItems(state, action);
    case actionTypes.CART_ERROR:
      return cartError(state, action);
    case actionTypes.ADD_CART_ITEM:
      return addCartItem(state, action);
    case actionTypes.REMOVE_CART_ITEM:
      return removeCartItem(state, action);
    case actionTypes.REMOVE_SINGLE_CART_ITEM:
      return removeSingleCartItem(state, action);
    default:
      return state;
  }
};

export default reducer;
