import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import CartInfo from "./CartInfo";
class Cart extends Component {
  constructor(props) {
    super();
    this.state = {
      products: [
        {
          imgSrc:
            "https://images-na.ssl-images-amazon.com/images/I/61Ww4abGclL._AC_SL1000_.jpg",
          link: "/product/1",
          name: "Máy Đọc Sách Kindle Paperwhite Gen 10 - Hàng Nhập Khẩu",
          price: 3600000,
          counting: 3,
          store: "Fahasa",
        },
        {
          imgSrc:
            "https://images-na.ssl-images-amazon.com/images/I/61Ww4abGclL._AC_SL1000_.jpg",
          link: "/product/1",
          name: "Máy Đọc Sách Kindle Paperwhite Gen 10 - Hàng Nhập Khẩu",
          price: 3600000,
          counting: 3,
          store: "Fahasa",
        },
        {
          imgSrc:
            "https://images-na.ssl-images-amazon.com/images/I/61Ww4abGclL._AC_SL1000_.jpg",
          link: "/product/1",
          name: "Máy Đọc Sách Kindle Paperwhite Gen 10 - Hàng Nhập Khẩu",
          price: 3600000,
          counting: 3,
          store: "Sieu thi kindle",
        },
      ],
    };
  }
  render() {
    let { products } = this.state;
    let ProductComponents = null;
    let stores = {};

    //Phan san pham theo store:
    products.map((product, index) => {
      if (stores[product["store"]] == null) {
        stores[product["store"]] = [];
      }
      stores[product["store"]].push({
        imgSrc: product["imgSrc"],
        link: product["link"],
        name: product["name"],
        price: product["price"],
        counting: product["counting"],
        store: product["store"],
      });
      {
        console.log(stores);
      }
    });

    ProductComponents = Object.keys(stores).map((key, i) => {
      return (
        <div className="card" style={{ marginBottom: "10px" }}>
          <div className="card-body">
            <h6 class="card-title">{key + " >"} </h6>
            {stores[key].map((store, index) => {
              return (
                <div className="card" style={{ marginBottom: "10px" }}>
                  <div class="card-body">
                    <div class="form-check form-check-inline">
                      <div class="row">
                        <div className="col-md-1 my-auto">
                          <label class="form-check-label align-middle">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              name=""
                              id=""
                              value="checkedValue"
                            />
                          </label>
                        </div>
                        <div className="col-md-2">
                          <img
                            src={store["imgSrc"]}
                            alt="pic"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="col-md-6">
                          <h6>{store["name"]}</h6>
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
                            <h5>{store["price"]+"đ"}</h5>
                          </div>

                          <div class="input-group">
                            <span class="input-group-btn">
                              <button
                                type="button"
                                class="quantity-left-minus btn btn-light btn-number"
                                data-type="minus"
                                data-field=""
                              >
                                <FontAwesomeIcon icon={faMinus} />
                              </button>
                            </span>
                            <input
                              type="text"
                              id="quantity"
                              name="quantity"
                              class="form-control input-number"
                              value={store["counting"]}
                              min="0"
                              max="100"
                            />
                            <span class="input-group-btn">
                              <button
                                type="button"
                                class="quantity-right-plus btn btn-light btn-number"
                                data-type="plus"
                                data-field=""
                              >
                                <FontAwesomeIcon icon={faPlus} />
                              </button>
                            </span>
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
          <div class="col-lg-8">
            <div>{ProductComponents}</div>
          </div>
          <div class="col-lg-4"> <CartInfo/></div>
         
        </div>
      </div>
    );
  }
}

export default Cart;
