import React, { Component, useState } from "react";
import callAPI from "../../utils/apiCaller";
import { Redirect } from "react-router-dom";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

import { DateUtils } from "react-day-picker";
import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";

// import { FormGroup, Button, FormControl, Form, ControlLabel } from "react-bootstrap";

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

class Info extends Component {
  constructor() {
    super();
    this.state = {
      username: "not signed in",
      iat: "not signed in",
      exp: "not signed in",
      error: "",
      token: "",
      redirect: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      validate: false,
      userInfo: {}
    };
  }

  componentWillMount = () => {
    let token = localStorage.getItem("token");
    let reloadInfo = localStorage.getItem("reloadInfo");
    if (reloadInfo == 1) {
      localStorage.setItem("reloadInfo", 0);
      window.location.reload();
    }
    this.setState({ token });
    if (token) {
      callAPI("/getinfo", "GET", null, token)
        .then((res) => {
          let { data } = res;
          this.setState({ username: data.id });
          this.setState({ iat: data.iat });
          this.setState({ exp: data.exp });
        })
        .catch((err) => console.log(err));

      callAPI("/info/getInfo", "GET", null, token)
        .then((res) => {
          console.log(res.data);
          let info = res.data[0];
          info.birthdate = new Date(info.birthdate.replace(' ', 'T'));
          if (info.sex){
            info.sex = "true";
          }
          else{
            info.sex = "false";
          }
          this.setState({userInfo: info});
        })
        .catch((err) => console.log(err));
    }
  };

  onLogout = () => {
    localStorage.setItem("token", "");
    this.setState({ redirect: "/" });
  };

  handleChangeInput = (event) =>
  {
    this.setState(prevState => {
      let userInfo = Object.assign({}, prevState.userInfo);  
      userInfo[event.target.name] = event.target.value;
      console.log(event.target.value);
      return { userInfo };           
    })
  };

  handleChangePass = (event) =>
  {
    this.state({[event.target.name]: event.target.value});
  }

  sendUserInfo = () =>
  {
    if (this.state.userInfo.password === this.state.oldPassword &&
      this.state.newPassword === this.state.confirmPassword)
    {
      this.setState(prevState => {
        let userInfo = Object.assign({}, prevState.userInfo);  
        userInfo.password = this.state.newPassword;
        return { userInfo };           
      });
    }

    console.log("User info");
    if (this.state.token) {
      console.log(this.state.userInfo);
      callAPI("/info/pushUserInfo", "POST", this.state.userInfo, this.state.token)
        .then((res) => {
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }

  handleSubmit = (e) =>
  {
    console.log("Submmittsd");
    this.sendUserInfo();
  }

  render() {
    let { username, iat, exp, redirect } = this.state;
    if (redirect) {
      return <Redirect to={redirect} />;
    }

    let userInfo = this.state.userInfo;

    let sexs = [
      {
        id: 0,
        name: "Nam",
      },

      {
        id: 1,
        name: "Nu",
      },
    ];

    const FORMAT = "dd/MM/yyyy";

    return (
      <div className="container-fluid" style={{ backgroundColor: "#d9d9d9" }}>
        <div className="row ml-4 mt-3 mb-2 mr-4" id="bar">
          <div className="col-md-3" style={{ backgroundColor: "white" }}>
            <button className="btn">
              <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i>
              <strong> Thong tin tai khoan</strong>
            </button>
            <button className="btn">
              <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
              <strong> Gio hang</strong>
            </button>
            <button className="btn">
              <i className="fa fa-bell fa-2x" aria-hidden="true"></i>
              <strong> Thong bao</strong>
            </button>
            <button className="btn">
              <i className="fa fa-map-signs fa-2x" aria-hidden="true"></i>
              <strong> Quan ly dia chi</strong>
            </button>
            <button className="btn">
              <i className="fa fa-money fa-2x" aria-hidden="true"></i>
              <strong> Quan ly thanh toan</strong>
            </button>
            <button className="btn">
              <i className="fa fa-archive fa-2x" aria-hidden="true"></i>
              <strong> Quan ly cua hang</strong>
            </button>
            <button className="btn">
              <i className="fa fa-commenting fa-2x" aria-hidden="true"></i>
              <strong> Nhan xet cua toi</strong>
            </button>
            <button className="btn">
              <i className="fa fa-bookmark fa-2x" aria-hidden="true"></i>
              <strong> Quan ly ma giam gia</strong>
            </button>
          </div>
          <div
            className="col-md ml-4 mr-4 pd-2"
            style={{ backgroundColor: "white" }}
          >
            <form className="ml-3 mt-3 mr-4">
              <div className="form-group">
                <label for="text">Ho va ten</label>
                <input type="name" class="form-control" id="name" name="name" value={userInfo.name} onChange={this.handleChangeInput}></input>
              </div>

              <label for="text">So dien thoai</label>
              <div class="input-group">
                <input type="name" class="form-control" name="phone" onChange={this.handleChangeInput} value={userInfo.phone} required></input>
                <input type="name" class="form-control" placeholder="Nhap ma OTP xac thuc" aria-describedby="basic-addon2"></input>
                <div class="input-group-append" style={{marginTop:"-0.5em"}}>
                  <button class="btn btn-success" type="button">Gui ma xac thuc</button>
                 </div>
              </div>

              <label for="text">Email</label>
              <div class="input-group">
                <input type="email" class="form-control" name="email" onChange={this.handleChangeInput}
                value={userInfo.email} aria-describedby="email"></input>
                <div class="input-group-append" style={{marginTop:"-0.5em"}}>
                  <button class="btn btn-success" type="button">Chinh sua</button>
                 </div>
              </div>

              <div class="row">
                <div class="col-md">
                  <div class="form-group">
                  <label for="sex">Gioi tinh</label>
                  <select class="form-control" id="sex" name="sex" value={userInfo.sex} onChange={this.handleChangeInput}>
                    <option value="true" >Nam</option>
                    <option value="false" >Nu</option>
                  </select>
                  </div>
                </div>
                <div className="col-md">
                  <label for="text">Ngay sinh</label>
                  <br></br>

                  <DayPickerInput
                    value={userInfo.birthdate}
                    formatDate={formatDate}
                    format={FORMAT}
                    parseDate={parseDate}
                    name="birthdate"
                    onChange={this.handleChangeInput}
                  />
                </div>
              </div>

              <p>
                <button
                  className="btn btn-primary "
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  style={{ width: "30%", textAlign: "center" }}
                >
                  Doi mat khau
                </button>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                  <form className="ml-2 mt-2 mr-4">
                    <div className="form-group">
                      <label for="text">Nhap mat khau cu</label>
                      <input type="password" class="form-control" id="name"></input>
                    </div>

                    <div className="form-group">
                      <label for="text">Nhap mat khau moi</label>
                      <input type="password" class="form-control" id="name" placeholder="Mat khau phai nhieu hon 6 ky tu"></input>
                    </div>

                    <div className="form-group">
                      <label for="text">Nhap lai mat khau moi</label>
                      <input type="password" class="form-control" id="name"></input>
                    </div>
                  </form>
                </div>
              </div>

              <div class="col text-center mt-2">
                <button type="submit" class="btn btn-success" onClick={this.handleSubmit} style={{width:"30%", textAlign:"center"}}><strong>Luu lai</strong></button>
               </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
