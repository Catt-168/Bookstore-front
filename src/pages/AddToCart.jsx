import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const AddToCart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <div className="grid gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-gray-600">{item.author.name}</p>
                    <p className="text-gray-800 font-semibold">{item.price}</p>
                    {/* <p className="text-gray-600">Quantity: {item.quantity}</p> */}
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 bg-custom-orange text-white rounded-md hover:bg-[#D96C4A] transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <button
              onClick={clearCart}
              className="px-6 py-2 bg-custom-orange text-white rounded-md hover:bg-[#D96C4A] transition-colors"
            >
              Clear Cart
            </button>
            <Link to="/order-confirmation">
              <button className="ml-4 px-6 py-2 bg-[#0b7412] text-white rounded-md hover:bg-[#3c6d3f] transition-colors">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
