import React from "react";
import { Link } from "react-router-dom";

import Footer from "../Footer";
import avatar from "assets/images/avatar.jpg";

const HeaderPresenter = props => {
  return (
    <div id="header">
      <div className="menu-toggle">
        <button>=</button>
      </div>
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

        <div className="list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <div
                onMouseEnter={() => {
                  props.handleMouseEvent.handleMouseEnter();
                }}
                onMouseLeave={() => {
                  props.handleMouseEvent.handleMouseLeave();
                }}
              >
                <Link to="#">Category</Link>
                <ul
                  className={`category ${
                    props.isActive ? "active" : "disabled"
                  }`}
                >
                  <li>
                    <Link to="/">Javascript</Link>
                  </li>
                  <li>
                    <Link to="/about">React</Link>
                  </li>
                  <li>
                    <Link to="#">etc</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HeaderPresenter;
