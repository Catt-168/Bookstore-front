import React, { useState } from "react";
import { FaHistory, FaUser } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleBackButton = () => {
    navigate(-1);
  };

  const handleLogout = () => {
    setShowConfirmation(true);
  };

  const handleConfirmLogout = () => {
    setShowConfirmation(false);
    navigate("/login");
  };

  const handleCancelLogout = () => {
    setShowConfirmation(false);
  };

  const username = JSON.parse(localStorage.getItem("username")) || "";

  return (
    <div className="layout">
      {/* Confirmation*/}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center  backdrop-blur z-50">
          <div className="bg-white p-8 rounded-lg shadow-custom text-center">
            <h2 className="text-xl font-semibold mb-6">
              Are you sure you want to log out?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirmLogout}
                className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
              <button
                onClick={handleCancelLogout}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex flex-row items-center justify-between border-b my-5">
        {/* Back Button */}
        <button onClick={handleBackButton}>
          <img
            src="/back.png"
            alt="back icon"
            className="w-10 h-10 opacity-50 mb-5 hover:opacity-100 transition-opacity"
          />
        </button>

        {/* User Icon */}
        <NavLink to="/user-profile">
          <img
            src="/user.png"
            alt="user"
            className="w-10 h-10 opacity-50 mb-5 hover:opacity-100 transition-opacity"
          />
        </NavLink>
      </div>

      {/* Two Columns Layout */}
      <div className="flex flex-row">
        {/* Left Column */}
        <div className="w-1/4 border-r h-[650px]">
          <div className="flex flex-col h-full justify-between pl-8">
            {/* Side Links */}
            <div>
              <h1 className="mb-15 text-2xl font-semibold">User Profile</h1>
              <NavLink
                to="user-info"
                className={({ isActive }) =>
                  `flex flex-row gap-4 items-center mb-4 hover:bg-gray-100 p-3 rounded-md transition-colors ${
                    isActive ? "text-custom-orange" : "text-gray-700"
                  }`
                }
              >
                <FaUser className="w-6 h-6" />
                <span className="text-lg">User Info</span>
              </NavLink>
              {username === "admin" ? null : (
                <NavLink
                  to="purchase-history"
                  className={({ isActive }) =>
                    `flex flex-row gap-4 items-center hover:bg-gray-100 p-3 rounded-md transition-colors ${
                      isActive ? "text-custom-orange" : "text-gray-700"
                    }`
                  }
                >
                  <FaHistory className="w-6 h-6" />
                  <span className="text-lg">Purchase History</span>
                </NavLink>
              )}
            </div>

            {/* Logout Button */}
            <div>
              <button
                onClick={handleLogout}
                className="px-10 py-2 bg-custom-orange rounded-md text-white font-semibold text-lg hover:bg-orange-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-3/4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
