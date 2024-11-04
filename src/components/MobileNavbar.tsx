import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, ShoppingCart, User } from 'lucide-react';

const MobileNavbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
      <div className="flex justify-around items-center h-16">
        <Link
          to="/"
          className={`flex flex-col items-center ${
            isActive('/') ? 'text-purple-main' : 'text-gray-500'
          }`}
        >
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">Главная</span>
        </Link>
        <Link
          to="/search"
          className={`flex flex-col items-center ${
            isActive('/search') ? 'text-purple-main' : 'text-gray-500'
          }`}
        >
          <Search className="h-6 w-6" />
          <span className="text-xs mt-1">Поиск</span>
        </Link>
        <Link
          to="/cart"
          className={`flex flex-col items-center ${
            isActive('/cart') ? 'text-purple-main' : 'text-gray-500'
          }`}
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="text-xs mt-1">Корзина</span>
        </Link>
        <Link
          to="/profile"
          className={`flex flex-col items-center ${
            isActive('/profile') ? 'text-purple-main' : 'text-gray-500'
          }`}
        >
          <User className="h-6 w-6" />
          <span className="text-xs mt-1">Профиль</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;