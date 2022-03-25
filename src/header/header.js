import React from "react";
import "./header.css";
export function Header() {
  return (
    <div className="header">
      Header
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg"> Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/11524597/pexels-photo-11524597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
      />
    </div>
  );
}
