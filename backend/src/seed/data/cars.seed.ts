import { Car } from 'src/cars/entities/car.entity';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    brand: 'Toyota',
    model: 'Corolla',
    total: 2,
    id: uuid(),
    carDetails: [
      {
        registrationDate: '2022-05-15T10:01:35.288Z',
        mileage: 0,
        currency: 'USD',
        price: 20000,
        manufactureYear: 2020,
        availability: true,
        licensePlate: '1234 ABC',
      },
      {
        registrationDate: '2021-03-10T08:15:00.000Z',
        mileage: 30000,
        currency: 'EUR',
        price: 18000,
        manufactureYear: 2019,
        availability: false,
        licensePlate: '5678 DEF',
      },
    ],
  },
];
