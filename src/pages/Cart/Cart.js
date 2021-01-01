import React, { Component } from "react";
import CartInfo from "./CartInfo";
import callAPI from "../../utils/apiCaller";
import PlusMinusButton from "./PlusMinusButton";
import "./Cart.css";
class Cart extends Component {
  constructor(props) {
    super();
    this.state = {
      products2: [],
    };
  }

  componentDidMount = () => {
    let token = localStorage.getItem("token");
    /*this.setState({ token });*/
    if (token) {
      callAPI("/getcart", "GET", null, token)
        .then((res) => {
          console.log(res.data);
          this.setState({ products2: res.data });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
    }
  };

  render() {
    let ProductComponents = null;
    let stores2 = {};
    //Phan san pham theo store:
    this.state.products2.map((product, index) => {
      if (stores2[product["name"]] == null) {
        stores2[product["name"]] = [];
      }
      stores2[product["name"]].push(product);
    });
    ProductComponents = Object.keys(stores2).map((key, i) => {
      return (
        <div className="card" style={{ marginBottom: "10px" }}>
          <div className="card-body">
            <h6 class="card-title">{key + " >"} </h6>
            {stores2[key].map((store, index) => {
              return (
                <div className="card" style={{ marginBottom: "10px" }}>
                  <div class="card-body">
                    <div class="form-check">
                      <div class="row">
                        <div className="col-sm-1 my-auto col-6 col-md-1">
                          <label class="form-check-label align-middle">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              name=""
                              id=""
                              value="checkedValue"
                              checked={store.checked}
                            />
                          </label>
                        </div>
                        <div className="col-sm-4 col-6 col-md-3">
                          <div className="image">
                            {store["image_url"] ? (
                              <img
                                src={store["image_url"]}
                                alt="pic"
                                className="cart_product_image img-responsive full-width"
                              />
                            ) : (
                              <img
                                src="https://cdn0.iconfinder.com/data/icons/picture-sharing-sites-solid/32/No_Image-128.png"
                                alt="pic"
                                className="cart_product_image img-responsive full-width"
                              />
                            )}
                          </div>
                        </div>
                        <div className="col-md-5 col-sm-7">
                          <h6>{store["product_name"]}</h6>
                          <a
                            name=""
                            id=""
                            class="btn btn-danger"
                            href="#"
                            role="button"
                          >
                            Xóa sản phẩm
                          </a>
                        </div>
                        <div className="col-md-3">
                          <div class="d-flex justify-content-center">
                            <h5>{store["price"] + "đ"}</h5>
                          </div>
                          <PlusMinusButton count={store["counting"]}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div class="col-lg-8">
            <div>{ProductComponents}</div>
          </div>
          <div class="col-lg-4">
            {" "}
            <CartInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
