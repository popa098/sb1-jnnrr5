import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import SearchBar from './SearchBar';

const Navbar = () => {
  const location = useLocation();
  const showSearch = location.pathname === '/' || location.pathname === '/search';

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-purple-main">
            AnyRent
          </Link>

          {showSearch && location.pathname === '/' && (
            <div className="hidden md:flex flex-1 justify-center mx-8">
              <SearchBar />
            </div>
          )}

          <div className="flex items-center space-x-6">
            <Link
              to="/cart"
              className="text-gray-700 hover:text-purple-main relative inline-flex items-center justify-center"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-purple-main text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Link>
            <Link to="/auth" className="text-gray-700 hover:text-purple-main">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      {showSearch && location.pathname === '/' && (
        <div className="md:hidden p-4">
          <SearchBar />
        </div>
      )}
    </nav>
  );
};

export default Navbar;