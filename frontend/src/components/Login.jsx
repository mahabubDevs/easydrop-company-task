import React, { useState } from 'react';
import { api } from '../utils/api';

const Login = ({ setUserId }) => {
  const [users, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const res = await api.login({ users, password });
    if (res.success) {
      setUserId(res.userId);
    } else {
      alert('Login failed: ' + res.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Username"
        className="border p-2 w-full mb-2"
        value={users}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Login
      </button>
    </div>
  );
};

export default Login;