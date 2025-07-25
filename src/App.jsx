import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Mainroute from "./routes/Mainroute";
import logo1 from "./assets/logo1.png";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LuUserRound } from "react-icons/lu";
import { SlBag } from "react-icons/sl";
import { CiMenuKebab } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useCart } from "./context/cartcontext";
import { motion, AnimatePresence } from "framer-motion";
import Popupsignup from "./components/Popupsignup";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Loading screen state
  const navigate = useNavigate();
  const { cartCount } = useCart();

  const handleUserClick = () => {
    const user = localStorage.getItem("userData");
    if (user) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  };

  // Simulate loading effect (once)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />; // 👈 Only render loading screen during load
  }

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-gradient-to-b from-[#000000] via-[#535353] via-90% to-[#232323]">

      {/* Sticky Navbar */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full fixed top-0 z-100 bg-[#00000046] backdrop-blur-md"
      >
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-4">
          <div className="flex justify-between items-center relative">
            
            {/* Logo & Brand */}
            <div className="flex items-center gap-2">
              <img
                src={logo1}
                className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] object-contain"
                alt="Logo"
              />
              <h3 className="text-base sm:text-xl lg:text-3xl text-white font-black uppercase font-[gil]">
                The Man Company
              </h3>
            </div>

            {/* Desktop Navbar */}
            <Navbar />

            {/* Icons + Mobile Menu */}
            <div className="flex gap-4 items-center text-yellow-500 text-xl lg:text-2xl">
              {/* User Icon */}
              <LuUserRound className="cursor-pointer" onClick={handleUserClick} />

              {/* Cart */}
              <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
                <SlBag />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              {!menuOpen ? (
                <CiMenuKebab className="lg:hidden cursor-pointer" onClick={() => setMenuOpen(true)} />
              ) : (
                <RxCross1 className="lg:hidden cursor-pointer" onClick={() => setMenuOpen(false)} />
              )}
            </div>

            {/* Animated Mobile Menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-full right-0 w-56 bg-[#2b2b2b]/80 shadow-md text-white rounded-md p-4 flex flex-col gap-4 lg:hidden z-50"
                >
                  {["Home", "Product", "Services", "About"].map((item) => (
                    <NavLink
                      key={item}
                      to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      className="relative group w-fit text-lg transition-all"
                    >
                      {item}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Route Content */}
      <div className="pt-[100px]">
        <Mainroute />
      </div>

      {/* Signup Popup */}
      <Popupsignup />

      {/* Footer at the end */}
      <Footer />
    </div>
  );
};

export default App;
