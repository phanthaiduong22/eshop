import React, { Component } from "react";
import callAPI from "../../utils/apiCaller";
import axios from "axios";
class Info extends Component {
  constructor() {
    super();
    this.state = {
      username: "not signed in",
      iat: "not signed in",
      exp: "not signed in",
      error: "",
      token: "",
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

  render() {
    let { username, iat, exp } = this.state;
    return (
      <div>
        <h1>{username}</h1>
        <h1>{iat}</h1>
        <h1>{exp}</h1>
      </div>
    );
  }
}

export default Info;
