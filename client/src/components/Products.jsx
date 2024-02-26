import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ addToCart, cartItems, removeFromCart }) => {
  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 5.99 },
    
  ];

  
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600">Rs {product.price.toFixed(2)}</p>
            {isInCart(product.id) ? (
              
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                onClick={() => removeFromCart(product.id)}
              >
                Remove from Cart
              </button>
            ) : (
             
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
     
      <div className="mt-4">
        <Link to="/cart" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Go to Cart
        </Link>
      </div>
    </div>
  );
};

export default Products;
