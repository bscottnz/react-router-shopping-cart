import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav>
        <h3 className="logo">Squares R Us</h3>
        <ul className="navigation">
          <Link to="/">
            <li className="navigation__item">Home</li>
          </Link>

          <Link to="/shop">
            <li className="navigation__item">Store</li>
          </Link>

          <Link to="/cart">
            <li className="navigation__item">Checkout</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
