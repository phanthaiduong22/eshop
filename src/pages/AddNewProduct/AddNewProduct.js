import React, { Component } from "react";
import "./AddNewProduct.css";
import Alert from "../../components/Alert/Alert";
import callAPI from "../../utils/apiCaller";

class AddNewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "",
      price: "",
      origin: "",
      stock: "",
      description: "",
      product_image: "",
      cat: "",
      error: "",
    };
  }

  componentDidMount = () => {
    callAPI("/getcategory", "GET")
      .then((res) => {
        let listCategory = res.data;
        this.setState({ listCategory });
      })
      .catch((err) => console.log(err));

    let token = localStorage.getItem("token");
    console.log(token);
    this.setState({ token });
  };

  handleProductNameChange = (e) => {
    this.setState({ product_name: e.target.value });
  };

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  handleProductImageChange = (e) => {
    this.setState({ product_image: e.target.value });
  };

  handleOriginChange = (e) => {
    this.setState({ origin: e.target.value });
  };

  handleStockChange = (e) => {
    this.setState({ stock: e.target.value });
  };

  handlePriceChange = (e) => {
    this.setState({ price: e.target.value });
  };

  handleCatChange = (e) => {
    this.setState({ cat: e.target.value });
  };
  onSubmit = () => {
    let {
      product_name,
      description,
      origin,
      stock,
      price,
      cat,
      product_image,
    } = this.state;
    let product = {
      product_name,
      description,
      origin,
      stock,
      price,
      cat,
      product_image,
    };
    if (
      !product_name ||
      !description ||
      !origin ||
      !stock ||
      !price ||
      !cat ||
      !product_image
    )
      this.setState({ error: "Bạn phải điền tất cả các mục" });
    else {
      let { token } = this.state;
      callAPI("/postproduct", "POST", product, token)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      this.setState({ error: "" });
    }
  };

  render() {
    let showerror = null,
      listCategoryOption = null;
    let { error, listCategory } = this.state;
    if (error) showerror = <Alert error={error} />;

    if (listCategory)
      listCategoryOption = listCategory.map((category, index) => {
        return (
          <option value={index + 1} key={index + 1}>
            {category.name}
          </option>
        );
      });

    return (
      <div className="container">
        <div className="card bg-white p-5 ">
          <h1>Điền thông tin sản phẩm</h1>
          <div className="form-group border p-3">
            <label>Tên sản phẩm</label>
            <input
              type="text"
              className="form-control bg-white border"
              value={this.state.product_name}
              onChange={this.handleProductNameChange}
            />
          </div>
          <div className="form-group border p-3">
            <label>Chọn ngành hàng</label>
            <select
              className="custom-select"
              value={this.state.cat}
              onChange={this.handleCatChange}
            >
              <option defaultValue>Chọn ngành hàng</option>
              {listCategoryOption}
            </select>
          </div>
          <form className="form-group border p-3">
            <label>Mô tả sản phẩm</label>
            <div className="input-group ">
              <textarea
                className="form-control description"
                aria-label="With textarea"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
              ></textarea>
            </div>
          </form>
          <div className="form-group border p-3">
            <label>Link hình ảnh</label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">https</span>
              </div>
              <input
                type="text"
                className="form-control bg-white border"
                aria-label="Amount (to the nearest dong)"
                value={this.state.product_image}
                onChange={this.handleProductImageChange}
              />
            </div>
          </div>
          <div className="form-group border p-3">
            <label>Nguồn gốc</label>
            <input
              type="text"
              className="form-control bg-white border"
              value={this.state.origin}
              onChange={this.handleOriginChange}
            />
          </div>

          <div className="form-group border p-3">
            <label>Số lượng</label>
            <input
              type="number"
              className="form-control"
              value={this.state.stock}
              onChange={this.handleStockChange}
            />
          </div>
          <div className="form-group border p-3">
            <label>Giá tiền</label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">đồng</span>
              </div>
              <input
                type="number"
                className="form-control bg-white border"
                aria-label="Amount (to the nearest dong)"
                value={this.state.price}
                onChange={this.handlePriceChange}
              />
            </div>
          </div>
          {showerror}
          <button
            type="button"
            className="btn btn-success"
            onClick={this.onSubmit}
          >
            Đăng sản phẩm
          </button>
        </div>
      </div>
    );
  }
}

export default AddNewProduct;
