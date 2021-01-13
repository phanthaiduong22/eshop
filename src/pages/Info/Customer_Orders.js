import React, { Component } from "react";
import MenuInfo from "../../components/Info/menuCom";
import callAPI from "../../utils/apiCaller";
import OrderList from "../SellerOrders/OrdersList";
class Orders extends Component {
  constructor(props) {
    super();
    this.state = {
      orders: [],
      token: "",
    };
  }
  getOrder = () => {
    if (this.state.token) {
      callAPI("/usergetorder", "GET", null, this.state.token)
        .then((res) => {
          console.log(res.data);
          this.setState({ orders: res.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  componentDidMount = () => {
    let token_ = localStorage.getItem("token");
    this.setState({ token: token_ }, function () {
      this.getOrder();
    });
  };

  render() {
    let orders = {

    };

        this.state.orders.map((order, index) => {
          if (orders[order["order_id"]] == null) {
            orders[order["order_id"]]={};
            orders[order["order_id"]].products = [];
            orders[order["order_id"]].detail={status:order["status"],id:order["order_id"]};
          }
          orders[order["order_id"]].products.push(order);
        });
    
        console.log(orders);
      
        return(

          <div className="container-fluid" style={{ backgroundColor: "#d9d9d9" }}>
          <div className="row ml-4 mt-3 mb-2 mr-4" id="bar">
            <div className="col-md-3" style={{ backgroundColor: "white" }}>
              <MenuInfo></MenuInfo>
            </div>
            

          <div className="col-md ml-4 mr-4 pd-2">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Danh sách đơn hàng</h4>

                <ul
                  class="nav nav-pills"
                  id="myTab"
                  role="tablist"
                  style={{ marginBottom: "2em" }}
                >
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Chưa xác nhận
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="dxn-tab"
                      data-toggle="tab"
                      href="#dxn"
                      role="tab"
                      aria-controls="dxn"
                      aria-selected="false"
                    >
                      Đã xác nhận
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Đang giao
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="contact-tab"
                      data-toggle="tab"
                      href="#contact"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Đã giao
                    </a>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                   <OrderList orders={orders} type={0} pushOrder={this.pushOrder}/>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="dxn"
                    role="tabpanel"
                    aria-labelledby="dxn-tab"
                  >
                    <OrderList orders={orders} type={1} pushOrder={this.pushOrder}/>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <OrderList orders={orders} type={2} pushOrder={this.pushOrder}/>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <OrderList orders={orders} type={3} pushOrder={this.pushOrder}/>
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
export default Orders;
