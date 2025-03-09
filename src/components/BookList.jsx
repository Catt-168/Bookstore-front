import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const BookList = ({ books, title }) => {
  const { addToCart } = useCart();

  // State for managing the modal
  const [selectedBook, setSelectedBook] = useState(null); // Book selected for adding to cart
  const [quantity, setQuantity] = useState(1); // Quantity for the selected book

  // Open modal and set the selected book
  const openModal = (book, event) => {
    addToCart(book, quantity);
    // event.preventDefault(); // Prevent default navigation
    // event.stopPropagation(); // Stop event propagation
    // setSelectedBook(book);
    // setQuantity(1); // Reset quantity to 1 when modal opens
  };

  // Close modal
  const closeModal = () => {
    setSelectedBook(null);
  };

  // Handle Add to Cart button click in the modal
  const handleAddToCart = () => {
    if (selectedBook) {
      addToCart(selectedBook, quantity); // Add the selected book with the chosen quantity
      closeModal(); // Close the modal after adding to cart
    }
  };

  // Handle quantity increase
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Handle quantity decrease
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  function generateDisable(book) {
    if (book.orders.length === 0) return false;
    const isBookPurchased = book?.orders?.map(
      (item) => item.customer.customerName
    );
    const isDisabled = isBookPurchased?.includes(
      JSON.parse(localStorage.getItem("username"))
    );
    return isDisabled;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-custom-orange mb-8">{title}</h1>

      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {books.map((book) => (
          <Link
            key={book.id}
            to={`/book/${book.id}`}
            state={{ book }}
            className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={book.image_url}
              alt={book.title}
              className="w-full h-74 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
                {book.title}
              </h2>
              <p className="text-gray-600 text-sm mt-1">{book.author.name}</p>
              <p className="text-custom-orange text-lg font-semibold mt-2">
                {book.price}
              </p>

              <button
                disabled={generateDisable(book)}
                onClick={(e) => openModal(book, e)} // Open modal on click
                className={`w-full mt-4 px-4 py-2 bg-custom-orange text-white font-semibold rounded-lg  transition-colors + ${
                  generateDisable(book) ? "bg-gray-400 cursor-not-allowed" : ""
                }`}
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>

      {/* Modal for Quantity Selection */}
      {selectedBook && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Select Quantity
            </h2>
            <p className="text-gray-600 mb-6">{selectedBook.title}</p>

            {/* Quantity Selector */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                -
              </button>
              <span className="text-xl font-semibold text-gray-800">
                {quantity}
              </span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full px-6 py-2 bg-custom-orange text-white font-semibold rounded-md hover:bg-[#D96C4A] transition-colors"
            >
              Add to Cart
            </button>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="mt-4 w-full px-6 py-2 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList; // Default export
