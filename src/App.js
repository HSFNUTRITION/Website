import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductView from './components/ProductView';
import Home from './components/Home'
import Login from './components/LoginPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Product listing page */}
        <Route path="/product/:id" element={<ProductView />} /> {/* Product view page */}
        <Route path="/login" element={<Login />} /> {/* Product view page */}
      
      </Routes>
    </Router>
  );
}

export default App;
