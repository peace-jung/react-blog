import React, { Component } from "react";
import PostPresenter from "./PostPresenter";

import "style/App.scss";

class PostContainer extends Component {
  render() {
    const {
      location: { pathname }
    } = this.props;
    const path = pathname.split("/");

    return <PostPresenter path={path} />;
  }
}

export default PostContainer;
