import * as actionTypes from "./actionTypes";
import { Products } from "../../../Store";

export const getItems = () => {
  const items = Products.getAllProducts();
  return {
    type: actionTypes.GET_ALL_ITEMS,
    items
  }
}