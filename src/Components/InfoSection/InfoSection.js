import React, { Component } from "react";
import "./InfoSection.css";
import { Avatar } from "@mui/material";
import imageSrc from "../../images/profile.png";
class InfoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="info_container">
          <Avatar src={imageSrc} className="info_image" />
          <div className="info_content">
            <div className="info_username">baran_tanriverdi</div>
            <div className="info_description">description</div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoSection;
