import React from 'react';
import { FaShoppingCart,FaUserCircle } from 'react-icons/fa';
import './Header.css';
import Subheader from './Subheader';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };
  const handleCartView = () => {
    navigate('/cart-view')
  };
  const hendleAllProduct = () => {
    navigate('/all-products')
  }

  return (
    <div>
      <Subheader />
      <header className="header">
        <div className="header-logo">
          <img src="https://hsfnutrition.in/cdn/shop/files/358b7a219a4c0552166fde9f2d351d3d759031_bdd7429c-5458-4d4b-b0f2-12e43a08ff57.png?v=1728030313" alt="HSF Nutrition Logo" className="logo-image" />
        </div>

        <nav className="header-nav">
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li onClick={hendleAllProduct}>All Products</li>
            <li>HSF Offers</li>
          </ul>
        </nav>

        <div className="header-search">
          <input type="text" placeholder="Search products..." />
        </div>

        <div className="header-cart">
          <FaShoppingCart onClick={handleCartView} />
        </div>

        <div className="header-profile">
          <FaUserCircle onClick={handleLogin} />
        </div>
      </header>
    </div>
  );
};

export default Header;
