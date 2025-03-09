import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
  // const { bookId } = useParams();
  const location = useLocation();

  const { book } = location.state;
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [recommedation, setRecommendation] = useState([]);
  // const books = [
  //   {
  //     id: '1',
  //     title: 'Harry Potter And The Philosopher\'s Stone',
  //     author: 'J.K. Rowling',
  //     price: '35000 MMK',
  //     image: '/fantasy/imgid1.png',
  //     language: 'English',
  //     category: 'Fantasy',
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus non explicabo neque, nam atque quia distinctio soluta suscipit fugit est! Nostrum, tenetur odio nemo rerum, doloribus consectetur quo officiis laborum suscipit, reiciendis amet qui cum itaque minima culpa eaque aliquid molestias molestiae omnis laboriosam at laudantium temporibus. Alias nihil voluptatibus rem maiores, temporibus cum nulla nam quam blanditiis fugit. Doloremque deserunt necessitatibus nesciunt odio ipsa assumenda, vitae placeat mollitia reprehenderit nostrum omnis dolorum rem itaque, perferendis numquam sunt repellendus cum quidem quis? Itaque nisi eos necessitatibus amet aliquid voluptatibus, a fugiat quaerat, facere illo, reprehenderit ipsa quae rem at? Praesentium?"
  //   },
  //   {
  //     id: '2',
  //     title: 'Harry Potter And The Philosopher\'s Stone',
  //     author: 'J.K. Rowling',
  //     price: '35000 MMK',
  //     image: '/fantasy/imgid1.png',
  //     language: 'English',
  //     category: 'Fantasy',
  //     description: 'Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper lacinia condimentum ac, vehicula quis nisi.',
  //   },
  //   {
  //     id: '3',
  //     title: 'Harry Potter And The Philosopher\'s Stone',
  //     author: 'J.K. Rowling',
  //     price: '35000 MMK',
  //     image: '/fantasy/imgid1.png',
  //     language: 'English',
  //     category: 'Fantasy',
  //     description: 'Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper lacinia condimentum ac, vehicula quis nisi.',
  //   },

  // ];

  // const book = books.find((b) => b.id === bookId);
  async function getRecommendation() {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:5000?bookname=${book.title}`
      );
      setRecommendation(data);
    } catch (e) {
      console.log("ERROR", e);
    }
  }
  useEffect(() => {
    getRecommendation();
  }, []);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Handle Add to Cart button click
  const handleAddToCart = () => {
    addToCart(book, quantity);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/order-confirmation");
  };

  if (!book) {
    return <div>Book not found!</div>;
  }

  const isBookPurchased = book?.orders?.map(
    (item) => item.customer.customerName
  );
  const isDisabled = isBookPurchased?.includes(
    JSON.parse(localStorage.getItem("username"))
  );

  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main-content pt-26">
        <div className="flex gap-8 h-auto ">
          <div className="w-full md:w-1/3">
            <img
              src={book.image_url}
              alt={book.title}
              className="w-full h-full rounded-lg shadow-md"
            />
          </div>

          <div className="w-full h-full md:w-2/3">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 font-roboto">
              {book.title}
            </h1>
            <p className="text-gray-600 text-lg mb-2 font-inter">
              Author: {book?.author.name}
            </p>
            <p className="text-gray-600 text-lg mb-2 font-inter">
              Language: {book.language}
            </p>
            <p className="text-gray-600 text-lg mb-2 font-inter">
              Category: {book.genres.map((item) => item.name + ", ")}
            </p>
            <p className="text-gray-600 text-lg mb-2 font-inter">
              Pages: {book.pages}
            </p>
            <p className="text-gray-600 text-lg mb-2 font-inter">
              Publisher: {book.publisher.name}
            </p>
            <p className="text-gray-600 text-lg mb-2 font-inter">
              Rating: {book.rating}
            </p>
            <p className="text-gray-600 text-lg mb-2 font-inter">
              Released Year: {book.year}
            </p>
            <p className="text-gray-600 text-2xl font-inter font-semibold mb-4">
              {book.price.toFixed(2)} mmk
            </p>

            {/* <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border-2 border-gray-600 rounded-md">
                <button
                  onClick={decreaseQuantity}
                  disabled
                  className="px-3 py-1 text-gray-400 bg-gray-100 cursor-not-allowed rounded-l-md transition-colors disabled:opacity-75"
                >
                  -
                </button>

                <span className="px-4 py-1 text-gray-800 font-inter">
                  {quantity}
                </span>

                <button
                  disabled
                  onClick={increaseQuantity}
                  className="px-3 py-1 text-gray-400 bg-gray-100 cursor-not-allowed rounded-r-md transition-colors disabled:opacity-75"
                >
                  +
                </button>
              </div>

              <b className="text-red-500">
                Quantity Feature Not Available Right Now
              </b>
            </div> */}

            <div className="flex flex-col gap-4">
              <button
                disabled={isDisabled}
                onClick={handleAddToCart}
                className={`w-[25%] px-6 py-2 border border-custom-orange text-white font-semibold rounded-md transition-colors shadow-custom ${
                  isDisabled
                    ? "bg-gray-400 border-gray-400 cursor-not-allowed" // Disabled styles
                    : "bg-custom-orange hover:bg-[#D96C4A]" // Enabled styles
                }`}
              >
                Add to Cart
              </button>
              <button
                disabled={isDisabled}
                onClick={() => handleBuyNow()}
                className={`w-[25%] px-6 py-2 border border-custom-orange text-white font-semibold rounded-md transition-colors shadow-custom ${
                  isDisabled
                    ? "bg-gray-400 border-gray-400 cursor-not-allowed" // Disabled styles
                    : "bg-custom-orange hover:bg-[#D96C4A]" // Enabled styles
                }`}
              >
                Buy Now
              </button>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 font-inter">
                Description
              </h2>
              <p className="text-gray-600 font-inter font-light">
                {book.description}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Books You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recommedation.slice(0, 4).map((book, index) => (
              <div
                onClick={() => {
                  window.open(
                    `https://www.google.com/search?q=${encodeURIComponent(
                      book.title
                    )}`,
                    "_blank"
                  );
                }}
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{book.author}</p>
                  <p className="text-custom-orange text-lg font-semibold mt-2">
                    Similarity Score: {book.similarity_score.toFixed(2)}
                  </p>
                  <button
                    disabled
                    className={`w-full mt-4 px-4 py-2 text-white font-semibold rounded-lg transition-colors ${
                      1 == 1
                        ? "bg-gray-400 cursor-not-allowed" // Disabled styles
                        : "bg-custom-orange hover:bg-[#D96C4A]" // Enabled styles
                    }`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
