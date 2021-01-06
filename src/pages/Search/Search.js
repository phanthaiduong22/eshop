import React, { Component } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    const { value } = this.props.match.params;
    this.setState({ value });
  };

  render() {
    const { value } = this.props.match.params;
    let reloadInfo = localStorage.getItem("reloadInfo");
    if (reloadInfo == 1) {
      localStorage.setItem("reloadInfo", 0);
      window.location.reload();
    }
    return (
      <div className="container-fluid">
        <ProductItem searchValue={value} />
      </div>
    );
  }
}

export default Search;
