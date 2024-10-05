import React from "react";
import "./Popular.css";
import data_product from "../../assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular In Women</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, index) => {
          const { id, name, image, new_price, old_price } = item;
          return (
            <Item
              key={index}
              id={id}
              name={name}
              image={image}
              new_price={new_price}
              old_price={old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
