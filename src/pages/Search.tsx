import React from 'react';
import { Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

const CATEGORIES = [
  { id: 1, name: 'Женщинам', image: 'https://images.unsplash.com/photo-1525845859779-54d477ff291f?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Мужчинам', image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Детям', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'Обувь', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=400' },
  { id: 5, name: 'Аксессуары', image: 'https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&q=80&w=400' },
  { id: 6, name: 'Электроника', image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&q=80&w=400' },
];

const SAMPLE_RESULTS = [
  {
    id: 1,
    title: 'Электросамокат Xiaomi',
    price: '500₽/день',
    image: 'https://images.unsplash.com/photo-1604868189265-219ba7bf7ea3?auto=format&fit=crop&q=80&w=400',
    location: 'Москва',
  },
  {
    id: 2,
    title: 'Профессиональная камера',
    price: '1500₽/день',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400',
    location: 'Санкт-Петербург',
  },
];

const Search = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <SearchBar />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            className="relative overflow-hidden rounded-lg aspect-square group"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white font-medium text-sm">
                {category.name}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Результаты поиска</h2>
        <button className="flex items-center gap-2 text-purple-main hover:text-purple-dark">
          <Filter className="h-5 w-5" />
          Фильтры
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {SAMPLE_RESULTS.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Search;