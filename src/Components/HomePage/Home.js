import React, { Component } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import MainContent from "../MainContent/MainContent";
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <MainContent />
      </div>
    );
  }
}

export default Home;
