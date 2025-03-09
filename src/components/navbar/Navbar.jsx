import React from 'react';
import { NavLink } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
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
            to="/"
            className={({ isActive }) =>
              isActive ? "text-custom-orange" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive ? "text-custom-orange" : ""
            }
          >
            Books
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? "text-custom-orange" : ""
            }
          >
            Contact us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
             isActive ? "text-custom-orange" : ""
            }
          >
            About us
          </NavLink>
        </li>
      </ul>

      {/* Search Bar */}
      <div className="flex items-center relative">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 absolute left-3" />
        <input
          type="text"
          placeholder="Search"
          className="w-lg pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-orange text-lg"
        />
      </div>

      {/* User Icon */}
      <NavLink to="/user-profile">
      <img src="/user.png" alt="user" className="w-10 h-10 opacity-50 mr-20" />
      </NavLink>
      
    </nav>
  );
};

export default Navbar;