import { useState } from 'react';

import React from 'react';

const Square = ({ title, color, price, add }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevState) => {
      return prevState + 1;
    });
  };

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) {
        return 1;
      }
      return prevState - 1;
    });
  };

  const addToCart = (e) => {
    const item = { name: title, price, quantity };
    add(item);
  };

  return (
    <div className="square-item">
      <h4>{title}</h4>
      <div className="square-img" style={{ backgroundColor: color }}></div>
      <p>{`$${price}`}</p>
      <div className="add-to-cart">
        <div className="add" onClick={addToCart}>
          Add to cart
        </div>
        <div className="quantity">
          <span className="less" onClick={decrement}>
            -
          </span>{' '}
          {quantity}{' '}
          <span className="more" onClick={increment}>
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default Square;
