import { combineReducers } from "redux";
// import products from "./products";
// import editingitem from "./editingitem";
import token from "./token";

const appReducers = combineReducers({
  token,
});

export default appReducers;
