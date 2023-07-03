import React, { Component } from "react";
import "./MainPage.css";
import Post from "../Post/Post";
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postArray: [],
    };
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    let postData = [
      {
        postId: "123456",
        userName: "baran_tanriverdi",
        postImageUrl:
          "https://ares.shiftdelete.net/2022/04/cyberpunk-2077-ilk-dlc-ek-paket-guncellemesi.jpg",
        timeStamp: "123456",
        likes: "31",
      },
      {
        postId: "123456",
        userName: "baran_tanriverdi",
        postImageUrl:
          "https://ares.shiftdelete.net/2022/04/cyberpunk-2077-ilk-dlc-ek-paket-guncellemesi.jpg",
        timeStamp: "123456",
        likes: "31",
      },
      {
        postId: "123456",
        userName: "baran_tanriverdi",
        postImageUrl:
          "https://ares.shiftdelete.net/2022/04/cyberpunk-2077-ilk-dlc-ek-paket-guncellemesi.jpg",
        timeStamp: "123456",
        likes: "31",
      },
    ];
    this.setState({ postArray: postData });
  };
  render() {
    return (
      <div>
        {this.state.postArray.map((item, index) => (
          <Post
            id={item.postId}
            userName={item.userName}
            postImage={item.postImageUrl}
            likes={item.likes}
          />
        ))}
      </div>
    );
  }
}

export default MainPage;
