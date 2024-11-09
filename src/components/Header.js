import React from 'react';
import { FaSearch, FaShoppingCart,FaUserCircle } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <div>
      

      {/* Main header */}
      <header className="header">
        <div className="header-logo">
          <h1>HSF Nutrition</h1>
        </div>

        {/* Navigation Links */}
        <nav className="header-nav">
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>All Products</li>
            <li>HSF Offers</li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="header-search">
          <input type="text" placeholder="Search products..." />
          <button>
            <FaSearch />
          </button>
        </div>

        {/* Cart Icon */}
        <div className="header-cart">
          <FaShoppingCart />
        </div>

        <div className="header-profile">
          <FaUserCircle />
        </div>
      </header>
    </div>
  );
};

export default Header;
