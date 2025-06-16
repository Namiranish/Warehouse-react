import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomePage from '../Pages/HomePage';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onHeadingClick(){
    navigate('/');
  }
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black p-3 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 onClick={onHeadingClick} className="cursor-pointer text-xl font-semibold text-white bg-indigo-600 px-8 py-2 rounded-xl shadow-lg">
            Warehouse
          </h1>
        </div>
        <div className="cursor-pointer hidden lg:flex space-x-10">
          <p onClick={onHeadingClick}  className="text-white hover:text-indigo-400 transition duration-200">Home</p>
          <p className="text-white hover:text-indigo-400 transition duration-200">About</p>
          <p className="text-white hover:text-indigo-400 transition duration-200">Services</p>
          <p className="text-white hover:text-indigo-400 transition duration-200">Contact</p>
        </div>
        <div className="lg:hidden">
          <button onClick={handleToggleMenu} className="text-white focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden mt-3 bg-gray-800 shadow-md rounded-lg">
          <a href="#home" className="block text-white py-4 px-6 hover:bg-indigo-700 transition-all duration-200">Home</a>
          <a href="#about" className="block text-white py-4 px-6 hover:bg-indigo-700 transition-all duration-200">About</a>
          <a href="#services" className="block text-white py-4 px-6 hover:bg-indigo-700 transition-all duration-200">Services</a>
          <a href="#contact" className="block text-white py-4 px-6 hover:bg-indigo-700 transition-all duration-200">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
