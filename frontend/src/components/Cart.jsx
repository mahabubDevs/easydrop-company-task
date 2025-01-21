

// src/components/Cart.js
import React, { useEffect, useState } from 'react';
import { api } from '../utils/api';

const Cart = ({ userId }) => {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    const data = await api.getCart(userId);
    setCart(data);
  };

  const updateQuantity = async (productId, quantity) => {
    await api.addToCart({ userId, productId, quantity });
    console.log(quantity, "quantity:")
    fetchCart();
  };

  

  const checkout = async () => {
    const res = await api.checkout(userId);
    alert(res.message);
    fetchCart();
  };
  const removeFromCart = async (productId) => {
    const res = await api.removeFromCart({ userId, productId });
    console.log(res, "res")
    alert(res.message);
    fetchCart();

  };
console.log(cart, "cart")
  useEffect(() => {
    fetchCart();
  }, [cart]);
  
  

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-2">
          {cart.map((item) => (
            <div key={item.id} className="p-4 border rounded flex justify-between items-center">
              <div>
                <h3 className="font-bold">{item.product_name}</h3>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                  
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  
                  +
                </button>
                <button
                  onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <button
                  onClick={() => removeFromCart(item.product_id)}
                  className="bg-red-500 text-white px-4 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <button
          onClick={checkout}
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        >
          Checkout
        </button>
      )}

    </div>
  );
};

export default Cart;




