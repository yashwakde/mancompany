import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=" hidden  lg:flex justify-between items-center gap-10 text-xl font-[gil]">
      <NavLink
        to="/"
        className="relative group text-yellow-500 hover:text-white transition-colors duration-300"
      >
        Home
        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
      </NavLink>

      <NavLink
        to="/product"
        className="relative group text-yellow-500 hover:text-white transition-colors duration-300"
      >
        Products
        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
      </NavLink>

      <NavLink
        to="/services"
        className="relative group text-yellow-500 hover:text-white transition-colors duration-300"
      >
        Services
        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
      </NavLink>

      <NavLink
        to="/about"
        className="relative group text-yellow-500 hover:text-white transition-colors duration-300"
      >
        About
        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
      </NavLink>
    </div>
  );
};

export default Navbar;
