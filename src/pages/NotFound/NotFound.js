import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <div className="Container">
        <div className="alert alert-warning">
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-hidden="true"
          >
            &times;
          </button>
          <strong>404! Page not found</strong>
        </div>
      </div>
    );
  }
}

export default NotFound;
