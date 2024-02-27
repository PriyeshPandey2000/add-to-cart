
import React, { useState } from 'react';

import Register from './components/Register';
import Login from './components/Login';

import ProductsWrapper from './components/ProductsWrapper';
import CartWrapper from './components/CartWrapper';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="" element={<Register />} />
          <Route path="/login" element={<Login />} />
         
        
         <Route
          path="/products"
         element={<ProductsWrapper />}
          />
          <Route path="/cart" element={<CartWrapper />} />

         
        </Routes>
      </div>
    </Router>
  );
};

export default App;