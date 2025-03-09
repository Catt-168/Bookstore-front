// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../context/CartContext';

// const FloatingCart = () => {
//   const { cart } = useContext(CartContext);

//   if (cart.length === 0) return null;

//   return (
//     <Link to="/add-to-cart">
//       <div className="fixed bottom-8 right-8 bg-custom-orange text-white p-4 rounded-full shadow-lg hover:bg-[#D96C4A] transition-colors">
//         <span className="text-lg font-semibold">🛒 {cart.length}</span>
//       </div>
//     </Link>
//   );
// };

// export default FloatingCart;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';

const FloatingCart = () => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) return null;

  return (
    <Link to="/add-to-cart">
      <div className="fixed bottom-8 right-8 bg-custom-orange text-white p-4 rounded-full shadow-lg hover:bg-[#D96C4A] transition-colors">
        {/* Cart Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>

        {/* Quantity Badge */}
        <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
          {cart.length}
        </div>
      </div>
    </Link>
  );
};

export default FloatingCart;