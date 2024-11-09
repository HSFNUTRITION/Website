import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Importing the CSS for footer styling
import { FaFacebookF, FaInstagram } from 'react-icons/fa'; // Importing React icons for social media

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Quick Links Section */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home Page</Link></li>
            <li><Link to="/collections" className="footer-link">All Collections</Link></li>
            <li><Link to="/products" className="footer-link">All Products</Link></li>
            <li><Link to="/blogs" className="footer-link">Blogs</Link></li>
            <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
          </ul>
        </div>

        {/* Company Info Section */}
        <div className="footer-section">
          <h4 className="footer-title">Hold Strong Fitness & Nutrition</h4>
          <p className="footer-text">hsfnutrition.in - India’s Trusted Supplement Shop</p>
          <p className="footer-text">24*7 WhatsApp Support: <a href="tel:+919155242400" className="footer-link">+91 8595242400</a></p>
          <p className="footer-text">Email: <a href="mailto:holdstrongfitnessnutrition@gmail.com" className="footer-link">holdstrongfitnessnutrition@gmail.com</a></p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h4 className="footer-title">Follow Us</h4>
          <div className="footer-social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <FaFacebookF size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="footer-bottom-text">© 2024 Hold Strong Fitness & Nutrition. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
