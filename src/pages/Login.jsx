import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('userData');
    if (isLoggedIn) {
      navigate('/account'); // already logged in
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const foundUser = users.find(
      (user) =>
        user.email === form.email && user.password === form.password
    );

    if (foundUser) {
      localStorage.setItem('userData', JSON.stringify(foundUser));
      alert('Login successful!');
      navigate('/account');
    } else {
      alert('Invalid credentials or user not registered.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center font-[cinzelregular]">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          onChange={handleChange}
          value={form.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          onChange={handleChange}
          value={form.password}
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-amber-500 font-[cinzel] p-2 rounded"
        >
          Login
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        New here?{' '}
        <span
          className="text-blue-600 cursor-pointer underline"
          onClick={() => navigate('/signup')}
        >
          Create an account
        </span>
      </p>
    </div>
  );
};

export default Login;
