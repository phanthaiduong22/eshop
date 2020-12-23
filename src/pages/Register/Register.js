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
            <h1>Register</h1>
            <br />

            {showerror}

            <label>
              <b>Username</b>
            </label>
            <input
              onChange={this.onUsernameChange}
              type="text"
              placeholder="Enter Username"
              id="username"
              required
            />

            <label>
              <b>Password</b>
            </label>
            <input
              onChange={this.onPasswordChange}
              type="password"
              placeholder="Enter Password"
              id="psw"
              required
            />

            <label>
              <b>Repeat Password</b>
            </label>
            <input
              onChange={this.onRepeatPasswordChange}
              type="password"
              placeholder="Repeat Password"
              id="psw-repeat"
              required
            />
            <br />

            <button type="submit" className="registerbtn">
              Register
            </button>
          </div>

          <div className="container signin">
            <p>
              Already have an account? <Link to={"/login"}>Sign in</Link>.
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
