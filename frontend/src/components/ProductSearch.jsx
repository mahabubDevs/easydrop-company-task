import React, { useState } from 'react';
import { api } from '../utils/api';

const ProductSearch = ({ userId }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    const res = await fetch(`http://localhost:5000/products?search=${searchTerm}`);
    const data = await res.json();
    setProducts(data);
  };

  const addToCart = async (productId) => {
    await api.addToCart({ userId, productId, quantity: 1 });
    alert('Product added to cart');
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search products"
        className="border p-2 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
      <div className="grid grid-cols-1 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded">
            <h3 className="font-bold">{product.name}</h3>
            <p>${product.price}</p>
            <button
              onClick={() => addToCart(product.id)}
              className="bg-green-500 text-white px-4 py-2 rounded mt-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;