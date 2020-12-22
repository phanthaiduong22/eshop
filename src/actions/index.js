import * as Types from "../constants/ActionTypes";
import callAPI from "../utils/apiCaller";

export const actFetchProductsRequest = () => {
  return (dispatch) => {
    return callAPI("products", null, null).then((res) => {
      dispatch(actFetchProducts(res.data));
    });
  };
};

export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products,
  };
};

export const actDeleteProductRequest = (id) => {
  return (dispatch) => {
    return callAPI(`deleteProduct/${id}`, "DELETE", null).then((res) => {
      dispatch(actDeleteProduct(id));
    });
  };
};

export const actDeleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCT,
    id,
  };
};

export const actAddProductRequest = (product) => {
  return (dispatch) => {
    return callAPI("postProduct", "POST", {
      name: product.name,
      price: product.price,
      status: product.status,
    }).then((res) => actAddProduct(product));
  };
};

export const actAddProduct = (product) => {
  return {
    type: Types.ADD_PRODUCT,
    product,
  };
};

export const actGetProductRequest = (id) => {
  return (dispatch) => {
    return callAPI(`getProduct/${id}`, "GET", null).then((res) => {
      dispatch(actGetProduct(res.data));
    });
  };
};

export const actGetProduct = (product) => {
  return {
    type: Types.GET_PRODUCT,
    product,
  };
};

export const actUpdateProductRequest = (product) => {
  return (dispatch) => {
    return callAPI(`updateProduct/${product.id}`, "PUT", product).then(
      (res) => {
        dispatch(actUpdateProduct(res.data));
      }
    );
  };
};

export const actUpdateProduct = (product) => {
  return {
    type: Types.UPDATE_PRODUCT,
    product,
  };
};

