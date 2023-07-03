import React, { Component } from "react";
import "./Statusbar.css";
import { Avatar } from "@mui/material";
import statusimg from "../../images/profile.png";
import AddToPhotosSharpIcon from "@mui/icons-material/AddToPhotosSharp";
class Statusbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusList: [],
    };
  }
  componentDidMount() {
    this.getStatusData();
  }
  getStatusData = () => {
    let statusData = [
      {
        username: "tamay_erdogdu",
        imageURL: "../../images/profile.png",
      },
      {
        username: "baran_tanriverdi",
        imageURL: "../../images/profile.png",
      },
      {
        username: "umut_lerzan",
        imageURL: "../../images/profile.png",
      },
      {
        username: "baran_tanriverdi",
        imageURL: "../../images/profile.png",
      },
    ];
    this.setState({ statusList: statusData });
  };
  render() {
    return (
      <div>
        <div className="statusbar_container">
          <AddToPhotosSharpIcon className="upload_story" fontSize="large" />
          {this.state.statusList.map((item, index) => (
            <div className="status">
              <Avatar className="statusbar_status" src={statusimg} />
              <div className="statusbar_text">{item.username}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Statusbar;
