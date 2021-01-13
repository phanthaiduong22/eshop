import React, { Component, useState } from "react";
import callAPI from "../../utils/apiCaller";
import { Redirect } from "react-router-dom";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

import { DateUtils } from "react-day-picker";
import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";
import MenuInfo from "../../components/Info/menuCom";

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
      userInfo: {},
    };
  }

  componentDidMount = () => {
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
          if (info.name != null) {
            console.log("Get birthdate");
            info.birthdate = new Date(info.birthdate.replace(" ", "T"));
            if (info.sex) {
              info.sex = "true";
            } else {
              info.sex = "false";
            }
          } else {
            info.birthdate = new Date(1990, 1, 1);
            info.sex = true;
          }
          console.log(info);
          //this.setState({ oldPassword: info });
          this.setState({ userInfo: info });
        })
        .catch((err) => console.log(err));
    }
  };

  onLogout = () => {
    localStorage.setItem("token", "");
    this.setState({ redirect: "/" });
  };

  handleChangeInput = (event) => {
    this.setState((prevState) => {
      let userInfo = Object.assign({}, prevState.userInfo);
      userInfo[event.target.name] = event.target.value;
      console.log(event.target.value);
      return { userInfo };
    });
  };

  handleChangeDate = (date) => {
    this.setState((prevState) => {
      let userInfo = Object.assign({}, prevState.userInfo);
      let birthdate = date;
      userInfo["birthdate"] = birthdate;
      console.log("change date");
      console.log(birthdate);
      return { userInfo };
    });
  };

  handleChangePass = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  sendUserInfo = () => {
    // console.log(this.state.oldPassword);
    // console.log(this.state.newPassword);
    // console.log(this.state.confirmPassword);
    if (
      this.state.userInfo.password === this.state.oldPassword &&
      this.state.newPassword === this.state.confirmPassword
    ) {
      console.log("change password");
      this.setState((prevState) => {
        let userInfo = Object.assign({}, prevState.userInfo);
        userInfo.password = this.state.newPassword;
        console.log(userInfo);
        return { userInfo };
      }, this.modUserInfo);
    }
  };

  modUserInfo = () => {
    console.log("User info");
    console.log(this.state.newPassword);
    console.log(this.state.confirmPassword);
    if (this.state.token) {
      let data = this.state.userInfo;
      console.log(data);
      data.birthdate = data.birthdate.toISOString().replace(" ", "T");
      callAPI("/info/pushUserInfo", "POST", data, this.state.token)
        .then((res) => {})
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  checkPassword = () =>
  {
    let realpass = this.state.userInfo.password;
    let oldpass = this.state.oldPassword;
    let newpass = this.state.newPassword;
    let confirmpass = this.state.confirmPassword;

    console.log("old pass");
    console.log(oldpass);
    if (!oldpass)
    {
      console.log("Quaaa");
    }
    if (!oldpass && !newpass && !confirmpass)
    {
      return 0;
    }

    if (realpass != oldpass)
    {
      return 1; //Wrong old pass
    }
    if (newpass != confirmpass)
    {
      return 2; //Confim pass wrong
    }
    return 0;
  }

  handleSubmit = (e) => {
    const checkpass = this.checkPassword();
    if ( checkpass === 0)
    {
      console.log("Submitted");
      this.modUserInfo();
      //e.preventDefault();
    }
    else
    {
      let mgs = "Mật khẩu cũ bị sai";
      if (checkpass === 2)
      {
        mgs = "Mật khẩu nhập lại không đúng";
      }

      window.alert(mgs)
      e.preventDefault();
    }
  };

  render() {
    let { redirect } = this.state;
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
            <MenuInfo></MenuInfo>
          </div>
          <div
            className="col-md ml-4 mr-4 pd-2"
            style={{ backgroundColor: "white" }}
          >
            <form className="ml-3 mt-3 mr-4">
              <div className="form-group">
                <label for="text">Họ và tên</label>
                <input
                  type="name"
                  class="form-control"
                  id="name"
                  name="name"
                  value={userInfo.name}
                  onChange={this.handleChangeInput}
                ></input>
              </div>

              <label for="text">Số điện thoại</label>
              <div class="input-group">
                <input
                  type="name"
                  class="form-control"
                  name="phone"
                  onChange={this.handleChangeInput}
                  value={userInfo.phone}
                  required
                ></input>
                <input
                  type="name"
                  class="form-control"
                  placeholder="Nhập mã OTP xác thực"
                  aria-describedby="basic-addon2"
                ></input>
                <div class="input-group-append" style={{ marginTop: "-0.5em" }}>
                  <button class="btn btn-success" type="button">
                    Gửi mã OTP xác thực
                  </button>
                </div>
              </div>

              <label for="text">Email</label>
              <div class="input-group">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  onChange={this.handleChangeInput}
                  value={userInfo.email}
                  aria-describedby="email"
                ></input>
                <div class="input-group-append" style={{ marginTop: "-0.5em" }}>
                  <button class="btn btn-success" type="button">
                    Chỉnh sửa
                  </button>
                </div>
              </div>

              <div class="row">
                <div class="col-md">
                  <div class="form-group">
                    <label for="sex">Giới tính</label>
                    <select
                      class="form-control"
                      id="sex"
                      name="sex"
                      value={userInfo.sex}
                      onChange={this.handleChangeInput}
                    >
                      <option value="true">Nam</option>
                      <option value="false">Nữ</option>
                    </select>
                  </div>
                </div>
                <div className="col-md">
                  <label for="text">Ngày sinh</label>
                  <br></br>

                  <DayPickerInput
                    value={userInfo.birthdate}
                    formatDate={formatDate}
                    format={FORMAT}
                    parseDate={parseDate}
                    name="birthdate"
                    onDayChange={this.handleChangeDate}
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
                  Đổi mật khẩu
                </button>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                  <form className="ml-2 mt-2 mr-4">
                    <div className="form-group">
                      <label for="text">Nhập mật khẩu cũ</label>
                      <input
                        type="password"
                        onChange={this.handleChangePass}
                        class="form-control"
                        name="oldPassword"
                        id="oldPassword"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label for="text">Nhập mật khẩu mới</label>
                      <input
                        type="password"
                        onChange={this.handleChangePass}
                        class="form-control"
                        name="newPassword"
                        id="newPassword"
                        placeholder="Mật khẩu phải nhiều hơn 6 ký tự"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label for="text">Nhập lại mật khẩu mới</label>
                      <input
                        type="password"
                        onChange={this.handleChangePass}
                        class="form-control"
                        name="confirmPassword"
                        id="confirmPassword"
                      ></input>
                    </div>
                  </form>
                </div>
              </div>

              <div class="col text-center mt-2">
                <button
                  type="submit"
                  class="btn btn-success"
                  onClick={this.handleSubmit}
                  style={{ width: "30%", textAlign: "center" }}
                >
                  <strong>Lưu lại</strong>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
