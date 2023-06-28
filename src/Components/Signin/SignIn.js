import React, { Component } from "react";
import LoginPage from "../LoginPage/LoginPage";

class SignIn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input
          className="loginpage_text"
          type="text"
          placeholder="Username or email"
        />
        <input
          className="loginpage_text"
          type="password"
          placeholder="Password"
        />
        <button className="loginpage_button">Log In</button>
      </div>
    );
  }
}

export default SignIn;
