import React, { Component } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import LocalFireDepartmentSharpIcon from "@mui/icons-material/LocalFireDepartmentSharp";
import AddCommentSharpIcon from "@mui/icons-material/AddCommentSharp";
import SendSharpIcon from "@mui/icons-material/SendSharp";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
    };
  }

  componentDidMount() {
    this.getComments();
  }
  getComments = () => {
    let commentData = [
      {
        userName: "tamay_erdogdu",
        commentId: "1234",
        timeStamp: "123456",
        description: "Çok güzelsin",
      },
      {
        userName: "LERZAN",
        commentId: "1234",
        timeStamp: "123456",
        description: "GÖTÜMÜ SİK",
      },
      {
        userName: "baran_tanriverdi",
        commentId: "1234",
        timeStamp: "123456",
        description: "allah",
      },
    ];
    this.setState({ commentList: commentData });
  };

  render() {
    return (
      <div className="post_container">
        <div className="post_header">
          <Avatar className="post_image" src="" />
          <div className="post_username">{this.props.userName}</div>
        </div>
        <div>
          <img
            src={this.props.postImage}
            style={{ width: "613px", borderBottom: "1px solid #19c37d" }}
          />
        </div>
        <div>
          <div style={{ marginLeft: "10px" }}>
            <LocalFireDepartmentSharpIcon className="post_react_image" />
            <AddCommentSharpIcon className="post_react_image" />
            <SendSharpIcon className="post_react_image" />
          </div>
          <div className="post_likes">{this.props.likes} likes</div>
        </div>
        <div>
          {this.state.commentList.map((item, index) => (
            <div className="post_comment">
              <div className="post_comment_user">{item.userName}</div>:{" "}
              {item.description}
            </div>
          ))}
          <input
            text="text"
            className="post_commentbox"
            placeholder="Add comment"
          />
        </div>
      </div>
    );
  }
}

export default Post;
