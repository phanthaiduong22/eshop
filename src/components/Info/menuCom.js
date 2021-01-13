import React, { Component } from "react";

class MenuInfo extends Component{
    constructor(props) {
        super(props);
    
      }

      render(){
          let order=this.props.order;
        return (
          <div>
            <button className="btn">
            <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i>
            <strong> Thông tin khách hàng </strong>
          </button>
          <button className="btn">
            <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
            <strong>
              {" "}
              Giỏ hàng
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </button>
          <button className="btn">
            <i className="fa fa-bell fa-2x" aria-hidden="true"></i>
            <strong>
              {" "}
              Thông báo
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
          </button>
          <button className="btn">
            <i className="fa fa-map-signs fa-2x" aria-hidden="true"></i>
            <strong> Quản lý địa chỉ </strong>
          </button>
          <button
            className="btn"
            onClick={(e) => (window.location.href = "/orders")}
          >
            <i className="fa fa-money fa-2x" aria-hidden="true"></i>
            <strong> Quản lý đơn hàng </strong>
          </button>
          <button className="btn">
            <i className="fa fa-archive fa-2x" aria-hidden="true"></i>
            <strong> Quản lý của hàng </strong>
          </button>
          <button className="btn">
            <i className="fa fa-commenting fa-2x" aria-hidden="true"></i>
            <strong> Nhận xét của tôi </strong>
          </button>
          <button className="btn">
            <i className="fa fa-bookmark fa-2x" aria-hidden="true"></i>
            <strong> Quản lý mã giảm giá </strong>
          </button>
        </div>
          );
      }
}

export default MenuInfo;