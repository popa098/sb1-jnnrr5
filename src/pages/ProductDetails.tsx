import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Calendar, User, Star } from 'lucide-react';
import Reviews from '../components/Reviews';

const SAMPLE_PRODUCT = {
  id: 1,
  title: 'Электросамокат Xiaomi M365 Pro',
  price: '500₽/день',
  location: 'Москва, Пресненский район',
  owner: 'Александр',
  rating: 4.8,
  reviews: [
    {
      id: 1,
      author: 'Михаил',
      rating: 5,
      date: '15.03.2024',
      text: 'Отличный самокат, все работает идеально. Хозяин пунктуальный и вежливый.',
    },
    {
      id: 2,
      author: 'Анна',
      rating: 4,
      date: '10.03.2024',
      text: 'Самокат в хорошем состоянии, но батарея держит чуть меньше заявленного.',
    },
  ],
  description: 'Отличный электросамокат в идеальном состоянии. Полностью заряженный, с запасом хода до 45 км. Подходит для повседневных поездок по городу.',
  images: [
    'https://images.unsplash.com/photo-1604868189265-219ba7bf7ea3?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1604868189607-ec3e4a1b7159?auto=format&fit=crop&q=80&w=800',
  ],
};

const ProductDetails = () => {
  const { id } = useParams();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20 md:pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Галерея изображений */}
        <div className="space-y-4">
          {SAMPLE_PRODUCT.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${SAMPLE_PRODUCT.title} - фото ${index + 1}`}
              className="w-full rounded-2xl shadow-md"
            />
          ))}
        </div>

        {/* Информация о товаре */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-4">{SAMPLE_PRODUCT.title}</h1>
            <p className="text-2xl font-bold text-primary">{SAMPLE_PRODUCT.price}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-5 w-5" />
              {SAMPLE_PRODUCT.location}
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <User className="h-5 w-5" />
              {SAMPLE_PRODUCT.owner} · {SAMPLE_PRODUCT.rating} ★
            </div>
          </div>

          <div className="border-t border-b py-6">
            <h2 className="text-xl font-semibold mb-4">Описание</h2>
            <p className="text-gray-600">{SAMPLE_PRODUCT.description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Забронировать</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Дата начала аренды
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-search focus:ring-1 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Дата окончания аренды
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-search focus:ring-1 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
            </div>
            <button className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-search transition-colors">
              Арендовать
            </button>
          </div>

          <Reviews reviews={SAMPLE_PRODUCT.reviews} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;