import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SellerSideBar from "../../components/SellerSideBar/SellerSideBar";

class Sell extends Component {


  render() {

    return (
      <div className="container-fluid ">
        <div className="row m-5 ">
          <SellerSideBar />
          <div className="col-md">
            <div className="row">
              <div className="col-5 ml-5">
                <div className="row shadow p-3 mb-5 bg-secondary rounded">
                  <div className="col">
                    <div className="row bg-white">
                      <div className="col-8 ">
                        <h1>Tổng đơn hàng</h1>
                      </div>
                      <div className="col d-flex flex-row-reverse">
                        <h1>0</h1>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-4 mr-1 bg-white">
                        <h1>0</h1>
                        <p>Chờ nhận hàng</p>
                      </div>
                      <div className="col-4 mr-1 bg-white">
                        <h1>0</h1>
                        <p>Chờ xác nhận</p>
                      </div>
                      <div className="col bg-white">
                        <h1>0</h1>
                        <p>Đơn hủy</p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-4 mr-1 bg-white">
                        <h1>0</h1>
                        <p>Đã Thanh Toán</p>
                      </div>
                      <div className="col-4 mr-1 bg-white">
                        <h1>0</h1>
                        <p>Chờ lấy hàng</p>
                      </div>
                      <div className="col bg-white">
                        <h1>0</h1>
                        <p>Chờ trả hàng/ hoàn tiền</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md ml-5">
                <div className="row shadow p-3 mb-5 bg-secondary rounded">
                  <div className="col">
                    <div className="row bg-white">
                      <div className="col-6 ">
                        <h1>Tổng sản phẩm</h1>
                      </div>
                      <div className="col-6 d-flex flex-row-reverse">
                        <h1>0</h1>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-4 mr-1 bg-white">
                        <h1>0</h1>
                        <p>Bị từ chối</p>
                      </div>
                      <div className="col-4 mr-1 bg-white">
                        <h1>0</h1>
                        <p>Hết hàng</p>
                      </div>
                      <div className="col bg-white">
                        <h1>0</h1>
                        <p>Bị thiếu nội dung</p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-4 mr-1 bg-white">
                        <h1>0</h1>
                        <p>Bị khóa</p>
                      </div>
                      <div className="col-4 mr-1 bg-white">
                        <h1>0</h1>
                        <p>Chờ xác nhận</p>
                      </div>
                      <div className="col bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-5 ml-5 shadow p-3 mb-5 bg-secondary rounded">
                <div className="card text-left">
                  <div className="card-body">
                    <h4 className="card-title">
                      <h1>Phân tích bán hàng</h1>
                    </h4>
                    <div className="row">
                      <div className="col-6 border">
                        <h1>0 </h1>
                        <p>Lượt truy cập</p>
                      </div>
                      <div className="col-6 border">
                        <h1>0 </h1>
                        <p>Lượt xem sản phẩm</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 border">
                        <h1>0 </h1>
                        <p>Doanh thu</p>
                      </div>
                      <div className="col-6 border">
                        <h1>0 </h1>
                        <p>Số đơn hàng</p>
                      </div>
                    </div>
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

export default Sell;
