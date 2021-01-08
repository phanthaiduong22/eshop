import React, { Component } from "react";
import "./Home.css";
// import CategoryItem from "../../components/CatergoryItem/CategoryItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faStar,
  faTruck,
  faDollarSign,
  faTimes,
  faMinus,
  faMedal,
  faPlus,
  faCartPlus,
  faHeart,
  faBolt,
  faInfo,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import to1 from "./banner.jpg";
import to2 from "./banner3.png";
import to3 from "./banner4.png";
import nho1 from "./banner1.png";
import nho2 from "./banner2.png";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import sale from "./sale.png";
import sale2 from "./sale2.png";
import callAPI from "../../utils/apiCaller";

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      link: "localhost:3000/",
      flashdeals: [],
      categories: [],
      common: [],
      hienthimodelBox: false,

      // for add cart
      username: "",
      password: "",
      currentPRprice: 0,
      currentPRID: 0,
      soluong: 1,
    };
  }

  async getHomeProducts() {
    await callAPI("", "GET", {})
      .then((response) => {
        // console.log(response);
        this.setState({
          flashdeals: response.data,
          common: response.data,
        });

        return response.data;
      })
      .catch((e) => {
        console.log(e.response);
      });
  }

  async getCategory() {
    await callAPI("/category", "GET", {})
      .then((response) => {
        // console.log("category");
        // console.log(response);
        this.setState({
          categories: response.data,
        });

        return response.data;
      })
      .catch((e) => {
        console.log(e.response);
      });
  }

  async componentDidMount() {
    await this.getHomeProducts();
    this.getCategory();
  }

  auto1RowFlashProduct(start, end) {
    let result = [];
    for (let i = start; i < end; i++) {
      result.push(
        <div className="col-md-2">
          <div className="motsanpham">
            <div className="layer"></div>
            <div className="layerbox"></div>
            {this.state.flashdeals.length > 0 ? (
              <div className="controls">
                <button
                  onClick={() => {
                    this.onClickLove(this.state.flashdeals[i].id);
                  }}
                >
                  <FontAwesomeIcon icon={faHeart} className="iconcontrol" />
                </button>
                <button
                  onClick={() => {
                    this.onClickInfo(this.state.flashdeals[i].id);
                  }}
                >
                  <FontAwesomeIcon icon={faInfo} className="iconcontrol" />
                </button>
                <button
                  onClick={() => {
                    this.onClickaddCart(
                      this.state.flashdeals[i].id,
                      this.state.flashdeals[i].price
                    );
                  }}
                >
                  <FontAwesomeIcon icon={faCartPlus} className="iconcontrol" />
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
                  <FontAwesomeIcon icon={faCartPlus} className="iconcontrol" />
                </button>
              </div>
            )}

            <img className="banner" src={sale2}></img>

            {this.state.flashdeals.length > 0 ? (
              <img
                className="anhsp"
                src={this.state.flashdeals[i].image_url}
                style={{ width: "100%" }}
              ></img>
            ) : (
              <img className="anhsp" src="" style={{ width: "100%" }}></img>
            )}

            {this.state.flashdeals.length > 0 ? (
              <div className="tieude">
                {this.state.flashdeals[i].product_name}
              </div>
            ) : (
              <div className="tieude"></div>
            )}

            {this.state.flashdeals.length > 0 ? (
              <strong className="gia">
                {this.state.flashdeals[i].price} đ
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

                {this.state.flashdeals.length > 0 ? (
                  <small className="justify-content-center d-flex position-absolute w-100">
                    Số lượng {this.state.flashdeals[i].stock}
                  </small>
                ) : (
                  <small className="justify-content-center d-flex position-absolute w-100"></small>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return result;
  }

  autoFlashProduct(numrow, numProduct1row) {
    let rows = [];
    for (let i = 0; i < numrow; i++) {
      rows.push(
        <div className="row">
          {this.auto1RowFlashProduct(
            i * numProduct1row,
            (i + 1) * numProduct1row
          )}
        </div>
      );
    }

    return (
      <div className="card">
        <div className="card-body">
          <div className="card-title d-flex align-items-center">
            <FontAwesomeIcon
              icon={faBolt}
              className="icondanhmuc mr-2"
              style={{ fontSize: "20px", color: "orangered" }}
            />
            <strong>Flash Deal</strong>
            <span className="ml-2 badge badge-danger">15:16</span>
          </div>
          {rows}
        </div>
      </div>
    );
  }

  auto1RowCommonProduct(start, end) {
    let result = [];
    for (let i = start; i < end; i++) {
      result.push(
        <div className="col-md-2">
          <div className="motsanpham">
            <div className="layer"></div>
            <div className="layerbox"></div>
            {this.state.flashdeals.length > 0 ? (
              <div className="controls">
                <button
                  onClick={() => {
                    this.onClickLove(this.state.common[i].id);
                  }}
                >
                  <FontAwesomeIcon icon={faHeart} className="iconcontrol" />
                </button>
                <button
                  onClick={() => {
                    this.onClickInfo(this.state.common[i].id);
                  }}
                >
                  <FontAwesomeIcon icon={faInfo} className="iconcontrol" />
                </button>
                <button
                  onClick={() => {
                    this.onClickaddCart(
                      this.state.common[i].id,
                      this.state.common[i].price
                    );
                  }}
                >
                  <FontAwesomeIcon icon={faCartPlus} className="iconcontrol" />
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
                  <FontAwesomeIcon icon={faCartPlus} className="iconcontrol" />
                </button>
              </div>
            )}
            <img className="banner" src={sale2}></img>
            {this.state.common.length > 0 ? (
              <img
                className="anhsp"
                src={this.state.common[i].image_url}
                style={{ width: "100%" }}
              ></img>
            ) : (
              <img className="anhsp" src="" style={{ width: "100%" }}></img>
            )}

            {this.state.common.length > 0 ? (
              <div className="tieude">{this.state.common[i].product_name}</div>
            ) : (
              <div className="tieude"></div>
            )}

            <div className="danhmucphanduoi">
              {this.state.common.length > 0 ? (
                <span>
                  <strong className="gia2">
                    {this.state.common[i].price} đ
                  </strong>
                </span>
              ) : (
                <span>
                  <strong className="gia2"></strong>
                </span>
              )}

              <br></br>
              <del className="text-muted">243.000đ</del>
              <span className="badge badge-success ml-2">-35%</span>
              <div>
                <div className="float-left">
                  <FontAwesomeIcon icon={faStar} className="ngoisao" />{" "}
                </div>
                <div className="float-left  ml-1">
                  {" "}
                  <FontAwesomeIcon icon={faStar} className="ngoisao" />
                </div>
                <div className="float-left  ml-1">
                  <FontAwesomeIcon icon={faStar} className="ngoisao" />{" "}
                </div>
                <div className="float-left  ml-1">
                  {" "}
                  <FontAwesomeIcon icon={faStar} className="ngoisao" />
                </div>
                <div className="float-left  ml-1">
                  {" "}
                  <FontAwesomeIcon icon={faStar} className="ngoisao" />{" "}
                </div>
                <small className="text-secondary ml-2">11</small>
              </div>
            </div>
            {this.state.common.length > 0 ? (
              <small className="diadiem">{this.state.common[i].origin}</small>
            ) : (
              <small className="diadiem"></small>
            )}
          </div>
        </div>
      );
    }
    return result;
  }

  autoCommonProduct(numrow, numProduct1row) {
    let rows = [];
    for (let i = 0; i < numrow; i++) {
      rows.push(
        <div className="row">
          {this.auto1RowCommonProduct(
            i * numProduct1row,
            (i + 1) * numProduct1row
          )}
        </div>
      );
      rows.push(<br></br>);
    }
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-title d-flex align-items-center">
            <FontAwesomeIcon
              icon={faFire}
              className="icondanhmuc mr-2"
              style={{ fontSize: "20px", color: "orangered" }}
            />
            <strong>Sản phẩm phổ biến</strong>
            <span className="ml-2 badge badge-danger">15:16</span>
          </div>
          {rows}
        </div>
      </div>
    );
  }

  render() {
    let autodanhmuc = [];
    for (let i = 0; i < this.state.categories.length; i++) {
      autodanhmuc.push(
        <li>
          <Link
            to={{
              pathname: `search/${this.state.categories[i].id}`,
              state: {
                alo: true,
              },
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
    let danhmucReactDom = (
      <div className="card danhmuc cha">
        <div className="card-body">
          <h5 className="card-title">CATEGORY</h5>
          <hr></hr>
          <ul className="list-unstyled">{autodanhmuc}</ul>
        </div>
      </div>
    );

    let bentraidanhmuc = (
      <div className="bentraidanhmuc h-100">
        <ul
          className="d-block d-flex justify-content-between h-10"
          style={{
            backgroundColor: "#302E41",
            padding: "10px",
            borderRadius: "4px",
          }}
        >
          <li>
            <a href="">Deal Hot</a>
          </li>
          <li>
            <a href="">Lịch sử xem hàng</a>
          </li>
          <li>
            <a href="">Coupon</a>
          </li>
          <li>
            <a href="">Xu</a>
          </li>
          <li>
            <a href="">Đăng ký bán hàng</a>
          </li>
        </ul>
        <div className="row ">
          <div className="col-md-8">
            <Carousel className="w-100 ">
              <Carousel.Item>
                <img className="d-block w-100" src={to1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={to2} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={to3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-4">
            <img src={nho1}></img>
            <img src={nho2}></img>
          </div>
        </div>
      </div>
    );
    return (
      <div className="container-fluid m-5">
        <div
          className={`${
            this.state.hienthimodelBox ? "momoaoao hienra" : "momoaoao"
          }`}
          onClick={() => {
            this.toggleModalBox();
          }}
        ></div>
        <div
          className={`${
            this.state.hienthimodelBox
              ? "modal_box modal_ef modal_show"
              : "modal_box modal_ef"
          }`}
        >
          <div className="modal_content card">
            <form className="card-body" onSubmit={this.onSubmitSignIn}>
              <div className="h4">Xin lỗi bạn phải đăng nhập để thực hiện thao tác này</div>
              <div className="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input
                  onChange={this.onUsernameChange}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter username"
                ></input>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  onChange={this.onPasswordChange}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                ></input>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>


          
        </div>

        <div className="row">
          <div className="col-md-4">{danhmucReactDom}</div>
          <div className="col-md-8">{bentraidanhmuc}</div>
        </div>
        <br />
        {this.autoFlashProduct(2, 6)}
        <br />
        {this.autoCommonProduct(2, 6)}
      </div>
    );
  }

  onUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignIn = (event) => {
    event.preventDefault();
    //todo: hien thivong xoay o day
    let { username, password } = this.state;
    console.log(username, password);
    callAPI("/login", "POST", {
      username,
      password,
    })
      .then((response) => {
        // this.setState({ redirect: true });
        let token = response.data;
        localStorage.setItem("token", token);
        console.log("login thanh cong");
        // neu thanh cong thi tat nut xoay , tat model box
        this.toggleModalBox();
        this.addCartItem();
        // hien thi thong bao add don hang thanh cong
      })
      .catch((e) => {
        this.setState({ error: e.response.data });
        console.log(e.response);
      });
  };

  addCartItem() {
    let idProduct = this.state.currentPRID;
    let price = this.state.currentPRprice;
    let numPr = this.state.soluong;
    //todo: gia su  acesss vo han :v , cai nay su lys sau
    // console.log(idProduct, price);
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
        alert(
          "Thêm vào giỏ hàng thành công"
        );
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
        // this.toggleModalBox();
      });
  }

  // su kien
  onClickInfo(idProduct) {
    window.open("product?id=" + idProduct, "_self");
  }

  // hien thi modelBox
  toggleModalBox() {
    this.setState((prevState) => ({
      hienthimodelBox: !prevState.hienthimodelBox,
    }));
  }

  async onClickaddCart(idProduct, price) {
    // them price vao state
    await this.setState({
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
  }

  onClickLove() {}
}

export default Home;
