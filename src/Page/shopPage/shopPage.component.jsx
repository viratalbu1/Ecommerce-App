import React from "react";
import { SHOP_DATA } from "./shop.data";
import { Preview } from "../../component/preview-component/collection-preview.component";

export class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    console.log("I am In ShopPage function");
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(function collection({ id, ...OtherCollecctionData }) {
          return <Preview key={id} {...OtherCollecctionData} />;
        })}
      </div>
    );
  }
}
