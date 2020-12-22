import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  actDeleteProductRequest,
  actFetchProductsRequest,
} from "../../actions/index";
class ProductListPage extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }
  render() {
    let { products } = this.props;

    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg">
        <Link className="btn btn-info" to="/products/add">
          Add Product
        </Link>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }

  onDelete = (id) => {
    this.props.onDeleteProduct(id);
  };

  showProducts = (products) => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={(id) => this.onDelete(id)}
          />
        );
      });
    }
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
