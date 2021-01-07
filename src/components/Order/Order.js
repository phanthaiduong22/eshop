import React, { Component } from "react";

class Order extends Component{
    constructor(props) {
        super(props);
    
      }

      render(){
          let order=this.props.order;
        return (
            <tr>
              <th scope="row">
                {order.image_url ? (
                  <img
                    src={order.image_url}
                    alt="pic"
                    className="img-responsive full-width"
                    style={{ maxHeight: "5em", maxWidth: "5em" }}
                  />
                ) : (
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/picture-sharing-sites-solid/32/No_Image-128.png"
                    alt="pic"
                    className="img-responsive full-width"
                    style={{ maxHeight: "5em" }}
                  />
                )}
                <span style={{ marginLeft: "1em" }}>
                  {order.product_name}
                </span>
              </th>
              <td>{order.price}</td>
              <td>{order.counting}</td>
              <td>{order.price * order.counting}</td>
            </tr>
          );
      }
}

export default Order;