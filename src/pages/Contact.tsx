import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Контакты</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Свяжитесь с нами</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>8 800 123-45-67</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>support@anyrent.ru</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Москва, ул. Примерная, д. 1</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Режим работы</h2>
            <p className="text-gray-600">
              Пн-Пт: 9:00 - 20:00
              <br />
              Сб-Вс: 10:00 - 18:00
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Напишите нам</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ваше имя
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary"
                placeholder="Введите ваше имя"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary"
                placeholder="Введите ваш email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Сообщение
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary"
                rows={4}
                placeholder="Введите ваше сообщение"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Send className="h-5 w-5" />
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;