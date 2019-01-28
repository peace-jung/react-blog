import React, { Component } from "react";
import PostPresenter from "./PostPresenter";

import "style/App.scss";

class PostContainer extends Component {
  render() {
    // console.log(this.props);
    return <PostPresenter />;
  }
}

export default PostContainer;
