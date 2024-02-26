
import React, { useEffect, useState } from 'react';
import Cart from './Cart'; 

const CartWrapper = () => {
  const [cartItems, setCartItems] = useState([]);

 
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []); 


  const updateLocalStorage = (newCartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

 
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  return <Cart cartItems={cartItems} removeFromCart={removeFromCart} />;
};

export default CartWrapper;
