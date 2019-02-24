import React from "react";
import Header from "./Header";

export default ({ children }) => (
  <div className="body-container">
    <Header />
    {children}
  </div>
);
