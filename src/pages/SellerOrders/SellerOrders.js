import React, { Component } from "react";
import SellerSideBar from "../../components/SellerSideBar/SellerSideBar";
class SellerOrders extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="row m-5 ">
          <SellerSideBar />
          <div className="col">
            <div class="card text-black bg-secondary">
              <div class="card-body">
                <div class="card text-black bg-white">
                  <div class="card-body">
                    <h4 class="card-title">Đơn hàng</h4>
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Tên sản phẩm</th>
                          <th>Số lượng</th>
                          <th>Giá</th>
                          <th>Tổng</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td scope="row">Dầu gọi đầu</td>
                          <td>5</td>
                          <td>10.000</td>
                          <td>50.000</td>
                        </tr>
                        <tr>
                          <td scope="row">Dầu gọi đầu</td>
                          <td>5</td>
                          <td>10.000</td>
                          <td>50.000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SellerOrders;
