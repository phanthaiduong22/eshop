import React, { Component } from "react";
class Product extends Component {
  constructor(props) {
    super();
    this.state = {
      id: 0,
      nameProducct:
        "Áo giữ nhiệt - Áo thun nam dài tay body - Áo bóng đá co giãn",
    };
  }
  componentDidMount = () => {
    let { match } = this.props;
    if (match) {
      let id = match.params.id;
      this.setState({ id });
    }
  };
  render() {
    let { id } = this.state;
    return <div>{id}</div>;
  }
}

export default Product;
