import React from 'react';
import { Shield, Users, Clock } from 'lucide-react';

const FEATURES = [
  {
    icon: Shield,
    title: 'Безопасная аренда',
    description: 'Все пользователи проходят верификацию. Мы гарантируем безопасность сделок.',
  },
  {
    icon: Users,
    title: 'Большое сообщество',
    description: 'Тысячи пользователей уже присоединились к нашей платформе.',
  },
  {
    icon: Clock,
    title: 'Быстрая аренда',
    description: 'Находите нужные вещи и арендуйте их в несколько кликов.',
  },
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">О проекте AnyRent</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AnyRent - это платформа, которая соединяет людей, желающих сдать свои вещи в аренду,
          с теми, кто хочет их арендовать. Мы делаем аренду простой и безопасной.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div key={title} className="bg-white p-6 rounded-lg shadow-sm text-center">
            <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-6">Часто задаваемые вопросы</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Как работает сервис?</h3>
            <p className="text-gray-600">
              Владельцы вещей размещают объявления на платформе, указывая условия аренды.
              Арендаторы могут найти нужную вещь через поиск и забронировать её на определённый срок.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Безопасно ли это?</h3>
            <p className="text-gray-600">
              Мы проверяем всех пользователей и предоставляем гарантии как владельцам,
              так и арендаторам. В случае возникновения проблем наша служба поддержки
              всегда готова помочь.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;