import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      navigate('/account'); // already logged in
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // check if email already registered
    const isExisting = existingUsers.some(user => user.email === form.email);
    if (isExisting) {
      alert('User already exists. Please login.');
      navigate('/login');
      return;
    }

    const updatedUsers = [...existingUsers, form];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    alert('Signup successful! Please login.');
    navigate('/login');
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center font-[cinzelregular]">Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full mb-4 p-2 border rounded"
          onChange={handleChange}
          value={form.username}
          required
        />
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
        <button type="submit" className="w-full bg-black text-amber-500 font-[cinzel] p-2 rounded">
          Signup
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        Already have an account?{' '}
        <span
          className="text-blue-600 cursor-pointer underline"
          onClick={() => navigate('/login')}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Signup;
