import HeaderPresenter from "./HeaderPresenter";
import { withRouter } from "next/router";

class HeaderContainer extends React.Component {
  state = { isProfileActive: true };

  // pathname 변경에 따른 메뉴바(프로필) 상태 변경
  // shouldComponentUpdate(nextProps, nextState) {
  // if (nextProps.location.pathname !== this.props.location.pathname) {
  //   // 주소가 바뀌었을 때
  //   this.setState({ isProfileActive: false });
  //   return false;
  // } else {
  //   // 주소가 안바뀌었을 때
  //   if (nextState.isProfileActive === this.state.isProfileActive) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  // console.log("changed");
  // return true;
  // }

  // 메뉴안에 탭 리스트에 대한 마우스 이벤트
  handleMouseEvent = e => {
    e.currentTarget.classList.toggle("active");
  };

  // 메뉴 토글 버튼 클릭 시
  handleToggleClass = () => {
    this.setState({ isProfileActive: !this.state.isProfileActive });
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
