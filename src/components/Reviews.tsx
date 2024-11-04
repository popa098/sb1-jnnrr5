import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
}

interface ReviewsProps {
  reviews: Review[];
}

const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Отзывы</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  {review.author[0].toUpperCase()}
                </div>
                <span className="font-medium">{review.author}</span>
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`h-4 w-4 ${
                    index < review.rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;