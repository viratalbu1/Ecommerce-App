import React from "react";
import "./collection-item.styles.scss";
export function CollectionItem({ id, name, price, imageUrl }) {
  console.log("I am In Component Item Function");
  return (
    <div id={id} className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}
