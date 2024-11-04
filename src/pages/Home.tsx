import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { nanoid } from 'nanoid';

interface Item {
  id: string;
  title: string;
  price: string;
  image: string;
  location: string;
}

const CATEGORIES = [
  { id: 'electronics', name: 'Электроника' },
  { id: 'sport', name: 'Спорт' },
  { id: 'tools', name: 'Инструменты' },
  { id: 'clothes', name: 'Одежда' },
  { id: 'accessories', name: 'Аксессуары' },
  { id: 'transport', name: 'Транспорт' },
];

const UNSPLASH_PHOTOS = [
  '1604868189265-219ba7bf7ea3',
  '1516035069371-29a1b244cc32',
  '1576435728678-68d0fbf94e91',
  '1507582020474-9a35b7d455d9',
  '1515488042361-ee00e0ddd4e4',
  '1549298916-b41d501d3772',
  '1523779917675-b6ed3a42a561',
  '1526738549149-8e07eca6c147',
];

const generateMockItems = (page: number): Item[] => {
  return Array.from({ length: 8 }, (_, index) => ({
    id: nanoid(),
    title: `Товар ${page * 8 + index + 1}`,
    price: `${Math.floor(Math.random() * 1000) + 500}₽/день`,
    image: `https://images.unsplash.com/photo-${
      UNSPLASH_PHOTOS[index % UNSPLASH_PHOTOS.length]
    }?auto=format&fit=crop&q=80&w=400`,
    location: 'Москва',
  }));
};

const Home = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadMoreItems = async () => {
    if (loading) return;
    setLoading(true);
    const newItems = generateMockItems(page);
    setItems((prev) => [...prev, ...newItems]);
    setPage((prev) => prev + 1);
    setLoading(false);
  };

  useEffect(() => {
    loadMoreItems();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        loadMoreItems();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20 md:pb-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-main mb-4">
          Арендуйте что угодно
        </h1>
        <p className="text-xl text-dop mb-8">
          Найдите нужную вещь или сдайте свою в аренду
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-main mb-6">Категории</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              className="p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center text-main"
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-main mb-6">Популярные предложения</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>

        {loading && (
          <div className="text-center py-4">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-purple-main border-r-transparent"></div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;