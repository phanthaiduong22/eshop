import React, { Component, useState } from "react";
import callAPI from "../../utils/apiCaller";
import { Redirect } from "react-router-dom";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

import { FormGroup, Button, FormControl, Form, ControlLabel } from "react-bootstrap";

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
      userInfo: {
        name: "Nguyen Hoang Thai Duong",
        phone: "0123456789",
        email: "jgehgejr@gmail.com",
        sex: 1,
        birthDate: new Date(2000, 11, 2),
        password: "gegewgaewt"
      }
    };
  }

  componentDidMount = () => {
    let token = localStorage.getItem("token");
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
    }
  };

  onLogout = () => {
    localStorage.setItem("token", "");
    this.setState({ redirect: "/" });
  };
  

  render() {
    let { username, iat, exp, redirect } = this.state;
    if (redirect) {
      return <Redirect to={redirect} />;
    }

    let userInfo = this.state.userInfo;

    let sexs = [
      {
        id: 0,
        name: "Nam"
      },

      {
        id: 1,
        name: "Nu"
      }
    ]

    const FORMAT = 'dd/MM/yyyy';

    return (
      <div class="container-fluid" style={{backgroundColor:"#d9d9d9"}}>
        <div class="row ml-4 mt-3 mb-2 mr-4" id="bar">
          <div class="col-md-3" style={{backgroundColor:"white"}}>
            <button class="btn">
              <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i><strong> Thong tin tai khoan</strong>
            </button>
            <button class="btn">
              <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i><strong> Gio hang</strong>
            </button>
            <button class="btn">
              <i class="fa fa-bell fa-2x" aria-hidden="true"></i><strong> Thong bao</strong>
            </button>
            <button class="btn">
              <i class="fa fa-map-signs fa-2x" aria-hidden="true"></i><strong> Quan ly dia chi</strong>
            </button>
            <button class="btn">
              <i class="fa fa-money fa-2x" aria-hidden="true"></i><strong> Quan ly thanh toan</strong>
            </button>
            <button class="btn">
              <i class="fa fa-archive fa-2x" aria-hidden="true"></i><strong> Quan ly cua hang</strong>
            </button>
            <button class="btn">
              <i class="fa fa-commenting fa-2x" aria-hidden="true"></i><strong> Nhan xet cua toi</strong>
            </button>
            <button class="btn">
              <i class="fa fa-bookmark fa-2x" aria-hidden="true"></i><strong> Quan ly ma giam gia</strong>
            </button>
          </div>
          <div class="col-md ml-4 mr-4 pd-2" style={{backgroundColor:"white"}}>
            <form class="ml-3 mt-3 mr-4">
              <div class="form-group">
                <label for="text">Ho va ten</label>
                <input type="name" class="form-control" id="name" value={userInfo.name}></input>
              </div>

              <label for="text">So dien thoai</label>
              <div class="input-group">
                <input type="name" class="form-control" placeholder="phoneNumber" value={userInfo.phone} aria-describedby="basic-addon2"></input>
                <input type="name" class="form-control" placeholder="Nhap ma OTP xac thuc" aria-describedby="basic-addon2"></input>
                <div class="input-group-append" style={{marginTop:"-0.5em"}}>
                  <button class="btn btn-success" type="button">Gui ma xac thuc</button>
                 </div>
              </div>

              <label for="text">Email</label>
              <div class="input-group">
                <input type="email" class="form-control" placeholder="phoneNumber"
                value={userInfo.email} aria-describedby="email" disabled="true"></input>
                <div class="input-group-append" style={{marginTop:"-0.5em"}}>
                  <button class="btn btn-success" type="button">Chinh sua</button>
                 </div>
              </div>

              <div class="row">
                <div class="col-md">
                  <div class="form-group">
                  <label for="sex">Gioi tinh</label>
                  <select class="form-control" id="sex">
                    {
                      sexs.map((sex) =>(
                        <option key={sex.id} value={sex.id} 
                        selected={userInfo.sex == sex.id}>{sex.name}</option>
                      ))
                    }
                  </select>
                  </div>
                </div>
                <div class="col-md">
                  <label for="text">Ngay sinh</label>
                  <br></br>

                  <DayPickerInput
                    value={userInfo.birthDate}
                    formatDate={formatDate}
                    format={FORMAT}
                    parseDate={parseDate}
                  />
                </div>
              </div>

              <p>
                <button class="btn btn-primary " type="button" data-toggle="collapse" 
                data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" style={{width:"30%", textAlign:"center"}}>
                  Doi mat khau
                </button>
              </p>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  <form class="ml-2 mt-2 mr-4">
                    <div class="form-group">
                      <label for="text">Nhap mat khau cu</label>
                      <input type="name" class="form-control" id="name"></input>
                    </div>

                    <div class="form-group">
                      <label for="text">Nhap mat khau moi</label>
                      <input type="name" class="form-control" id="name" placeholder="Mat khau phai nhieu hon 6 ky tu"></input>
                    </div>

                    <div class="form-group">
                      <label for="text">Nhap lai mat khau moi</label>
                      <input type="name" class="form-control" id="name"></input>
                    </div>
                  </form>
                </div>
              </div>

              <div class="col text-center mt-2">
                <button type="button" class="btn btn-success" style={{width:"30%", textAlign:"center"}}><strong>Luu lai</strong></button>
               </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
