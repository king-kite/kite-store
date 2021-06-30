import * as actionTypes from "../actions/actionTypes";
import { updateState } from "../utility";

const initialState = {
  items: null,
  error: null,
  loading: false,
  success: null
}

const getAllItems = (state, action) => {
  const { items } = action;
  return updateState(state, {
    items, loading: false, error: null
  });
}


const reducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_ALL_ITEMS:
      return getAllItems(state, action);
    case actionTypes.GET_ITEM:
      return console.log("GET__SINGLE__ITEM command was called");
    default:
      return state;
  }
}

export default reducer;