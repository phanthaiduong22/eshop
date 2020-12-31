import React, { Component } from "react";

class Checkout extends Component {
  render() {
    return (
      <div className="container">

  <div className="row">
   <div className="col-md-6">

      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Title</h4>
          <p class="card-text">Text</p>

          <button type="button" name="" id="" class="btn btn-danger btn-lg btn-block">CLick me</button>
        </div>
      </div>

   </div>
   <div className="col-md-6">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Title</h4>
          <p class="card-text">Text</p>
          <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
        </div>
      </div>
   </div>
  </div>

</div>
    );
  }
}

export default Checkout;
