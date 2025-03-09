// import React, { useContext } from 'react';
// import Navbar from '../components/navbar/Navbar';
// import { NavLink } from 'react-router-dom';
// import { CartContext } from '../context/CartContext.jsx';

// const Home = () => {
//   const { addToCart } = useContext(CartContext);

//   const handleAddToCart = () => {
//     addToCart(book, quantity);
//   };

//   return (
//     <div >
//       <div className='navbar'>
//         <Navbar />
//       </div>

//       <div className="layout">

//         <div className="flex flex-col md:flex-row items-center max-h-[350px] mt-26">

//         <div className="w-full max-h-[350px] md:w-4/7 h-full overflow-hidden flex justify-center items-center">
//             <img
//             src="/homeImg.png"
//             alt="homeImg"
//             className="h-full w-full object-contain"
//             />
//         </div>

//         {/* Text Section*/}
//         <div className="w-full max-h-[350px] h-full md:w-3/7 flex flex-col justify-center p-8 gap-5">
//             <h1 className="text-5xl font-bold text-custom-orange mb-5 font-['Roboto_Serif']">
//             STORIES THAT STAY WITH YOU
//             </h1>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Discover a world of endless adventures, timeless classics, and fresh new voices.
//             Whether you're a casual reader or a dedicated book lover, our carefully curated
//             collection has something for everyone. Explore, indulge, and let your next great
//             read find you!
//             </p>
//             <NavLink to = "/books" >
//               <button className="w-50 mt-8 px-6 py-2 bg-custom-orange shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)] text-white font-semibold rounded-md hover:bg-[#D96C4A] transition-colors">
//               Explore
//               </button>
//             </NavLink>

//         </div>
//         </div>

//         {/* Recommended For You Section */}
//         <div className="container mx-auto py-12">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6 font-['Roboto_Serif']">Recommended For You</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//             {/* Book Card 1 */}
//             <div className="bg-white shadow-md rounded-lg overflow-hidden">
//               <img
//                 src="/book2.png"
//                 alt="The Shawshank Redemption"
//                 className="w-full h-[375px] object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="font-bold text-lg text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">The Shawshank Redemption</h3>
//                 <p className="text-gray-600">Stephan King</p>
//                 <p className="text-gray-800 font-bold mt-2">47000 MMK</p>
//                 <button className="mt-4 w-full px-4 py-2 bg-custom-orange text-white font-semibold rounded-md hover:bg-[#D96C4A] transition-colors"
//                 onClick={handleAddToCart}>
//                   Add to Cart
//                 </button>
//               </div>
//             </div>

//             {/* Book Card 2 */}
//             <div className="bg-white shadow-md rounded-lg overflow-hidden">
//               <img
//                 src="/book2.png"
//                 alt="Harry Potter and The Goblet of Fire"
//                 className="w-full h-[375px] object-cover"
//               />
//               <div className="p-4">
//                 {/* <h3 className="font-bold text-lg text-gray-800">Harry Potter and The Goblet of Fire</h3> */}
//                 <h3 className="font-bold text-lg text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">Harry Potter and The Goblet of Fire</h3>
//                 <p className="text-gray-600">J.K. Rowling</p>
//                 <p className="text-gray-800 font-bold mt-2">47000 MMK</p>
//                 <button className="mt-4 w-full px-4 py-2 bg-custom-orange text-white font-semibold rounded-md hover:bg-[#D96C4A] transition-colors">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//             {/* Book Card 2 */}
//             <div className="bg-white shadow-md rounded-lg overflow-hidden">
//               <img
//                 src="/book2.png"
//                 alt="Harry Potter and The Goblet of Fire"
//                 className="w-full h-[375px] object-cover"
//               />
//               <div className="p-4">
//                 {/* <h3 className="font-bold text-lg text-gray-800">Harry Potter and The Goblet of Fire</h3> */}
//                 <h3 className="font-bold text-lg text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">Harry Potter and The Goblet of Fire</h3>
//                 <p className="text-gray-600">J.K. Rowling</p>
//                 <p className="text-gray-800 font-bold mt-2">47000 MMK</p>
//                 <button className="mt-4 w-full px-4 py-2 bg-custom-orange text-white font-semibold rounded-md hover:bg-[#D96C4A] transition-colors">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>

//             {/* Book Card 3 */}
//             <div className="bg-white shadow-md rounded-lg overflow-hidden">
//               <img
//                 src="/book3.png"
//                 alt="A Song Of Ice And Fire"
//                 className="w-full h-[375px] object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="font-bold text-lg text-gray-800">A Song Of Ice And Fire</h3>
//                 <p className="text-gray-600">George R.R. Martin</p>
//                 <p className="text-gray-800 font-bold mt-2">47000 MMK</p>
//                 <button className="mt-4 w-full px-4 py-2 bg-custom-orange text-white font-semibold rounded-md hover:bg-[#D96C4A] transition-colors">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>

