export const api = {
    login: async (credentials) => {
      const res = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      return res.json();
    },
    getCart: async (userId) => {
      const res = await fetch(`http://localhost:5000/cart?userId=${userId}`);
      return res.json();
    },
    addToCart: async (data) => {
      const res = await fetch('http://localhost:5000/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return res.json();
    },
    checkout: async (userId) => {
      const res = await fetch('http://localhost:5000/cart/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });
      return res.json();
  },
  removeFromCart: async (userId) => {
      const res = await fetch('http://localhost:5000/cart/remove', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId,productId}),
      });
      return res.json();
  },
   
    
  
  };
  
  