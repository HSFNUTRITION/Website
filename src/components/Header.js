import React from 'react';
import { FaSearch, FaShoppingCart,FaUserCircle } from 'react-icons/fa';
import './Header.css';
import Subheader from './Subheader';

const Header = () => {
  return (
    <div>
      <Subheader />

      {/* Main header */}
      <header className="header">
        <div className="header-logo">
          <img src="https://hsfnutrition.in/cdn/shop/files/358b7a219a4c0552166fde9f2d351d3d759031_bdd7429c-5458-4d4b-b0f2-12e43a08ff57.png?v=1728030313" alt="HSF Nutrition Logo" className="logo-image" />
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
