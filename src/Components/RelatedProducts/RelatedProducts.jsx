import React from "react";
import "./RelatedProducts.css";
import data_product from "../../assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className="realatedProducts">
      <h1>Related Products</h1>
      <hr />
      <div className="realatedproducts-item">
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

export default RelatedProducts;
