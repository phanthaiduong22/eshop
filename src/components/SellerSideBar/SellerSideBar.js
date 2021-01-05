import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class SellerSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: "",
    };
  }

  sellerListProduct = () => {
    this.setState({ redirect: "/sell/listproduct" });
  };

  addNewProduct = () => {
    this.setState({ redirect: "/sell/addnewproduct" });
  };
  render() {
    let { redirect } = this.state;
    if (redirect) {
      this.setState({ redirect: "" });
      return <Redirect to={redirect} />;
    }
    return (
      <div className="col-md-3 shadow p-3 mb-5 bg-secondary rounded">
        <div className="card">
          <div className="card text-blac bg-white">
            <div className="card-body border">
              <h4 className="card-title">Quản lý sản phẩm</h4>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.sellerListProduct}
              >
                Danh sách sản phẩm
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.addNewProduct}
              >
                Đăng sản phẩm mới
              </button>
            </div>
            <div className="card-body border">
              <h4 className="card-title">Quản lý đơn hàng</h4>
              <button type="button" className="btn btn-secondary">
                Danh sách đơn hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SellerSideBar;