//             {/* Book Card 4 */}
//             <div className="bg-white shadow-md rounded-lg overflow-hidden">
//               <img
//                 src="/book4.png"
//                 alt="River Sing Me Home"
//                 className="w-full h-[375px] object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="font-bold text-lg text-gray-800">River Sing Me Home</h3>
//                 <p className="text-gray-600">George R.R. Martin</p>
//                 <p className="text-gray-800 font-bold mt-2">47000 MMK</p>
//                 <button className="mt-4 w-full px-4 py-2 bg-custom-orange text-white font-semibold rounded-md hover:bg-[#D96C4A] transition-colors">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>

//             {/* Book Card 2 */}
//             <div className="bg-white shadow-md rounded-lg overflow-hidden">
//               <img
//                 src="/book2.png"
//                 alt="Harry Potter and The Goblet of Fire"
//                 className="w-full h-[375px] object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="font-bold text-lg text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">Harry Potter and The Goblet of Fire</h3>
//                 <p className="text-gray-600">J.K. Rowling</p>
//                 <p className="text-gray-800 font-bold mt-2">47000 MMK</p>
//                 <button className="mt-4 w-full px-4 py-2 bg-custom-orange text-white font-semibold rounded-md hover:bg-[#D96C4A] transition-colors">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>

//             {/* Book Card 2 */}
//             <div className="bg-white shadow-md rounded-lg overflow-hidden">
//               <img
//                 src="/book2.png"
//                 alt="Harry Potter and The Goblet of Fire"
//                 className="w-full h-[375px] object-cover"
//               />
//               <div className="p-4">
//                 {/* <h3 className="font-bold text-lg text-gray-800">Harry Potter and The Goblet of Fire</h3> */}
//                 <h3 className="font-bold text-lg text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">Harry Potter and The Goblet of Fire</h3>
//                 <p className="text-gray-600">J.K. Rowling</p>
//                 <p className="text-gray-800 font-bold mt-2">47000 MMK</p>
//                 <button className="mt-4 w-full px-4 py-2 bg-custom-orange text-white font-semibold rounded-md hover:bg-[#D96C4A] transition-colors">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//             {/* Book Card 2 */}
//             <div className="bg-white shadow-md rounded-lg overflow-hidden">
//               <img
//                 src="/book2.png"
//                 alt="Harry Potter and The Goblet of Fire"
//                 className="w-full h-[375px] object-cover"
//               />
//               <div className="p-4">
//                 {/* <h3 className="font-bold text-lg text-gray-800">Harry Potter and The Goblet of Fire</h3> */}
//                 <h3 className="font-bold text-lg text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">Harry Potter and The Goblet of Fire</h3>
//                 <p className="text-gray-600">J.K. Rowling</p>
//                 <p className="text-gray-800 font-bold mt-2">47000 MMK</p>
//                 <button className="mt-4 w-full px-4 py-2 bg-custom-orange text-white font-semibold rounded-md hover:bg-[#D96C4A] transition-colors">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useContext } from 'react';
// import Navbar from '../components/navbar/Navbar';
// import { NavLink } from 'react-router-dom';
// import { CartContext } from '../context/CartContext.jsx';

// const Home = () => {
//   const { addToCart } = useContext(CartContext);

//   // Example book data
//   const books = [
//     {
//       id: '1',
//       title: 'The Shawshank Redemption',
//       author: 'Stephan King',
//       price: '47000 MMK',
//       image: '/book2.png',
//     },
//     {
//       id: '2',
//       title: 'Harry Potter and The Goblet of Fire',
//       author: 'J.K. Rowling',
//       price: '47000 MMK',
//       image: '/book2.png',
//     },
//     {
//       id: '3',
//       title: 'A Song Of Ice And Fire',
//       author: 'George R.R. Martin',
//       price: '47000 MMK',
//       image: '/book3.png',
//     },
//     {
//       id: '4',
//       title: 'River Sing Me Home',
//       author: 'George R.R. Martin',
//       price: '47000 MMK',
//       image: '/book4.png',
//     },
//   ];

//   // Handle Add to Cart button click
//   const handleAddToCart = (book) => {
//     addToCart(book, 1); // Add 1 quantity of the book to the cart
//   };

//   return (
//     <div>
//       <div className="navbar">
//         <Navbar />
//       </div>

//       <div className="layout">
//         <div className="flex flex-col md:flex-row items-center max-h-[350px] mt-26">
//           <div className="w-full max-h-[350px] md:w-4/7 h-full overflow-hidden flex justify-center items-center">
//             <img
//               src="/homeImg.png"
//               alt="homeImg"
//               className="h-full w-full object-contain"
//             />
//           </div>

