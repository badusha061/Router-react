// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">
          Your Logo or App Name
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/user" className="text-white hover:text-gray-300">
              User
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
