import React, { Component } from "react";
import "./SignUp.css";
class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input className="loginpage_text" type="text" placeholder="Email" />
        <input className="loginpage_text" type="text" placeholder="Full name" />
        <input className="loginpage_text" type="text" placeholder="Username" />
        <input
          className="loginpage_text"
          type="password"
          placeholder="Password"
        />
        <button className="loginpage_button">Sign up</button>
      </div>
    );
  }
}

export default SignUp;

//40:47'de kaldı
