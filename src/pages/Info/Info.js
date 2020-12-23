import React, { Component } from "react";
import callAPI from "../../utils/apiCaller";
import { Redirect } from "react-router-dom";
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
    this.setState({ redirect: true });
  };

  render() {
    let { username, iat, exp, redirect } = this.state;
    if (redirect) {
      return <Redirect to={redirect} />;
    }

    return (
      <div>
        <div>
          <h1>{username}</h1>
          <h1>{iat}</h1>
          <h1>{exp}</h1>
        </div>
        <button
          onClick={this.onLogout}
          type="button"
          className="btn btn-danger"
        >
          Logout
        </button>
      </div>
    );
  }
}

export default Info;
