import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
class CartInfo extends Component {
  constructor(props) {
    super();
    this.state = {
      address: "35 Nam Kỳ Khởi Nghĩa quận 3 TP.HCM",
      transportCost: 20000,
    };
  }
  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h6>Địa chỉ giao hàng</h6>
          <FontAwesomeIcon icon={faMapMarked} />
          <p style={{ display: "inline" }}>{" " + this.state.address}</p>
          <hr></hr>
          <h6>Thông tin đơn hàng</h6>
          <div class="bg-light d-flex justify-content-between">
            <div>Total Cost</div>
            <div>{this.props.totalCost}</div>
          </div>
          <div class="bg-light d-flex justify-content-between">
            <div>Transport Cost</div>
            <div>{this.state.transportCost}</div>
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Coupon"
            />
            <div className="input-group-append">
              <input className="btn btn-outline-success" type="button" value="Apply"/>
            </div>
          </div>
          <h6>Tổng cộng</h6>
          <hr></hr>
          <div class="d-flex justify-content-center"><h4 style={{color:"red",margin:"auto"}}>{this.props.totalCost+this.state.transportCost+"đ"}</h4></div>
<Link to="/checkout">
<button type="button" name="" id="" class="btn btn-danger btn-lg btn-block">Tiếp tục</button>
</Link>
        </div>
      </div>
    );
  }
}

export default CartInfo;
