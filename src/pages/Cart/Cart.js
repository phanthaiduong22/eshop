import React, { Component } from "react";
import CartInfo from "./CartInfo";
import callAPI from "../../utils/apiCaller";
import PlusMinusButton from "./PlusMinusButton";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
class Cart extends Component {
  constructor(props) {
    super();
    this.state = {
      products: [],
      token: "",
    };
  }
  //Get cart data
  getCart = () => {
    if (this.state.token) {
      //console.log(this.state.token);
      callAPI("/getcart", "GET", null, this.state.token)
        .then((res) => {
          console.log(res.data);
          this.setState({ products: res.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //Send product to db and get updated data in return
  sendProduct = (product) => {
    if (this.state.token) {
      callAPI("/pushcart", "POST", product, this.state.token)
        .then((res) => {
          if (res.data == "updated OK") {
            this.getCart();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  removeProduct = (productid) => {
    if (this.state.token) {
      callAPI("/deletecart", "DELETE", { productid }, this.state.token)
        .then((res) => {
          if (res.data == "updated OK") {
            this.getCart();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  componentDidMount = () => {
    let token_ = localStorage.getItem("token");
    this.setState({ token: token_ }, function () {
      this.getCart();
    });
  };

  //On count change
  onCountChange = (productid, value = 0) => (e) => {
    let p_new = this.state.products.find(
      (product) => product.product_id == productid
    );
    if (e.target.value) {
      p_new.counting = e.target.value;
    } else {
      p_new.counting = value;
    }
    this.sendProduct(p_new);
  };

  //On checkbox change
  onTickChange = (productid) => (e) => {
    //p_new : Product with id:productid
    let p_new = this.state.products.find(
      (product) => product.product_id == productid
    );
    //change p_new checked
    p_new.checked = p_new.checked ? false : true;
    this.sendProduct(p_new);
  };

  onDelete = (product_id) => (e) => {
    this.removeProduct(product_id);
  };
  render() {
    let ProductComponents = null;
    let stores = {};
    let totalCost = 0;
    //Phan san pham theo store:

    this.state.products.map((product, index) => {
      if (stores[product["name"]] == null) {
        stores[product["name"]] = [];
      }
      stores[product["name"]].push(product);
    });

    ProductComponents = Object.keys(stores).map((key, i) => {
      return (
        <div className="card" style={{ marginBottom: "10px" }} key={i}>
          <div className="card-body">
            <h6 class="card-title">{key + " >"} </h6>
            {stores[key].map((store, index) => {
              totalCost += store["counting"] * store["price"];
              return (
                <div
                  className="card"
                  style={{ marginBottom: "10px" }}
                  key={index}
                >
                  <div class="card-body">
                    <div class="form-check">
                      <div class="row">
                        <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1">
                          <label class="form-check-label align-middle">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              name=""
                              id=""
                              checked={store.checked}
                              onChange={this.onTickChange(store["product_id"])}
                            />
                          </label>
                        </div>
                        <div className="col-sm-5 col-md-4 col-lg-2 col-xl-2">
                          <Link to={"/product?id="+store["product_id"]}>
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
                          </Link>
                        </div>
                        <div className="col-sm-6 col-md-7 col-lg-5 col-xl-6">
                        <Link to={"product?id="+store["product_id"]}>
                          <h6>{store["product_name"]}</h6>
                          </Link>
                          <a
                            name=""
                            id=""
                            href="#"
                            role="button"
                            style={{ color: "red" }}
                            onClick={this.onDelete(store["product_id"])}
                          >
                            <FontAwesomeIcon icon={faTrash} /> Xóa sản phẩm
                          </a>
                         
                        </div>
                        <div className="col-sm-6 col-md-12 col-lg-4 col-xl-3 mx-auto">
                          <div class="d-flex justify-content-center">
                            <h5>{store["price"] + "đ"}</h5>
                          </div>
                          <div class="d-flex justify-content-center">
                            <PlusMinusButton
                              item={store}
                              onCountChange={this.onCountChange}
                            />
                          </div>
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
          <div class="col-lg-8 my-auto">
            {this.state.products.length ? (
              ProductComponents
            ) : (
              <React.Fragment>
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    size="6x"
                    style={{ display: "inline-block", margin: "auto" }}
                    color="gray"
                  />
                  <div style={{ height: "3em" }}></div>
                  <h4>Bạn chưa có sản phẩm nào trong giỏ</h4>
                  <p>Hãy tìm kiếm sản phẩm ngay đi nào!</p>
                  <Link to="/">
                    <button type="button" class="btn btn-warning">
                      Trở về trang chủ
                    </button>
                  </Link>
                </div>
              </React.Fragment>
            )}
          </div>
          <div class="col-lg-4">
            <CartInfo totalCost={totalCost} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
