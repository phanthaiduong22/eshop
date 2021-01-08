import React, { Component } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import SellerSideBar from "../../components/SellerSideBar/SellerSideBar";
import SellerProductItem from "../../components/SellerProductItem/SellerProductItem";
import callAPI from "../../utils/apiCaller";
class SellerListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    let token = localStorage.getItem("token");
    this.setState({ token });
    callAPI("/getsellerproducts", "GET", null, token)
      .then((res) => {
        // console.log(res.data);
        this.setState({ products: res.data });
      })
      .catch((e) => console.log(e));
  };
  render() {
    let Products = null;
    let { products, token } = this.state;
    if (products) {
      Products = products.map((product, index) => {
        return <SellerProductItem product={product} token={token} />;
      });
    }
    return (
      <div className="container-fluid">
        <div className="row m-5">
          <SellerSideBar className="col-5" />
          <div className="col">
            <div className="card text-black bg-white border">
              <div className="card-body">
                <h4 className="card-title">Các sản phẩm của shop</h4>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Giá</th>
                      <th>Nguồn gốc</th>
                      <th>Chỉnh sửa</th>
                    </tr>
                  </thead>
                  <tbody>{Products}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SellerListProduct;
