import LayoutPresenter from "./LayoutPresenter";
import "../../../static/scss/main.scss";
import "../../style/App.scss";

export default class LayoutContainer extends React.Component {
  render() {
    return <LayoutPresenter {...this.props} />;
  }
}
