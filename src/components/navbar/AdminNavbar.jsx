import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminNavbar = () => {
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
            <img src="/user.png" alt="user" className="w-10 h-10 opacity-50 mr-20" />
        </NavLink>
        </li>
        
      </ul>

      
     
      
      
    </nav>
    
  )
}

export default AdminNavbar