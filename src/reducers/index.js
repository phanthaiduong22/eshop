import { combineReducers } from "redux";
import products from "./products";
import editingitem from "./editingitem";

const appReducers = combineReducers({
  products,
  editingitem,
});

export default appReducers;
