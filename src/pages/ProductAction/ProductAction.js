import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  actAddProductRequest,
  actGetProductRequest,
  actUpdateProductRequest,
} from "../../actions";
import { connect } from "react-redux";

class ProductAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      checkboxStatus: "",
    };
  }

  componentDidMount() {
    let { match } = this.props;
    if (match) {
      let id = match.params.id;
      this.props.onGetProduct(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editingitem) {
      let { editingitem } = nextProps;
      this.setState({
        id: editingitem.id,
        txtName: editingitem.name,
        txtPrice: editingitem.price,
        checkboxStatus: editingitem.status,
      });
    }
  }

  onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSave = (e) => {
    e.preventDefault();
    let { history } = this.props;
    let { id, txtName, txtPrice, checkboxStatus } = this.state;
    let product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: checkboxStatus,
    };
    if (id) {
      this.props.onUpdateProduct(product);
      history.goBack();
    } else {
      this.props.onAddProduct(product);
      history.goBack();
    }
  };

  render() {
    let { txtName, txtPrice, checkboxStatus } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Name Product</label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Cost</label>
            <input
              type="text"
              className="form-control"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Status</label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="checkboxStatus"
                value={checkboxStatus}
                onChange={this.onChange}
              />
              On Stock
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/products" className="mx-2 btn btn-danger">
            Go Back
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editingitem: state.editingitem,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onGetProduct: (id) => {
      dispatch(actGetProductRequest(id));
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdateProductRequest(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductAction);
