import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  const cartProducts = all_product.filter(
    (product) => cartItems[product.id] > 0
  );

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

      {all_product.map((e, index) => {
        if (cartItems[e.id] > 0) {
          return (
            <div className="cartItems-format cartItems-format-main" key={index}>
              <img src={e.image} className="cartIcon-product-icon" alt="" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cartItems-quantity">{cartItems[e.id]}</button>
              <p>{e.new_price * cartItems[e.id]}</p>
              <img
                className="cartItems-remove-icon"
                src={remove_icon}
                alt="remove icon"
                onClick={() => {
                  removeFromCart(e.id);
                }}
              />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItems-down">
        <div className="cartItems-total">
          <h1>cart Total</h1>
          <div>
            <div className="cartItems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
            <button>Proceed to Checkout</button>
          </div>
        </div>
        <div className="cartItems-promo-code">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartItems-promo-box">
            <input type="text" placeholder="promo code" />
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
