import React, { Component } from "react";
import callAPI from "../../utils/apiCaller";
import SellerSideBar from "../../components/SellerSideBar/SellerSideBar";
class SellInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeName: "",
      storeDesc: "",
      stars: 0,
      token_: "",
    };
  }
  getStore = () => {
    if (this.state.token) {
      callAPI("/sell/getstoreinfo", "GET", null, this.state.token)
        .then((res) => {
          console.log(res.data);
          this.setState({
            storeName: res.data[0].name,
            storeDesc: res.data[0].description,
            stars: res.data[0].stars,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  updateStore=()=>{
    if (this.state.token) {
        let {storeName,storeDesc}=this.state;
        console.log(storeName);
        console.log(storeDesc)
        console.log({storeName,storeDesc})
        callAPI("/sell/updatestoreinfo", "POST", {storeName,storeDesc}, this.state.token)
          .then((res) => {
              alert("Cập nhật thông tin cửa hàng thành công!");
            this.getStore();
          })
          .catch((error) => {
            console.log(error);
          });
      }
  }
  componentDidMount = () => {
    let token_ = localStorage.getItem("token");
    this.setState({ token: token_ }, function () {
      this.getStore();
    });
  };
  onNameChange=(e)=>{
      this.setState({
          storeName:e.target.value
      })
  }
  onDescChange=(e)=>{
    this.setState({
        storeDesc:e.target.value
    })
}
  render() {
    return (
      <div className="container-fluid ">
        <div className="row m-5 ">
          <SellerSideBar />
          <div className="col-md">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Thông tin cửa hàng</h4>
                <form>
                  <div class="form-group row">
                    <label for="storeName" class="col-sm-2 col-form-label">
                      Tên cửa hàng
                    </label>
                    <div class="col-sm-5">
                      <input
                        class="form-control"
                        id="storeName"
                        value={this.state.storeName}
                        onChange={this.onNameChange}
                      />
                      <small class="form-text text-muted">
                        Đặt tên cho cửa hàng của bạn
                      </small>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="storeDesc" class="col-sm-2 col-form-label">
                      Giới thiệu
                    </label>
                    <div class="col-sm-10">
                      <input class="form-control" id="storeDesc" value={this.state.storeDesc} onChange={this.onDescChange}/>
                      <small class="form-text text-muted">
                        Hãy viết vài dòng miêu tả cửa hàng của bạn đi nào!
                      </small>
                    </div>
                  </div>
                </form>
                <button type="button" class="btn btn-success" style={{width:'30%'}} onClick={this.updateStore}>Cập nhật</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SellInfo;
