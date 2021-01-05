import React, { Component } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import SellerSideBar from "../../components/SellerSideBar/SellerSideBar";
class SellerListProduct extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="row m-5 ">
          <SellerSideBar />
          <div>
            <ProductItem />
          </div>
        </div>
      </div>
    );
  }
}

export default SellerListProduct;
