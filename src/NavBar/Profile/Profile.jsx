import React, { useState } from "react";

const ProfileDropdown = ({ status, logCheck }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // clears local storage when log out is clicked
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    status(); //
    logCheck();
  };

  return (
    <div className="relative">
      <button
        className="flex items-center text-white hover:text-gray-300"
        onClick={toggleDropdown}
      >
        Profile
      </button>
      {isOpen && (
        <ul className="absolute right-0 mt-2 py-2 bg-white shadow-lg rounded-md z-10">
          <li>
            <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
              Cart
            </div>
          </li>
          <li>
            <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">
              Purchases
            </div>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfileDropdown;
