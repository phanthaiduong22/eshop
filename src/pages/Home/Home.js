import React, { Component } from "react";
import "./Home.css";
import CategoryItem from "../../components/CatergoryItem/CategoryItem";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Link } from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      categories: [
        {
          imgSrc:
            "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
          categoryName: "Thời Trang Nam",
          link: "/thoitrangnam",
        },
        {
          imgSrc:
            "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
          categoryName: "Thời Trang Nam",
          link: "/thoitrangnam",
        },
        {
          imgSrc:
            "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
          categoryName: "Thời Trang Nam",
          link: "/thoitrangnam",
        },
        {
          imgSrc:
            "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
          categoryName: "Thời Trang Nam",
          link: "/thoitrangnam",
        },
      ],
      hotDealProduct: [
        {
          imgSrc:
            "https://cf.shopee.vn/file/a826691bf49f3ab0509886b4e1ca34ae_tn",
          productName:
            "Áo giữ nhiệt - Áo thun nam dài tay body - Áo bóng đá co giãn",
          link: "product/1",
          cost: "30000",
          sold: "131",
        },
        {
          imgSrc:
            "https://cf.shopee.vn/file/a826691bf49f3ab0509886b4e1ca34ae_tn",
          productName:
            "Áo giữ nhiệt - Áo thun nam dài tay body - Áo bóng đá co giãn",
          link: "product/1",
          cost: "30000",
          sold: "15000",
        },
      ],
    };
  }
  render() {
    let { categories, hotDealProduct } = this.state;
    let categoryComponents = null;
    categoryComponents = categories.map((category, index) => {
      let { imgSrc, categoryName, link } = category;
      return (
        <CategoryItem
          key={index}
          imgSrc={imgSrc}
          categoryName={categoryName}
          link={link}
        />
      );
    });
    let hotdealComponents = null;
    hotdealComponents = hotDealProduct.map((product, index) => {
      let { imgSrc, productName, link, cost, sold } = product;
      return (
        <ProductItem
          key={index}
          imgSrc={imgSrc}
          productName={productName}
          link={link}
          cost={cost}
          sold={sold}
        />
      );
    });
    return (
      <>
        {" "}
        /*{" "}
        <div className="category">
          <h1>Category</h1>
          {categoryComponents}
        </div>
        <div className="hotdeal">
          <h1>HotDeal</h1>
          {hotdealComponents}
        </div>{" "}
        */
      </>
    );
  }
}

export default Home;

/* <div className="category-item">
          <Link
            style={{ textDecoration: "none", color: "#000000" }}
            to="/thoitrangnam"
          >
            <img src="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn" />
            <p>Thời Trang Nam</p>
          </Link>
        </div> */

{
  /* <div className="category">
          <h1>Category</h1>
          {categoryComponents}
        </div>
        <div className="hotdeal">
          <h1>HotDeal</h1>
          {hotdealComponents}
        </div> */
}
