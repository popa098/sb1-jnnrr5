import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  title: string;
  price: string;
  image: string;
  location?: string;
}

const ProductCard = ({ id, title, price, image, location }: ProductCardProps) => {
  return (
    <Link 
      to={`/product/${id}`}
      className="bg-white rounded-lg overflow-hidden hover:bg-gray-50 transition-colors"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-primary font-bold">{price}</p>
        {location && (
          <p className="text-gray-500 text-sm mt-2">{location}</p>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;