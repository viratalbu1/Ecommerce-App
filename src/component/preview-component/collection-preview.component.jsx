import "./collection-preview.styles.scss";
import { CollectionItem } from "../../component/collection-item/collection-item.component";

export function Preview({ title, items }) {
  console.log("I am In Preview Function");
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(function item({ id, ...otheritem }) {
            return <CollectionItem key={id} {...otheritem} />;
          })}
      </div>
    </div>
  );
}
