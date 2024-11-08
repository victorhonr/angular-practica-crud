import { Car } from 'src/cars/dto/car.dto';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
    total: 3,
    carDetails: [
      {
        registrationDate: '2024-10-30T10:01:35.288Z',
        mileage: 50000,
        currency: 'EUR',
        price: 18000,
      },
      {
        registrationDate: '2024-10-30T10:01:35.288Z',
        mileage: 40000,
        currency: 'USD',
        price: 19000,
      },
      {
        registrationDate: '2024-10-30T10:01:35.288Z',
        mileage: 30000,
        currency: 'GBP',
        price: 20000,
      },
    ],
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
    total: 3,
    carDetails: [
      {
        registrationDate: '2024-10-30T10:01:35.288Z',
        mileage: 60000,
        currency: 'EUR',
        price: 17000,
      },
      {
        registrationDate: '2024-10-30T10:01:35.288Z',
        mileage: 45000,
        currency: 'USD',
        price: 18000,
      },
      {
        registrationDate: '2024-10-30T10:01:35.288Z',
        mileage: 35000,
        currency: 'GBP',
        price: 19000,
      },
    ],
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Focus',
    total: 3,
    carDetails: [
      {
        registrationDate: '2024-10-30T10:01:35.288Z',
        mileage: 70000,
        currency: 'EUR',
        price: 16000,
      },
      {
        registrationDate: '2024-10-30T10:01:35.288Z',
        mileage: 55000,
        currency: 'USD',
        price: 17000,
      },
      {
        registrationDate: '2024-10-30T10:01:35.288Z',
        mileage: 32000,
        currency: 'GBP',
        price: 21000,
      },
    ],
  },
];
