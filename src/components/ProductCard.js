import React from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'Protein',
      description: 'AS-IT-IS ATOM Whey Protein - 1 kg, 27GM Protein',
      category: 'ASITIS NUTRITION',
      originalPrice: '3,138.00',
      discountedPrice:  '1,790.00',
      inStock: true
    },
    {
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'Gainer',
      description: 'Portable bluetooth speaker with 10 hours of battery life.',
      category: 'Electronics',
      originalPrice: 80,
      discountedPrice: 60,
      inStock: false
    },
    {
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'Creatine',
      description: 'Fitness tracker with heart rate monitor and GPS.',
      category: 'Wearables',
      originalPrice: 120,
      discountedPrice: 100,
      inStock: true
    },
    {
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'Multivitamin',
      description: 'Ergonomic mouse designed for gaming with customizable DPI.',
      category: 'Accessories',
      originalPrice: 40,
      discountedPrice: 35,
      inStock: true
    },
    {
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'PreWorkout',
      description: 'Adjustable laptop stand for better posture and ventilation.',
      category: 'Accessories',
      originalPrice: 30,
      discountedPrice: 25,
      inStock: true
    },
    {
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'AminoAcid',
      description: 'Compact wireless keyboard with a long battery life.',
      category: 'Accessories',
      originalPrice: 50,
      discountedPrice: 45,
      inStock: false
    }
  ];

  // Handle click on product (for future extension)
  const handleClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="product-list">
      {products.map((product) => {
        const { image, title, description, category, originalPrice, discountedPrice, inStock } = product;

        return (
          <div className="product-card" key={product.id} onClick={() => handleClick(product.id)}>
            {/* Product Image with Stock status */}
            <div className="product-image-wrapper">
              <img src={image} alt={title} className="product-image" />
              <div className={`stock-status-badge ${inStock ? 'in-stock' : 'out-of-stock'}`}>
                {inStock ? 'In Stock' : 'Out of Stock'}
              </div>
              {discountedPrice && (
                <div className="offer-badge">20% OFF</div>
              )}
            </div>

            <div className="product-details">
              <h3 className="product-title">{title}</h3>
              <p className="product-description">{description}</p>
              <p className="product-category">{category}</p>
              <div className="product-price">
                {originalPrice && (
                  <span className="original-price">Rs {originalPrice}</span>
                )}
                {discountedPrice && (
                  <span className="discounted-price">Rs {discountedPrice}</span>
                )}
              </div>
            </div>
          </div>
        );
      })}
      <div className="view-all-container">
        <button className="view-all-button" onClick={() => navigate('/products')}>
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
