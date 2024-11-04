import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative flex-1 max-w-3xl">
      <div className="relative bg-[#B27FE5] rounded-full p-0.5 flex items-center">
        <div className="flex-1 bg-white rounded-full">
          <input
            type="text"
            placeholder="Найти на AnyRent"
            className="w-full px-6 py-2.5 text-lg text-main placeholder-dop bg-transparent rounded-full focus:outline-none"
          />
        </div>
        <button 
          className="p-2.5 ml-0.5 rounded-full bg-[#B27FE5] hover:bg-[#8C3FD8] transition-colors cursor-pointer flex items-center justify-center"
        >
          <Search className="w-6 h-6 text-white pointer-events-none" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;