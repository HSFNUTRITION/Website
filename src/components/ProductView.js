import React, { useState } from 'react';
import './ProductView.css';
import Header from './Header';
import Footer from './Footer';
import SubFooter from './SubFooter'
import ProductCard from './ProductCard';
import ProductCategory from './ProductCategory';
import { useNavigate } from 'react-router-dom';

const ProductView = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(prevQuantity => prevQuantity - 1);
  };
  const handleCart = () => {
    navigate('/cart-view')
  }

  const product = {
    title: 'Protein',
    images: [
      'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570'
    ],
    description: 'AS-IT-IS ATOM Whey Protein - 1 kg, 27GM Protein',
    category: 'ASITIS NUTRITION',
    regularPrice: 1999,
    salePrice: 990,
    discount: 50,
    pickupLocation: 'Hold Strong Fitness & Nutrition',
    availability: 'Usually ready in 2 hours',
    brand: 'ATX Nutrition',
    flavour: 'Unflavored',
    supplementType: 'Creatine',
    netQuantity: '300 gram',
    features: [
      'Lab Tested & Safe: Free from banned substances and dope-free.',
      'Enhance Strength & Power: Scientifically proven to increase muscle strength and power.',
      'Improve Endurance: Delay muscle fatigue and improve endurance.',
      'Build Lean Muscle Mass: Supports muscle growth and protein synthesis.',
      '100 Servings: Each container provides 100 servings.'
    ]
  };

  return (
    <div>
    <Header />
    <ProductCategory />
    <div className="product-view">
      <div className="product-view-container">
        <div className="product-images">
          <div className="main-image">
            <img src={product.images[0]} alt="Main Product" />
          </div>
          <div className="thumbnail-container">
            {product.images.map((image, index) => (
              <img src={image} alt={`Product ${index + 1}`} className="thumbnail" key={index} />
            ))}
          </div>
        </div>

        <div className="product-details">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-category">{product.category}</p>
          <p className="product-description">{product.description}</p>

          <div className="pricing">
            <span className="regular-price">₹{product.regularPrice}</span>
            <span className="sale-price">₹{product.salePrice}</span>
            <span className="discount">{product.discount}% OFF</span>
          </div>

          <div className="quantity-control">
            <button onClick={handleDecrease} className="quantity-btn">-</button>
            <span className="quantity">{quantity}</span>
            <button onClick={handleIncrease} className="quantity-btn">+</button>
          </div>

          <div className="action-buttons">
            <button className="btn add-to-cart" onClick={handleCart}>Add to Cart</button>
            <button className="btn buy-now">Buy Now</button>
          </div>

          <div className="pickup-info">
            <p><strong>Pickup available at:</strong> {product.pickupLocation}</p>
            <p><strong>Availability:</strong> {product.availability}</p>
            <button className="view-store-btn">View Store Information</button>
          </div>

          <div className="product-features">
            <h3>Product Features:</h3>
            <p>✅ Boost your athletic performance with ATX PREMIUM CREATINE MONOHYDRATE. Our lab-tested, high-quality creatine is designed to support increased strength, power, and endurance, making it an essential addition to any athlete’s supplement regimen.</p>
            <p>✅ Lab Tested & Safe: Each batch of our creatine is rigorously lab tested to ensure purity and potency, free from banned substances, and dope-free to keep you performing at your best.</p>
            <p>✅ Enhance Strength & Power: Creatine Monohydrate is scientifically proven to increase muscle strength and power, helping you push through intense workouts and achieve your fitness goals.</p>

            <p>✅ Improve Endurance: Delay muscle fatigue and improve endurance, allowing you to train harder and longer.</p>

            <p>✅ Build Lean Muscle Mass: Supports muscle growth by enhancing muscle protein synthesis, promoting the development of lean muscle mass.</p>

            <p>✅ 100 Servings: Each container provides 100 servings, giving you more value and consistent performance support.</p>
          </div>
        </div>
      </div>
    </div>
      <p className="also-like">You may also like</p>
      <ProductCard />
    <Footer />
    <SubFooter />
    </div>
  );
};

export default ProductView;
