import React from 'react';
import { CreditCard, Wallet, Shield } from 'lucide-react';

const PAYMENT_METHODS = [
  {
    icon: CreditCard,
    title: 'Банковская карта',
    description: 'Visa, MasterCard, МИР',
  },
  {
    icon: Wallet,
    title: 'Электронные кошельки',
    description: 'ЮMoney, QIWI',
  },
];

const Payment = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Оплата</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {PAYMENT_METHODS.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4"
          >
            <Icon className="h-12 w-12 text-primary" />
            <div>
              <h3 className="text-xl font-semibold mb-1">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-start gap-4 mb-6">
          <Shield className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <h2 className="text-xl font-semibold mb-2">Безопасная оплата</h2>
            <p className="text-gray-600">
              Мы используем современные технологии шифрования для защиты ваших платежных данных.
              Все транзакции проходят через защищенные каналы связи.
            </p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Как это работает</h2>
        <ol className="space-y-4 text-gray-600">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center">
              1
            </span>
            <p>Выберите товар для аренды и укажите срок аренды</p>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center">
              2
            </span>
            <p>Выберите удобный способ оплаты</p>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center">
              3
            </span>
            <p>Внесите оплату и получите подтверждение бронирования</p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Payment;