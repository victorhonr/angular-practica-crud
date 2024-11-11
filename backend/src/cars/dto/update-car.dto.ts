import { PartialType } from '@nestjs/swagger';
import { CarDetailsDto, CreateCarDto } from './create-car.dto';

export class UpdateCarDto extends PartialType(CreateCarDto) {
  override carDetails?: Partial<CarDetailsDto[]>;
}
