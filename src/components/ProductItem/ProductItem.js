import { Link } from "react-router-dom";
import "./ProductItem.css";
const ProductItem = ({ imgSrc, productName, link, cost, sold }) => {
  console.log(productName);
  if (sold > 999) sold = ">999";
  return (
    <div className="product-item">
      <Link style={{ textDecoration: "none", color: "#000000" }} to={link}>
        <img src={imgSrc} alt="categoryImg" />
        <p className="productName">{productName}</p>
        <div className="productInfo">
          <p className="cost">đ{cost}</p>
          <p className="sold">sold: {sold}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
