import * as Types from "../constants/ActionTypes";
let initialState = {};

const editingitem = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PRODUCT:
      state = action.product;
      return state;
    default:
      return state;
  }
};

export default editingitem;
