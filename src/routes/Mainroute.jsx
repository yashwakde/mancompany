import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Services from '../pages/Services';
import About from '../pages/About';
import Account from '../pages/Account';
import Productdetail from '../pages/Productdetail';
import Cart from '../pages/Cart';
import Contact from '../pages/Contact';
// 👇 ScrollToTop component for fixing scroll on route change
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // or 'auto' if you don't want smooth scrolling
    });
  }, [pathname]);

  return null;
};

const Mainroute = () => {
  return (
    <div>
      {/* 👇 Always scroll to top when route changes */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Productdetail />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
};

export default Mainroute;
