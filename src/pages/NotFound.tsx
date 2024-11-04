import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <AlertCircle className="h-24 w-24 text-purple-main" />
        </div>
        <h1 className="text-8xl font-bold bg-gradient-to-r from-purple-main to-purple-light bg-clip-text text-transparent mb-4">
          404
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Упс! Кажется, эта страница потерялась в пространстве
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-purple-main hover:bg-purple-dark text-white font-semibold px-8 py-4 rounded-full transition-colors"
        >
          <Home className="h-5 w-5" />
          На главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;