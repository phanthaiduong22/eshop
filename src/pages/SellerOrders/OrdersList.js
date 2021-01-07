import React, { Component } from "react";
import Order from "../../components/Order/Order";
class OrderList extends Component {
  constructor(props) {
    super();
  }
  handleChange = (id) => (selectedOption) => {
    this.props.pushOrder({ id: id, status: selectedOption.target.value });
  };
  render() {
    console.log(this.props.orders);
    return Object.keys(this.props.orders).map((key, i) => {
      if (this.props.orders[key].detail.status != this.props.type) {
        return null;
      }
      //return null
      return (
        <div class="card" key={i}>
          <div class="card-body">
            <h6 class="card-title" style={{ float: "left" }}>
              Đơn hàng #{key}
            </h6>
            {this.props.pushOrder ? (
              <div
                class="form-group"
                style={{ float: "right", minWidth: "8em" }}
              >
                <label for=""></label>
                <select
                  class="form-control"
                  value={this.props.orders[key].detail.status}
                  onChange={this.handleChange(this.props.orders[key].detail.id)}
                >
                  <option value={0}>Chưa xác nhận</option>
                  <option value={1}>Đã xác nhận</option>
                  <option value={2}>Đang giao</option>
                  <option value={3}>Đã giao</option>
                </select>
              </div>
            ) : null}

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Sản phẩm</th>
                  <th scope="col">Giá tiền</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
                {this.props.orders[key].products.map((order, index) => {
                  return (
                    <Order order={order} />
                    /*
                    <tr>
                      <th scope="row">
                        {order.image_url ? (
                          <img
                            src={order.image_url}
                            alt="pic"
                            className="img-responsive full-width"
                            style={{ maxHeight: "5em", maxWidth: "5em" }}
                          />
                        ) : (
                          <img
                            src="https://cdn0.iconfinder.com/data/icons/picture-sharing-sites-solid/32/No_Image-128.png"
                            alt="pic"
                            className="img-responsive full-width"
                            style={{ maxHeight: "5em" }}
                          />
                        )}
                        <span style={{ marginLeft: "1em" }}>
                          {order.product_name}
                        </span>
                      </th>
                      <td>{order.price}</td>
                      <td>{order.counting}</td>
                      <td>{order.price * order.counting}</td>
                    </tr>*/
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    });
  }
}

export default OrderList;
