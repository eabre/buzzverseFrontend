import React, { Component } from "react";
import "./Navbar.css";
import { Grid } from "@mui/material";
import logo from "../../images/logo_navbar.png";
import BungalowIcon from "@mui/icons-material/Bungalow";
import ThreePIcon from "@mui/icons-material/ThreeP";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import DriveFolderUploadSharpIcon from "@mui/icons-material/DriveFolderUploadSharp";
import { storage } from "../firebase";
class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  upload = (event) => {
    let image = event.target.files[0];
    const thisContext = this;
    if (image == null || image == undefined) return;

    var uploadTask = storage.ref("images").child(image.name).put(image);
    uploadTask.on(
      "state_changed",
      function (error) {},
      function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log(downloadURL);

          let payload = {
            postId: Math.floor(Math.random() * 100000).toString(),
            userId: JSON.parse(localStorage.getItem("users")).uid,
            postPath: downloadURL,
            timeStamp: new Date().getTime(),
            likeCount: 0,
          };

          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          };

          fetch("http://localhost:8080/post", requestOptions)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              thisContext.getPost();
            })
            .catch((error) => {});
        });
      }
    );
  };
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
              <div className="fileupload">
                <label for="file-upload">
                  <DriveFolderUploadSharpIcon className="navbar_icon" />
                </label>
                <input onChange={this.upload} id="file-upload" type="file" />
              </div>

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
