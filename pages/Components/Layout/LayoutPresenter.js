import Header from "./Header";

export default ({ children }) => (
  <div className="body-container">
    <Header />
    <div id="main">{children}</div>
  </div>
);
