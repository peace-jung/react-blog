import React from "react";
import Header from "./Header";

const LayoutPresenter = ({ children }) => {
  return (
    <div className="body-container">
      <Header />
      {children}
    </div>
  );
};

export default LayoutPresenter;
