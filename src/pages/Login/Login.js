import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import callAPI from "../../utils/apiCaller";
import Alert from "../../components/Alert/Alert";
import { connect } from "react-redux";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: "",
      token: "",
    };
  }

  componentDidMount = () => {
    let token = localStorage.getItem("token");
    this.setState({ token });
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
      })
      .catch((e) => {
        this.setState({ error: e.response.data });
        console.log(e.response);
      });
  };

  render() {
    let { error, token } = this.state;
    let showerror = null;
    let userLogin = null;
    if (error) showerror = <Alert error={error} />;
    if (token) userLogin = <h1>Already Login</h1>;
    return (
      <form onSubmit={this.onSubmitSignIn} className="loginForm">
        {userLogin}

        <h1>Login</h1>
        {showerror}
        <div className="container">
          <label>
            <b>Username</b>
          </label>
          <input
            type="text"
            onChange={this.onUsernameChange}
            placeholder="Enter Username"
            required
          />

          <label>
            <b>Password</b>
          </label>
          <input
            onChange={this.onPasswordChange}
            type="password"
            placeholder="Enter Password"
            required
          />

          <button type="submit">Login</button>
        </div>

        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <Link to={"/"}>
            <button type="button" className="cancelbtn">
              Cancel
            </button>
          </Link>

          <span className="psw">
            Forgot <a href="/">password?</a>
          </span>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps, null)(Login);
