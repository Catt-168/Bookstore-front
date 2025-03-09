import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import restClient, { SERVER } from "../../components/constants/restClient";
import { useNavigate } from "react-router-dom";

const PurchaseHistory = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [allOrders, setAllOrders] = useState([]);
  const booksPerPage = 8;

  const totalPages = Math.ceil(books.length / booksPerPage);

  const currentBooks = books.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  async function getOrderByCustomer() {
    const username = JSON.parse(localStorage.getItem("username")) || "";
    console.log("API CALL");
    try {
      const { data } = await restClient.get(
        `${SERVER}/customers/getCustomer?username=${username}`
      );
      const customerId = data.id;
      const { data: res } = await restClient.get(
        `${SERVER}/orders/byCustomer?customerId=${customerId}`
      );
      setAllOrders(
        res.flatMap((order) =>
          Array(Math.max(order.books.length, 1)).fill(order.orderStatus)
        )
      );

      setBooks(res.flatMap((item) => item.books));
    } catch (e) {
      console.log("ERORR", e);
    }
  }

  useEffect(() => {
    getOrderByCustomer();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 font-['Roboto_Serif']">
        Books you have purchased
      </h2>
      <div className="grid grid-cols-4 gap-6">
        {currentBooks.map((book, index) => (
          <div
            onClick={() => navigate(`../../book/${book.id}`, { state: book })}
            key={book.id}
            className="bg-white shadow-md rounded-md overflow-hidden"
          >
            <img
              src={book.image_url}
              alt={book.title}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
                {book.title}
              </h3>
              <p className="text-gray-600">{book.author.name}</p>
              <p className="text-gray-800 font-bold mt-2">{book.price}</p>
              <p
                className={`font-bold mt-2 ${
                  allOrders[index] === "PENDING"
                    ? "text-yellow-500"
                    : allOrders[index] === "DELIVERED"
                    ? "text-green-500"
                    : "text-gray-800"
                }`}
              >
                {allOrders[index]}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 gap-2">
        {/* Prev Arrow */}
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed mr-6"
        >
          <FaChevronLeft />
        </button>

        {/* Page No. */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-md ${
              currentPage === index + 1
                ? "bg-custom-orange text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed ml-6"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default PurchaseHistory;
