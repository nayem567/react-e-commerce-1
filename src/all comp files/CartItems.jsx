import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
// import remove_icon from "../../assets/remove_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {/* 
      {cartItems.length > 0 ? (
        cartItems.map((product) => {
          return (
            <div key={product.id}>
              <div className="cartItems-format">
                <img src={product.image} className="cartIcon-product-icon" alt={product.name} />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className="cartItems-quantity">{cartItems[product.id]}</button>
                <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                <p onClick={() => removeFromCart(product.id)}>X</p>
              </div>
              <hr />
            </div>
          );
        })
      ) : (
        <p>Your cart is empty</p> 
      )}   */}

      {all_product
        .filter((product) => cartItems[product.id] > 0) // Only show products in cart
        .map((product) => {
          return (
            <div key={product.id}>
              <div className="cartItems-format">
                <img
                  src={product.image}
                  className="cartIcon-product-icon"
                  alt={product.name}
                />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className="cartItems-quantity">
                  {cartItems[product.id]}
                </button>
                <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                <p onClick={() => removeFromCart(product.id)}>X</p>
              </div>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default CartItems;
