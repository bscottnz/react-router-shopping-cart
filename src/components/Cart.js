import CartItem from './CartItem';
import { Link } from 'react-router-dom';

import React from 'react';

const Cart = ({ data, removeItem }) => {
  // i would use reduce here if i wasnt lazy. i should really practise using reduce
  let total = 0;

  for (let i = 0; i < data.length; i++) {
    const quantity = data[i].quantity;
    const price = data[i].price;

    total += quantity * price;
  }

  return (
    <div className="wrapper">
      <h1>Cart</h1>
      {/* <CartItem color="blue" />
      <CartItem color="red" />
      <CartItem color="green" /> */}
      {data.map((item) => {
        return (
          <CartItem
            key={item.name}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            color={item.name.split(' ')[0]}
            removeItem={removeItem}
          />
        );
      })}
      <div className="total">Total: {total.toFixed(2)}</div>
      <Link to="/didyoureally" style={{ textDecoration: 'none' }}>
        <div className="buy">Buy Squares</div>
      </Link>
    </div>
  );
};

export default Cart;
