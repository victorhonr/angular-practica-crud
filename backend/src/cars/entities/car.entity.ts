import { ApiProperty, OmitType } from '@nestjs/swagger';
import { CreateCarDto } from '../dto';

export class Car extends CreateCarDto {
  @ApiProperty({ description: 'Car ID', type: String })
  id: string;

  @ApiProperty({
    description: 'Total number of cars',
    type: Number,
  })
  total: number;
}

export class CarSummary extends OmitType(Car, ['carDetails'] as const) {}
