import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Register.css";
import Alert from "../../components/Alert/Alert";
import callAPI from "../../utils/apiCaller";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      repeatpassword: "",
      error: "",
      redirect: false,
    };
  }
  onUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onRepeatPasswordChange = (event) => {
    this.setState({ repeatpassword: event.target.value });
  };

  onSubmitRegister = (event) => {
    event.preventDefault();
    let { username, password, repeatpassword } = this.state;
    // console.log(username, password, repeatpassword);
    if (password !== repeatpassword) {
      this.setState({ error: "The repeat password is not same with password" });
      return;
    }
    callAPI("/register", "POST", {
      username,
      password,
    })
      .then((response) => {
        this.setState({ redirect: true });
      })
      .catch((e) => {
        this.setState({ error: "Username is used" });
        console.log(e.response);
      });
  };

  render() {
    let { error, redirect } = this.state;
    let showerror = null;
    if (redirect) return <Redirect to="/login" />;
    if (error) showerror = <Alert error={error} />;
    return (
      <div className="registerForm">
        <form onSubmit={this.onSubmitRegister}>
          <div className="container">
            <h1>Đăng ký</h1>
            <br />

            {showerror}

            <label>
              <b>Tên tài khoản</b>
            </label>
            <input
              onChange={this.onUsernameChange}
              type="text"
              placeholder="Tên tài khoản"
              id="username"
              required
            />

            <label>
              <b>Mật khẩu</b>
            </label>
            <input
              onChange={this.onPasswordChange}
              type="password"
              placeholder="Mật khẩu"
              id="psw"
              required
            />

            <label>
              <b>Nhập lại mật khẩu</b>
            </label>
            <input
              onChange={this.onRepeatPasswordChange}
              type="password"
              placeholder="Nhập lại mật khẩu"
              id="psw-repeat"
              required
            />
            <br />

            <button type="submit" className="registerbtn">
              Đăng ký
            </button>
          </div>

          <div className="container signin">
            <p>
              Đã có tài khoản? <Link to={"/login"}>Đăng nhập</Link>.
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
