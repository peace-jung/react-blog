import React, { Component } from "react";
import LayoutPresenter from "./LayoutPresenter";

import "assets/scss/main.scss";

class LayoutContainer extends Component {
  render() {
    return <LayoutPresenter {...this.props} />;
  }
}

export default LayoutContainer;
