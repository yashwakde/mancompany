import React, { useState, useRef, useEffect } from 'react';
import photo1 from '../assets/photo1.png';
import logo1 from '../assets/logo1.png'; // Loader logo
import productdata from '../data/product';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(11);
  const [showSpin, setShowSpin] = useState(false);
  const [search, setSearch] = useState('');
  const loaderRef = useRef();

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  // Filtered Data
  const filteredData = productdata.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const visibleProducts = filteredData.slice(0, visibleCount);

  // Reset visible count when search changes
  useEffect(() => {
    setVisibleCount(11);
  }, [search]);

  // Infinite scroll observer
  useEffect(() => {
    if (search.trim() !== '') return; // Disable observer when searching

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && visibleCount < filteredData.length) {
          setShowSpin(true);
          setTimeout(() => setShowSpin(false), 1500);
          setVisibleCount((prev) => prev + 11);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [visibleCount, search, filteredData.length]);

  return (
    <div className='w-full min-h-screen px-4 mt-30 md:px-8 py-6 text-white'>
      {/* Banner */}
      <div className='w-full h-[200px] sm:h-[300px] border-2 border-amber-500 lg:h-[400px] rounded-xl overflow-hidden mb-8'>
        <img
          src={photo1}
          alt='banner'
          className='w-full h-full object-cover object-[0%_40%]'
        />
      </div>

      {/* Heading */}
      <h2 className='text-2xl sm:text-3xl font-bold text-center mb-4 font-[cinzel]'>
        Our Products
      </h2>

      {/* Search Bar */}
      <div className='flex justify-center mb-6'>
        <input
          type='text'
          placeholder='Search product...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full max-w-md px-4 py-2 border border-amber-500 bg-[#2b2b2b] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
        />
      </div>

      {/* Product Grid */}
      {visibleProducts.length > 0 ? (
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {visibleProducts.map((item, index) => (
            <div
              key={index}
              className='bg-[#2b2b2b] p-4 border-2 border-amber-500 shadow-md hover:shadow-yellow-500/30 hover:scale-[1.02] transition-all duration-300'
            >
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-48 object-cover rounded-md mb-3'
              />
              <h3 className='text-lg font-semibold mb-1 font-[cinzelregular] text-amber-400'>
                {item.name}
              </h3>
              <p className='text-sm text-gray-300 line-clamp-2 font-[gil]'>
                {item.details}
              </p>

              <div className='mt-2 flex items-center justify-between'>
                <div>
                  <p className='text-yellow-400 font-bold text-md'>
                    ₹{item.discountPrice}
                    <span className='text-gray-400 line-through ml-2 text-sm'>
                      ₹{item.originalPrice}
                    </span>
                  </p>
                  <p className='text-green-400 text-sm'>
                    ⭐ {item.rating} / 5
                  </p>
                </div>
                <button
                  onClick={() => handleClick(item.id)}
                  className='bg-yellow-500 hover:bg-yellow-600 text-black px-2 lg:px-3 py-1 text-sm rounded-md cursor-pointer'
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='text-center text-gray-400 text-lg font-[cinzelregular] mt-10'>
          No products found.
        </div>
      )}

      {/* Spinner (only when no search) */}
      {search.trim() === '' && visibleCount < filteredData.length && (
        <div ref={loaderRef} className='flex justify-center items-center mt-10 mb-6'>
          <img
            src={logo1}
            alt='Loading...'
            className={`w-12 h-12 ${showSpin ? 'animate-spin-once' : ''}`}
          />
        </div>
      )}
    </div>
  );
};

export default Products;
