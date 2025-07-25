import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from "./context/cartcontext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <App />
      <ToastContainer position="top-right" autoClose={2000} />
    </CartProvider>
  </BrowserRouter>
);
