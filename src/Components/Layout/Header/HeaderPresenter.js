import React from "react";
import Footer from "../Footer";
import avatar from "assets/images/avatar.jpg";

const HeaderPresenter = () => {
  return (
    <div id="header">
      <div className="inner">
        <div className="image avatar">
          <img src={avatar} alt="profile" />
        </div>
        <h1>
          <strong>Peace Jung</strong>
          <br />
          <p>Development & Life Blog</p>
        </h1>

        <div className="division" />

        <div className="category">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Category</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HeaderPresenter;
