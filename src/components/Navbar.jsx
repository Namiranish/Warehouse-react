import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onHeadingClick = () => {
    navigate('/');
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div onClick={onHeadingClick} className="cursor-pointer">
          <h1 className="text-white-400 text-2xl font-extrabold tracking-wide">📦 Warehouse</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-10 font-medium">
          <p onClick={onHeadingClick} className="hover:text-gray-400 cursor-pointer transition duration-300">Home</p>
          <p className="hover:text-gray-400 cursor-pointer transition duration-300">About</p>
          <p className="hover:text-gray-400 cursor-pointer transition duration-300">Services</p>
          <p className="hover:text-gray-400 cursor-pointer transition duration-300">Contact</p>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={handleToggleMenu} className="text-indigo-400 focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 px-6 py-4 space-y-3 shadow-md text-white">
          <p onClick={onHeadingClick} className="block font-medium hover:text-gray-400 cursor-pointer">Home</p>
          <p className="block font-medium hover:text-gray-400 cursor-pointer">About</p>
          <p className="block font-medium hover:text-gray-400 cursor-pointer">Services</p>
          <p className="block font-medium hover:text-gray-400 cursor-pointer">Contact</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
