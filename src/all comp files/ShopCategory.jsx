import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../Components/Item/Item.jsx";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img src={props.banner} className="shopcategory-banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategoty-sort">
          Sort by <img src={dropdown_icon} />
        </div>
      </div>

      <div className="shopcatgory-products">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
