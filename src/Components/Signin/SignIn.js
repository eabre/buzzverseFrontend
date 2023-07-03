import React, { Component } from "react";
import LoginPage from "../LoginPage/LoginPage";
import { storage, auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: null,
      password: null,
    };
  }
  login = () => {
    signInWithEmailAndPassword(auth, this.state.emailId, this.state.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("users", JSON.stringify(user));
        window.location.reload();
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  render() {
    return (
      <div>
        <input
          className="loginpage_text"
          onChange={(event) => {
            this.state.emailId = event.currentTarget.value;
          }}
          type="text"
          placeholder="Username or email"
        />
        <input
          className="loginpage_text"
          onChange={(event) => {
            this.state.password = event.currentTarget.value;
          }}
          type="password"
          placeholder="Password"
        />
        <button className="loginpage_button" onClick={this.login}>
          Log In
        </button>
      </div>
    );
  }
}

export default SignIn;
