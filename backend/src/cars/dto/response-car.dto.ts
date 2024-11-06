import { CarDetailsDto } from './create-car.dto';

export class CarResponseDto {
  readonly id: string;
  readonly brand: string;
  readonly model: string;
  readonly total: number;
  readonly carDetails: CarDetailsDto[];
}
