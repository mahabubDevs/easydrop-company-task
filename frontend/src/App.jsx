// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import ProductSearch from './components/ProductSearch';
import Cart from './components/Cart';

const App = () => {
  const [userId, setUserId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {!userId ? (
        <Login setUserId={setUserId} />
      ) : (
        <div className="space-y-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => setUserId(null)}
          >
            Logout
          </button>
          <ProductSearch userId={userId} />
          <Cart userId={userId} />
        </div>
      )}
    </div>
  );
};

export default App;