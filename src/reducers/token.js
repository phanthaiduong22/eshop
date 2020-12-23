// import * as Types from "../constants/ActionTypes";
let initialState = localStorage.getItem("token");

const token = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default token;
