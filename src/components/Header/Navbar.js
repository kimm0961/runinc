import React from 'react';
import { Link } from 'react-router-dom';
import RunincLogo from './../../runinc_logo.svg';
import './Navbar.css';

const Navbar = () => {
    return (
      <div className="Navbar">
      <header>
          <div className="container">
            <div id="branding">
              <img src={RunincLogo} alt="runinc"/>
              </div>
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/shop">Shop</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  </ul>
              <form className="search">
                <input type="text" name="search"/>
                <button type="submit">Search</button>
              </form>
            </nav>
            </div>
      </header>
      </div>
    )
}

export default Navbar;

