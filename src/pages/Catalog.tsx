import React, { useState } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const CATEGORIES = [
  'Все категории',
  'Электроника',
  'Спорт',
  'Инструменты',
  'Одежда',
  'Аксессуары',
  'Транспорт',
];

const SAMPLE_PRODUCTS = [
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
  {
    id: 3,
    title: 'Горный велосипед',
    price: '800₽/день',
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80&w=400',
    location: 'Казань',
  },
  // Добавляем больше товаров для демонстрации
  {
    id: 4,
    title: 'Дрон DJI Mini 2',
    price: '2000₽/день',
    image: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?auto=format&fit=crop&q=80&w=400',
    location: 'Москва',
  },
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все категории');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Каталог товаров</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-primary hover:text-primary-hover"
        >
          <SlidersHorizontal className="h-5 w-5" />
          Фильтры
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className={`md:w-64 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Категории
            </h2>
            <div className="space-y-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'hover:bg-background-darker'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Catalog;