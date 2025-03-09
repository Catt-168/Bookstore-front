import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import restClient, { SERVER } from "../components/constants/restClient";

const EditBooks = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  async function getBooks() {
    const { data } = await restClient.get(`${SERVER}/books`);
    setBooks(data);
  }

  useEffect(() => {
    getBooks();
  }, []);

  console.log("BOOKS", books);
  return (
    <div>
      <nav className="flex justify-between items-center p-6 border-b border-gray-200 h-20">
        <div className="flex items-center ml-14">
          <NavLink to="/">
            <img
              src="/logoImg.png"
              alt="INKSPIRE Logo"
              className="h-12 w-48 mr-4"
            />
          </NavLink>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-14 list-none m-0 p-0 text-gray-800 font-bold no-underline hover:text-gray-600 text-xl">
          <li>
            <NavLink
              to="/edit-books"
              className={({ isActive }) =>
                isActive ? "text-custom-orange" : ""
              }
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? "text-custom-orange" : ""
              }
            >
              Orders
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive ? "text-custom-orange" : ""
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/user-profile">
              <img
                src="/user.png"
                alt="user"
                className="w-10 h-10 opacity-50 mr-20"
              />
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="layout">
        <NavLink to="/upload-book">
          <button className="mt-8 px-6 py-2 bg-custom-orange shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)] text-white text-xl font-semibold rounded-md hover:bg-[#D96C4A] transition-colors">
            Upload New Book
          </button>
        </NavLink>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
          {/* Book Card 1 */}
          {books.map((item) => (
            <div
              onClick={() => navigate(`../edit-book`, { state: item })}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-[375px] object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.author.name}</p>
                <p className="text-gray-800 font-bold mt-2">{item.price} MMK</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditBooks;
