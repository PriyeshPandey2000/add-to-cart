
import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Cart</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            
            {item.price !== undefined ? (
              <p className="text-gray-600">Rs {item.price.toFixed(2)}</p>
            ) : (
              <p className="text-gray-600">Price not available</p>
            )}
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={() => removeFromCart(item.id)}
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
