import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  // if the item to be added is not in the cart already, simply add to cart,
  // otherwise modify the cart item to reflect the change in quantity
  const addToCart = (item) => {
    let duplicate = false;

    cart.forEach((cartItem, i) => {
      if (item.name === cartItem.name) {
        const newCart = [...cart];
        const itemToUpdate = newCart[i];
        itemToUpdate.quantity += item.quantity;
        newCart[i] = itemToUpdate;

        setCart(newCart);

        duplicate = true;
      }
    });

    if (!duplicate) {
      setCart((prevState) => {
        return [...prevState, item];
      });
    }
  };

  const removeItem = (item) => {
    console.log(item);
    const newCart = [...cart];
    newCart.forEach((cartItem, i) => {
      if (item === cartItem.name) {
        newCart.splice(i, 1);
      }
    });

    setCart(newCart);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="" component={Home} />

          <Route exact path="/shop">
            <Shop add={addToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart data={cart} removeItem={removeItem} />
          </Route>

          <Route exact path="/didyoureally">
            <div className="really wrapper">
              <h1>Did you really just try to buy a square... </h1>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
