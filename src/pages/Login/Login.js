import React, { Component } from "react";
import "./Login.css";
import { Link, Redirect } from "react-router-dom";
import callAPI from "../../utils/apiCaller";
import Alert from "../../components/Alert/Alert";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: "",
      redirect: "",
    };
  }

  componentDidMount = () => {
    let token = localStorage.getItem("token");
    if (token) this.setState({ redirect: "/info" });
  };

  onUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignIn = (event) => {
    event.preventDefault();
    let { username, password } = this.state;
    callAPI("/login", "POST", {
      username,
      password,
    })
      .then((response) => {
        // this.setState({ redirect: true });
        let token = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("reloadInfo", 1);
        this.setState({ redirect: "/info" });
      })
      .catch((e) => {
        this.setState({ error: e.response.data });
        console.log(e.response);
      });
  };
  k;
  render() {
    let { error, redirect } = this.state;
    let showerror = null;
    if (error) showerror = <Alert error={error} />;
    if (redirect) return <Redirect to={redirect} />;
    return (
      <form onSubmit={this.onSubmitSignIn} className="loginForm">
        <h1>Đăng nhập</h1>
        {showerror}
        <div className="container">
          <label>
            <b>Tên tài khoản</b>
          </label>
          <input
            type="text"
            onChange={this.onUsernameChange}
            placeholder="Tên người dùng"
            className="logininput"
            required
          />

          <label>
            <b>Mật khẩu</b>
          </label>
          <input
            onChange={this.onPasswordChange}
            type="password"
            placeholder="Mật khẩu"
            className="logininput"
            required
          />

          <button type="submit" className="login-btn">
            Đăng nhập
          </button>
        </div>

        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <Link to={"/"}>
            <button type="button" className="cancelbtn login-btn">
              Hủy
            </button>
          </Link>

          <span className="psw">
            Chưa có tài khoản? <a href="/register">Đăng ký</a>
          </span>
          
        </div>
      </form>
    );
  }
}

export default Login;
