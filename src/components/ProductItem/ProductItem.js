import "./ProductItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart, faInfo } from "@fortawesome/free-solid-svg-icons";

const ProductItem = ({ imgSrc, productName, link, cost, sold }) => {
  console.log(productName);
  if (sold > 999) sold = ">999";
      return <div></div>;
};

export default ProductItem;
