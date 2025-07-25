import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productdata from '../data/product';
import { useCart } from "../context/cartcontext";
import { toast } from 'react-toastify';

const Productdetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = productdata.find((item) => String(item.id) === id);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  if (!product) {
    return <div className="text-white text-center mt-10">Product not found 😕</div>;
  }

  const handleAddToCart = () => {
    if (isAdding) return;

    const user = localStorage.getItem("userData");
    if (!user) {
      toast.warn("Please login first to add items to your cart.");
      navigate("/login");
      return;
    }

    setIsAdding(true);
    addToCart(product, quantity);
    toast.success(`${product.name} added to cart!`);

    setTimeout(() => {
      navigate('/product');
      setIsAdding(false);
    }, 1500);
  };

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="min-h-screen mt-30 text-white p-4 md:p-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 bg-[#2b2b2b] border-2 border-amber-500 p-6 shadow-lg">
        {/* Left: Product Image */}
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[300px] md:h-[400px] object-cover rounded-md"
          />
        </div>

        {/* Right: Product Info */}
        <div className="flex-1 space-y-7">
          <span className="bg-gray-700 text-xs px-2 py-1 ml-120 rounded">PERFUME</span>
          <h1 className="text-3xl font-bold text-amber-400 font-[cinzel]">{product.name}</h1>
          <p className="text-gray-300">{product.details}</p>

          <div>
            <p className="text-sm text-gray-400 mb-1">MRP</p>
            <p className="text-yellow-400 text-2xl font-bold">
              ₹{product.discountPrice}{' '}
              <span className="text-sm text-gray-400 line-through ml-2">
                ₹{product.originalPrice}
              </span>
              <span className="text-red-500 ml-2 font-semibold">
                SAVE {Math.round(((product.originalPrice - product.discountPrice) / product.originalPrice) * 100)}%
              </span>
            </p>
            <p className="text-xs text-gray-500 mt-1">inclusive of all taxes</p>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <label className="font-semibold">Quantity</label>
            <div className="flex border border-gray-600 rounded overflow-hidden">
              <button onClick={decrement} className="px-3 py-1 bg-gray-700 hover:bg-gray-600">-</button>
              <span className="px-4 py-1">{quantity}</span>
              <button onClick={increment} className="px-3 py-1 bg-gray-700 hover:bg-gray-600">+</button>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`mt-6 ${isAdding ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'} font-[cinzel] text-white font-semibold py-2 px-6 rounded-md`}
          >
            {isAdding ? 'ADDING...' : 'ADD TO CART'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;
