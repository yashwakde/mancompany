import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo1.png";
import perfume1 from "../assets/top1.png";
import perfume2 from "../assets/top2.png";
import perfume3 from "../assets/info3.png";

const perfumes = [perfume1, perfume2, perfume3];

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setHide(true), 800); // Wait before hiding
          return 100;
        }
        return prev + 1;
      });
    }, 30); // 100 * 30ms = ~3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center z-[9999] text-white font-[cinzelregular] px-4"
        >
          {/* Perfume Images - Staggered */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
            {perfumes.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`perfume-${i}`}
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-contain"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.4 }}
              />
            ))}
          </div>

          {/* Rotating Logo */}
          <motion.img
            src={logo}
            alt="Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-4 object-contain"
            animate={{ rotateY: [0, 360] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
          />

          {/* Brand Text */}
          <div className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-amber-500 tracking-wider mb-2 text-center">
            The Man Company
          </div>

          {/* Loading % */}
          <div className="text-sm sm:text-base text-white">Loading... {progress}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
