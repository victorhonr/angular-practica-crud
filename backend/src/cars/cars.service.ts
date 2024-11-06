import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreateCarDto } from './dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  findAll() {
    return this.cars.map((car) => ({
      ...car,
      total: car.carDetails.length,
    }));
  }

  findOne(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return { ...car, total: car.carDetails.length };
  }

  create(createCarDto: CreateCarDto): Car {
    this.ensureNoDuplicate(createCarDto.brand, createCarDto.model);
    const newCar: Car = { ...createCarDto, id: uuid() };
    this.cars.push(newCar);
    return newCar;
  }

  remove(id: string): Car {
    const carToDelete = this.findOne(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return carToDelete;
  }

  update(id: string, updateCarDto: Partial<Car>): Car {
    const carDB = this.findOne(id);
    this.ensureNoDuplicate(updateCarDto.brand, updateCarDto.model, id);

    const updatedCar = { ...carDB, ...updateCarDto, id };
    const carIndex = this.cars.findIndex((car) => car.id === id);
    this.cars[carIndex] = updatedCar;

    return updatedCar;
  }

  fillSeedData(car: Car[]) {
    this.cars = car;
  }

  private ensureNoDuplicate(brand: string, model: string, id?: string): void {
    const existingCar = this.cars.find(
      (car) => car.brand === brand && car.model === model && car.id !== id,
    );

    if (existingCar) {
      throw new ConflictException(
        `A car with the same brand (${brand}) and model (${model}) already exists.`,
      );
    }
  }
}
