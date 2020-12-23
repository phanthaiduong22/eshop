import { Link } from "react-router-dom";
import "./CategoryItem.css";
const CategoryItem = ({ imgSrc, categoryName, link }) => {
  return (
    <div className="category-item">
      <Link style={{ textDecoration: "none", color: "#000000" }} to={link}>
        <img src={imgSrc} alt="categoryImg" />
        <p>{categoryName}</p>
      </Link>
    </div>
  );
};

export default CategoryItem;
