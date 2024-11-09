import React from 'react';
import Header from './Header';
import ProductCategory from './ProductCategory';
import ImageSlider from './ImageSlider';
import ProductCard from './ProductCard';
import Footer from './Footer';
import SubFooter from './SubFooter'

const Home = () => {
  return (
    <>
      <Header />
      <ProductCategory />
      <ImageSlider />
      <ProductCard />
      <Footer />
      <SubFooter />
    </>
  );
};

export default Home;
