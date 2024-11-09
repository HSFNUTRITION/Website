import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductView from './components/ProductView';
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Product listing page */}
        <Route path="/product/:id" element={<ProductView />} /> {/* Product view page */}
      </Routes>
    </Router>
  );
}

export default App;
