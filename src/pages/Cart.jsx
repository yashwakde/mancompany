import React from 'react';
import { useCart } from '../context/cartcontext';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.discountPrice * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center font-[cinzelregular] text-amber-400 justify-center  text-xl font-semibold">
        🛒 Your cart is empty!
      </div>
    );
  }

  return (
    <div className=" text-white p-6">
      <h1 className="text-3xl font-bold mb-8 text-center font-[cinzel] text-amber-400">Your Shopping Cart</h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white border-4 border-amber-400 shadow p-4 gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20  object-cover border-2 border-black"
              />
              <div>
                <h2 className="text-lg font-bold text-amber-900">{item.name}</h2>
                <p className="text-sm text-black">Quantity: {item.quantity}</p>
                <p className="text-sm text-black">
                  Price: ₹{item.discountPrice} x {item.quantity}
                </p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700 transition"
              title="Remove from cart"
            >
              <FaTrash className="text-xl" />
            </button>
          </div>
        ))}

        <div className=" p-4  mt-6 shadow text-right">
          <p className="text-2xl font-bold text-white">Total: ₹{totalAmount}</p>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2  transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
