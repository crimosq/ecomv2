import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="main-nav">
    <ul>
      <li className='logo'>
        <Link to='/'>
          <img className='logo' src='images/watch_io.png' alt="Logo" />
        </Link>
      </li>
      <li className="options"><Link to='/'>Home</Link></li>
      <li className="options"><Link to='/products'>Product</Link></li>
      <li className="options"><Link to='/contact'>Contact</Link></li>
    </ul>
    < div className="cart-icon">
    <img className='shoppingCart' src='images/shopping-bag.png' alt="Logo" />
    </div>
  </nav>
);

export default NavBar;
