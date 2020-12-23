import React, { Component } from "react";
import "./Home.css";
import CategoryItem from "../../components/CatergoryItem/CategoryItem";

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
    };
  }
  render() {
    let { categories } = this.state;
    let categoryComponents = null;
    categoryComponents = categories.map((category, index) => {
      let { imgSrc, categoryName, link } = category;
      return (
        <CategoryItem imgSrc={imgSrc} categoryName={categoryName} link={link} />
      );
    });
    return (
      <div className="category">
        <h1>Category</h1>
        {categoryComponents}
      </div>
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
