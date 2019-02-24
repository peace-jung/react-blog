import React from "react";
import Link from "next/link";

import Footer from "../Footer";
import avatar from "./avatar.jpg";

const list = [
  {
    title: "Home",
    url: "/",
    child: {}
  },
  {
    title: "About",
    url: "/about",
    child: {}
  },
  {
    title: "Development",
    url: "#",
    child: {
      "1": {
        title: "Javascript",
        url: "/js"
      },
      "2": {
        title: "React",
        url: "/react"
      },
      "3": {
        title: "etc",
        url: "/etc"
      }
    }
  },
  {
    title: "Life",
    url: "#",
    child: {
      "1": {
        title: "1",
        url: "/1"
      },
      "2": {
        title: "2",
        url: "/2"
      },
      "3": {
        title: "3",
        url: "/3"
      }
    }
  }
];

const HeaderPresenter = props => {
  return (
    <div id="header" className={props.isProfileActive ? "active" : ""}>
      <div
        className="menu-toggle"
        onClick={() => {
          props.handleToggleClass();
        }}
      >
        <i className="icon fa-chevron-down">
          <span className="label">Menu</span>
        </i>
      </div>

      <div className="inner">
        <div className="profile">
          <div className="image avatar">
            <img src={avatar} alt="profile" />
          </div>
          <h1>
            <strong>Peace Jung</strong>
            <br />
            <p>Development & Life Blog</p>
          </h1>

          <div className="division" />
        </div>
        <div className="list">
          <ul>
            {list.map(value => {
              return (
                <div
                  onMouseEnter={e => {
                    props.handleMouseEvent(e);
                  }}
                  onMouseLeave={e => {
                    props.handleMouseEvent(e);
                  }}
                  className="list"
                  key={value.title}
                >
                  <li>
                    <Link href={value.url}>
                      <a>{value.title}</a>
                    </Link>
                    {value.child && (
                      <ul>
                        {Object.keys(value.child).map(key => {
                          return (
                            <li key={key}>
                              <Link href={value.child[key].url}>
                                <a>{value.child[key].title}</a>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HeaderPresenter;
