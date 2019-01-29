import React, { Component } from "react";
import AppPresenter from "./AppPresenter";

import "style/App.scss";
import "style/Markdown.scss";

class AppContainer extends Component {
  render() {
    return <AppPresenter />;
  }
}

export default AppContainer;
