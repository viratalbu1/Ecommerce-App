import React from "react";
import "./homepage.styles.scss";

export function Homepage() {
  return (
    <div className="homepage">
      <div className="directory">
        <div className="menu">
          <div className="content">
            <h1 className="title">Hats</h1>
            <span className="sub-title">Shop Now</span>
          </div>
        </div>
        <div className="menu">
          <div className="content">
            <h1 className="title">Books</h1>
            <span className="sub-title">Shop Now</span>
          </div>
        </div>
        <div className="menu">
          <div className="content">
            <h1 className="title">Tech</h1>
            <span className="sub-title">Shop Now</span>
          </div>
        </div>
        <div className="menu">
          <div className="content">
            <h1 className="title">Shoes</h1>
            <span className="sub-title">Shop Now</span>
          </div>
        </div>
        <div className="menu">
          <div className="content">
            <h1 className="title">Fans</h1>
            <span className="sub-title">Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  );
}
