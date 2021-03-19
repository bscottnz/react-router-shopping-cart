import React from 'react';

const CartItem = ({ color, name, price, quantity, removeItem }) => {
  return (
    <div className="cart-item">
      <h4 className="item-name">{name}</h4>
      <div className="square-img-sml" style={{ backgroundColor: color }}></div>
      <p className="cart-item-price">${price * quantity}</p>
      <p className="cart-item-quantity">{quantity}</p>
      <div className="delete-item" onClick={() => removeItem(name)}>
        Remove Item
      </div>
    </div>
  );
};

export default CartItem;
