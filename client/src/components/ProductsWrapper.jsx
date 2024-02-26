import React, { useEffect, useState } from 'react';
import Products from './Products';

const ProductsWrapper = () => {
  const [cartItems, setCartItems] = useState([]);

  
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const updateLocalStorage = (newCartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  
  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

 
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

 
return (
    <Products
      addToCart={addToCart}
      cartItems={cartItems}
      removeFromCart={removeFromCart}
      
    />
  );
};

export default ProductsWrapper;
