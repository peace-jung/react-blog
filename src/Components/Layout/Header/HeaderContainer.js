import React, { Component } from "react";
import HeaderPresenter from "./HeaderPresenter";

class HeaderContainer extends Component {
  state = {
    isActive: false
  };

  MouseEvent = {
    handleMouseEnter: e => {
      console.log("mouse enter");
      this.setState({ isActive: true });
    },
    handleMouseLeave: e => {
      console.log("mouse leave");
      this.setState({ isActive: false });
    }
  };

  render() {
    return (
      <HeaderPresenter
        isActive={this.state.isActive}
        handleMouseEvent={this.MouseEvent}
      />
    );
  }
}

export default HeaderContainer;
