import React, { useState, useEffect } from 'react';

const Popupsignup = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [showPopup, setShowPopup] = useState(false);

  // Show popup after 10 seconds if user not signed up
  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (!userData) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        document.body.style.overflow = 'hidden'; // lock scroll
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const isExisting = existingUsers.some(user => user.email === form.email);

    if (isExisting) {
      alert('User already exists. Please login.');
      handleClose();
      return;
    }

    const updatedUsers = [...existingUsers, form];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('userData', JSON.stringify(form));
    alert('Signup successful!');
    handleClose();
  };

  const handleClose = () => {
    setShowPopup(false);
    document.body.style.overflow = 'auto'; // restore scroll
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md relative animate-fade-in">
        <button
          className="absolute top-2 right-3 text-2xl font-bold text-gray-600 hover:text-black"
          onClick={handleClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center font-[cinzelregular] text-black">
          Join Us
        </h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full mb-3 p-2 border rounded"
            onChange={handleChange}
            value={form.username}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full mb-3 p-2 border rounded"
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
            className="w-full bg-black text-amber-500 font-[cinzel] p-2 rounded hover:bg-gray-900"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popupsignup;
