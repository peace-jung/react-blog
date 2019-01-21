import React, { Component } from "react";
import { withRouter } from "react-router";
import HeaderPresenter from "./HeaderPresenter";

class HeaderContainer extends Component {
  state = { isProfileActive: true };

  // pathname 변경에 따른 메뉴바(프로필) 상태 변경
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({ isProfileActive: !this.state.isProfileActive });
      return false;
    } else {
      if (nextState.isProfileActive === this.state.isProfileActive) {
        return false;
      } else {
        return true;
      }
    }
  }

  // 메뉴안에 탭 리스트에 대한 마우스 이벤트
  handleMouseEvent = e => {
    e.currentTarget.classList.toggle("active");
  };

  // 메뉴 토글 버튼 클릭 시
  handleToggleClass = e => {
    if (e.target.classList[0] === "icon") {
      this.setState({ isProfileActive: !this.state.isProfileActive });
    }
  };

  render() {
    const { isProfileActive } = this.state;
    return (
      <HeaderPresenter
        isProfileActive={isProfileActive}
        handleMouseEvent={this.handleMouseEvent}
        handleToggleClass={this.handleToggleClass}
      />
    );
  }
}

export default withRouter(HeaderContainer);
