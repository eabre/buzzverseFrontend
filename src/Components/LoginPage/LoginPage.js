import React, { Component } from "react";
import { Grid, SvgIcon } from "@mui/material";
import login_image from "../../images/login-page-image.jpg";
import logo from "../../images/logo.png";
import GoogleIcon from "@mui/icons-material/Google";
import "./LoginPage.css";
import SignIn from "../Signin/SignIn";
import SignUp from "../SignUp/SignUp";
class LoginPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className="loginpage_main">
              <div>
                <img
                  src={login_image}
                  width="454px"
                  style={{ borderRadius: "40%" }}
                />
              </div>
              <div>
                <div className="loginpage_right">
                  <img
                    className="loginpage_logo"
                    src={logo}
                    style={{ borderRadius: "5%" }}
                  />
                  <div className="loginpage_signin">
                    <SignIn />
                    <SignUp />
                    <div className="loginpage_ordiv">
                      <div className="loginpage_dividor"></div>
                    </div>

                    <div className="loginpage_google">
                      <GoogleIcon style={{ marginRight: "5px" }} />
                      Continue with Google
                    </div>
                    <div className="loginpage_forgot">Forgot password?</div>
                  </div>
                </div>
                <div className="loginpage_signupoption">
                  <div className="loginpage_signup">
                    Create an account/
                    <span style={{ fontWeight: "bold", color: "#ECECF1" }}>
                      Sign up
                    </span>
                  </div>
                  <div className="loginpage__signin">
                    Already have an account/
                    <span style={{ fontWeight: "bold", color: "#ECECF1" }}>
                      Sign in
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
