import React from 'react';
import { Settings, Package, Heart, LogOut } from 'lucide-react';

const MENU_ITEMS = [
  { icon: Package, label: 'Мои объявления', count: 3 },
  { icon: Heart, label: 'Избранное', count: 5 },
  { icon: Settings, label: 'Настройки' },
];

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full bg-background mx-auto mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold">Александр</h2>
              <p className="text-gray-500">alex@example.com</p>
            </div>

            <nav className="space-y-2">
              {MENU_ITEMS.map(({ icon: Icon, label, count }) => (
                <button
                  key={label}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-background transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-gray-500" />
                    <span>{label}</span>
                  </div>
                  {count && (
                    <span className="bg-primary text-white text-sm px-2 py-1 rounded-full">
                      {count}
                    </span>
                  )}
                </button>
              ))}
              <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-background text-error transition-colors">
                <LogOut className="h-5 w-5" />
                <span>Выйти</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Мои объявления</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 p-4 border rounded-lg"
                >
                  <img
                    src={`https://images.unsplash.com/photo-${item}?auto=format&fit=crop&q=80&w=100`}
                    alt="Item"
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">Название предмета {item}</h3>
                    <p className="text-gray-500">500₽/день</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 text-primary hover:bg-background rounded-lg transition-colors">
                      Редактировать
                    </button>
                    <button className="px-4 py-2 text-error hover:bg-background rounded-lg transition-colors">
                      Удалить
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;