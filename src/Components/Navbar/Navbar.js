import React, { Component } from "react";
import "./Navbar.css";
import { Grid } from "@mui/material";
import logo from "../../images/logo_navbar.png";
import BungalowIcon from "@mui/icons-material/Bungalow";
import ThreePIcon from "@mui/icons-material/ThreeP";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import DriveFolderUploadSharpIcon from "@mui/icons-material/DriveFolderUploadSharp";
class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="navbar_content">
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={3}>
              <img className="navbar_logo" src={logo} />
            </Grid>
            <Grid item xs={3}>
              <input
                className="navbar_search"
                text="text"
                placeholder="Search"
              />
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <BungalowIcon className="navbar_icon" />
              <ThreePIcon className="navbar_icon" />
              <NotificationsIcon className="navbar_icon" />
              <DriveFolderUploadSharpIcon className="navbar_icon" />
              <Avatar
                className="navbar_icon"
                sx={{ bgcolor: "#1B4571", maxWidth: "25px", maxHeight: "25px" }}
              >
                B
              </Avatar>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Navbar;
