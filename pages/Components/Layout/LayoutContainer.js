import React, { Component } from "react";
import LayoutPresenter from "./LayoutPresenter";

export default class LayoutContainer extends Component {
  render() {
    return <LayoutPresenter {...this.props} />;
  }
}
