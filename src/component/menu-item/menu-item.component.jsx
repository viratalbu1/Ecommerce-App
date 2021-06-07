import React from "react";
import "./menu-item.styles.scss";

export function MenuItem({ title, imageUrl, size }) {
  return (
    <div className={`${size} menu`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="sub-title">Shop Now</span>
      </div>
    </div>
  );
}
