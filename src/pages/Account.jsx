// src/pages/Account.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  console.log(user);
  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };

  return user ? (
    <div className="p-6 text-white max-w-xl mx-auto">
      <h2 className="text-2xl  font-bold mb-4">Welcome, {user.username}</h2>
      <p><strong>Email:</strong> {user.email}</p>

      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  ) : null;
};

export default Account;
