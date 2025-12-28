import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-100 hover:text-blue-400 transition-colors duration-300">
          My Blog
        </Link>
        <nav className="flex gap-8">
          <Link to="/" className="text-gray-100 font-medium hover:text-blue-400 transition-colors duration-300">
            Home
          </Link>
          <Link to="/about" className="text-gray-100 font-medium hover:text-blue-400 transition-colors duration-300">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
