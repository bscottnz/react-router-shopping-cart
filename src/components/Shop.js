import React from 'react';

import Square from './Square';

const Shop = ({ add }) => {
  return (
    <div className="wrapper">
      <h1>Squares for sell</h1>
      <div className="square-container">
        <div className="row">
          <Square title="Blue Square" color="blue" price={20.49} add={add} />
          <Square title="Orange Square" color="orange" price={16.99} add={add} />
          <Square title="Green Square" color="green" price={9.99} add={add} />
        </div>
        <div className="row">
          <Square title="Red Square" color="red" price={50.01} add={add} />
          <Square title="Purple Square" color="purple" price={32.17} add={add} />
          <Square title="Brown Square" color="brown" price={27.51} add={add} />
        </div>
        <div className="row">
          <Square title="Yellow Square" color="yellow" price={3.15} add={add} />
          <Square title="Pink Square" color="pink" price={41.25} add={add} />
          <Square title="Gold Square" color="gold" price={420.69} add={add} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
