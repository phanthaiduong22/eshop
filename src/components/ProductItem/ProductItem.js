import React, { Component } from "react";
import { Link } from "react-router-dom";
class ProductItem extends Component {
  onDelete = (id) => {
      
    if (confirm("Are you sure want to delete this item?")) { //eslint-disable-line
      this.props.onDelete(id);
    }
  };

  render() {
    let { product, index } = this.props;
    let statusName = product.status ? "On Stock" : "Out Stock";
    let statusClass = product.status ? "warning" : "danger";

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <button type="button" className={`btn btn-${statusClass}`}>
            {statusName}
          </button>
        </td>
        <td>
          <Link
            to={`products/${product.id}/edit`}
            type="button"
            className="btn btn-success mr-md-3"
          >
            Edit
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(product.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