//           {/* Text Section */}
//           <div className="w-full max-h-[350px] h-full md:w-3/7 flex flex-col justify-center p-8 gap-5">
//             <h1 className="text-5xl font-bold text-custom-orange mb-5 font-['Roboto_Serif']">
//               STORIES THAT STAY WITH YOU
//             </h1>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               Discover a world of endless adventures, timeless classics, and fresh new voices.
//               Whether you're a casual reader or a dedicated book lover, our carefully curated
//               collection has something for everyone. Explore, indulge, and let your next great
//               read find you!
//             </p>
//             <NavLink to="/books">
//               <button className="w-50 mt-8 px-6 py-2 bg-custom-orange shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)] text-white font-semibold rounded-md hover:bg-[#D96C4A] transition-colors">
//                 Explore
//               </button>
//             </NavLink>
//           </div>
//         </div>

//         {/* Recommended For You Section */}
//         <div className="container mx-auto py-12">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6 font-['Roboto_Serif']">Recommended For You</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//             {books.map((book) => (
//               <div key={book.id} className="bg-white shadow-md rounded-lg overflow-hidden">
//                 <img
//                   src={book.image}
//                   alt={book.title}
//                   className="w-full h-[375px] object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="font-bold text-lg text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
//                     {book.title}
//                   </h3>
//                   <p className="text-gray-600">{book.author}</p>
//                   <p className="text-gray-800 font-bold mt-2">{book.price}</p>
//                   <button
//                     onClick={() => handleAddToCart(book)}
//                     className="mt-4 w-full px-4 py-2 bg-custom-orange text-white font-semibold rounded-md hover:bg-[#D96C4A] transition-colors"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import restClient, { SERVER } from "../components/constants/restClient.jsx";

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const username = JSON.parse(localStorage.getItem("username") || "");

  // Example book data
  const books = [
    {
      id: "1",
      title: "The Shawshank Redemption",
      author: "Stephan King",
      price: "47000 MMK",
      image: "/book2.png",
    },
    {
      id: "2",
      title: "Harry Potter and The Goblet of Fire",
      author: "J.K. Rowling",
      price: "47000 MMK",
      image: "/book2.png",
    },
    {
      id: "3",
      title: "A Song Of Ice And Fire",
      author: "George R.R. Martin",
      price: "47000 MMK",
      image: "/book3.png",
    },
    {
      id: "4",
      title: "River Sing Me Home",
      author: "George R.R. Martin",
      price: "47000 MMK",
      image: "/book4.png",
    },
  ];

  // State for managing the modal
  const [selectedBook, setSelectedBook] = useState(null); // Book selected for adding to cart
  const [quantity, setQuantity] = useState(1); // Quantity for the selected book

  // Open modal and set the selected book
  const openModal = (book) => {
    setSelectedBook(book);
    setQuantity(1); // Reset quantity to 1 when modal opens
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

  async function getEditorPick() {
    const { data } = await restClient.get(
      `${SERVER}/customers/getCustomer?username=${username}`
    );
    const sss = data.favGenre.split(",").map(Number);
    await restClient.get(`${SERVER}/books/editor-pick`, { ids: sss });
  }

  useEffect(() => {
    getEditorPick();
  }, []);

  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="layout">
        <div className="flex flex-col md:flex-row items-center max-h-[350px] mt-26">
          <div className="w-full max-h-[350px] md:w-4/7 h-full overflow-hidden flex justify-center items-center">
            <img
              src="/homeImg.png"
              alt="homeImg"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="w-full max-h-[350px] h-full md:w-3/7 flex flex-col justify-center p-8 gap-5">
            <h1 className="text-5xl font-bold text-custom-orange mb-5 font-['Roboto_Serif']">
              STORIES THAT STAY WITH YOU
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover a world of endless adventures, timeless classics, and
              fresh new voices. Whether you're a casual reader or a dedicated
              book lover, our carefully curated collection has something for
              everyone. Explore, indulge, and let your next great read find you!
            </p>
            <NavLink to="/books">
              <button className="w-50 mt-8 px-6 py-2 bg-custom-orange shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)] text-white font-semibold rounded-md hover:bg-[#D96C4A] transition-colors">
                Explore
              </button>
            </NavLink>
          </div>
        </div>

        {/* Recommended For You Section */}
        <div className="container mx-auto py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 font-['Roboto_Serif']">
            Recommended For You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-[375px] object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
                    {book.title}
                  </h3>
                  <p className="text-gray-600">{book.author}</p>
                  <p className="text-gray-800 font-bold mt-2">{book.price}</p>
                  <button
                    onClick={() => openModal(book)}
                    className="mt-4 w-full px-4 py-2 bg-custom-orange text-white font-semibold rounded-md hover:bg-[#D96C4A] transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
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

export default Home;
