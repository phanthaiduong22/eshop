import "./ProductItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import callAPI from "../../utils/apiCaller";
import sale2 from "./sale2.png";

import { faCartPlus, faHeart, faInfo } from "@fortawesome/free-solid-svg-icons";
import { Redirect, Link } from "react-router-dom";
import Alert from "../Alert/Alert";

class ProductItem extends Component {
  constructor(props) {
    super();
    this.state = {
      searchValue: "",
      products: [],
      categories: [],
      redirect: "",
    };
  }

  componentDidMount = () => {
    let searchValue = this.props.searchValue;
    this.setState({ searchValue });
    callAPI("/category", "GET", {})
      .then((response) => {
        this.setState({
          categories: response.data,
        });

        return response.data;
      })
      .catch((e) => {
        console.log(e.response);
      });
    callAPI("", "GET", {})
      .then((response) => {
        this.setState({
          Allproducts: response.data,
        });
        this.fixData();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  isNumeric = (str) => {
    if (typeof str != "string") return false; // we only process strings!
    return (
      !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
      !isNaN(parseFloat(str))
    ); // ...and ensure strings of whitespace fail
  };
  fixData = (search) => {
    let { searchValue } = this.state;
    if (search) searchValue = search;
    let products = this.state.Allproducts;

    let newProducts = products.filter((product) => {
      if (typeof searchValue == "number") return product.cat_id == searchValue;
      else {
        if (this.isNumeric(searchValue) == true)
          return product.cat_id == searchValue;
        else
          return product.product_name
            .toLowerCase()
            .includes(searchValue.toLowerCase());
      }
    });
    this.setState({ products: newProducts });
  };

  auto1RowFlashProduct(start, end) {
    let result = [];
    for (let i = start; i < end; i++) {
      if (this.state.products[i]) {
        result.push(
          <div className="col-md-3">
            <div className="motsanpham">
              <div className="layer"></div>
              <div className="layerbox"></div>
              {this.state.products.length > 0 ? (
                <div className="controls">
                  <button
                    onClick={() => {
                      this.onClickLove(this.state.products[i].id);
                    }}
                  >
                    <FontAwesomeIcon icon={faHeart} className="iconcontrol" />
                  </button>
                  <button
                    onClick={() => {
                      this.onClickInfo(this.state.products[i].id);
                    }}
                  >
                    <FontAwesomeIcon icon={faInfo} className="iconcontrol" />
                  </button>
                  <button
                    onClick={() => {
                      this.onClickaddCart(
                        this.state.products[i].id,
                        this.state.products[i].price
                      );
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCartPlus}
                      className="iconcontrol"
                    />
                  </button>
                </div>
              ) : (
                <div className="controls">
                  <button
                    onClick={() => {
                      this.onClickLove(null);
                    }}
                  >
                    <FontAwesomeIcon icon={faHeart} className="iconcontrol" />
                  </button>
                  <button
                    onClick={() => {
                      this.onClickInfo(null);
                    }}
                  >
                    <FontAwesomeIcon icon={faInfo} className="iconcontrol" />
                  </button>
                  <button
                    onClick={() => {
                      this.onClickaddCart(null);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCartPlus}
                      className="iconcontrol"
                    />
                  </button>
                </div>
              )}

              <img className="banner" src={sale2} alt="image"></img>

              {this.state.products.length > 0 ? (
                <img
                  alt="image"
                  className="anhsp"
                  src={this.state.products[i].image_url}
                  style={{ width: "100%" }}
                ></img>
              ) : (
                <img
                  alt="image"
                  className="anhsp"
                  src=""
                  style={{ width: "100%" }}
                ></img>
              )}

              {this.state.products.length > 0 ? (
                <div className="tieude">
                  {this.state.products[i].product_name}
                </div>
              ) : (
                <div className="tieude"></div>
              )}

              {this.state.products.length > 0 ? (
                <strong className="gia">
                  {this.state.products[i].price} đ
                </strong>
              ) : (
                <strong className="gia"></strong>
              )}

              <div className="thanhbar">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "20%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>

                  {this.state.products.length > 0 ? (
                    <small class="justify-content-center d-flex position-absolute w-100">
                      Đã bán {this.state.products[i].stock}
                    </small>
                  ) : (
                    <small class="justify-content-center d-flex position-absolute w-100"></small>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
    return result;
  }

  autoFlashProduct = (numrow, numProduct1row) => {
    let rows = [];
    for (let i = 0; i < numrow; i++) {
      let row1 = this.auto1RowFlashProduct(
        i * numProduct1row,
        (i + 1) * numProduct1row
      );
      if (row1.length !== 0) rows.push(<div className="row">{row1}</div>);
    }
    if (rows.length === 0) {
      rows = <Alert error={"Not found any items"} />;
    }
    return (
      <div className="card m-2 rounded">
        <div className="card-body">
          <div className="card-title d-flex align-items-center">
            {this.state.categories.length > 0 &&
            (typeof this.state.searchValue == "number" ||
              this.isNumeric(this.state.searchValue) == true) ? (
              <strong>
                {this.state.categories[this.state.searchValue].name}
              </strong>
            ) : (
              <strong>{this.state.searchValue}</strong>
            )}
          </div>
          {rows}
        </div>
      </div>
    );
  };
  onClickInfo = (idProduct) => {
    window.open("/product?id=" + idProduct, "_self");
  };

  // hien thi modelBox
  toggleModalBox = () => {
    this.setState({ redirect: "/login" });
  };

  addCartItem() {
    let idProduct = this.state.currentPRID;
    let price = this.state.currentPRprice;
    let numPr = this.state.soluong;
    let token = localStorage.getItem("token");
    callAPI(
      "/cart?action=add",
      "POST",
      {
        idProduct,
        price,
        numPr,
      },
      token
    )
      .then((response) => {
        // console.log(response);
        alert(
          "Them gio hang thanh cong, gio hang cua ban dang chua " +
            response.data[0].tongsohang +
            "san pham\r\n Tong gia tri" +
            response.data[0].tonggiatri
        );
      })
      .catch((e) => {
        console.log(e.response);
        this.toggleModalBox();
      });
  }

  onClickaddCart = (idProduct, price) => {
    // them price vao state
    this.setState({
      currentPRprice: price,
      currentPRID: idProduct,
    });
    // check xem co toekn khong
    let token = localStorage.getItem("token");
    if (token == null) {
      // show model box va bat dang nhap
      this.toggleModalBox();
    } else {
      // show cai model box them vao gio hang thanh cong
      this.addCartItem();
    }
  };

  onClickLove = () => {};
  liOnClick = (searchValue) => {
    this.setState({ searchValue });
    this.fixData(searchValue);
  };
  render() {
    // let searchValue = this.props.searchValue;
    let autodanhmuc = [];
    for (let i = 0; i < this.state.categories.length; i++) {
      autodanhmuc.push(
        <li onClick={() => this.liOnClick(this.state.categories[i].id)}>
          <Link
            to={{
              pathname: `/search/${this.state.categories[i].id}`,
              param1: "Par1",
            }}
            className="align-items-center d-flex justify-content-between"
          >
            {this.state.categories[i].name}
            <img
              src={this.state.categories[i].image_url}
              className="icondanhmuc"
            />
          </Link>
        </li>
      );
    }
    let { redirect } = this.state;
    if (redirect) {
      this.setState({ redirect: "" });
      return <Redirect to={redirect} />;
    }
    return (
      <div className="row">
        <div className="col-3 card danhmuc cha">
          <div className="card-body">
            <h5 class="card-title">CATEGORY</h5>
            <hr></hr>
            <ul className="list-unstyled">{autodanhmuc}</ul>
          </div>
        </div>
        <div className="col-9">
          <div>{this.autoFlashProduct(4, 4)}</div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
